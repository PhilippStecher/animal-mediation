import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'
import SwipeView from '../pages/Swipe.vue'
import ChatView from '../pages/Chat.vue'
import Error404 from '../pages/Error/Error404.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/swipe',
        name: 'swipe',
        component: SwipeView
    },
    {
        path: '/chat',
        name: 'chat',
        component: ChatView
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: Error404
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router