<template>
    <div>
        <div class="input-field" :class="{ 'inline' : inlineInput}">
            <i class="prefix material-icons" v-if="icon">{{ icon }}</i>
            <label :for="id">{{ label }}: </label>
            <input class="validate"
                :type="inputType" 
                :name="id" 
                :id="id" 
                :autocomplete="autocomplete"
                :placeholder="placeHolderText"
                v-model="value" 
                @change="passValue" 
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
        icon: String,
        placeholder: String,
        inline: Boolean
    },
    data() {
        return {
            value: ''
        }
    },
    computed: {
        inlineInput() {
            if(this.inline) {
                return true;
            }
            return false;
        },
        inputType(): string {
            if(this.type === undefined) {
                return 'text';
            } else {
                return this.type;
            }
        },
        placeHolderText(): string {
            if(this.placeholder === 'undefined') {
                return '';
            } else {
                return this.placeholder;
            }
        }
    },
    methods: {
        passValue(): void {
            this.$emit('pass-value', this.value)
        }
    }
});
</script>
