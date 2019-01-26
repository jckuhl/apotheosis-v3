<template>
    <div class="row">
        Universe
        <div class="col s2">

        </div>
        <div class="col s10">
            <file-input-json @file-loaded="getJSON" :color="'blue'"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FileInputJson from '@/components/form/FileInputJSON.vue';

export default Vue.extend({
    name: 'universe',
    components: {
        FileInputJson
    },
    methods: {
        getJSON(payload: object) {
            if(payload instanceof Error) {
                console.error(payload.message)
            } else {
                console.log(payload);
            }
        }
    }
});
</script>

