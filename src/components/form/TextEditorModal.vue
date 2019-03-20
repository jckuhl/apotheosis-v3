<template>
    <modal :style="{ visibility: displayModal}">
        <label for="input">
            {{ prompt }}
            <input type="text" name="input" id="input" v-model="response">
            <button>Cancel</button>
            <button>Accept</button>
        </label>
    </modal>
</template>

<script lang="ts">

///<reference path="./../../shims-vue-styled-components.d.ts" />

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
    }
});
</script>
