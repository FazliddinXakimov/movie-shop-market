<template>
  <div class="container card p-5 my-5 mx-auto">
    <h5 class="text-center">Add New Product</h5>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <Input mode="col-md-6" type="text" label="Name" v-model="name" />
        <div class="col-md-6">
          <label for="genre" class="form-label">Genre</label>
          <select
            v-model="genre"
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            id="genre"
          >
            <option value="Thriller">Thriller</option>
            <option value="Comedy">Comedy</option>
            <option value="Adventure">Adventure</option>
            <option value="Historical">Historical</option>
            <option value="Romance">Romance</option>
            <option value="Romance">Fantastic</option>
          </select>
        </div>
        <Input
          mode="col-md-6"
          type="month"
          label="Year"
          min="2000"
          max="2021"
          v-model="year"
        />
        <Input
          mode="col-md-6"
          type="number"
          label="Price"
          min="1"
          max="1000"
          v-model="price"
        />
      </div>

      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
    </form>
  </div>
</template>

<script>
import Input from "../../components/UI/Input.vue";

export default {
  components: {
    Input,
  },
  data() {
    return {
      name: "",
      genre: "",
      year: "2019",
      price: "30",
      formIsValid: false,
    };
  },
  methods: {
    handleSubmit() {
      this.formIsValid = true;
      const item = {
        name: this.name,
        genre: this.genre,
        year: this.year,
        price: this.price,
      };
      if (
        this.name === "" &&
        this.genre === "" &&
        this.year === "" &&
        this.price
      ) {
        this.formIsValid = false;
        return;
      }

      this.$store.dispatch("products/handleAdd", item);
      this.$toast.info(`Movie Added`);

      this.name = "";
      this.genre = "";
      this.year = "";
      this.price = "";

      this.$router.replace("/products");
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0px 0px 5px grey;
}
select {
  box-shadow: 0px 0px 5px grey;
  border-radius: 1rem;
  padding: 5px 10px;
}
option {
  padding: 1rem;
  display: inline-block;
}
</style>
