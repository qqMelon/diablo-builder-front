import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

// Import main routes
import Home from './views/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: {
          name: 'Home Dashboard'
        },
        children: [
            {
                path: 'home-dashboard',
                name: 'Home Dashboard',
                component: () => import('./views/home-children/Dashboard.vue')
            },
            {
                path: 'home-leaderboard',
                name: 'Home Leaderboard',
                component: () => import('./views/home-children/Leaderboard.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router