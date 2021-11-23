<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-lg justify-content-between">
      <router-link class="navbar-brand" to="">Movie</router-link>
      <button
        class="navbar-toggler btn-sm"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/home"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/purchases"
              >Purchases</router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/addproduct"
              >AddProduct</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <button
            type="button"
            class="btn btn-primary btn-sm position-relative p-0"
          >
            <div>
              <span v-if="!isLoggedIn" class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>
              </span>
              <span v-if="isLoggedIn" class="nav-item" @click="logout">
                <router-link class="nav-link" to="/login" v-if="isLoggedIn"
                  >Logout</router-link
                >
              </span>
            </div>
          </button>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    length() {
      return this.$store.getters["products/length"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.replace("/home");
      this.$toast.error(`You have been logout`);
    },
  },
};
</script>

<style scoped>
a.active {
  color: white;
}
button span {
  padding: 0;
}
</style>
