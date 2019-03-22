<template>
    <text-editor-container>
        <text-editor-button-grid>
            <text-editor-btn v-for="btn of editorButtons" 
                :key="btn.label"
                :command="btn.command" 
                :showDefaultUI="btn.showDefaultUI"
                :arg="btn.arg"
                :label="btn.label" 
                :btnStyle="btn.style"
                :mode="mode"
                @set-editor-mode="richTextEditCommand"
            />
            <text-editor-select 
                :options="fontSizes" 
                :label="'format_size'" 
                :command="'fontSize'" 
                @select-value="richTextEditCommand"
            />
            <button @click="(event)=> displayPrompt('Please enter a valid URL: ', 'createLink')">
                <i class="material-icons">insert_link</i>    
            </button>
            <button @click="(event)=> displayPrompt('Please enter a valid URL: ', 'insertImage')">
                Image: <i class="material-icons right">insert_photo</i> 
            </button>
        </text-editor-button-grid>
        <div class="editor" ref="editor" contenteditable="true" spellcheck="true"></div>
        <button @click="passContent">Save</button>
        <text-editor-modal 
            :prompt="promptText" 
            :visible="showPrompt"
            :promptCommand="promptCommand"
            @cancel="closePrompt" 
            @accept="getValue"
        />
    </text-editor-container>
</template>

<script lang="ts">
import Vue from 'vue'
import styled from 'vue-styled-components';
import TextEditorBtn from './TextEditorBtn.vue';
import TextEditorSelect from './TextEditorSelect.vue';
import TextEditorModal from './TextEditorModal.vue';

interface iEditCommandArgs {
    command: string;
    showDefaultUI?: boolean;
    arg: any;
}

const TextEditorContainer = styled.section`
    display: grid;
    position: relative;
    width: 90%;
    margin: 0 auto;
`;

const TextEditorButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
`;

export default Vue.extend({
    name: 'TextEditor',
    components: {
        TextEditorBtn,
        TextEditorSelect,
        TextEditorModal,
        TextEditorContainer,
        TextEditorButtonGrid
    },
    data() {
        return {
            content: '',
            editorButtons: [
                { command: 'bold', label: 'format_bold' },
                { command: 'italic', label: 'format_italic' },
                { command: 'underline', label: 'format_underline' },
                { command: 'insertOrderedList', label: 'format_list_numbered' },
                { command: 'insertUnorderedList', label: 'format_list_bulleted' },
                { command: 'unlink', label: 'link_off'},
                { command: 'formatBlock', label: 'code', arg: '<PRE>' },
                { command: 'formatBlock', label: 'format_quote', arg: '<blockquote>'}
            ],
            promptButtons: [
                { command: 'insertLink', label: 'insert_link' },
            ],
            fontSizes: [] as Object[],
            editor: {} as HTMLDivElement,
            iframe: {} as HTMLIFrameElement,
            mode: '',
            showPrompt: false,
            promptText: '',
            promptCommand: '',
        }
    },
    methods: {
        passContent(event: Event): void {
            const content = this.editor.innerHTML;
            this.$emit('pass-content', content);
        },
        richTextEditCommand({command, showDefaultUI=false, arg=null}: iEditCommandArgs): void {
            this.editor.focus();
            document.execCommand(command, showDefaultUI, arg);
            this.mode = this.mode !== command ? command : '';
        },
        displayPrompt(promptText: string, promptCommand: string): void {
            console.log((document.getSelection().getRangeAt(0)));
            
            this.showPrompt = true;
            this.promptText = promptText;
            this.promptCommand = promptCommand;
        },
        getValue(payload: string): void {
            this.richTextEditCommand({ command: this.promptCommand, arg: payload});
            this.closePrompt();
        },
        closePrompt(): void {
            this.showPrompt = false;
        }
    },
    mounted() {
        this.editor = this.$refs.editor as HTMLDivElement;
        for (let i = 1; i < 8; i++) {
            this.fontSizes.push({ value: i, desc: i});
        }
    }
})
</script>

<style lang="scss" scoped>
    .editor {
        padding: 0.5rem;
        min-height: 200px;
        border: 2px solid black;
        resize: vertical;
        overflow: scroll;
        /* inset shadow, do later */
    }
</style>
