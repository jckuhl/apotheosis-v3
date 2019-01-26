<template>
    <div>
        <h2>Create a New Universe!</h2>
        <p>It is time.  Begin the genesis of creation.</p>
        <input-field :label="'Universe Name'"/>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import InputField from '@/components/form/InputField.vue';
import Universe from '@/models/universe.ts';

export default Vue.extend({
    name: 'NewUniverse',
    components: {
        InputField
    }
});
</script>
