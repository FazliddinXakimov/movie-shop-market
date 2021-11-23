<template>
  <div class="my-5 mx-auto container">
    <h3 class="text-center mb-4">
      Your Shopping
      <fa :icon="['fas', 'cart-plus']"></fa>
      <span class="badge bg-dark rounded-pill">${{ totalQty }}</span>
    </h3>
    <div v-if="totalQty > 0"><purchase-list :cart="cart"></purchase-list></div>
    <h4 v-else class="text-center">There are no products</h4>
  </div>
</template>

<script>
import PurchaseList from "../../components/Purchases/PurchaseList.vue";

export default {
  data() {
    return {
      cart: [],
    };
  },
  components: { PurchaseList },

  computed: {
    getCart() {
      return this.$store.getters["purchases/cart"];
    },
    totalQty() {
      return this.$store.getters["purchases/totalQty"];
    },
    cartLength() {
      return this.$store.getters["purchases/cartLength"];
    },
  },

  methods: {
    loadCart() {
      this.cart = this.getCart;
    },
  },
  created() {
    this.loadCart();
  },
  watch: {
    cartLength() {
      this.loadCart();
    },
  },
};
</script>
