<script setup lang="ts">
import { onMounted } from "vue"
import { initTheme } from "~/composables/useTheme"

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div
    class="min-h-screen bg-primary-light text-primary-dark dark:bg-black dark:text-primary-light"
  >
    <TheHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
