<template>
    <div class="content-list">
        <h5>{{ title }}</h5>
        <div v-for="prop of data" :key="prop.id">
            {{ prop.name }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ContentList',
    props: {
        title: String,
        data: Array
    }
});
</script>

<style lang="scss" scoped>

.content-list {
    min-height: 100vh;
}

</style>
