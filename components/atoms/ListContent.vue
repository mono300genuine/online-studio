<script lang="ts" setup>
const { text, href } = defineProps<{
  text: string,
  href: string,
}>();
</script>

<template>
  <li class="w-[375px] h-[40px] bg-[#F9F9F9]">
    <NuxtLink class="transition ease-linear text-lg" :to="href" rel="noopener noreferrer">
      <div
        class="group flex flex-row w-full h-full p-2 items-center justify-between border border-[#EEEEEE] border-t-0 hover:text-white hover:bg-gradient-to-br hover:from-[#77E5FF] hover:to-[#659AE2]">
        <div class="flex flex-row w-full pl-8 gap-2">
          <div class="w-[10px] h-[10px] flex items-center justify-center">
            <nuxt-img src="/images/headlist/listcontenticon.webp" loading="lazy" width="10" height="10" alt="icon_r1"
              class="hidden group-hover:block" />
            <nuxt-img src="/images/headlist/listcontenticon.webp" loading="lazy" width="10" height="10" alt="icon_d1"
              class="block group-hover:hidden" />
          </div>
          <span class="text-[12px]">{{ text }}</span>
        </div>
        <div>
          <nuxt-img src="/images/headlist/arrow_r.webp" loading="lazy" width="7" height="12" alt="arrow_r"
            class="hidden group-hover:block" />
          <nuxt-img src="/images/headlist/arrow_d.webp" loading="lazy" width="7" height="12" alt="arrow_d"
            class="block group-hover:hidden" />
        </div>
      </div>
    </NuxtLink>
  </li>
</template>
