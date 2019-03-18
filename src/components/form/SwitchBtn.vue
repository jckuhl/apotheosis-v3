<template>
    <label class="switch">
        <span :class='notSelectedClass'>{{ off }}</span>
        <input ref="checkbox" 
            type="checkbox" 
            :disabled="disable" 
            :checked="selected" 
            v-model="checked" 
            @change="toggleSwitch">
        <span :class='selectedClass'>{{ on }}</span>
    </label>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'SwitchBtn',
    props: {
        off: String,
        on: String,
        disable: Boolean,
        selected: Boolean,
    },
    data() {
        return {
            checked: this.selected
        };
    },
    computed: {
        notSelectedClass(): string | void {
            return this.checked ? '' : 'bold';
        },
        selectedClass(): string | void {
            return this.checked ? 'bold' : '';
        }
    },
    methods: {
        toggleSwitch() {
            this.$emit('toggle-switch', this.checked);
        }
    }
});
</script>

<style lang="scss" scoped>

.bold {
    font-weight: bold;
}

.switch input[type="checkbox"]:checked::before {
    left: 10px;
    background-color: blue;
}

.switch input[type="checkbox"]::before {
    content: '';
    display: block;
    position: absolute;
    top: -0.25rem;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
}

.switch input[type="checkbox"]:not(:checked)::before {
    right: 10px;
    background-color: red;
}

.switch input[type="checkbox"]::after {
    content: '';
    display: block;
    width: 1rem;
    height: 0.5rem;
    background-color: grey;
}

.switch input[type="checkbox"] {
    -webkit-appearance: none;
    position: relative;
    margin: 0 1rem;
}

.switch input[type="checkbox"]:disabled::before {
    background-color: darkgrey;
}
</style>

