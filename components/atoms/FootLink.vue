<script lang="ts" setup>
const { text, href } = defineProps<
  {
    text: string,
    href: string
  }>()
</script>
<template>
  <NuxtLink :to="href" rel="preload">
    <div class="flex flex-row w-full items-center gap-2 mt-2 justify-center">
      <nuxt-img src="/images/foot/arrow.webp" loading="lazy" width="14" height="6" alt="arrow" class="h-[5px] w-[12.6px]" />
      <span class="text-[11px]">{{ text }}</span>
    </div>
  </NuxtLink>
</template>