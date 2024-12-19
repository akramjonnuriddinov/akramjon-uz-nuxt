<script setup lang="ts">
useSeoMeta({
  title: "Akramjon Nuriddinov | Vue.js developer",
  ogTitle: "Akramjon Nuriddinov | Vue.js developer",
  description: "About Me | Frontend Developer with Vue.js and Nuxt Expertise",
  ogDescription: "About Me | Frontend Developer with Vue.js and Nuxt Expertise",
  ogImage:
    "https://pbs.twimg.com/profile_images/1696835964881002498/0YEYRNGF_400x400.png",
  twitterCard: "summary_large_image",
  keywords:
    "Vue.js developer, Nuxt.js developer, frontend developer, Tailwind CSS expert, web developer portfolio",
})
</script>

<template>
  <AppHero />
  <LatestPost />
  <AppCategories />
  <NuxtRouteAnnouncer />
  <!-- <NuxtWelcome /> -->
</template>
