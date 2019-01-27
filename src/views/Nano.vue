<template>
    <div class="container main">
        <div class="row">
            <div class="col s3">
                <content-list :data="posts" :title="'My Posts'"/>
            </div>
            <div class="col s9">
                <new-post/>
            </div>
            <div class="row">
                <div class="col s9">
                    <posts v-for="post of posts" :key="post.id" :post="post"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContentList from '@/components/shared/ContentList.vue';
import NewPost from '@/components/nano/NewPost.vue';
import Posts from '@/components/nano/Posts.vue';

export default Vue.extend({
    name: 'nano',
    components: {
        ContentList,
        NewPost,
        Posts
    },
    data() {
        return {
            posts: [
                { name: 'Post 1', id: '1234'},
                { name: 'Post 2', id: '2345'}
            ]
        };
    }
});
</script>
