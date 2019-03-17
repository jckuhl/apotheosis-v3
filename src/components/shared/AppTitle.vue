<template>
    <div>
        <header class="title" style="margin-bottom:1em;">
            <h1>Apotheosis</h1>
            <h4>late 16th century: via ecclesiastical Latin from Greek apotheōsis, from apotheoun ‘make a god of’, from apo ‘from’ + theos ‘god’.</h4>
        </header>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'AppTitle'
});
</script>

<style lang="scss" scoped>
    header {
        text-align: center;
    }

    header h1 {
        font-size: 3rem;
    }
</style>
