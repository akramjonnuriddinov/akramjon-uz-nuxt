<script setup lang="ts">
const posts = ref([
  {
    id: "1",
    title: "Building Your First API with Express.js: A Beginner's Guide",
    description:
      "A beginner-friendly guide to building your first API with Express.js",
    date: "Dec 20, 2024",
  },
  {
    id: "2",
    title: "How to convert a SVG to PNG using Canvas",
    description: "A simple way to convert a SVG to PNG using Canvas",
    date: "Dec 15, 2024",
  },
  {
    id: "3",
    title: "Creating a CRUD API with Golang",
    description: "Learn how to build a CRUD API with Golang using Gin and GORM",
    date: "Dec 21, 2024",
  },
  {
    id: "4",
    title: "Vue.js va Go(Golang) yordamida Full-Stack Web Ilova Qurish",
    description:
      "Bugungi kunda zamonaviy web ilovalar yaratish uchun frontend va backend texnologiyalarining uyg‘un ishlashi muhim ahamiyatga ega.",
    date: "Dec 22, 2024",
  },
  {
    id: "5",
    title: "Golang CRUD API",
    description: "Creating CRUD API in Golang full",
    date: "Dec 22, 2024",
  },
  {
    id: "6",
    title: "How to use Markdown (.md) files",
    description:
      "Markdown is a lightweight markup language used to format plain text",
    date: "Dec 22, 2024",
  },
])
</script>

<template>
  <ul class="flex flex-col gap-10 py-10">
    <li v-for="post in posts" :key="post.title">
      <h3
        class="mb-1 text-lg font-medium transition-colors duration-100 hover:text-primary-green dark:hover:text-primary-light dark:text-primary-green"
      >
        <NuxtLink
          :to="{
            name: 'posts-slug',
            params: {
              slug: post.id,
            },
          }"
        >
          {{ post.title }}
        </NuxtLink>
      </h3>
      <p class="mb-1">{{ post.description }}</p>
      <NuxtLink
        :to="{
          name: 'posts-slug',
          params: {
            slug: post.id,
          },
        }"
        class="transition-colors duration-100 hover:text-primary-green dark:hover:text-primary-light dark:text-primary-green"
        >Read More</NuxtLink
      >
    </li>
  </ul>
</template>
