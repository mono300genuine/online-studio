<script lang="ts" setup>
const { img, txt1, txt2, skewtxt1, skewtxt2 } = defineProps<{
  img: string,
  txt1: string,
  txt2: string,
  skewtxt1: string,
  skewtxt2: string

}>();
</script>

<template>
  <div class="reasoncardlg_card rounded-md mt-[4rem]">
    <nuxt-img src="/images/components/reason/step2card/lg_card_bg1.webp" loading="lazy" width="335" height="188"
      alt="lg_card_bg1" class="rounded-lg shadow-xl" />
    <div class="flex items-center justify-center w-full absolute -top-12">
      <AtomsSkewPointedTagCol class="w-[218px] h-[69px] text-[14px] text-center text-white" firstcolor="#FF6E6E"
        endcolor="#FFBCDD" middlecolor="#FF96A7" :text1="skewtxt1" :text2="skewtxt2" />

    </div>
    <div class="flex items-center justify-center w-[355px] absolute -bottom-[4.5rem] -left-[0.7rem]">

      <div class="relative font-hiragino">
        <nuxt-img src="/images/components/reason/step2card/bottomtag.webp" loading="lazy" width="355" height="77"
          class="shadow-lg rounded-lg" alt="bottomtag"/>
        <div class="flex items-center justify-center w-full absolute top-4">
          <span class="text-center text-[14px]">{{ txt1 }}<br />{{ txt2 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>