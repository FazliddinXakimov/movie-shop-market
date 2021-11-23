<template>
  <div class="container-sm">
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading" class="d-flex justify-content-center mt-5">
      <square-spinner></square-spinner>
    </div>
    <div v-else-if="hasProducts && !isLoading">
      <div class="row justify-content-lg-center">
        <h3 class="text-center">
          MoviesList
          <fa
            :icon="['fas', 'film']"
            :style="{
              cursor: 'pointer',
            }"
          ></fa>
        </h3>
        <product-item
          v-for="movie in paginateProducts"
          :key="movie.id"
          :movie="movie"
        ></product-item>
        <div v-if="productLength > productPageSize">
          <pagination></pagination>
        </div>
      </div>
    </div>
    <div v-else class="text-center my-5 display-5 not-founded">
      There are no movies <img src="../../assets/cry.png" />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import SquareSpinner from "../UI/SquareSpinner.vue";
import Pagination from "./Pagination";

export default {
  components: {
    ProductItem,
    SquareSpinner,
    Pagination,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  computed: {
    paginateProducts() {
      return this.$store.getters["products/paginateProducts"];
    },
    productLength() {
      return this.$store.getters["products/productsLength"];
    },

    hasProducts() {
      return this.$store.getters["products/hasProducts"];
    },
    productsLength() {
      return this.$store.getters["products/productsLength"];
    },
    productPageSize() {
      return this.$store.getters["products/pageSize"];
    },
  },

  methods: {
    async getProducts() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("products/getProducts");
      } catch (error) {
        this.error = error || "Something went wrong";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },

  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.not-founded img {
  width: 4rem;
}

@media (max-width: 768px) {
  .not-founded {
    font-size: 2rem;
  }
  .not-founded img {
    width: 3rem;
  }
}
</style>
