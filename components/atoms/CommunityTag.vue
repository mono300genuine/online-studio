<template>
    <div class="absolute flex items-center justify-center" :style="{ top: top, left: left }">
      <div class="flex justify-center items-center rounded-full shadow-md w-[83px] h-[83px] bg-white">
        <span class="text-[#55CCAA] text-[22px]">{{title}}</span>
      </div>
      <div class="absolute top-[-45px]">
        <AtomsSkewPointedTagCol class="w-[200px] h-[62px] text-[15px] text-center text-white" firstcolor="#55CCAA"
          endcolor="#88DD77" middlecolor="#6ED491" :text1="maintxt1" :text2="maintxt2" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps({
    top: {
      type: String,
      required: true,
    },
    left: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    maintxt1: {
      type: String,
      required: true,
    },
    maintxt2: {
      type: String,
      required: true,
    }
  });
  </script>
  