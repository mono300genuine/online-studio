<script lang="ts" setup>
import { ref } from 'vue';

const currentPage = ref(1);
const totalPages = ref(30); // Example total pages, replace with your logic

const handlePageChange = (page: number) => {
  currentPage.value = page;
  // Add your logic to handle page change, e.g., fetching new data
};
const cardlist1 = [
  {
    id: 1,
    date: "2019/08/06",
    img: "/images/components/narauno/naraunolistcardimgsm1.webp",
    name: "石田 一帆",
    txt1: "第１回：記事タイトル記事タイトル記事タイトル",
    txt2: "記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。...",
  },
  {
    id: 2,
    date: "2019/08/06",
    img: "/images/components/narauno/naraunolistcardimgsm2.webp",
    name: "石田 一帆",
    txt1: "第１回：記事タイトル記事タイトル記事タイトル",
    txt2: "記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。...",
  },
  {
    id: 3,
    date: "2019/08/06",
    img: "/images/components/narauno/naraunolistcardimgsm3.webp",
    name: "石田 一帆",
    txt1: "第１回：記事タイトル記事タイトル記事タイトル",
    txt2: "記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。記事本文の抜粋。...",
  },
];

const cardlist2 = [
  {
    id: 1,
    img: "/images/components/narauno/naraunolistcardimglg1.webp",
    name: "石田 一帆",
    name_en: "Kazuho Ishida",
    intro: "ショップ店員 / 24歳 /挑戦楽器：サックス",
  },
  {
    id: 2,
    img: "/images/components/narauno/naraunolistcardimglg2.webp",
    name: "石田 一帆",
    name_en: "Kazuho Ishida",
    intro: "ショップ店員 / 24歳 /挑戦楽器：サックス",
  },
  {
    id: 3,
    img: "/images/components/narauno/naraunolistcardimglg3.webp",
    name: "石田 一帆",
    name_en: "Kazuho Ishida",
    intro: "ショップ店員 / 24歳 /挑戦楽器：サックス",
  },
  {
    id: 4,
    img: "/images/components/narauno/naraunolistcardimglg4.webp",
    name: "石田 一帆",
    name_en: "Kazuho Ishida",
    intro: "ショップ店員 / 24歳 /挑戦楽器：サックス",
  },
]
</script>

<template>
  <div class="relative flex flex-col mt-20 px-4">
    <div class="flex flex-col">
      <div class="px-2"><nuxt-img src="/images/narauno/naraunologo.webp" loading="lazy" width="200" height="32"  alt="naraunologo" /></div>
      <div class="flex justify-end mt-4"><nuxt-img src="/images/narauno/naraunotitle.webp" loading="lazy" width="315" height="30" alt="naraunotitle" /></div>
    </div>
    <div class="w-[335px] h-[449px] relative mt-4">
      <nuxt-img src="/images/components/narauno/naraunotop_main1.webp" loading="lazy" width="315" height="237" alt="naraunotop_main1" class="absolute top-0 left-0" />
      <div class="flex flex-col w-[315px] h-[200px] p-4 bg-white absolute bottom-12 right-0 shadow-lg rounded-lg">
        <div class="w-[167px]"><span class="text-[16px]">大人の楽器サックスに憧れて。いきなり「ルパン三世’79」に挑戦？</span></div>
        <div class="mt-6 leading-[0.7rem]">
          <span class="text-[#DDDDDD] text-[20px] pl-4 tracking-[0.2rem]">Kazuho Ishida<br /></span>
          <span class="text-[14px] ">石田 一帆</span>
        </div>
        <span class="text-[10px] mt-4">ショップ店員 / 24歳 / 挑戦楽器：サックス</span>
      </div>
      <nuxt-img src="/images/components/narauno/naraunotop_photo1.webp" loading="lazy" width="126" height="286" alt="naraunotop_photo1"
        class="absolute -bottom-2 right-4" />
    </div>

    <div class="flex flex-row h-[264px] justify-center">
      <div class="flex items-start">
        <div class="w-[160px] h-[234px] relative">
          <nuxt-img src="/images/components/narauno/narauno_pg1.webp" loading="lazy" width="140" height="209" alt="narauno_pg1" class="absolute top-0 left-0" />
          <div class="flex flex-col w-[140px] h-[110px] p-2 bg-white absolute bottom-0 right-0 shadow-lg rounded-lg">
            <div class=""><span class="text-[13px]">大人の楽器サック</span></div>
            <div class="mt-4 leading-[0.6rem]">
              <span class="text-[#DDDDDD] text-[13px]  tracking-[0.2rem]">Kazuho Ishida<br /></span>
              <span class="text-[11px] ">石田 一帆</span>
            </div>
            <span class="text-[9px] mt-2">ショップ店員 / 24歳 / 挑戦楽器：サックス</span>
          </div>
        </div>
      </div>
      <div class="flex items-end">
        <div class="w-[160px] h-[234px] relative">
          <nuxt-img src="/images/components/narauno/narauno_pg2.webp" loading="lazy" width="140" height="210" alt="narauno_pg2" class="absolute top-0 left-0" />
          <div class="flex flex-col w-[140px] h-[110px] p-2 bg-white absolute bottom-0 right-0 shadow-lg rounded-lg">
            <div class=""><span class="text-[13px]">大人の楽器サック</span></div>
            <div class="mt-4 leading-[0.6rem]">
              <span class="text-[#DDDDDD] text-[13px]  tracking-[0.2rem]">Kazuho Ishida<br /></span>
              <span class="text-[11px] ">石田 一帆</span>
            </div>
            <span class="text-[9px] mt-2">ショップ店員 / 24歳 / 挑戦楽器：サックス</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-10">
      <AtomsPagination :currentPage="currentPage" :totalPages="totalPages" @updatePage="handlePageChange" />
    </div>

    <!-- ======= list cards ========== -->

    <div class="relative flex w-full justify-center items-center mt-6">
      <nuxt-img src="/images/narauno/naraunolistlogo1.webp" loading="lazy" width="91" height="84" alt="naraunolistlogo1" />
      <div class="absolute top-4 flex">
        <span class="text-[15px] text-center">Na-ra-uno 体験記<br /><span class="text-[19px]">人気の記事</span></span>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center mt-8 gap-2">
      <CardsNaraunoListCard1 v-for="data in cardlist1" :key="data.id" :img="data.img" :date="data.date"
        :name="data.name" :txt1="data.txt1" :txt2="data.txt2" />
    </div>

    <div class="relative flex w-full justify-center items-center my-8">
      <nuxt-img src="/images/narauno/naraunolistlogo2.webp" loading="lazy" width="60" height="92" alt="naraunolistlogo2" />
      <div class="absolute top-4 flex">
        <span class="text-[15px] text-center">Na-ra-uno 体験記<br /><span class="text-[19px]">人気のプレイヤー</span></span>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center gap-2">
      <CardsNaraunoListCard2 v-for="data in cardlist2" :key="data.id" :img="data.img" :name="data.name"
        :name_en="data.name_en" :intro="data.intro" />
    </div>
  </div>
  <div class="mt-8">
    <CardsLogCard />
  </div>
</template>