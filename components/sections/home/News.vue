<script setup lang="ts">
import { onMounted } from 'vue';
import Swiper from 'swiper';

onMounted(() => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
</script>

<style scoped>
.swiper-wrapper {
  width: 375px;
  height: 456px;
  box-sizing: border-box;
}
</style>

<template>
  <div class="pt-[65px] relative flex flex-col items-center">
    <div class="text-[24px] z-10 mb-[44px]">
      新着トピックス
    </div>
    <div class="absolute top-[-70px] left-[-57px]">
      <div class="relative">
        <nuxt-img src="/images/news/newsbg●.webp" loading="lazy" width="300" height="300" alt="newsbg●" />
        <nuxt-img src="/images/news/news.webp" loading="lazy" width="150" height="50" alt="news"
          class="absolute top-[130px] left-[70px] z-0" />
      </div>
    </div>
    <div class="absolute top-[102px] right-[-35px]">
      <nuxt-img src="/images/news/newsbg○.webp" loading="lazy" width="120" height="120" alt="newsbg○" />
    </div>
    <div class="z-10">
      <div class="swiper-wrapper flex justify-start items-start">
        <div class="swiper-container ">
          <div class="swiper-wrapper flex flex-row justify-start px-[20px]">
            <div class="swiper-slide">
              <CardsNewsOpenCard />
            </div>
            <div class="swiper-slide">
              <CardsNewsOpenCard />
            </div>
            <div class="swiper-slide">
              <CardsNewsOpenCard />
            </div>
            <div class="swiper-slide pr-[150px]">
              <CardsNewsOpenCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <CardsUserCountCard />
    </div>
    <div class="mt-4 z-10">
      <CardsUserCountSortCard />
    </div>
  </div>
</template>