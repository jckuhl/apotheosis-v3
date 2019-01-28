<template>
    <div>
        <div class="col s12">
            <h4>Start a new post!</h4>
        </div>
        <div class="col s12">
            <p>What did you do today?</p>
            <p class="small">Markdown is supported.  Enter <mark>@</mark> to link anything from your universes!</p>
        </div>
        <form action="#">
            <div class="row">
                <div class="col s12">
                    <input-field 
                        :label="'Title'"
                        :id="'title'"
                        :type="'text'" 
                        @pass-value="getPostData($event, 'title')"
                    />
                </div>
            </div>
            <div class="row">
                <text-field :label="'New Post'" @pass-value="getPostData($event, 'blurb')"/>
            </div>
            <div class="row">
                <div class="col s3">
                    <input-field 
                        :label="'Current Novel'"
                        :id="'current-novel'"
                        :type="'text'" 
                        :inline="true"
                        @pass-value="getPostData($event, 'novelTitle')"/>
                </div>
                <div class="col s3">
                    <input-field 
                        :label="'Word Count'"
                        :id="'word-count'"
                        :type="'number'"
                        :inline="true"
                        @pass-value="getPostData($event, 'wordCount')"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col s3">
                    <button class="btn blue darken-1" @click="newPost">New Post</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import Post from '@/models/post';
import InputField from '@/components/form/InputField.vue';
import TextField from '@/components/form/TextField.vue';
import generateID from '@/assets/generateID';

export default Vue.extend({
    name: 'NewPost',
    components: {
        InputField,
        TextField
    },
    data() {
        return {
            post: {
                title: '',
                blurb: '',
                wordCount: 0,
                novelTitle: '',
            } as any
        };
    },
    methods: {
        newPost(event: Event) {
            event.preventDefault();
            const postId = store.state.postsIds;
            const id = generateID(postId);
            store.commit('addPostId', id);
            const post = new Post(
                this.post.blurb,
                this.post.novelTitle,
                this.post.wordCount,
                this.post.title,
                id
            )
            store.commit('addPost', post);
            this.$children.forEach((child) => {
                (child.$refs.input as HTMLInputElement | HTMLTextAreaElement).value = '';
            });
        },
        getPostData(...args: string[]) {
            const [value, key] = args;
            if (Object.getOwnPropertyNames(this.post).includes(key)) {
                this.post[key] = value;
            }
        }
    }
});
</script>
