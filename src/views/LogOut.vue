<template>
    <div>
        Log Out
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    mounted() {
        setTimeout(()=> {
            this.$router.push('/');
        }, 3000);
    }
});
</script>

