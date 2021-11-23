export default {
  getProducts(state, payload) {
    state.products = payload;
  },
  handleDelete(state, payload) {
    const updatedProducts = state.products.filter(
      (product) => product.id !== payload
    );
    state.products = updatedProducts;
  },
  handleAdd(state, payload) {
    state.products.push(payload);
  },

  handleSelectPage(state, payload) {
    state.currentPage = payload;
  },
};
