<template>
    <div class="editor-container">
        <div class="editor-btns" @keyup.native="test">
            <text-editor-btn v-for="btn of styleButtons" 
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

            <text-editor-btn v-for="btn of formatButtons" 
                :key="btn.label"
                :command="btn.command" 
                :showDefaultUI="btn.showDefaultUI"
                :arg="btn.arg"
                :label="btn.label" 
                :btnStyle="btn.style"
                :mode="mode"
                @set-editor-mode="richTextEditCommand"
            />
            <button @click="(event)=> displayPrompt('Please enter a valid URL: ', 'createLink')">
                <i class="material-icons">insert_link</i>    
            </button>
            <text-editor-btn :command="'unlink'" :label="'link_off'" :mode="mode" 
                @set-editor-mode="richTextEditCommand" />
            <button @click="(event)=> displayPrompt('Please enter a valid URL: ', 'insertImage')">
                Image: <i class="material-icons right">insert_photo</i> 
            </button>
        </div>
        <div class="editor" ref="editor" contenteditable="true" spellcheck="true" @click.prevent="setMode"></div>
        <button @click="passContent">Save</button>
        <text-editor-modal 
            :prompt="promptText" 
            :visible="showPrompt"
            :promptCommand="promptCommand"
            :selection="selection"
            @cancel="closePrompt" 
            @accept="getValue"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { saveSelection, restoreSelection } from '@/utils/saveSelection.ts';
import TextEditorBtn from './TextEditorBtn.vue';
import TextEditorSelect from './TextEditorSelect.vue';
import TextEditorModal from './TextEditorModal.vue';

interface iEditCommandArgs {
    command: string;
    showDefaultUI?: boolean;
    arg: any;
}

const TAG_COMMAND: { [key: string]: string; } = {
    B: 'bold',
    I: 'italic',
    U: 'underline',
    STRIKE: 'strikeThrough',
}

export default Vue.extend({
    name: 'TextEditor',
    components: {
        TextEditorBtn,
        TextEditorSelect,
        TextEditorModal
    },
    data() {
        return {
            content: '',
            styleButtons: [
                { command: 'bold', label: 'format_bold' },
                { command: 'italic', label: 'format_italic' },
                { command: 'underline', label: 'format_underline' },
                { command: 'strikeThrough', label: 'strikethrough_s'}
            ],
            formatButtons: [
                { command: 'insertOrderedList', label: 'format_list_numbered' },
                { command: 'insertUnorderedList', label: 'format_list_bulleted' },
                { command: 'formatBlock', label: 'code', arg: '<PRE>' },
                { command: 'formatBlock', label: 'format_quote', arg: '<blockquote>'},
                { command: 'removeFormat', label: 'format_clear' }
            ],
            fontSizes: [] as Object[],
            editor: {} as HTMLDivElement,
            iframe: {} as HTMLIFrameElement,
            mode: '',
            showPrompt: false,
            promptText: '',
            promptCommand: '',
            selection: [] as Range[] | null
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
            if(command === 'createLink') {
                const a = document.querySelector(`a[href="${arg}"]`) as HTMLAnchorElement;
                if(a) {
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                }
            }
        },
        displayPrompt(promptText: string, promptCommand: string): void {
            this.selection = saveSelection();
            this.showPrompt = true;
            this.promptText = promptText;
            this.promptCommand = promptCommand;
        },
        getValue(payload: string): void {
            if(this.selection) {
                restoreSelection(this.selection);
            }
            this.richTextEditCommand({ command: this.promptCommand, arg: payload});
            this.closePrompt();
            this.selection = null;
        },
        closePrompt(): void {
            this.showPrompt = false;
        },
        setMode(event: Event) {
            const focused = document.querySelector(':focus');
            if(focused === this.editor) {
                const parentNode = saveSelection()[0].startContainer.parentNode as HTMLElement;
                this.mode = TAG_COMMAND[parentNode.tagName] ? TAG_COMMAND[parentNode.tagName] : '';
            }
        }
    },
    mounted() {
        this.editor = this.$refs.editor as HTMLDivElement;
        for (let i = 1; i < 8; i++) {
            this.fontSizes.push({ value: i, desc: i});
        }

        window.addEventListener('keyup', this.setMode);
    }
})
</script>

<style lang="scss" scoped>
    .editor-container {
        display: grid;
        position: relative;
        width: 90%;
        margin: 0 auto;
    }

    .editor-btns {
        display: grid;
        grid-template-columns: repeat(13, 1fr);
    }

    .editor {
        padding: 0.5rem;
        min-height: 200px;
        border: 2px solid black;
        resize: vertical;
        overflow: scroll;
        /* inset shadow, do later */
    }
</style>
