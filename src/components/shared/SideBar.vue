<template>
    <div>
        <h5>{{ title }}</h5>
        <div v-for="prop of data" :key="prop.id">
            {{ prop.name }}
            <i class="material-icons right">edit</i>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        data: Array,
        title: String
    }
});
</script>
