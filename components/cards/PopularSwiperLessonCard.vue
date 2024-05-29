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
  width: 220px;
  height: 280px;
  box-sizing: border-box;
}
</style>

<template>
  <div class="flex flex-row items-center relative">
    <div class="swiper-wrapper flex justify-start items-start">
      <div class="swiper-container ">
        <div class="swiper-wrapper flex flex-row justify-start px-[10px]">
          <div class="swiper-slide">
            <CardsPopularLessonCard />
          </div>
          <div class="swiper-slide">
            <CardsPopularLessonCard />
          </div>
          <div class="swiper-slide">
            <CardsPopularLessonCard />
          </div>
          <div class="swiper-slide">
            <CardsPopularLessonCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>