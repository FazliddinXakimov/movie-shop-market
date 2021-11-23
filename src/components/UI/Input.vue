<template>
  <div class="mb-3" :class="mode">
    <label :for="label" class="form-label">{{ label }}</label>
    <input
      class="form-control form-control-sm"
      :type="type"
      :id="label"
      :min="min"
      :max="max"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: String,
    mode: String,
    type: String,
    min: String,
    max: String,
    label: String,
  },
};
</script>

<style scoped>
input {
  box-shadow: 0px 0px 5px grey;
  border-radius: 1rem;
  padding: 5px 10px;
}
</style>
