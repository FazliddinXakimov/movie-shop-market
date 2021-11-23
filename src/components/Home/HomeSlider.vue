<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../assets/slide1.jpg"
          class="d-block w-100 mx-auto"
          alt="..."
        />
        <div class="carousel-caption d-none d-sm-block text-right mb-5">
          <h1 class="display-3">Heading Three</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <router-link :to="learnMore" class="btn btn-success btn-lg"
            >Learn More</router-link
          >
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/slide2.jpg"
          class="d-block w-100 mx-auto"
          alt="..."
        />
        <div class="carousel-caption d-none d-sm-block text-right mb-5">
          <h1 class="display-3">Heading Three</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <router-link :to="learnMore" class="btn btn-success btn-lg"
            >Learn More</router-link
          >
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/slide3.jpg"
          class="d-block w-100 mx-auto"
          alt="..."
        />
        <div class="carousel-caption d-none d-sm-block text-right mb-5">
          <h1 class="display-3">Heading Three</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <router-link :to="learnMore" class="btn btn-success btn-lg"
            >Learn More</router-link
          >
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    learnMore() {
      if (this.isLoggedIn) {
        return "/about";
      } else {
        return "/login";
      }
    },
  },
};
</script>

<style scoped>
#carouselExampleCaptions {
  background-color: black;
}
img {
  height: 450px;
}
</style>
