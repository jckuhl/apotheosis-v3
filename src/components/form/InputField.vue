<template>
    <div>
        <div class="input-field">
            <i class="prefix material-icons" v-if="icon">{{ icon }}</i>
            <label :for="id">{{ label }}: </label>
            <input class="validate"
                :type="type" 
                :name="id" 
                :id="id" 
                v-model="value" 
                @change="passValue" 
                :autocomplete="autocomplete"
            >
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        label: String,
        type: String,
        id: String,
        autocomplete: String,
        icon: String
    },
    data() {
        return {
            value: ''
        }
    },
    methods: {
        passValue(): void {
            this.$emit('pass-value', this.value)
        }
    }
});
</script>
