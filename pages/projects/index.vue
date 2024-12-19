<script setup lang="ts">
import { useImage } from "~/composables/useImage"

const projects = [
  {
    title: "NamMQI",
    description: "Namangan Muhandislik Qurilish Instituti",
    link: "https://nammqi-v2.netlify.app/",
    icon: "/images/1.png",
  },
  {
    title: "NamMQI Schedule",
    description: "Dars jadvali",
    link: "https://nammqi-schedule.netlify.app/",
    icon: "/images/2.png",
  },
  {
    title: "Teamly.uz",
    description: "Shaping Digital Dreams",
    link: "https://teamly.netlify.app/",
    icon: "/images/3.png",
  },
  {
    title: "Uz Pharm Forum",
    description:
      "This project for improve my coding and problem solving skills.",
    link: "https://akramjon-uzpharm.netlify.app/",
    icon: "/images/4.png",
  },
]
</script>

<template>
  <AppContainer>
    <AppBreadcrump bread-crump="Projects" />
    <SharedHero
      title="Projects 📂"
      content="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of."
    />
    <ul class="flex flex-col gap-5 py-10">
      <li v-for="project in projects" class="mb-5">
        <a
          :href="project.link"
          target="_blank"
          class="flex items-end justify-between group"
        >
          <div class="max-w-lg">
            <h3
              class="group-hover:text-primary-green transition-colors duration-100"
            >
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ project.description }}
            </p>
          </div>
          <div
            class="flex-1 mx-5 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
          ></div>
          <div>
            <img width="50" :src="project.icon" alt="" format="webp" />
          </div>
        </a>
      </li>
    </ul>
  </AppContainer>
</template>
