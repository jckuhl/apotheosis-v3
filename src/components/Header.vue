<template>
    <nav>
        <div class="nav-wrapper blue darken-3">
            <router-link to="/">
                <span class="brand-logo">Apotheosis</span>
            </router-link>
            <ul class="right hide-on-med-and-down">
                <li :class="isActive('start')">
                    <router-link to='/landing'>
                        Getting Started
                    </router-link>
                </li>
                <li :class="isActive('universe')">
                    <router-link to="/universe">
                        Universe
                    </router-link>
                </li>
                <li :class="isActive('storyboard')">
                    <router-link to="storyboard">
                        Storyboarder
                    </router-link>
                </li>
                <li :class="isActive('about')">
                    <router-link to='/about'>
                        About
                    </router-link>
                </li>
                <li :class="isActive('profile')">
                    <router-link to="/profile">
                        Profile
                    </router-link>
                </li>
                <li :class="isActive('logout')">
                    <router-link to="logout">
                        Log Out
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Header',
    methods: {
        isActive(location: string): string {
            const path = this.$router.currentRoute.name;
            console.log(path);
            return path === location ? 'active' : '';
        }
    }
});
</script>
