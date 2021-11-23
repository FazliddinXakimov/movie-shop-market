<template>
  <div v-if="isLoading" class="d-flex justify-content-center mt-5">
    <square-spinner></square-spinner>
  </div>
  <div v-else class="row mx-3 my-5">
    <div class="card text-center col-md-4 mx-auto p-3 rounded">
      <div>
        <h3>{{ changeHeader }}</h3>
        <form @submit.prevent="handleSubmit">
          <div class="mb-2 text-start">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control form-control-sm"
              id="exampleInputEmail1"
              v-model="email"
            />
          </div>
          <div class="mb-2 text-start">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control form-control-sm"
              id="exampleInputPassword1"
              v-model="password"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-sm">
            {{ changeButton }}
          </button>
          <div class="auth-text m-2" @click="switchMode">{{ changeText }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "login",
      email: "",
      password: "",
      error: "",
      formIsValid: false,
      isLoading: false,
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
    changeText() {
      if (this.mode == "login") {
        return "Don't you have account? Signup";
      } else {
        return "Do you have account? Login";
      }
    },
    changeButton() {
      if (this.mode == "login") {
        return "Login";
      } else {
        return "Sign Up";
      }
    },
    changeHeader() {
      if (this.mode == "login") {
        return "Login";
      } else {
        return "Sign up";
      }
    },
  },
  methods: {
    switchMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    setAdmin(bool) {
      this.$store.dispatch("auth/setAdmin", bool);
    },

    async handleSubmit() {
      this.formIsValid = true;

      if (
        !this.email.includes("@") &&
        this.email === "" &&
        this.password === ""
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;

      const data = {
        email: this.email,
        password: this.password,
        mode: this.mode,
      };

      try {
        await this.$store.dispatch("auth/auth", data);
        this.$toast.success(`You have login`);
        this.$router.replace("/home");
      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later.";
        this.$toast.error(`${this.error}`);
      }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.auth-text {
  color: orange;
}
.auth-text:hover {
  color: orangered;
  cursor: pointer;
}
.card {
  box-shadow: 0px 0px 5px grey;
}
</style>
