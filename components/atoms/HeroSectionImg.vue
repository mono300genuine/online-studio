<script lang="ts" setup>

const { title, img, txtlg, txtsm, top, left, firstcolor, endcolor } = defineProps<{
  title: string,
  img: string,
  txtlg: string,
  txtsm: string,
  top: string,
  left: string,
  firstcolor: string,
  endcolor: string
}>();

</script>

<template>
  <div :style="{ top: top, left: left }" class="absolute">
    <div class="flex justify-center items-center w-[100px] h-[136px] relative">
      <nuxt-img :src="img" loading="lazy" width="100" height="100" alt="photo1"
        class="absolute top-[13px] right-0 rounded-full shadow-lg" />
      <div class="absolute top-0 flex justify-center">
        <AtomsSkewTag class="text-white text-[12px] w-[65px] h-[25px]" :style="{
          background: `linear-gradient(to right, ${firstcolor}, ${endcolor})`
        }">{{ title }}</AtomsSkewTag>
      </div>
      <div class="absolute bottom-1 bg-black rounded-r-full rounded-l-full px-2 py-1">
        <div class="relative flex justify-center">
          <span class="text-white text-[13px] text-center leading-[0.8rem]">{{ txtlg }}<br /><span
              class="text-[10px]">{{ txtsm }}</span></span>
        </div>
      </div>
    </div>
  </div>
</template>