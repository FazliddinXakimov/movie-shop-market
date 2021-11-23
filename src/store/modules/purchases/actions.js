export default {
  addCart(context, payload) {
    context.commit("addToCart", payload);
  },

  removeFromCart(context, payload) {
    context.commit("removeFromCart", payload);
  },
};
