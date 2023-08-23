import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/alerts",
        name: "alerts",
        component: () => import("../views/AlertsView.vue"),
    },
    {
        path: "/billing",
        name: "billing",
        component: () => import("../views/BillingView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;