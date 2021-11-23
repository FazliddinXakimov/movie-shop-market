<template>
  <div class="row container mx-auto fw-bold">
    <div class="col-md-6 px-3 py-5">
      <h2>
        <fa
          :icon="['fas', 'film']"
          :style="{
            cursor: 'pointer',
          }"
        ></fa>
      </h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem
      suscipit, impedit provident dolorum sit explicabo exercitationem ipsa
      ipsam dolorem minus. Laboriosam, minus! Enim vero consequatur fugit,
      suscipit quis sint.
    </div>
    <div class="col-md-6 px-3 py-5">
      <h2>
        <fa
          :icon="['fas', 'video']"
          :style="{
            cursor: 'pointer',
          }"
        ></fa>
      </h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem
      suscipit, impedit provident dolorum sit explicabo exercitationem ipsa
      ipsam dolorem minus. Laboriosam, minus! Enim vero consequatur fugit,
      suscipit quis sint.
    </div>
  </div>
</template>

<style scoped>
.col-md-6 {
  text-align: center;
}
</style>
