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
  <section class="py-10">
    <AppContainer>
      <h1 class="mb-1 text-4xl font-semibold">Posts</h1>
      <p class="italic">All the articles I've posted.</p>
      <ul class="flex flex-col gap-10 py-10">
        <li v-for="post in posts" :key="post.title">
          <h3 class="mb-1 text-lg font-medium text-primary-green">
            <NuxtLink :to="post.title">
              {{ post.title }}
            </NuxtLink>
          </h3>
          <p class="mb-1">{{ post.description }}</p>
          <NuxtLink :to="post.title" class="text-primary-green"
            >Read More</NuxtLink
          >
        </li>
      </ul>
      <div class="flex items-center justify-center gap-2">
        <IconsLeft class="w-4" />
        <NuxtLink to="/" class="">Prev</NuxtLink>
        <span class="mx-5">1 / 5</span>
        <NuxtLink to="/">Next</NuxtLink>
        <IconsRight class="w-4" />
      </div>
    </AppContainer>
  </section>
</template>
