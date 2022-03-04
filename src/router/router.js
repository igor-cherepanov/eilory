import Welcome from "../pages/Welcome";
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/CRM/Home";
import NotificationIndex from "@/pages/CRM/notifications/Index";

const routes = [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/home',
        component: Home,
        meta: {layout: 'CRM'},
    },
    {
        path: '/notifications',
        component: NotificationIndex,
        meta: {layout: 'CRM'},
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;