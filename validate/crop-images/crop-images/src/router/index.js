// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import YourComponent from "../views/YourComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: YourComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
