import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/firstchildren",
        component: () => import("../views/homechidren/first-children.vue"),
      },
    ],
  },
  {
    path: "/index",
    name: "LoginIndex",
    redirect: "login",
    component: () => import("../views/login/index.vue"),
    children: [
      {
        path: "/login",
        component: () => import("../views/login/login.vue"),
      },{
        path: "/regist",
        component: () => import("../views/login/regist.vue"),
      },{
        path: "/forget",
        component: () => import("../views/login/forget.vue"),
      }
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
