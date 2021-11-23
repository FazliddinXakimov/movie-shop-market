<template>
  <the-header class="nav-header"></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/Layout/TheNavbar.vue";

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters["auth/didAutoLogout"];
    },
  },
  created() {
    this.$store.dispatch("auth/tryLogin");
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$store.dispatch("auth/tryLogin");
      }
    },
  },
};
</script>
