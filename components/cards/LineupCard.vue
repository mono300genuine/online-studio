<script lang="ts" setup>
const { bg, vbg, tagtxt, buttontxt, firstcolor, endcolor } = defineProps<
  {
    bg: string,
    vbg: string,
    tagtxt: string,
    buttontxt: string,
    firstcolor: string,
    endcolor: string
  }>()

</script>
<template>
  <div class="lineupcard m-2 mt-0 mb-[46px] rounded-md gap-[0.375rem] z-10">
    <nuxt-img :src="bg" loading="lazy" width="335" height="200" alt="lineupcardbg" class="shadow-xl h-[200px]" />
    <div class="lineupcardtag absolute -top-5 left-1/3 flex justify-center items-center">
      <div class="relative w-[118px] h-[40px] flex items-center justify-center">
        <AtomsSkewTag class="text-white text-[16px] w-[110px] h-[40px] bg-gradient-to-r"
        :style="{
      background: `linear-gradient(to right, ${firstcolor}, ${endcolor})`
    }">{{ tagtxt }}
        </AtomsSkewTag>
      </div>
    </div>
    <div class="absolute bottom-0 left-[2rem] border-4 border-white rounded-lg shadow-xl">
      <nuxt-img :src="vbg" loading="lazy" width="270" height="190" alt="lineupcardv" />
    </div>
    <NuxtLink to="/" rel="preload" class="absolute bottom-4 left-[2.9rem]">
      <div
        class="relative flex justify-center items-center p-2 w-[250px] h-[40px] text-white text-[14px] border border-white bg-black/60">
        {{ buttontxt }}
        <nuxt-img class="absolute right-2 top-[30%]" src="/images/components/visitarrow.webp" loading="lazy" width="16"
          height="16" alt="vistiarrow" />
      </div>
    </NuxtLink>
  </div>

</template>