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
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|PT+Mono|Satisfy');



// font-family: 'Satisfy', cursive;
// font-family: 'Libre Baskerville', serif;
// font-family: 'PT Mono', monospace;

$font-text: 'Libre Baskerville', serif;
$font-title: 'Satisfy', cursive;
$font-code: 'PT Mono', monospace;

html {
    font-size: 16px;
}

body {
    font-family: $font-text;
}

.title {
    font-family: $font-title;
}

.small {
    font-size: 0.8rem;
}

.bold {
    font-weight: bold;
}

code {
    background-color: oldlace;
    font-family: $font-code;
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
