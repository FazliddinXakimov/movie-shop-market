<template>
  <nav aria-label="...">
    <ul class="pagination pagination-sm justify-content-center">
      <li
        v-for="number in pageNumbers"
        :key="number"
        class="page-item"
        :class="{ active: currentPage === number ? true : false }"
        @click="handleSelectPage(number)"
      >
        <span class="page-link">{{ number }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    pageNumbers() {
      return this.$store.getters["products/pageNumbers"];
    },
    currentPage() {
      return this.$store.getters["products/currentPage"];
    },
    paginateProductsLength() {
      return this.$store.getters["products/paginateProductsLength"];
    },
  },

  methods: {
    handleSelectPage(number) {
      this.$store.commit("products/handleSelectPage", number);
    },
  },
  watch: {
    paginateProductsLength(value) {
      if (value === 0 && this.currentPage > 1) {
        this.handleSelectPage(this.currentPage);
      }
    },
  },
};
</script>

<style scoped>
.page-item:hover {
  background-color: aqua;
}
</style>
