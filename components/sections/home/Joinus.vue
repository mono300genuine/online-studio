<script lang="ts" setup>

const joinuscarddata = [
  {
    id: 1,
    step: "STEP 1",
    lgtitle1: "簡易メンバー登録して、",
    lgtitle2: "入会金2,000円OFFチケットをゲット",
    smtitle1: "カンタンな登録情報を入力して、",
    smtitle2: "アカウント作成するだけ！"
  },
  {
    id: 1,
    step: "STEP 2",
    lgtitle1: "豊富なジャンルから、",
    lgtitle2: "気になるコースを予約",
    smtitle1: "音楽・ワイン・茶道・陶芸…",
    smtitle2: "お好きなジャンルを自由にチョイス！"
  },
  {
    id: 1,
    step: "STEP 3",
    lgtitle1: "オンラインで気軽に",
    lgtitle2: "レッスンを受講",
    smtitle1: "レッスン開始5分前に",
    smtitle2: "入室ボタンを選択してスタート！"
  },
]

</script>

<template>
  <div class="pt-[65px] relative flex flex-col items-center">
    <div class="text-[24px] z-10 mb-6">
      EYS air の始め方
    </div>
    <div class="flex flex-row justify-center w-full mt-2">
      <div class="text-[32px] text-center text-weight-4">\</div>
      <div class="text-[16px] text-center mx-2">お申し込み〜利用までは、<br />カンタン3STEP！</div>
      <div class="text-[32px] text-center text-weight-4">/</div>
    </div>
    <div class="absolute top-[-70px] right-[-57px]">
      <div class="relative">
        <nuxt-img src="/images/joinus/joinusbg●.webp" loading="lazy" width="300" height="300" alt="joinusbg●" />
      </div>
    </div>
    <div class="absolute top-[55px] right-1 z-0">
      <nuxt-img src="/images/joinus/joinus.webp" loading="lazy" width="261" height="48" alt="joinus" />
    </div>
    <div class="absolute top-[102px] left-[-35px]">
      <nuxt-img src="/images/joinus/joinusbg○.webp" loading="lazy" width="120" height="120" alt="joinusbg○" />
    </div>
    <div class="absolute -bottom-8 right-1">
      <nuxt-img src="/images/joinus/joinusbg○1.webp" loading="lazy" width="70" height="70" alt="joinusbg○1" />
    </div>

    <div class="flex flex-col justity-center mt-4 gap-2">
      <CardsJoinusCard v-for="data in joinuscarddata" :key="data.id" :step="data.step" :lgtitle1="data.lgtitle1"
        :lgtitle2="data.lgtitle2" :smtitle1="data.smtitle1" :smtitle2="data.smtitle2" />
    </div>
  </div>
</template>