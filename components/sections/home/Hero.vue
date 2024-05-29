<script lang="ts" setup>
const mainherodata = [
  {
    id: 1,
    img: "/images/herosection/photo1.webp",
    title: "音楽",
    txtlg: "楽器",
    txtsm: "プレゼント！",
    top: "0px",
    left: "65px",
    firstcolor: "#7799FF",
    endcolor: "#77DDFF"
  },
  {
    id: 2,
    img: "/images/herosection/photo2.webp",
    title: "ワイン",
    txtlg: "ワイングラス",
    txtsm: "プレゼント！",
    top: "0px",
    left: "208px",
    firstcolor: "#EE88BB",
    endcolor: "#FFCC99"
  },
  {
    id: 3,
    img: "/images/herosection/photo3.webp",
    title: "茶道",
    txtlg: "茶釜・畳",
    txtsm: "プレゼント！",
    top: "155px",
    left: "10px",
    firstcolor: "#99DD77",
    endcolor: "#EEEE55"
  },
  {
    id: 4,
    img: "/images/herosection/photo4.webp",
    title: "陶芸",
    txtlg: "焼き窯",
    txtsm: "プレゼント！",
    top: "155px",
    left: "265px",
    firstcolor: "#BBAA88",
    endcolor: "#EEDD55"
  },
]
</script>

<template>
  <div id="toppage"></div>
  <div class="herosetion relative w-full mt-[94px]">
    <div class="absolute bottom-0 left-0">
      <nuxt-img src="/images/herosection/herosection.webp" loading="lazy" width="375" height="600" alt="herosection" />
    </div>
    <div class="flex flex-row w-full justify-between px-[17px] mt-6 relative z-10">
      <span>\</span>
      <span class="text-[16px] tracking-[-0.1rem]">驚きのクレイジー特典を、無料プレゼント！</span>
      <span>/</span>
    </div>
    <div class="text-[22px] relative z-10">EYSのオンラインアカデミー</div>

    <nuxt-img src="/images/herosection/○1.webp" loading="lazy" width="70" height="70" alt="○1"
      class="absolute top-[109px] left-[42px]" />
    <nuxt-img src="/images/herosection/●2.webp" loading="lazy" width="49" height="49" alt="●2"
      class="absolute top-[145px] right-[43px]" />
    <nuxt-img src="/images/herosection/●3.webp" loading="lazy" width="42" height="42" alt="●3"
      class="absolute top-[283px] left-[89px]" />
    <nuxt-img src="/images/herosection/○4.webp" loading="lazy" width="33" height="33" alt="○4"
      class="absolute top-[331px] right-[5px]" />
    
    <!-- ===== main photos -->
    <div class="relative h-[293px] w-full mt-[27px]">
      <AtomsHeroSectionImg v-for="data in mainherodata" :key="data.id" :title="data.title" :txtlg="data.txtlg"
        :txtsm="data.txtsm" :img="data.img" :top="data.top" :left="data.left" :firstcolor="data.firstcolor" :endcolor="data.endcolor" />
    </div>
    <div class="absolute top-[393px]">
      <nuxt-img src="/images/herosection/mockup.webp" loading="lazy" width="343" height="260" alt="mockup" />
    </div>
    <div class="absolute top-[325px]">
      <nuxt-img src="/images/herosection/logo2.webp" loading="lazy" width="141" height="80" alt="logo2" />
    </div>
  </div>
</template>