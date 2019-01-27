<template>
    <div class="container main">
        <div class="row">
            <div class="col s3">
                <side-bar :title="'Your Stories'"/>
            </div>
            <div class="col s9">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SideBar from '@/components/shared/SideBar.vue';

export default Vue.extend({
    name: 'StoryBoard',
    components: {
        SideBar
    }
});
</script>

