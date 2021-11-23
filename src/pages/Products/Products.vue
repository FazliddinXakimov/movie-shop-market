<template>
  <product-search></product-search>
  <product-list></product-list>
</template>

<script>
import ProductSearch from "../../components/Products/ProductSearch.vue";
import ProductList from "../../components/Products/ProductList.vue";

export default {
  components: {
    ProductSearch,
    ProductList,
  },
  computed: {},
};
</script>
