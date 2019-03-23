<template>
    <modal :style="{ visibility: displayModal}">
        <form @submit="accept">
            <label for="input">
                {{ prompt }}
                <input type="text" name="input" id="input" v-model="response" ref="modalInput" placeholder="https://">
                <button @click="accept" type="submit">Accept</button>
                <button @click="cancel">Cancel</button>
            </label>
        </form>
    </modal>
</template>

<script lang="ts">

import Vue from 'vue';
import styled from 'vue-styled-components';

const Modal = styled.div`
    position: absolute;
    display: block;
    top: 0;
    left: 0.5;
    width: 300px;
    height: 100px;
    background: white;
    border: 2px solid black;
`;

export default Vue.extend({
    name: 'TextEditorModal',
    components: {
        Modal
    },
    props: {
        prompt: String,
        promptCommand: String,
        visible: Boolean,
        selection: [Array, String]
    },
    data() {
        return {
            response: '',
        }
    },
    computed: {
        displayModal(): string {
            return this.visible ? 'visible' : 'hidden';
        }
    },
    watch: {
        visible() {
            if(this.$refs.modalInput && this.visible) {
                (this.$refs.modalInput as HTMLInputElement).focus();
            }
        }
    },
    methods: {
        accept(event: Event) {
            event.preventDefault();
            if (event.type === 'click') {
                if(this.response) {
                    const httpMatch = this.response.match(/https:\/\/|http:\/\//);
                    this.response = (httpMatch ? '' : 'http://') + this.response;
                    this.$emit('accept', this.response);
                    this.response = '';
                } else {
                    this.cancel();
                }
            }
        },
        cancel(event: Event | undefined = undefined) {
            if(event) {
                event.preventDefault();
            }
            this.$emit('cancel');
            this.response = '';
        }
    }
});
</script>
