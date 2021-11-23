import { createStore } from "vuex";
import productsModule from "./modules/products/index.js";
import purchasesModule from "./modules/purchases/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    products: productsModule,
    purchases: purchasesModule,
    auth: authModule,
  },
  state() {
    return {};
  },
});

export default store;
