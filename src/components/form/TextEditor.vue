<template>
    <section>
        <text-editor-btn v-for="btn of editorButtons" 
            :key="btn.label"
            :command="btn.command" 
            :label="btn.label" 
            :btnStyle="btn.style"
            :mode="mode"
            @set-editor-mode="richEditCommand"
        />
        <iframe ref="editor"></iframe>
        <button @click="passContent">Save</button>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import TextEditorBtn from '@/components/form/TextEditorBtn.vue';

interface iEditCommandArgs {
    command: string;
    showDefaultUI: boolean;
    arg: any;
}

export default Vue.extend({
    name: 'TextEditor',
    components: {
        TextEditorBtn
    },
    data() {
        return {
            content: '',
            editorButtons: [
                { command: 'bold', label: 'B', style: { 'font-weight': 'bold' }},
                { command: 'italic', label: 'I', style: { 'font-style': 'italic' }},
                { command: 'underline', label: 'U', style: { 'text-decoration': 'underline'}}
            ],
            editor: {} as Document,
            iframe: {} as HTMLIFrameElement,
            mode: ''
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
        }
    },
    mounted() {
        this.iframe = this.$refs.editor as HTMLIFrameElement
        this.editor = this.iframe.contentDocument as Document;
        this.editor.designMode = "on";
    }
})
</script>

<style lang="scss" scoped>
    .edit-btn-active {
        background-color: red;
    }
</style>

