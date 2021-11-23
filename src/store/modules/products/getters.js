export default {
  products(state) {
    return state.products;
  },
  hasProducts(_, getters) {
    return getters.products && getters.products.length > 0;
  },

  pageSize(state) {
    return state.pageSize;
  },
  currentPage(state) {
    return state.currentPage;
  },
  productsLength(_, getters) {
    return getters.products.length;
  },
  pageNumbers(state, getters) {
    const pageArray = [];
    const pageEndNumber = Math.ceil(getters.productsLength / state.pageSize);
    for (let i = 1; i <= pageEndNumber; i++) {
      pageArray.push(i);
    }
    return pageArray;
  },
  paginateProducts(state) {
    const startIndex = (state.currentPage - 1) * state.pageSize;
    const endIndex = state.currentPage * state.pageSize;

    const portion = state.products.slice(startIndex, endIndex);
    if (portion.length === 0 && state.currentPage !== 1) {
      state.currentPage--;
    }
    return portion;
  },
  paginateProductsLength(_, getters) {
    return getters.paginateProducts.length;
  },
};
