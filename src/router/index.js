import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CadastroView from "../views/CadastroView.vue";
import LoginView from "../views/LoginView.vue";
import AutoresView from "../views/AutoresView.vue";
import LivrosView from "../views/LivrosView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import EditorasView from "../views/EditorasView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditorasView,
    },
  ],
});

export default router;
