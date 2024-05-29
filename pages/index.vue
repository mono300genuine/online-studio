<script setup lang="ts">
useHead({
  title: 'Podux - Home',
  // htmlAttrs: {
  //   lang: 'ja' 
  // },

  // meta: [
  //   { name: 'description',content: 'Podux Podcast landing page website.' },
  // ],
  // link: [
  //   { rel: 'icon', type: 'image/png', href: '/logo.webp' },
  //   {
  //     rel: 'preload',
  //     as: 'style',
  //     href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap',
  //   },
  // ],
})
</script>
<template>
  <div>
    <SectionsHomeHero />
    <CardsLogCard />
    <SectionsHomeNews />
    <SectionsHomePopular />
    <SectionsHomeLineup />
    <SectionsHomeReason />
    <SectionsHomeJoinus />
    <SectionsHomeNaraUno />
    <SectionsHomeCommunity />
    <SectionsHomeFoot />
  </div>
</template>