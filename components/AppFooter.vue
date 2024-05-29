<template>
  <footer class="footercontainer  container bg-black/30 bottom-0 z-50 p-1">
    <div class="flex flex-row justify-center items-center h-[40px] w-[48%] bg-white text-black rounded-md">
      <nuxt-img src="/icons/freedial.webp" loading="lazy" width="28" height="18" alt="freedial" />
        <span class="text-[8px] ml-[7px]">
          <NuxtLink to="tel:0120-978-900" rel="preload">
            <strong class="text-[14px]">
              0120-978-900
            </strong><br />
          </NuxtLink>
          <strong>電話受付 : 8:00~25:00</strong>
        </span>
    </div>
    <NuxtLink to="/" rel="preload"
      class="relative flex flex-row justify-between px-4 items-center h-[40px] w-[48%] bg-black text-white rounded-md">
      <div class="flex flex-row">
        <nuxt-img src="/icons/usericon.webp" loading="lazy" width="18" height="24" alt="usericon" />
        <span class="text-[14px] pl-2"><strong>2,000円をGET</strong></span>
      </div>
      <nuxt-img src="/icons/arrow.webp" loading="lazy" width="7.5" height="13" alt="arrow" />
    </NuxtLink>
    <div
      class="absolute top-[0] left-[221px] text-[#FF6E6E] text-[10px] bg-white px-2 rounded-l-full rounded-r-full z-50 ">
      簡易メンバー登録して</div>

  </footer>
</template>
