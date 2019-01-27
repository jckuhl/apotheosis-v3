<template>
    <div>
        <h5>{{ title }}</h5>
        <div v-for="prop of data" :key="prop.id">
            <router-link :to="path(prop.id)">{{ prop.name }}
            <i class="material-icons right">edit</i></router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        data: Array,
        title: String
    },
    methods: {
        path(id) {
            return `/editUniverse/${id}`;
        }
    }
});
</script>
