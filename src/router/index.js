import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Reporting from "../views/ReportingView.vue";
import User from "../views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/reporting",
      name: "Reporting",
      component: Reporting,
    },
    {
      path: "/user",
      name: "User",
      component: User,
    },
  ],
});

export default router;
