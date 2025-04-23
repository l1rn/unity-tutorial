import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/components/HomeView.vue";
import ReferencesView from "@/components/references/ReferencesView.vue";

const routes = [
    { path: '/', redirect: '/api/home'},
    { path: '/api/home', component: HomeView },
    { path: '/api/references', component: ReferencesView}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router