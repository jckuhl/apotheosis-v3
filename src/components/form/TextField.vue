<template>
    <div class="input-field col s12">
        <label for="newpost">{{ label }}</label>
        <textarea ref="input" class="materialize-textarea" id="newpost" v-model="value" @change="passValue"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'TextField',
    props: {
        label: String
    },
    data() {
        return {
            value: ''
        };
    },
    methods: {
        passValue() {
            this.$emit('pass-value', this.value);
        }
    }
});
</script>
