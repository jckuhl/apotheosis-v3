<template>
    <div class="switch">
        <label>
            <span :class='notSelectedClass'>{{ off }}</span>
        <input ref="checkbox" type="checkbox" :disabled="disable" :checked="selected" v-model="checked">
        <span class="lever"></span>
            <span :class='selectedClass'>{{ on }}</span>
        </label>
  </div>
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
    }
});
</script>
