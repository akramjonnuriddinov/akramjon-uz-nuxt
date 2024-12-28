<script setup lang="ts">
import { initTheme } from "~/composables/useTheme"

const router = useRouter()

const handleKeydown = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "k") {
    event.preventDefault()
    router.push({ name: "search" })
  }
}

onMounted(() => {
  initTheme()
  window.addEventListener("keydown", handleKeydown)
})

onBeforeMount(() => {
  window.removeEventListener("keydown", handleKeydown)
})
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light"
  >
    <LayoutHeader />
    <NuxtPage class="flex-grow" />
    <LayoutFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
