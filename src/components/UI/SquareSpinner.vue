<template>
  <scaling-squares-spinner
    :animation-duration="1000"
    :size="50"
    color="#0D6EFD"
  />
</template>

<script>
import { ScalingSquaresSpinner } from "epic-spinners";
export default {
  components: {
    ScalingSquaresSpinner,
  },
};
</script>
