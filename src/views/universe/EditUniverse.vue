<template>
    <div>
        Edit {{ universe }}
        <button class="btn blue darken-1" @click="saveUniverseToDisk">Save</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import { saveJSON, saveToFile } from '@/assets/saveJSON';
import Universe from '@/models/universe';

export default Vue.extend({
    name: 'EditUniverse',
    data() {
        return {
            universe: {} as Universe | undefined,
            confirmDelete: ''
        };
    },
    methods: {
        saveUniverseToDisk() {
            if(this.universe) {
                let json = JSON.stringify(this.universe);
                let url = saveJSON(json);
                saveToFile(url, `${this.universe.getName()}.json`);
            }
        },
        saveUniverse() {
            if (this.universe) {
                store.commit('updateUniverse', this.universe);
            }
        },
        deleteUniverse() {
            if (this.universe && this.confirmDelete === this.universe.getName()) {
                store.commit('deleteUniverse', this.universe.id);
                this.$router.push('/universe');
            }
        }
    },
    created() {
        const id = this.$router.currentRoute.params.id;
        const universes = store.state.universes;
        this.universe = universes.find((universe) => universe.id === id);
    }
});
</script>
