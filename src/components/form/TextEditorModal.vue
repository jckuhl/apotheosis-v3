<template>
    <modal :style="{ visibility: displayModal}">
        <form @submit="accept">
            <label for="input">
                {{ prompt }}
                <input type="text" name="input" id="input" v-model="response" ref="modalInput">
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
        visible: Boolean
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
            if (event.type === 'click' || event.type === '') {
                if (this.promptCommand === 'createLink') {
                    // TODO: add regex to check if HTTP is in response and maybe check for valid url
                    this.response = 'http://' + this.response;
                }
                this.$emit('accept', this.response);
                this.response = '';
            }
        },
        cancel(event: Event) {
            event.preventDefault();
            this.$emit('cancel');
            this.response = '';
        }
    }
});
</script>
