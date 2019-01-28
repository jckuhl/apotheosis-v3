<template>
    <div class="input-field col s12">
        <label for="newpost">{{ label }}</label>
        <textarea ref="input" class="materialize-textarea" id="newpost" v-model="value" @change="passValue" @input="sense"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AuthorSense from '@/assets/authorSense.ts';

export default Vue.extend({
    name: 'TextField',
    props: {
        label: String
    },
    data() {
        return {
            value: '',
            authorSense: null as any,
        };
    },
    methods: {
        passValue() {
            this.$emit('pass-value', this.value);
        },
        sense(event: Event) {
            this.authorSense.sense(this.value, event);
            console.log(this.authorSense);
        }
    },
    mounted() {
        this.authorSense = new AuthorSense(
            [
                'Suzetta', 'Rosalyn', 'Darincedonia', 'Darren', 'Dart'
            ]
        )
    }
});
</script>
