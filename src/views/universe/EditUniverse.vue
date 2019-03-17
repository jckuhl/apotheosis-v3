<template>
    <section>
        Edit {{ universe }}
        <button class="btn blue darken-1" @click="saveUniverseToDisk">Save</button>
        <div>
            <h5>Delete?</h5>
            <h6>Danger!  No Return Zone</h6>
            <p>Once you delete this universe, universe and all its contents are lost forever.</p>
            <button class="btn red darken-1" @click="confirmDelete">Confirm</button>
            <div v-if="deleteConfirmed">
                <input-field
                    :label="`Enter your universe's name to continue`" 
                    @pass-value="setDeleteName"
                />
                <button class="btn red darken-1">Delete</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import { saveJSON, saveToFile, toFileName } from '@/assets/saveJSON';
import Universe from '@/models/universe';
import InputField from '@/components/form/InputField.vue';

export default Vue.extend({
    name: 'EditUniverse',
    components: {
        InputField
    },
    data() {
        return {
            universe: {} as Universe | undefined,
            deleteName: '',
            deleteConfirmed: false
        };
    },
    methods: {
        saveUniverseToDisk() {
            if(this.universe) {
                const json = JSON.stringify(this.universe);
                const url = saveJSON(json);
                saveToFile(url, toFileName(this.universe.getName(), 'json'));
            }
        },
        saveUniverse() {
            if (this.universe) {
                store.commit('updateUniverse', this.universe);
            }
        },
        confirmDelete() {
            this.deleteConfirmed = true;
        },
        setDeleteName(payload: string) {
            this.deleteName = payload;
        },
        deleteUniverse() {
            if (this.universe && this.deleteName === this.universe.getName()) {
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
