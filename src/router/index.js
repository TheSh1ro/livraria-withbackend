import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import CadastroView from "../views/CadastroView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: CadastroView,
    },
  ],
});

export default router;
