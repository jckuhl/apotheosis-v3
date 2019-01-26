<template>
    <div class="container main">
        <header class="col s12 center-align" style="margin-bottom:1em;">
            <h1>Apotheosis</h1>
            <h6>late 16th century: via ecclesiastical Latin from Greek apotheōsis, from apotheoun ‘make a god of’, from apo ‘from’ + theos ‘god’.</h6>
        </header>
        <div class="row">
            <section class="col s4 offset-s4 center-align box z-depth-1 center">
                <h3>Logging you out.</h3>
                <p>Thank you for visiting!</p>
                <p>You will be redirected in {{ seconds }} seconds.  If you are not redirected, please click <router-link to="home">here</router-link></p>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            seconds: 5
        };
    },
    mounted() {
        setInterval(()=> {
            this.seconds -= 1;
            if(this.seconds === 0) {
                this.$router.push('/');
            }
        }, 1000);
    }
});
</script>

