<template>
    <div class="container main">
        <div class="row">
            <header class="col s12 center-align" style="margin-bottom:1em;">
                <h1>Apotheosis</h1>
                <h6>late 16th century: via ecclesiastical Latin from Greek apotheōsis, from apotheoun ‘make a god of’, from apo ‘from’ + theos ‘god’.</h6>
            </header>
            <div class="row">
                <section class="col s6">
                    <h4>What is Apotheosis?</h4>
                    <p>As a writer, you are a god.  From your fingertips, you create whole universes, peoples, and their legends.  They live, breath, and die, at your whim.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quae dolor impedit, laudantium ratione consectetur, eos vel provident recusandae illum necessitatibus nam nobis. Cum, ea laboriosam quae exercitationem incidunt expedita?</p>
                </section>
                <section class="col s6 box z-depth-1">
                    <h4>
                        <a href="javascript:;" @click="setMode('login')">Log In</a>
                        /
                        <a href="javascript:;" @click="setMode('register')">Register</a></h4>
                    <div>
                        <login v-if="mode === 'login'"/>
                        <register v-else />
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from '@/components/home/Login.vue';
import Register from '@/components/home/Register.vue';

export default Vue.extend({
    name: 'home',
    components: {
        Login,
        Register,
    },
    data() {
        return {
            mode: 'login',
        };
    },
    methods: {
        setMode(mode: string): void {
            this.mode = mode;
        }
    }
});
</script>

<style lang="scss" scoped>

</style>

