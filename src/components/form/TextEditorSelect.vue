<template>
    <label :for="label">
        <i class="material-icons right">{{ label }}</i>
        <select @change="selectValue">
            <option v-for="(opt, index) of options" :key="index" :value="opt.value">{{ opt.desc }}</option>
        </select>
    </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'TextEditorSelect',
    props: {
        label: String,
        options: Array,
        command: String
    },
    methods: {
        selectValue(event: Event) {
            const arg = parseInt((event.target as HTMLSelectElement).value);
            this.$emit('select-value', { command: this.command, arg});
        }
    }
});
</script>

