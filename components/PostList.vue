<script setup lang="ts">
const posts = ref([
  {
    title: "How to Use the Variant Props Pattern in Vue",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
  {
    title: "What is Local-first Web Development?",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
  {
    title:
      "How to Use SQLite in Vue 3: Complete Guide to Offline-First Web Apps",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
  {
    title: "How to Use the Variant Props Pattern in Vue",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
  {
    title: "What is Local-first Web Development?",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
  {
    title:
      "How to Use SQLite in Vue 3: Complete Guide to Offline-First Web Apps",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
  {
    title: "How to Use the Variant Props Pattern in Vue",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
  {
    title: "What is Local-first Web Development?",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
  {
    title:
      "How to Use SQLite in Vue 3: Complete Guide to Offline-First Web Apps",
    description:
      "Learn how to create type-safe Vue components where prop types depend on other props using TypeScript discriminated unions. A practical guide with real-world examples.",
    content: "",
    date: "Dec 15, 2024",
  },
])
</script>

<template>
  <ul class="flex flex-col gap-10 py-10">
    <li v-for="post in posts" :key="post.title">
      <h3
        class="mb-1 text-lg font-medium transition-colors duration-100 hover:text-primary-green dark:hover:text-primary-light dark:text-primary-green"
      >
        <NuxtLink :to="post.title">
          {{ post.title }}
        </NuxtLink>
      </h3>
      <p class="mb-1">{{ post.description }}</p>
      <NuxtLink
        :to="post.title"
        class="transition-colors duration-100 hover:text-primary-green dark:hover:text-primary-light dark:text-primary-green"
        >Read More</NuxtLink
      >
    </li>
  </ul>
</template>
