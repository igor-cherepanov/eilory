import Welcome from "../pages/Welcome";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/',
        component: Welcome,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;