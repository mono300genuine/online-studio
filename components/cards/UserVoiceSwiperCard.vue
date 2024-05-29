<template>
  <div class="flex relative w-[375px] justify-center items-center">
    <!-- Previous button -->
    <button class="swiper-button-prev absolute top-4 left-0">
      <nuxt-img src="/images/reason/arrow1.webp" loading="lazy" width="50" height="50" alt="arrow1" />
    </button>
    <!-- Next button -->
    <button class="swiper-button-next absolute top-4 right-0">
      <nuxt-img src="/images/reason/arrow2.webp" loading="lazy" width="50" height="50" alt="arrow2" />
    </button>
    <!-- Swiper Component -->
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
      :pagination="false"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :modules="modules"
      class="mySwiper w-[300px] h-[350px]"
    >
      <!-- Swiper Slides -->
      <swiper-slide>
        <CardsReasonSwiperCard />
      </swiper-slide>
      <!-- Duplicate slides for demonstration -->
      <swiper-slide>
        <CardsReasonSwiperCard />
      </swiper-slide>
      <swiper-slide>
        <CardsReasonSwiperCard />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Define the Swiper modules to be used
const modules = ref([EffectCoverflow, Pagination, Navigation]);
</script>

<style scoped>
.swiper-container {
  width: 500px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; /* Ensure the buttons are within the container */
}

.mySwiper {
  width: 375px; /* Width of each card */
  height: 312px; /* Height of each card */
}

.swiper-slide {
  width: 240px; /* Width of each card */
  height: 312px; /* Height of each card */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left:10px;
}

.swiper-button-next,
.swiper-button-prev {
  background: none; /* Remove default background */
  border: none; /* Remove default border */
  width: 50px; /* Adjust the size of the navigation images */
  height: 50px;
}

.swiper-button-next img,
.swiper-button-prev img {
  width: 50px; /* Adjust the size of the navigation images */
  height: 50px; /* Adjust the size of the navigation images */
}
</style>

