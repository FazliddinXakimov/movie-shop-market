import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Products from "./pages/Products/Products.vue";
import AddProduct from "./pages/Products/AddProduct";
import Purchases from "./pages/Purchases/Purchases.vue";
import About from "./pages/About/About.vue";
import Login from "./pages/Registration/Registration.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      name: "product",
      path: "/products",
      component: Products,
    },

    {
      path: "/purchases",
      component: Purchases,
      meta: { requiresAuth: true },
    },

    {
      path: "/addproduct",
      component: AddProduct,
      meta: { requiresAuth: true },
    },

    {
      path: "/about",
      component: About,
    },

    {
      path: "/login",
      component: Login,
      meta: { requiresUnauth: true },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters["auth/isAuthenticated"]) {
    next("/home");
  } else {
    next();
  }
});

export default router;
