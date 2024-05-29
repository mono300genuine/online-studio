<script lang="ts" setup>

</script>
<template>
  <div class="usercountcard bg-white rounded-md shadow-lg px-[10px] items-center relative">
    <span class="text-[13px] mt-4 text-center text-wider">EYS air は全国68,000人が通う<br />オンライン総合芸術スクールです！</span>
    <span class="block border-t border-[#999999] w-[15%] mt-4"></span>
    <span class="mt-4 text-[13px] border-b-4 border-[#77CCFF] rounded-b-md text-center">
      会員数約<strong class="text-[40px] text-[#77CCFF]">68,000</strong><strong
        class="text-[20px] text-[#77CCFF]">人</strong> の支持
    </span>
    <div class="mt-4 flex flex-row">
      <div class="flex flex-col justify-between text-[#999999] text-[10px] p-1">
        <span>2022</span>
        <span>2009</span>
      </div>
      <div class="relative">
        <nuxt-img src="/images/components/new/usercountcardstack.webp" loading="lazy" width="264" height="200" alt="usercountcardstack"/>
        <span class="absolute bottom-[16px] right-[20px] text-[13px] text-white text-center">
          約<strong class="text-[24px]">68,000</strong>人<br />
          2022現在
        </span>
      </div>
    </div>
    <span class="text-[12px] mt-4">オンラインレッスンを独自の視点で再構築し、立ち上げ依頼、圧倒的な会員数の伸びを誇っています。</span>
  </div>
</template>