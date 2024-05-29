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
  width: 380px;
  height: 680px;
  box-sizing: border-box;
}

</style>

<template>
  <div class="pt-[65px] relative flex flex-col items-center">
    <div class="text-[24px] z-10 mb-[44px]">
      人気のジャンル/コース
    </div>
    <div class="absolute top-[-70px] right-[-57px]">
      <div class="relative">
        <nuxt-img src="/images/popular/popularbg●.webp" loading="lazy" width="300" height="300" alt="popularbg●" />
      </div>
    </div>
    <div class="absolute top-[55px] right-1 z-0">
      <nuxt-img src="/images/popular/popular.webp" loading="lazy" width="279" height="50" alt="popular" />
    </div>
    <div class="absolute top-[102px] left-[-35px]">
      <nuxt-img src="/images/popular/popularbg○.webp" loading="lazy" width="120" height="120" alt="popularbg●" />
    </div>

    <div class="z-10">
      <div class="swiper-wrapper flex justify-start items-start">
        <div class="swiper-container ">
          <div class="swiper-wrapper flex flex-row justify-start px-[20px]">
            <div class="swiper-slide">
              <CardsPopularCard />
            </div>
            <div class="swiper-slide">
              <CardsPopularCard />
            </div>
            <div class="swiper-slide">
              <CardsPopularCard />
            </div>
            <div class="swiper-slide">
              <CardsPopularCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popularswiper mt-10 flex flex-col">
      <div class="flex flex-row justify-center w-full mt-6 p-4 pb-2">
        <div class="text-[32px] text-center">\</div>
        <div class="text-[16px] text-center mx-4">具体的なクラスを<br />覗いてみよう！</div>
        <div class="text-[32px] text-center">/</div>
      </div>
      <CardsPopularSwiperLessonCard/>
    </div>
    <div>
      <CardsLogCard />
    </div>
  </div>
</template>