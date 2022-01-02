import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "SingleProduct", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SingleProduct.vue"),
  },
  {
    path: "/cart",
    name: "cart", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
  {
    path: "/checkout",
    name: "checkout", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
  },
  {
    path: "/profile",
    name: "profile", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
  },
  {
    path: "/login",
    name: "login", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/registration",
    name: "registration", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registration.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
