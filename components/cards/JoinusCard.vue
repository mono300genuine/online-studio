<script lang="ts" setup>
const { step, lgtitle1, lgtitle2, smtitle1, smtitle2 } = defineProps<
  {
    step: string,
    lgtitle1: string,
    lgtitle2: string,
    smtitle1: string,
    smtitle2: string
  }>()

</script>

<template>
  <div class="flex flex-col items-center w-[335px] h-[400px] rounded-lg shadow-lg bg-white relative z-10">
    <span class="text-[20px] text-[#55CCAA] mt-4 italic">{{ step }}</span>
    <span class="text-[13px] mt-4 text-center text-wider">{{ lgtitle1 }}<br />{{ lgtitle2 }}</span>
    <span class="block border-t border-[#999999] w-[15%] mt-4 "></span>
    <span class="text-[12px] mt-4 text-center text-wider">{{ smtitle1 }}<br />{{ smtitle2 }}</span>
    <div class="h-[203px] w-[140px] rounded-t-lg bg-white shadow-lg mt-6 flex justify-center items-end">
      <div class="h-[196px] w-[128px] rounded-t-lg bg-[#CCCCCC] shadow-lg mt-6">

      </div>
    </div>
  </div>
</template>