<template>
    <text-editor-container>
        <text-editor-button-grid>
            <text-editor-btn v-for="btn of editorButtons" 
                :key="btn.label"
                :command="btn.command" 
                :label="btn.label" 
                :btnStyle="btn.style"
                :mode="mode"
                @set-editor-mode="richEditCommand"
            />
            <text-editor-select 
                :options="fontSizes" 
                :label="'format_size'" 
                :command="'fontSize'" 
                @select-value="richEditCommand"
            />
            <button @click="(event)=> displayPrompt('LINK')">
                <i class="material-icons right">insert_link</i>    
            </button>
        </text-editor-button-grid>
        <div class="editor" ref="editor" contenteditable="true" spellcheck="true" @keyup.native="ctrl"></div>
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
import TextEditorBtn from '@/components/form/TextEditorBtn.vue';
import TextEditorSelect from '@/components/form/TextEditorSelect.vue';
import TextEditorModal from '@/components/form/TextEditorModal.vue';

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
                { command: 'unlink', label: 'link_off'}
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
            const content = this.editor.textContent;
            this.$emit('pass-content', content);
        },
        richEditCommand({command, showDefaultUI=false, arg=null}: iEditCommandArgs): void {
            this.editor.focus();
            document.execCommand(command, showDefaultUI, arg);
            this.mode = this.mode !== command ? command : '';
        },
        displayPrompt(type: string): void {
            switch (type) {
                case 'LINK':
                    this.showPrompt = true;
                    this.promptText = 'Please enter a valid URL: ';
                    this.promptCommand = 'createLink';
                    break;
            }
        },
        getValue(payload: string): void {
            this.richEditCommand({ command: this.promptCommand, arg: payload});
            this.closePrompt();
        },
        closePrompt(): void {
            this.showPrompt = false;
        },
        ctrl(event: Event) {
            console.log('event:', event.type);
        }
    },
    mounted() {
        this.editor = this.$refs.editor as HTMLDivElement;

        (document.querySelector('body') as HTMLBodyElement).addEventListener('keyup', (event)=> {
            if(event.key === 'Control' || event.key === 'Meta')
                this.editor.contentEditable = 'true';
        });

        (document.querySelector('body') as HTMLBodyElement).addEventListener('keydown', (event)=> {
            if(event.key === 'Control' || event.key === 'Meta')
                this.editor.contentEditable = 'false';
        });
        
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
