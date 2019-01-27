<template>
    <div class="container main">
        <div class="row">
            <div class="col s3">
                <side-bar :data="universes" :title="'Your Universes'" :pathbase="'/editUniverse'"/>
            </div>
            <div class="col s9">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import SideBar from '@/components/shared/SideBar.vue';
import Universe from '@/models/universe.ts';

export default Vue.extend({
    name: 'universe',
    components: {
        SideBar
    },
    computed: {
        universes() {
            return store.state.universes;
        }
    }
});
</script>

