export default {
  addToCart(state, payload) {
    const item = state.cart.find((c) => c.id === payload.id);
    if (!item) {
      state.cart.push(payload);
    }
  },
  removeFromCart(state, payload) {
    const updatedCart = state.cart.filter((product) => product.id !== payload);
    state.cart = updatedCart;
  },
};
