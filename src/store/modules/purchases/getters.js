export default {
  cart(state) {
    return state.cart;
  },
  totalQty(state) {
    let totalQty = 0;
    state.cart.forEach((c) => {
      totalQty += c.price / 1;
    });

    return totalQty;
  },
  cartLength(state) {
    return state.cart.length;
  },
};
