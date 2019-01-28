<template>
    <div class="container main">
        <app-title />
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
import AppTitle from '@/components/shared/AppTitle.vue';

export default Vue.extend({
    name: 'LogOut',
    components: {
        AppTitle
    },
    data() {
        return {
            seconds: 7
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

