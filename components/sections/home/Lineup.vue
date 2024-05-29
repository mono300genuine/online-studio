<script lang="ts" setup>
const carddata = [
  {
    id: 1,
    bg: "/images/components/lineup/lineupcardbg1.webp",
    vbg: "/images/components/lineup/lineupcardv1.webp",
    tagbg: "/images/components/lineup/lineupcardtag1.webp",
    tagtxt: "音楽",
    buttontxt: "音楽特設サイトへ",
    firstcolor: "#7799FF",
    endcolor: "#77DDFF"
  },
  {
    id: 2,
    bg: "/images/components/lineup/lineupcardbg2.webp",
    vbg: "/images/components/lineup/lineupcardv2.webp",
    tagbg: "/images/components/lineup/lineupcardtag2.webp",
    tagtxt: "ワイン",
    buttontxt: "ワイン特設サイトへ",
    firstcolor: "#EE88BB",
    endcolor: "#FFCC99"
  },
  {
    id: 3,
    bg: "/images/components/lineup/lineupcardbg3.webp",
    vbg: "/images/components/lineup/lineupcardv3.webp",
    tagbg: "/images/components/lineup/lineupcardtag3.webp",
    tagtxt: "茶道",
    buttontxt: "茶道特設サイトへ",
    firstcolor: "#99DD77",
    endcolor: "#EEEE55"
  },
  {
    id: 4,
    bg: "/images/components/lineup/lineupcardbg4.webp",
    vbg: "/images/components/lineup/lineupcardv3.webp",
    tagbg: "/images/components/lineup/lineupcardtag4.webp",
    tagtxt: "陶芸",
    buttontxt: "陶芸特設サイトへ",
    firstcolor: "#BBAA88",
    endcolor: "#EEDD55"
  },
]
</script>

<template>
  <div class="pt-[65px] relative flex flex-col items-center">
    <div class="text-[24px] z-10 mb-[44px] flex justify-center items-center">
      <span class="text-center">クレイジーさを磨けた<br />ジャンルのみ開設！</span>
    </div>
    <div class="absolute top-[-70px] left-[-57px] z-0">
      <div class="relative ">
        <nuxt-img src="/images/lineup/lineupbg●.webp" loading="lazy" width="300" height="300" alt="lineupbg●.webp" />
        <nuxt-img src="/images/lineup/lineup.webp" loading="lazy" width="228" height="50" alt="lineup.webp" class="absolute top-[130px] left-[70px] z-0" />
      </div>
    </div>
    <div class="absolute top-[102px] right-[-35px]">
      <nuxt-img src="/images/lineup/lineupbg○.webp" loading="lazy" width="120" height="120" alt="lineupbg●.webp" />
    </div>
    <div class="absolute top-[480px] left-[-30px]">
      <nuxt-img src="/images/lineup/lineupbg○1.webp" loading="lazy" width="87" height="87" alt="lineupbg●.webp" />
    </div>
    <div class="absolute top-[815px] right-[-35px]">
      <nuxt-img src="/images/lineup/lineupbg○2.webp" loading="lazy" width="115" height="115" alt="lineupbg●.webp" />
    </div>
    <div class="absolute top-[1166px] left-[-30px]">
      <nuxt-img src="/images/lineup/lineupbg○3.webp" loading="lazy" width="95" height="95" alt="lineupbg●.webp" />
    </div>

    <div>
      <CardsLineupCard v-for="data in carddata" :key="data.id" :bg="data.bg" :vbg="data.vbg" :tagtxt="data.tagtxt" :buttontxt="data.buttontxt" :firstcolor="data.firstcolor" :endcolor="data.endcolor" />
    </div>
  </div>
</template>