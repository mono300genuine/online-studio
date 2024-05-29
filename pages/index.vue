<script setup lang="ts">
useHead({
  title: 'Podux - Home',
  meta: [
    { name: 'description', content: 'Podux Podcast landing page website.' },
  ],
  htmlAttrs: {
    lang: 'ja' 
  },
  link: [
    { rel: 'icon', as: 'image', type: 'image/png', href: '/logo.webp' },
    {
      rel: 'preload',
      as: 'style',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap',
    },
  ],
})
</script>
<template>
  <div class="main-container">
    <SectionsHomeMoveTopButton/>
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