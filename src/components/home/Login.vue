<template>
    <div>
        <form action="">
            <p>Log In</p>
            <input-field 
                :type="'text'"
                :label="'User Name'"
                :id="'username'"
                :autocomplete="'username'"
                :icon="'account_circle'"
                @pass-value="getUsername"/>
            <input-field 
                :type="'password'"
                :label="'Password'"
                :id="'password'"
                :autocomplete="'current-password'"
                :icon="'lock'"
                @pass-value="getPassword"/>
            <button 
                class="btn waves-effect waves-effect-light blue darken-3" 
                @click="submit"
            >
                Submit
                <i class="material-icons right">send</i>
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InputField from '@/components/form/InputField.vue';

export default Vue.extend({
    components: {
        InputField
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        getUsername(payload: string) {
            this.username = payload;
        },
        getPassword(payload: string) {
            this.password = payload;
        },
        submit(event: Event) {
            event.preventDefault();
            // TODO: Actual validation
            if(this.username === 'admin' && this.password === 'password') {
                this.$router.push('/landing');
            }
            // ! REPLACE
        }
    }
});
</script>
