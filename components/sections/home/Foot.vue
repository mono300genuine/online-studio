<script lang="ts" setup>
const footlist = [
  {
    id:1,
    href: "/",
    text: "フッタリンク小"
  },
  {
    id:2,
    href: "/",
    text: "フッタリンク小"
  },
  {
    id:3,
    href: "/",
    text: "フッタリンク小"
  },
  {
    id:4,
    href: "/",
    text: "フッタリンク小"
  },
]
</script>

<template>
  <div class="flex flex-col bg-black w-[375px] h-[770px] mt-16 items-center">
    <NuxtLink to="/" rel="noopener noreferrer">
      <div class="mt-[36px]">
        <nuxt-img src="/images/foot/logo.webp" loading="lazy" width="141" height="80" alt="logo" />
      </div>
    </NuxtLink>
    <span class="text-white text-[10px] text-center mt-[39px]">クレイジー特典満載！<br /></span>
    <span class="text-white text-[18px] text-center">EYSが提供する<br /></span>
    <span class="text-white text-[18px]">オンラインアカデミー</span>
    <div class="flex flex-wrap text-white gap-2 items-center justify-center mt-[32px]">
      <div class="flex flex-col w-[125px] h-[145px] items-center">
        <span class="text-[12px]">フッタリンク大</span>
        <AtomsFootLink v-for="data in footlist" :key="data.id" :href="data.href" :text="data.text"/>
      </div>
      <div class="flex flex-col w-[125px] h-[145px] items-center">
        <span class="text-[12px]">フッタリンク大</span>
        <AtomsFootLink v-for="data in footlist" :key="data.id" :href="data.href" :text="data.text"/>
      </div>
      <div class="flex flex-col w-[125px] h-[145px] items-center">
        <span class="text-[12px]">フッタリンク大</span>
        <AtomsFootLink v-for="data in footlist" :key="data.id" :href="data.href" :text="data.text"/>
      </div>
      <div class="flex flex-col w-[125px] h-[145px] items-center">
        <span class="text-[12px]">フッタリンク大</span>
        <AtomsFootLink v-for="data in footlist" :key="data.id" :href="data.href" :text="data.text"/>
      </div>

    </div>
    <span class="text-white text-[8px] text-center mt-[63px] tracking-[0.1rem]">©2nd Community inc. All rights
      reserved.<br /></span>
  </div>
</template>