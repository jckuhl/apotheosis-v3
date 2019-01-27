import Vue from 'vue';
import Vuex from 'vuex';
import Universe from './models/universe';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        universeIds: new Set() as Set<string>,
        universes: [] as Universe[]
    },
    mutations: {
        addId(store, payload: string) {
            store.universeIds.add(payload);
        },
        addUniverse(store, payload: Universe) {
            store.universes.push(payload);
        },
        updateUniverse(store, payload: Universe) {
            // find and delete the old one
            store.universes = store.universes.filter((universe) => {
                return universe.id !== payload.id;
            });
            store.universes.push(payload);
        },
        deleteUniverse(store, payload: Universe) {
            store.universes = store.universes.filter((universe) => {
                return universe.id !== payload.id;
            });
        }
    },
    actions: {

    }
});
