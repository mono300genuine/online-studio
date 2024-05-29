<script lang="ts" setup>
import { ref } from 'vue';
const navIsOpen = useState('navIsOpen', () => false);
const selectedNavItem = ref('');

function toggleNav(event: MouseEvent): void {
  event.preventDefault();
  navIsOpen.value = !navIsOpen.value;
}


const selectNavItem = (item: string) => {
  selectedNavItem.value = item;
};

const navLinks = [
  {
    id: 1,
    text: "トップ",
    href: "/",
    icondark: "/images/headlist/icon_d1.webp",
    iconright: "/images/headlist/icon_r1.webp",
  },
  {
    id: 2,
    text: "スク婚",
    href: "/",
    icondark: "/images/headlist/icon_d2.webp",
    iconright: "/images/headlist/icon_r2.webp",
  },
  {
    id: 3,
    text: "コミュニティ",
    href: "/",
    icondark: "/images/headlist/icon_d3.webp",
    iconright: "/images/headlist/icon_r3.webp"
  },
  {
    id: 4,
    text: "イベント",
    href: "/",
    icondark: "/images/headlist/icon_d4.webp",
    iconright: "/images/headlist/icon_r4.webp"
  },
  {
    id: 5,
    text: "パフォーマンス",
    href: "/",
    icondark: "/images/headlist/icon_d5.webp",
    iconright: "/images/headlist/icon_r5.webp"
  },
  {
    id: 6,
    text: "ワークショップ",
    href: "/",
    icondark: "/images/headlist/icon_d6.webp",
    iconright: "/images/headlist/icon_r6.webp"
  },
  {
    id: 7,
    text: "音楽",
    href: "/",
    icondark: "/images/headlist/icon_d7.webp",
    iconright: "/images/headlist/icon_r7.webp",
    content: [
      {
        id: 1,
        text: "音楽トップ",
        href: "/"
      },
      {
        id: 2,
        text: "初めての方へ",
        href: "/"
      },
      {
        id: 3,
        text: "コース一覧",
        href: "/"
      },
      {
        id: 4,
        text: "料金/システム",
        href: "/"
      },
      {
        id: 5,
        text: "楽器プレゼント",
        href: "/"
      },
      {
        id: 6,
        text: "Q&A",
        href: "/"
      },
      {
        id: 7,
        text: "講師募集",
        href: "/"
      },
    ]
  },
  {
    id: 8,
    text: "ワイン",
    href: "/",
    icondark: "/images/headlist/icon_d8.webp",
    iconright: "/images/headlist/icon_r8.webp",
    content: [
      {
        id: 1,
        text: "ワイントップ",
        href: "/"
      },
      {
        id: 2,
        text: "初めての方へ",
        href: "/"
      },
      {
        id: 3,
        text: "料金/システム",
        href: "/"
      },
      {
        id: 4,
        text: "ワイングラスプレゼント",
        href: "/"
      },
      {
        id: 5,
        text: "Q&A",
        href: "/"
      },
      {
        id: 6,
        text: "講師募集",
        href: "/"
      },
    ]
  },
  {
    id: 9,
    text: "茶道",
    href: "/",
    icondark: "/images/headlist/icon_d9.webp",
    iconright: "/images/headlist/icon_r9.webp",
    content: [
      {
        id: 1,
        text: "茶道トップ",
        href: "/"
      },
      {
        id: 2,
        text: "初めての方へ",
        href: "/"
      },
      {
        id: 3,
        text: "料金/システム",
        href: "/"
      },
      {
        id: 4,
        text: "茶釜・畳プレゼント",
        href: "/"
      },
      {
        id: 5,
        text: "Q&A",
        href: "/"
      },
      {
        id: 6,
        text: "講師募集",
        href: "/"
      },
    ]
  },
  {
    id: 10,
    text: "陶芸",
    href: "/",
    icondark: "/images/headlist/icon_d10.webp",
    iconright: "/images/headlist/icon_r10.webp",
    action: "toggleList",
    content: [
      {
        id: 1,
        text: "陶芸トップ",
        href: "/"
      },
      {
        id: 2,
        text: "初めての方へ",
        href: "/"
      },
      {
        id: 3,
        text: "料金/システム",
        href: "/"
      },
      {
        id: 4,
        text: "焼き窯プレゼント",
        href: "/"
      },
      {
        id: 5,
        text: "Q&A",
        href: "/"
      },
      {
        id: 6,
        text: "講師募集",
        href: "/"
      },
    ]
  }
  // Other nav items
];

