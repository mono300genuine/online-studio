<script lang="ts" setup>
const { img, txt } = defineProps<
  {
    img: string,
    txt: string,
  }>()

</script>


<template>
  <div class="flex flex-col justify-center w-[110px] h-[110px] rounded-lg shadow-lg relative bg-white">
    <nuxt-img :src="img" loading="lazy" width="110" height="80" alt="sm" />
    <span class="text-center text-[11px] mt-1">{{ txt }}</span>
  </div>
</template>