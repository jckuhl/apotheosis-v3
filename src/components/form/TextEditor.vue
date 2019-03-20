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
            <button @click="(event)=> displayPrompt('linkURL', 'insertLink')">
                <i class="material-icons right">insert_link</i>    
            </button>
        </text-editor-button-grid>
        <div class="iframe_container">
            <iframe ref="editor" width="100%"></iframe>
        </div>
        <button @click="passContent">Save</button>
        <text-editor-modal :prompt="promptText" :visible="showPrompt" />
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
    showDefaultUI: boolean;
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
            editor: {} as Document,
            iframe: {} as HTMLIFrameElement,
            mode: '',
            showPrompt: false,
            promptText: ''
        }
    },
    methods: {
        passContent(event: Event) {
            const content = this.editor.body.textContent;
            this.$emit('pass-content', content);
        },
        richEditCommand({command, showDefaultUI=false, arg=null}: iEditCommandArgs) {
            this.iframe.focus();
            this.editor.execCommand(command, showDefaultUI, arg);
            this.mode = this.mode !== command ? command : '';
        },
        displayPrompt(type: string) {
            console.log('wtf');
            console.log(type);
            if(type === 'linkURL') {
                this.showPrompt = true;
                this.promptText = 'Please enter a valid URL: ';
            }
        }
    },
    mounted() {
        this.iframe = this.$refs.editor as HTMLIFrameElement
        this.editor = this.iframe.contentDocument as Document;
        this.editor.designMode = "on";
        
        for(let i = 1; i < 8; i++) {
            this.fontSizes.push({ value: i, desc: i});
        }
    }
})
</script>

