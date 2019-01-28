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
            authorSense: {} as AuthorSense,
            sensedValues: [] as string[]
        };
    },
    methods: {
        passValue() {
            this.$emit('pass-value', this.value);
        },
        sense(event: Event) {
            console.log(event);
            this.authorSense.sense(this.value, event);
            if(this.authorSense.getFoundNames()) {
                this.sensedValues = this.authorSense.getFoundNames();
            }
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
