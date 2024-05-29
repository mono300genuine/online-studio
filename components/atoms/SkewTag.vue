<template>
  <div
    class="parallelogram bg-gradient-to-r  flex items-center justify-center">
    <div class="text"><slot></slot></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.parallelogram {
  @apply -skew-x-25;
}
.parallelogram .text {
  transform: skewX(25deg);
}
</style>