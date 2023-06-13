import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'
import SwipeView from '../pages/Swipe.vue'
import ChatView from '../pages/Chat.vue'
import Error404 from '../pages/Error/Error404.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        props: {
            headerText: 'Home',
        }
    },
    {
        path: '/swipe',
        name: 'swipe',
        component: SwipeView,
        props: {
            headerText: 'Swipe',
        }
    },
    {
        path: '/chat/:name',
        name: 'chat',
        component: ChatView,
        props: {
            headerText: 'Chat',
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: Error404,
        props: {
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router