<template>
    <div>
        <div class="col s12">
            <h4>Start a new post!</h4>
        </div>
        <div class="col s12">
            <p class="small">Markdown is supported.  Enter <mark>@</mark> to link anything from your universes!</p>
        </div>
        <form action="#">
            <div class="input-field col s12">
                <label for="newpost">New Post</label>
                <textarea class="materialize-textarea" id="newpost"/>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'NewPost',

});
</script>
