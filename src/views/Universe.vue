<template>
    <div class="row">
        Universe
        <div class="col s2">

        </div>
        <div class="col s10">
            <form action="#">
                <div class="file-field input-field">
                    <div class="btn">
                        <span>File</span>
                        <input ref="filepicker" type="file" accept=".json" :file="jsonFile" @change="accessFile">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import loadJSON from '@/assets/loadJSON';

export default Vue.extend({
    name: 'universe',
    data() {
        return {
            jsonFile: ''
        };
    },
    methods: {
        async accessFile() {
            const filepicker = this.$refs.filepicker as HTMLInputElement
            const reader = new FileReader();
            if(filepicker.files && filepicker.files.length > 0) {
                const json = await loadJSON(filepicker.files[0]);
                console.log(json);
            }
        }
    }
});
</script>

