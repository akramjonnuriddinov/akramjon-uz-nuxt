<script setup lang="ts">
import { onMounted } from "vue"
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
    <TheHeader />
    <NuxtPage class="flex-grow" />
    <AppFooter />
  </div>
</template>
