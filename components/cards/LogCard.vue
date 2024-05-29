<script lang="ts" setup>

</script>
<template>
  <div class="logcard m-2 mt-4 rounded-md gap-[0.375rem] shadow-lg z-10 pb-1">
    <div class="logcard-topbar text-white w-full px-2">
      <div><strong class="text-[14px]">12/14</strong><strong class="text-[13px]"> 23:59</strong><span
          class="text-[12px]"> まで</span></div>
      <div class="bg-white text-red-400 rounded-md px-4 my-2 text-[16px]">本日締切</div>
      <div><span class="text-[12px]">残り </span><strong class="text-[13px]">10</strong><span
          class="text-[12px]">時間</span><strong class="text-[13px]">42</strong><span class="text-[12px]">分</span><strong
          class="text-[13px]">38</strong><span class="text-[12px]">秒</span></div>
    </div>
    <div>今だけキャンペーン中！</div>
    <div class="relative w-[338px] h-[110px]">
      <div class="absolute top-0 left-0">
        <nuxt-img src="/images/components/logcard/logcardset.webp" loading="lazy" width="338" height="110"
          alt="logcardset" />
      </div>
      <span class="text-white text-[18px] absolute top-[4px] left-[24px]">今なら</span>
      <span class="text-white text-[34px] absolute top-[28px] left-[85px]"><strong>2,000</strong></span>
      <span class="text-white text-[18px] absolute top-[42px] left-[186px]">円OFFチケット</span>
      <span class="text-white text-[18px] absolute right-[18px] bottom-[3px]">プレゼント！</span>
      <nuxt-img src="/images/components/logcard/ticket.webp" alt="ticket" loading="lazy" width="46" height="40"
        class="absolute left-[33px] top-[36px]" />
    </div>

    <NuxtLink to="/" rel="preload" class="w-[335px] h-[60px] mx-[0.375rem] bg-black flex flex-row justify-between px-4 items-center text-white rounded-md z-10">
      <nuxt-img src="/images/components/logcard/logcardusericon.webp" loading="lazy" width="23" height="30" alt="logcardsericon" />
      <div class="flex items-center flex-col ml-2">
        <span class="text-[12px] text-red-400">簡易メンバー登録して</span>
        <span class="text-[22px] tracking-wider">2,000円をGET</span>
      </div>
      <svg width="22.137" height="9.466" viewBox="0 0 22.137 9.466">
        <path d="M0,7.719H19.51L10.843,0" transform="translate(0 0.747)" fill="none" stroke="#fff" stroke-width="2" />
      </svg>
    </NuxtLink>
    
    <NuxtLink to="/" rel="preload" class="text-[12px] mb-[0.375rem]">
      メンバーの方はログイン
    </NuxtLink>
  </div>
</template>