<script lang="ts" setup>
import { ref } from 'vue';

const { text, href, icondark, iconright, content } = defineProps<{
  id: number,
  text: string,
  href: string,
  icondark: string,
  iconright: string,
  content: { id: number, text: string, href: string }[],
}>();

const contentIsOpen = ref(false);

function toggleList(event: MouseEvent): void {
  event.preventDefault();
  contentIsOpen.value = !contentIsOpen.value;
}
</script>

<template>
  <li class="w-[375px]">
    <button @click="toggleList" class="w-full h-[50px]">
      <NuxtLink class="transition ease-linear text-lg" :to="href" rel="noopener noreferrer">
        <div
          class="group flex flex-row w-full h-full p-2 items-center justify-between border border-[#EEEEEE] border-t-0 hover:text-white hover:bg-gradient-to-br hover:from-[#77E5FF] hover:to-[#659AE2]">
          <div class="flex flex-row w-full pl-4 gap-2">
            <div class="w-[24px] h-[24px] flex items-center justify-center">
              <nuxt-img :src="iconright" loading="lazy" width="24" height="24" alt="icon_r1"
                class="hidden group-hover:block" />
              <nuxt-img :src="icondark" loading="lazy" width="24" height="24" alt="icon_d1"
                class="block group-hover:hidden" />
            </div>
            <span class="text-[14px]">{{ text }}</span>
          </div>
          <div>
            <nuxt-img src="/images/headlist/arrow_r.webp" loading="lazy" width="7" height="12" alt="arrow_r"
              class="hidden group-hover:block" />
            <nuxt-img src="/images/headlist/arrow_d.webp" loading="lazy" width="7" height="12" alt="arrow_d"
              class="block group-hover:hidden" />
          </div>
        </div>
      </NuxtLink>
    </button>
    <ul v-if="contentIsOpen" class="text-gray-700 w-full flex items-center flex-col">
      <AtomsListContent v-for="data in content" :key="data.id" :href="data.href" :text="data.text" />
    </ul>
  </li>
</template>