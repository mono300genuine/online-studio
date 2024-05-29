<script lang="ts" setup>
  const carddata = [
    {
      id:1,
      img: "/images/components/reason/step2card/lg_card_bg1.webp",
      txt1: "先生と一緒にリアルタタイムで",
      txt2: "楽譜を見ながらレッスンできます！",
      skewtxt1: "音楽に最適化した",
      skewtxt2: "オンラインシステム"
    },
    {
      id: 2,
      img: "/images/components/reason/step2card/lg_card_bg2.webp",
      txt1: "先生側も生徒側も2画面にできるから、",
      txt2: "細かな指の動きまでチェックしてもらえます！",
      skewtxt1: "手元と引きのW表示！",
      skewtxt2: "2画面で分かりやすい！"
    },
  ]
</script>

<template>
  <div class="reasoncardlg rounded-md z-10">
    <!-- ========= tag =========== -->
    <div class="flex items-center w-full absolute -top-[2.5rem] left-4 z-20">
      <div class="relative">
        <nuxt-img src="/images/components/reason/step2card/tag_lg.webp" loading="lazy" width="88" height="74" alt="tag_lg"/>
        <div class="flex items-center justify-center w-full absolute top-6">
          <span class="text-center text-black text-[20px]">でも…</span>
        </div>
      </div>
    </div>

    <!-- ======== main ============= -->

    <div class="flex flex-col items-center">
      <span class="text-center text-white text-[24px] mt-20">「オンライン」なんて、<br />何だか不安…</span>
    </div>
    <div class="flex flex-row justify-center gap-2 mt-4">
      <div class="relative">
        <nuxt-img src="/images/components/reason/step2card/msg_lg1.webp" loading="lazy" width="84" height="84" alt="msg_lg1"/>
        <div class="flex items-center justify-center w-full absolute top-3 ">
          <span class="text-center text-black text-[12px]">楽譜って<br />どうやって<br />共有する？</span>
        </div>
      </div>
      <div class="relative">
        <nuxt-img src="/images/components/reason/step2card/msg_lg2.webp" loading="lazy" width="81" height="89" alt="msg_lg2"/>
        <div class="flex items-center justify-center w-full absolute top-3 ">
          <span class="text-center text-black text-[12px]">細かな動き<br />チェック<br />できる？</span>
        </div>
      </div>
      <div class="relative">
        <nuxt-img src="/images/components/reason/step2card/msg_lg3.webp" loading="lazy" width="81" height="81" alt="msg_lg3"/>
        <div class="flex items-center justify-center w-full absolute top-3 ">
          <span class="text-center text-black text-[12px]">SNS投稿<br />投げ銭も<br />できる？</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-14">
      <nuxt-img src="/images/components/reason/step2card/title_lg.webp" loading="lazy" width="238" height="97" alt="title_lg"/>
    </div>

    <!-- ================ main/card ================= -->
    <div class="flex flex-col justify-center items-center gap-[5rem]">
      <CardsReasonCardLgCom v-for="data in carddata" :key="data.id" :img="data.img" :txt1="data.txt1" :txt2="data.txt2" :skewtxt1="data.skewtxt1" :skewtxt2="data.skewtxt2"/>
    </div>

  </div>

</template>