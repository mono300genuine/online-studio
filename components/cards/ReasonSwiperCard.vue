<template>
  <div class="w-[240px] h-[312px] bg-white rounded-lg shadow-lg flex flex-col">
    <div class="flex flex-row items-center gap-2 px-4 py-2">
      <div class="relative w-[56px] h-[30px]">
        <nuxt-img src="/images/components/reason/swipercard/photo.webp" loading="lazy" width="30" height="30" alt="photo" class="absolute top-0 right-0" />
        <nuxt-img src="/images/components/reason/swipercard/photoicon.webp" loading="lazy" width="30" height="30" alt="photoicon" class="absolute top-0 left-0" />
      </div>
      <div>
        <div class="text-[13px]">高谷 蒼汰</div>
        <div class="text-[9px]">18分前</div>
      </div>
    </div>
    <span class="text-[10px] px-4">代官山スタジオについての感想や、コースについての評価など。代官山スタジオについての感想や、コースについての評価など。代官山…</span>
    <div>
      <nuxt-img src="/images/components/reason/swipercard/photolg.webp" loading="lazy" width="240" height="150" alt="photolg" />
    </div>
    <div class="flex flex-row items-center mx-2 border-b boder-[#DDDDDD]">
      <div class="relative w-[44px] h-[16px]">
        <nuxt-img src="/images/components/reason/swipercard/emo3.webp" loading="lazy" width="18" height="18" alt="emo3" class="absolute top-0 right-0" />
        <nuxt-img src="/images/components/reason/swipercard/emo2.webp" loading="lazy" width="18" height="18" alt="emo2" class="absolute top-0 right-[0.55rem]" />
        <nuxt-img src="/images/components/reason/swipercard/emo1.webp" loading="lazy" width="18" height="18" alt="emo1" class="absolute top-0 left-0" />
      </div>
      <div class="flex flex-row justify-between w-full p-2">
        <span class="text-[8px]">92</span>
        <span class="text-[8px]">コメント12件 シェア52件</span>
      </div>
    </div>
    <div class="flex flex-row justify-between w-full px-2 py-1">
      <div class="flex flex-row w-full items-center justify-start">
        <nuxt-img src="/images/components/reason/swipercard/icon1.webp" loading="lazy" width="16" height="15" alt="icon1" />
        <span class="text-[9px]">いいね!</span>
      </div>
      <div class="flex flex-row w-full items-center justify-center">
        <nuxt-img src="/images/components/reason/swipercard/icon2.webp" loading="lazy" width="13" height="12" alt="icon2" />
        <span class="text-[9px]">コメントする</span>
      </div>
      <div class="flex flex-row w-full items-center justify-end">
        <nuxt-img src="/images/components/reason/swipercard/icon3.webp" loading="lazy" width="15" height="15" alt="icon3" />
        <span class="text-[9px]">シェア</span>
      </div>
    </div>
  </div>
</template>