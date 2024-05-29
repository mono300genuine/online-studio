<script lang="ts" setup>
const { img, name, name_en, intro, } = defineProps<
  {
    img: string,
    name: string,
    name_en: string,
    intro: string,
  }>()

</script>

<template>
  <div class="w-[335px] h-[90px] flex flex-row rounded-xl shadow-lg relative">
    <div class="flex flex-col w-full justify-center p-2">
      <span class="text-[16px] px-4 mt-2">{{ name }}</span>
      <span class="text-[11px] pt-1 px-4">{{ intro }}</span>
    </div>
    <nuxt-img :src="img" loading="lazy" width="176" height="90" alt="naraunolistcardimgsm1" />
    <span class="absolute top-[0.3rem] left-10 text-[#DDDDDD] text-[18px] tracking-[0.1rem]">
      {{ name_en }}
    </span>
  </div>
</template>