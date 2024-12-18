<script setup lang="ts">
const posts = [
  {
    title: "How to Use the Variant Props Pattern in Vue",
    path: "",
    date: "12/15/2024",
  },
  {
    title: "What is Local-first Web Development?",
    path: "",
    date: "12/15/2024",
  },
  {
    title:
      "How to Use SQLite in Vue 3: Complete Guide to Offline-First Web Apps",
    path: "",
    date: "12/15/2024",
  },
  {
    title: "How to Test Vue Composables: A Comprehensive Guide with Vitest",
    path: "",
    date: "12/15/2024",
  },
  {
    title:
      "Create Dark Mode-Compatible Technical Diagrams in Astro with Excalidraw: A Complete Guide",
    path: "",
    date: "12/15/2024",
  },
  {
    title: "Frontend Testing Guide: 10 Essential Rules for Naming Tests",
    path: "",
    date: "12/15/2024",
  },
  {
    title: "Create a Native-Like App in 4 Steps: PWA Magic with Vue 3 and Vite",
    path: "",
    date: "12/15/2024",
  },
  {
    title: "How to Structure Vue Projects",
    path: "",
    date: "12/15/2024",
  },
  {
    title:
      "Atomic Architecture: Revolutionizing Vue and Nuxt Project Structure",
    path: "",
    date: "12/15/2024",
  },
  {
    title: "Bolt Your Presentations: AI-Powered Slides",
    path: "",
    date: "12/15/2024",
  },
]
</script>

<template>
  <section class="text-primary-light">
    <AppContainer>
      <h2 class="text-2xl font-semibold mb-2">📝 Latest Posts</h2>

      <ul class="flex flex-col mb-4">
        <li
          v-for="post in posts"
          :key="post.title"
          class="border-b pb-10 pt-4 transition-all duration-100 group font-medium hover:opacity-80 last:border-none"
        >
          <RouterLink :to="post.path" class="flex items-center justify-between">
            <span>{{ post.title }}</span>
            <div class="w-4 opacity-0 group-hover:opacity-100 transition-all">
              <IconsRight />
            </div>
          </RouterLink>
        </li>
      </ul>
      <div
        class="flex justify-center transition-opacity duration-100 hover:opacity-80"
      >
        <RouterLink to="/posts" class="flex items-center gap-2"
          >📚 All Posts
          <IconsRight class="w-4" />
        </RouterLink>
      </div>
    </AppContainer>
  </section>
</template>
