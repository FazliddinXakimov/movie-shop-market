import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      currentPage: 1,
      pageSize: 4,
    };
  },
  mutations,
  actions,
  getters,
};
