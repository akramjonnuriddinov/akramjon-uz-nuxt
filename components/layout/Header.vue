<script setup lang="ts">
import { ref } from "vue"

const links = [
  { name: "Posts", path: "/posts" },
  { name: "TILs", path: "/tils" },
  { name: "Tags", path: "/tags" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header class="py-8">
    <LayoutContainer>
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex mr-10 text-lg font-bold logo">
          Akramjon.N
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-6 font-medium navbar">
          <li v-for="link in links" :key="link.name">
            <NuxtLink
              :to="link.path"
              class="transition-colors duration-100 hover:text-primary-green"
              >{{ link.name }}</NuxtLink
            >
          </li>
        </ul>

        <!-- Search and Theme Switcher -->
        <div class="hidden md:flex items-center">
          <NuxtLink
            class="flex items-center gap-1 ml-auto mr-6 transition-colors duration-100 hover:text-primary-green"
            to="/search"
          >
            <IconsSearch class="w-5" />
            <span>Search (⌘K)</span>
          </NuxtLink>
          <ThemeSwitcher />
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4">
        <ul class="flex flex-col gap-4 font-medium navbar">
          <li v-for="link in links" :key="link.name">
            <NuxtLink
              :to="link.path"
              class="block py-2 transition-colors duration-100 hover:text-primary-green"
              >{{ link.name }}</NuxtLink
            >
          </li>
          <NuxtLink
            class="flex items-center gap-1 transition-colors duration-100 hover:text-primary-green"
            to="/search"
          >
            <IconsSearch class="w-5" />
            <span>Search (⌘K)</span>
          </NuxtLink>
          <ThemeSwitcher />
        </ul>
      </div>
    </LayoutContainer>
  </header>
</template>

<style scoped>
.navbar .router-link-active {
  @apply decoration-wavy underline underline-offset-4;
  text-decoration-thickness: 2px;
}
</style>
