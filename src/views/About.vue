<template>
    <div class="about">
        <h1>This is an about page</h1>
        <text-editor />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextEditor from '@/components/form/TextEditor.vue';

export default Vue.extend({
    components: {
        TextEditor
    }
})
</script>

