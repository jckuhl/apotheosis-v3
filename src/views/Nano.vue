<template>
    <div class="container main">
        <div class="row">
            <div class="col s3">
                <content-list :data="nanoPosts" :title="'My Posts'"/>
            </div>
            <div class="col s9">
                <new-post />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContentList from '@/components/shared/ContentList.vue';
import NewPost from '@/components/nano/NewPost.vue';
import Posts from '@/components/nano/Posts.vue';
import Post from '@/models/post';
import store from '@/store';

export default Vue.extend({
    name: 'nano',
    components: {
        ContentList,
        NewPost,
        Posts
    },
    data() {
        return {
            posts: [] as Post[]
        };
    },
    computed: {
        nanoPosts(): Post[] {
            return this.posts = store.state.posts;
        }
    }
});
</script>
