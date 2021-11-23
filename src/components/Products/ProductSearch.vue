<template>
  <nav class="navbar navbar-light bg-light mb-5">
    <div class="container justify-content-between py-2">
      <div>
        <strong>All</strong>: {{ " " }}
        <span class="badge rounded-pill bg-primary">{{ length }}</span>
      </div>
      <div>
        <router-link to="/addproduct">
          <button class="btn btn-outline-primary btn-sm mb-1 mx-3">
            Add New Product
          </button>
        </router-link>
      </div>
      <button
        v-if="isLoggedIn"
        type="button"
        class="btn btn-primary position-relative cart-btn"
      >
        <router-link to="/purchases">
          <fa :icon="['fas', 'cart-arrow-down']"></fa>
        </router-link>
        <span
          class="
            position-absolute
            top-0
            start-100
            translate-middle
            badge
            rounded-pill
            bg-danger
          "
        >
          {{ cartLength }}
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    length() {
      return this.$store.getters["products/productsLength"];
    },
    cartLength() {
      return this.$store.getters["purchases/cartLength"];
    },

    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
};
</script>

<style scoped>
nav {
  box-shadow: 0px 2px 2px grey;
}

a {
  text-decoration: none;
  display: inline-block;
}

a:hover,
button:hover {
  color: white;
}

.btn a {
  color: white;
}

.cart-btn:hover {
  transform: scale(1.1);
}
</style>
