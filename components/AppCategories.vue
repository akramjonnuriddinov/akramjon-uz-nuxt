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
    <h2 class="mb-2 text-2xl font-semibold">🏷️ Categories</h2>
    <ul class="flex flex-wrap gap-3">
      <li
        v-for="category in categories"
        :key="category"
        class="px-3 py-1 font-bold text-white rounded-full bg-primary-green selection:bg-transparent selection:text-white"
      >
        <NuxtLink :to="`/tags/${category}`" class="whitespace-nowrap">{{
          category
        }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
