<template>
    <div>
        {{ post.name }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Posts',
    props: {
        post: Object
    }
});
</script>
