import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/index/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: HomeView,
    children: [
      {
        name: "User",
        path: "/user",
        component: () => import("../views/user/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
