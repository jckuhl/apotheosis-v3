<template>
    <div>
        <h2>Create a New Universe!</h2>
        <p>It is time.  Begin the genesis of creation.</p>
        <form action="">
            <input-field :label="'Universe Name'" @pass-value="getName"/>
            <button class="btn darken-1 blue" @click="newUniverse">Create!</button>
        </form>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import InputField from '@/components/form/InputField.vue';
import Universe from '@/models/universe.ts';
import generateID from '@/assets/generateID.ts';

export default Vue.extend({
    name: 'NewUniverse',
    components: {
        InputField
    },
    data() {
        return {
            name: ''
        };
    },
    methods: {
        getName(payload: string) {
            this.name = payload;
        },
        newUniverse(event: Event) {
            event.preventDefault();
            const universeIds = store.state.universeIds;
            const id = generateID(universeIds);
            store.commit('addId', id);
            const universe = new Universe(this.name, id);
            store.commit('addUniverse', universe);
        }
    }
});
</script>
