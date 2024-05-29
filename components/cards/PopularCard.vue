<script lang="ts" setup>

</script>
<template>
  <div class="popularcard bg-white rounded-md shadow-lg relative">
    <nuxt-img src="/images/components/popular/popularcardbg.webp" loading="lazy" width="235" height="156" alt="popularcardbg" />
    <button><nuxt-img src="/images/components/love.webp" loading="lazy" width="58" height="58" alt="lovebutton" class="absolute top-0 right-0" /></button>
    <nuxt-img src="/images/components/popular/bgtag.webp" loading="lazy" width="113" height="111" alt="bgtag" class="absolute top-[35px] left[61px]"/>
    <div class="absolute popularcardtag top-[10px] left-[-10px] w-[46px] h-[24px] flex items-center justify-center">
      <span class="text-[10px] text-white">音楽</span>
    </div>
    <div class="flex flex-row p-2 gap-2">
      <div class="flex flex-col gap-1">
        <span class="text-[10px]">ジャンル </span>
        <span class="text-[10px]">コース </span>
        <span class="text-[10px]">費用 </span>
        <span class="text-[10px]">回数 </span>
        <span class="text-[10px]">期間 </span>
        <span class="text-[10px]">開催方法 </span>
        <span class="text-[10px]">定員 </span>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-[10px]"> : </span>
        <span class="text-[10px]"> : </span>
        <span class="text-[10px]"> : </span>
        <span class="text-[10px]"> : </span>
        <span class="text-[10px]"> : </span>
        <span class="text-[10px]"> : </span>
        <span class="text-[10px]"> : </span>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-[10px]">音楽</span>
        <span class="text-[10px]">初心者コース </span>
        <span class="text-[10px]">13,800円/月 </span>
        <span class="text-[10px]">回数の定めなし </span>
        <span class="text-[10px]">2020/9/1~ </span>
        <div class="text-[10px]"><span
            class="bg-gradient-to-br from-[#7799FF] to-[#77DDFF] px-2 py-1 rounded-[10px] mr-1">ライブ配信 </span><span
            class="bg-[#CCCCCC] px-2 py-1 rounded-[10px]">動画見逃し配信</span></div>
        <span class="text-[10px]">定員 10名 / <span class="text-[#FF6600]">残席数 3名 </span></span>
      </div>
    </div>
    <div class="w-[215px] h-[72px] flex flex-col border border-gray-300 bg-[#FFEEEE]/20">
      <div class="bg-gradient-to-br from-[#FFBB55] to-[#FFCCBB] w-full text-center text-[12px] py-[5px]">クレイジー特典</div>
      <div class="flex flex-row p-2 items-center">
        <nuxt-img src="/images/components/popular/popularcardset1.webp" loading="lazy" width="40" height="40" alt="popularcardset1" />
        <span class="text-[12px] px-2 text-[#FFBB55]">サックスプレゼント</span>
      </div>
    </div>
    <div class="flex relative h-[30px] w-[196px] justify-end items-center my-2">
      <span class="text-[#7799FF] text-[10px] text-center">…12名が担当</span>
      <div class="absolute top-0 left-0">
        <nuxt-img class="rounded-full shadow-lg" src="/images/components/popular/photo1.webp" loading="lazy" width="30" height="30" alt="photo1" />
      </div>
      <div class="absolute top-0 left-6">
        <nuxt-img class="rounded-full shadow-lg" src="/images/components/popular/photo2.webp" loading="lazy" width="30" height="30" alt="photo2" />
      </div>
      <div class="absolute top-0 left-[3rem]">
        <nuxt-img class="rounded-full shadow-lg" src="/images/components/popular/photo3.webp" loading="lazy" width="30" height="30" alt="photo3" />
      </div>
      <div class="absolute top-0 left-[4.5rem]">
        <nuxt-img class="rounded-full shadow-lg" src="/images/components/popular/photo4.webp" loading="lazy" width="30" height="30" alt="photo4" />
      </div>
      <div class="absolute top-0 left-[6rem]">
        <nuxt-img class="rounded-full shadow-lg" src="/images/components/popular/photo5.webp" loading="lazy" width="30" height="30" alt="photo5" />
      </div>
    </div>
    <nuxt-img src="/images/components/popular/popularcardreview.webp" loading="lazy" width="235" height="236" alt="popularcardreview" />

    <AtomsLinkButton class="p-2 w-[225px] h-[30px] text-[12px]">詳しく見る</AtomsLinkButton>
  </div>
</template>