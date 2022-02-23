import { createRouter, createWebHistory} from "vue-router";
const routes = [
  // 路由
  {
    name: "home",
    path: "/",
    component: () => import("../views/index.vue"),
  },
  {
    name: "vuePage",
    path: "/vue",
    component: () => import("../views/vue/index.vue"),
    children:[
      {
        name: "watch",
        path: "/watch",
        component: () => import("../views/vue/watch.vue")
      },
      {
        name: "lifecycle",
        path: "/lifecycle",
        component: () => import("../views/vue/lifecycle.vue")
      },
      {
        name: "componenttest",
        path: "/componenttest",
        component: () => import("../views/vue/componentTest.vue")
      },
      {
        name: "provide",
        path: "/provide",
        component: () => import("../views/vue/provide.vue")
      },
    ]
  },
  {
    name: "vueXPage",
    path: "/vueX",
    component: () => import("../views/vuex/index.vue")
  },
  {
    name: "vueXTestCompositionPage",
    path: "/vueX/testcomposition",
    component: () => import("../views/vuex/test-composition.vue")
  },
  {
    name: "vueXTestOptionPage",
    path: "/vueX/testoption",
    component: () => import("../views/vuex/text-option.vue")
  },
  {
    name: "functionPage",
    path: "/functions",
    component: () => import("../views/function/index.vue"),
    children: [
      {
        name: "uploadFile",
        path: "/functions/uploadFile",
        component: () => import("../views/function/uploadFile.vue")
      }
    ]
  },
  {
    name: "CssPage",
    path: "/css",
    component: () => import("../views/CSS/index.vue"),
    children:[{
      name: "layout",
      path: "/css/layout",
      component:()=>import("../views/CSS/layout.vue")
    },{
      name: "echarts",
      path: "/css/echart",
      component:()=>import("../views/CSS/echarts.vue")
    }]
  }

];
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;