</script>


<style scoped>
.selected::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 23px;
  right: 0;
  height: 3px;
  width: 30px;
  background-color: #000; /* Change this color to your desired highlight color */
}
</style>

<template>
  <header class="container header top-0 z-50 ">
    <div class="border-b border-gray-200">
      <div class="flex items-center justify-between w-full relative">
        <div class="flex justify-between h-[50px] w-full px-3">
          <NuxtLink to="/" rel="preload" class="flex items-center">
            <nuxt-img src="/logo.webp" loading="lazy" width="139" height="33" alt="Logo" />
            <span class="text-[8px] ml-1 text-gray-700 dark:text-white">オンラインアカデミー</span>
          </NuxtLink>
          <button @click="toggleNav" class="outline-none w-7 h-auto flex flex-col justify-center relative">
            <span class="w-6 h-0.5 rounded-full bg-gray-500 transition-all duration-300 ease-linear"
              :class="navIsOpen ? 'translate-y-1.5 rotate-[40deg] scale-x-100 ' : ' scale-x-100 origin-left'"></span>
            <span class="w-6 mt-2 h-0.5 rounded-full bg-gray-500 transition-all duration-300 ease-linear"
              :class="navIsOpen ? '-translate-y-1.5 -rotate-[40deg] scale-x-100 ' : ' scale-x-100 origin-left'"></span>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-between py-3 text-[13px]">
        <NuxtLink 
          to="/" rel="preload" 
          class="w-1/5 flex justify-center items-center border-r border-gray-200 relative"
          :class="selectedNavItem === 'home' ? 'selected' : ''"
          @click="selectNavItem('home')">
          <nuxt-img src="/icons/icon_home.webp" loading="lazy" width="15" height="16" alt="Home" />
        </NuxtLink>
        <NuxtLink 
          to="/" rel="preload" 
          class="w-1/5 text-center border-r border-gray-200 relative"
          :class="selectedNavItem === 'music' ? 'selected' : ''"
          @click="selectNavItem('music')">
          音楽
        </NuxtLink>
        <NuxtLink 
          to="/" rel="preload" 
          class="w-1/5 text-center border-r border-gray-200 relative"
          :class="selectedNavItem === 'wine' ? 'selected' : ''"
          @click="selectNavItem('wine')">
          ワイン
        </NuxtLink>
        <NuxtLink 
          to="/" rel="preload" 
          class="w-1/5 text-center border-r border-gray-200 relative"
          :class="selectedNavItem === 'tea' ? 'selected' : ''"
          @click="selectNavItem('tea')">
          茶道
        </NuxtLink>
        <NuxtLink 
          to="/" rel="preload" 
          class="w-1/5 text-center border-gray-200 relative"
          :class="selectedNavItem === 'ceramics' ? 'selected' : ''"
          @click="selectNavItem('ceramics')">
          陶芸
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-center h-full">
      <div v-if="navIsOpen" class="nav_menu duration-300 bg-gradient-to-br from-[#29292b] to-[#232f33]/90">
        <div class="flex justify-between h-[50px] bg-[#4A4A4A] px-3">
          <div class="flex items-center">
            <nuxt-img src="/images/headlist/logo_air.webp" loading="lazy" width="139" height="33" alt="Logo" />
            <span class="text-white ml-1 text-[8px]">オンラインアカデミー</span>
          </div>
          <button @click="toggleNav" class="outline-none flex relative items-center pr-2">
            <nuxt-img src="/images/headlist/menu_close.webp" loading="lazy" width="15" height="15" alt="menu_close" />
          </button>
        </div>
        <ul v-if="navIsOpen" class="text-gray-700 w-full flex items-center flex-col bg-white">
          <AtomsMenuList v-for="navItem in navLinks" :key="navItem.id" :href="navItem.href" :text="navItem.text"
            :icondark="navItem.icondark" :iconright="navItem.iconright" :content="navItem.content" />
        </ul>
      </div>
    </div>
  </header>
</template>

