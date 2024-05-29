<template>
  <div class="flex justify-center items-center w-full h-[160px] relative z-10 mt-6">
    <button v-for="(button, index) in buttons" :key="index" @click="selectedButton = index" :class="[
      'flex flex-col items-center justify-center h-[160px] w-[93px] text-center relative',
      selectedButton === index ? 'bg-black text-white' : 'bg-white text-black',
      selectedButton === index ? 'before:content-[attr(data-arrow)] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white' : ''
    ]" data-arrow="">
      <nuxt-img :src="button.img" loading="lazy" width="93" height="100" alt="btnimg1" />
      <span class="h-[60px] flex flex-col items-center justify-center">
        <span>{{ button.title }}</span>
        <span class="text-[10px]">の場合</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const buttons = [
  {
    title: '音楽',
    img: "/images/reason/btnimg1.webp"
  },
  {
    title: 'ワイン',
    img: "/images/reason/btnimg2.webp"
  },
  {
    title: '茶道',
    img: "/images/reason/btnimg3.webp"
  },
  {
    title: '陶芸',
    img: "/images/reason/btnimg4.webp"
  },
];

const selectedButton = ref(0);
</script>

<style scoped>
button[data-arrow]::before {
  border-top-color: #000;
}
</style>