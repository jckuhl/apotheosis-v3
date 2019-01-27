<template>
    <nav>
        <div class="nav-wrapper blue darken-3">
            <router-link to="/">
                <span class="brand-logo">Apotheosis</span>
            </router-link>
            <ul class="right hide-on-med-and-down">
                <li :class="isActive('landing')" @click="setActive('landing')">
                    <router-link to='/landing'>
                        Getting Started
                    </router-link>
                </li>
                <li :class="isActive('universe')" @click="setActive('universe')">
                    <router-link to="/universe">
                        Universe
                    </router-link>
                </li>
                <li :class="isActive('storyboard')" @click="setActive('storyboard')">
                    <router-link to="/storyboard">
                        Storyboarder
                    </router-link>
                </li>
                <li :class="isActive('electron')" @click="setActive('electron')">
                    <router-link to="electron">
                        Desktop
                    </router-link>
                </li>
                <li :class="isActive('nano')"  @click="setActive('nano')">
                    <router-link to="/nano">
                        NaNoWriMo
                    </router-link>
                </li>
                <li :class="isActive('about')" @click="setActive('about')">
                    <router-link to='/about'>
                        About
                    </router-link>
                </li>
                <li :class="isActive('profile')" @click="setActive('profile')">
                    <router-link to="/profile">
                        Profile
                    </router-link>
                </li>
                <li :class="isActive('logout')"  @click="setActive('logout')">
                    <router-link to="/logout">
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
    data() {
        return {
            currentPage: this.$router.currentRoute.name
        };
    },
    methods: {
        isActive(location: string): string {
            return this.currentPage === location ? 'active' : '';
        },
        setActive(location: string) {
            this.currentPage = location;
        }
    }
});
</script>
