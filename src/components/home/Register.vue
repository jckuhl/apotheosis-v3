<template>
    <div>
        <form action="">
            <p>Register</p>
            <input-field 
                :type="'text'"
                :label="'User Name'"
                :id="'username'"
                :autocomplete="'username'"
            />
            <input-field
                :type="'email'"
                :label="'Email'"
                :id="'email'"
                :autocomplete="'email'"
            />
            <input-field
                :type="'password'"
                :label="'Password'"
                :id="'password'"
                :autocomplete="'new-password'"
            />
            <p class="small">Password must be at least eight characters long</p>
            <input-field 
                :type="'password'"
                :label="'Confirm Password'" 
                :id="'confirm-password'"
                :autocomplete="'new-password'"
            />
            <switch-btn :on="'Online'" :off="'Offline'" :selected="true"/>
            <p class="small">In offline mode, your universes will not be submitted to the database.  But you'll have the option to upload or download your universes from your hard disk.</p>
            <button class="btn waves-effect waves-effect-light blue darken-3">
                Submit
                <i class="material-icons right">send</i>
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InputField from '@/components/form/InputField.vue';
import SwitchBtn from '@/components/form/SwitchBtn.vue';

export default Vue.extend({
    components: {
        InputField,
        SwitchBtn
    }
})
</script>
