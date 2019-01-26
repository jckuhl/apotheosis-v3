<template>
    <div>
        <form action="#">
            <div class="file-field input-field">
                <div class="btn">
                    <span>File</span>
                    <input ref="filepicker" :class="color" type="file" accept=".json" @change="accessFile">
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text">
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import loadJSON from '@/assets/loadJSON';

export default Vue.extend({
    name: 'FileInput',
    props: {
        color: String
    },
    methods: {
        async accessFile() {
            const filepicker = this.$refs.filepicker as HTMLInputElement
            const reader = new FileReader();
            if(filepicker.files && filepicker.files.length > 0) {
                try {
                    const payload = await loadJSON(filepicker.files[0]);
                    this.$emit('file-loaded', payload)
                } catch(error) {
                    this.$emit('file-loaded', new Error('File failed to load'))
                }
            }
        }
    }
})
</script>

