import Vue from 'vue';
import Vuex from 'vuex';
import Universe from './models/universe';
import Post from './models/post';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        universeIds: new Set() as Set<string>,
        postsIds: new Set() as Set<string>,
        universes: [] as Universe[],
        posts: [] as Post[]
    },
    mutations: {
        addId(store, payload: string) {
            store.universeIds.add(payload);
        },
        addPostId(store, payload: string) {
            store.postsIds.add(payload)
        },
        removePostId(store, payload: string) {
            store.postsIds.delete(payload);
        },
        addPost(store, payload: Post) {
            store.posts.unshift(payload);
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

    },
    getters: {
        getAllNamedThings(store): Array<string> | undefined {
            if(store.universes) {
                let result = [] as Array<string>;
                store.universes.forEach((universe) => {
                    result = result.concat(universe.getAllNames());
                });
                return result;
            }
        }
    }
});
