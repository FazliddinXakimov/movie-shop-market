<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span> {{ c.name }} </span>
    <span class="badge bg-primary rounded-pill">{{ c.price }}</span>
    <span class="btn btn-danger btn-sm" @click="removeFromCart(c.id)">x</span>
  </li>
</template>

<script>
export default {
  props: ["c"],
  methods: {
    removeFromCart(id) {
      this.$store.dispatch("purchases/removeFromCart", id);
    },
  },
};
</script>
