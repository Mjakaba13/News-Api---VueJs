import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import GlobalView from "../views/GlobalView.vue";
import TechView from "../views/TechView.vue";
import BusinessView from "../views/BusinessView.vue";
import HealthView from "../views/HealthView.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "global news",
    component: GlobalView,
  },
  {
    path: "/technews",
    name: "TechView",
    component: TechView,
  },
  {
    path: "/businessnews",
    name: "business news",
    component: BusinessView,
  },
  {
    path: "/healthnews",
    name: "health news",
    component: HealthView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
