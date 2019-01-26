<template>
    <div>
        <router-view/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
});
</script>


<style lang="scss">

html {
    font-size: 16px;
}

.small {
    font-size: 0.8rem;
}

.bold {
    font-weight: bold;
}

code {
    background-color: oldlace;
    font-family: monospace;
}

mark {
    background-color: palegoldenrod;
}

.main {
    width: 90% !important;
}

.box {
    border: 2px solid rgba(0,0,0,0.25);
    padding: 1em 1em !important; /* materialize override */
}

.center {
    margin: 0 auto;
}

</style>
