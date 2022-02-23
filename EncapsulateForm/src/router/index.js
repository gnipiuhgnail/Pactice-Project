import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/simple",
    name: "FromSimpleHome",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FromSimpleHome.vue"),
  },
  {
    path: "/dynamic",
    name: "FromDynamicHome",
    component: () => import("../views/FromDynamicHome.vue"),
  },
  {
    path: "/table",
    name: "TableHome",
    component: () => import("../views/TableHome.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
