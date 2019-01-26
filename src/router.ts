import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/landing',
            component: () => import( /* webpackChunkName: "landing" */ './views/Landing.vue'),
            children: [{
                    path: '',
                    name: 'start',
                    component: () => import( /* webpackChunkName: "start" */ './views/Start.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
                },
                {
                    path: '/universe',
                    component: () => import( /* webpackChunkName: "universe" */ './views/Universe.vue'),
                    children: [{
                        path: '',
                        name: 'universe',
                        component: () => {
                            return import( /* webpackChunkName: "universe" */ './views/universe/NewUniverse.vue');
                        }
                    }]
                },
                {
                    path: '/storyboard',
                    name: 'storyboard',
                    component: () => import( /* webpackChunkName: "storyboard" */ './views/StoryBoard.vue'),
                    children: [

                    ]
                },
                {
                    path: '/electron',
                    name: 'electron',
                    component: () => import( /* webpackChunkName: "storyboard" */ './views/StoryBoard.vue')
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import( /* webpackChunkName: "profile" */ './views/Profile.vue')
                }
            ]
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import( /* webpackChunkName: "logout" */ './views/LogOut.vue')
        },
    ],
});
