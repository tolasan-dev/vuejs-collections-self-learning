import { createRouter, createWebHistory } from "vue-router";
import homepage from "@/components/Home/homepage.vue";
import Contact from "@/components/Home/Contact.vue";
import About from "@/components/Home/About.vue";

// Product pages
import ProductList from "@/components/Proudct/ProductList.vue";
import ProductDetail from "@/components/Proudct/ProductDetail.vue";

const routes = [
  { path: "/", name: "Home", component: homepage },
  { path: "/contact", name: "contact", component: Contact },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  { path: "/products", component: ProductList },
  { path: "/products/:id", component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
