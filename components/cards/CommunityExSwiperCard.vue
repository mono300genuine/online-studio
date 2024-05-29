<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>     
      <nuxt-img src="/images/community/communityend.webp" loading="lazy" width="280" height="490" alt="communityend" class="rounded-[20px] shadow-lg"/>
    </swiper-slide>
    <swiper-slide class="w-[375px] h-[490px]">     
      <nuxt-img src="/images/community/communityend.webp" loading="lazy" width="280" height="490" alt="communityend" class="rounded-[20px] shadow-lg"/>
    </swiper-slide>
    <swiper-slide class="w-[375px] h-[490px]">     
      <nuxt-img src="/images/community/communityend.webp" loading="lazy" width="280" height="490" alt="communityend" class="rounded-[20px] shadow-lg"/>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Define the modules to be used by Swiper
const modules = ref([EffectCoverflow, Pagination]);
</script>

<style scoped>

.swiper-container {
  width: 500px;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; /* Ensure the buttons are within the container */
}
/* Add your styles here */
.mySwiper {
  width: 375px;
  height: 520px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-left:5px;
  width: 300px;
}


.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-pagination {
  bottom: 0 !important;
}
</style>
