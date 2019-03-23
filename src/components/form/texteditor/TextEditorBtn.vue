<template>
    <editor-button @click="setEditorMode" :isActive="isActive" :style="btnStyle">
       <i class="material-icons right">{{ label }}</i>
    </editor-button>
</template>

<script lang="ts">

import Vue from 'vue';
import styled from 'vue-styled-components';

const EditorBtnProps = { isActive: Boolean };

const EditorButton = styled('button', EditorBtnProps)`
    background-color: ${ (props: any): string => props.isActive ? 'red' : 'white'};
`;

export default Vue.extend({
    name: 'TextEditorBtn',
    components: {
        EditorButton
    },
    props: {
        label: String,
        command: String,
        showDefaultUI: Boolean,
        arg: String as any,
        btnStyle: Object as any,
        mode: String
    },
    computed: {
        isActive(): boolean {
            return this.mode === this.command;
        }
    },
    methods: {
        setEditorMode(): void {
            this.$emit('set-editor-mode', { 
                command: this.command, 
                showDefaultUI: this.showDefaultUI, 
                arg: this.arg
            });
        }
    }
})
</script>

