<template>
  <div class="home">
    <home-slider></home-slider>
    <home-text></home-text>
    <home-card></home-card>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeSlider from "../../components/Home/HomeSlider.vue";
import HomeCard from "../../components/Home/HomeCard.vue";
import HomeText from "../../components/Home/HomeText.vue";
import HomeFooter from "../../components/Home/HomeFooter.vue";

export default {
  components: {
    HomeSlider,
    HomeCard,
    HomeFooter,
    HomeText,
  },
};
</script>
