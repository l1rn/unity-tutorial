import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/components/HomeView.vue";
import ReferencesView from "@/components/references/ReferencesView.vue";
import AboutView from "@/components/about/AboutView.vue"

const routes = [
    { path: '/', redirect: '/home/lesson/1'},
    { path: '/references', component: ReferencesView},
    { path: '/about', component: AboutView },
    { 
        path: '/home/lesson/:page(\\d+)',
        component: HomeView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router