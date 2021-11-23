<template>
  <div class="row">
    <ul class="list-group col-md-4 mx-auto">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <strong> Movie Name</strong>
        <strong>Price</strong>
        <strong>Delete</strong>
      </li>
      <purchase-item v-for="c in cart" :key="c.id" :c="c"></purchase-item>
    </ul>
  </div>
</template>

<script>
import PurchaseItem from "./PurchaseItem.vue";

export default {
  props: ["cart"],
  components: { PurchaseItem },
};
</script>

<style scoped>
strong {
  text-align: center;
}
</style>
