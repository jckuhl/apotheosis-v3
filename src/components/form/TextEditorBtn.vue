<template>
    <button @click="setEditorMode" :class="isActive" :style="btnStyle">{{ label }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'TextEditorBtn',
    props: {
        label: String,
        command: String,
        showDefaultUI: Boolean,
        arg: String as any,
        btnStyle: Object as any,
        mode: String
    },
    computed: {
        isActive(): string {
            return this.mode === this.command ? 'active' : '';
        }
    },
    methods: {
        setEditorMode(): void {
            this.$emit('set-editor-mode', { command: this.command, showDefaultUI: this.showDefaultUI, arg: this.arg})
        }
    }
})
</script>

<style lang="scss" scoped>
    .active {
        background-color: red;
    }
</style>

