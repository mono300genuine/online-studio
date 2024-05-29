<script lang="ts" setup>
const { img, name, date, txt1, txt2 } = defineProps<
  {
    img: string,
    date: string
    name: string,
    txt1: string,
    txt2: string
  }>()

</script>

<template>
  <div class="w-[335px] h-[130px] flex flex-row rounded-xl shadow-lg">
    <nuxt-img :src="img" loading="lazy" width="113" height="130" alt="naraunolistcardimgsm1" />
    <div class="flex flex-col w-full items-center p-2">
      <div class="flex flex-row w-full justify-between">
        <span class="text-[#999999] text-[10px]">{{ date }}</span>
        <span class="text-[#999999] text-[10px]">{{ name }}</span>
      </div>
      <span class="text-[12px]">{{ txt1 }}</span>
      <span class="text-[11px] pt-2">{{ txt2 }}</span>
    </div>
  </div>
</template>