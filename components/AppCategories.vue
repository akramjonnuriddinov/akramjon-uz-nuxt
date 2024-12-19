<script setup lang="ts">
const categories = [
  "accessibility",
  "ai",
  "architecture",
  "Astro",
  "book-summary",
  "Excalidraw",
  "local-first",
  "Offline-Apps",
  "productivity",
  "PWA",
  "SQLite",
  "testing",
  "typescript",
  "Vite",
  "Vitest",
  "vue",
  "WebAssembly",
]
</script>

<template>
  <section class="pb-10">
    <AppContainer>
      <h2 class="text-2xl font-semibold mb-2">🏷️ Categories</h2>
      <ul class="flex flex-wrap gap-3">
        <li
          v-for="category in categories"
          :key="category"
          class="bg-primary-green text-white font-bold px-3 py-1 rounded-full"
        >
          <NuxtLink :to="`/tags/${category}`" class="whitespace-nowrap">{{
            category
          }}</NuxtLink>
        </li>
      </ul>
    </AppContainer>
  </section>
</template>
