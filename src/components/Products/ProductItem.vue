<template>
  <div class="col-lg-3">
    <div class="card text-center my-4">
      <div class="card-header">
        {{ movie.genre }}
        <div v-if="setHasInCart">
          <h5 class="bookmark">
            <fa :icon="['fas', 'bookmark']"></fa>
          </h5>
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title">
          {{ movie.name }}
        </h5>
        <div class="d-flex justify-content-between px-3 mb-2">
          <strong>Year</strong>
          <span>{{ movie.year }}</span>
        </div>
        <div class="d-flex justify-content-between px-3 mb-2">
          <strong>Price</strong>
          <span>${{ movie.price }}</span>
        </div>
      </div>
      <div class="d-flex justify-content-between px-3 pb-3 iconbox">
        <span v-if="!isLoggedIn">
          <router-link to="/login"
            ><h4 style="color: red"><fa :icon="['far', 'heart']"></fa></h4
          ></router-link>
        </span>
        <h4 v-else style="color: red" @click="handleLike">
          <fa v-if="like" :icon="['fas', 'heart']"></fa>
          <fa v-else :icon="['far', 'heart']"></fa>
        </h4>
        <span v-if="!isLoggedIn">
          <router-link to="/login">
            <h4 style="color: red" class="trash-icon iconbox">
              <fa :icon="['fas', 'trash']"></fa>
            </h4>
          </router-link>
        </span>
        <h4
          v-else
          style="color: red"
          @click="handleDelete(movie.id)"
          class="trash-icon iconbox"
        >
          <fa :icon="['fas', 'trash']"></fa>
        </h4>

        <span v-if="!isLoggedIn">
          <router-link to="/login">
            <h4 class="text-primary">
              <fa :icon="['fas', 'cart-plus']"></fa></h4
          ></router-link>
        </span>
        <h4 v-else class="text-primary" @click="handleAddToCart">
          <fa :icon="['fas', 'cart-plus']"></fa>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  data() {
    return {
      like: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },

    getCart() {
      return this.$store.getters["purchases/cart"];
    },
    setHasInCart() {
      const item = this.getCart.find((c) => c.id === this.movie.id);
      if (item) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    handleDelete(id) {
      this.$store.dispatch("products/handleDelete", id);
      this.$toast.warning(`Movie deleted`);
    },
    handleLike() {
      this.like = !this.like;
    },

    handleAddToCart() {
      this.$store.dispatch("purchases/addCart", this.movie);
      const item = this.getCart.find((c) => c.id === this.movie.id);
      if (item) {
        this.hasInCart = true;
      } else {
        this.hasInCart = false;
      }
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0px 0px 5px grey;
}
.card:hover {
  transform: scale(1.01);
}
.card-header {
  position: relative;
}

.bookmark {
  color: #0d6efd;
  position: absolute;
  right: 10px;
}

.iconbox span:hover,
.iconbox h4:hover,
.trash-icon:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
