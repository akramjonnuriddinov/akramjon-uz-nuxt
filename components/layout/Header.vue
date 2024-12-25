<script setup lang="ts">
const links = [
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "TILs",
    path: "/tils",
  },
  {
    name: "Tags",
    path: "/tags",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
]
</script>

<template>
  <header class="py-8">
    <LayoutContainer>
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex mr-10 text-lg font-bold logo"
          >Akramjon.N</NuxtLink
        >
        <ul class="flex items-center gap-6 font-medium navbar">
          <li v-for="link in links" :key="link.name">
            <NuxtLink
              :to="link.path"
              class="transition-colors duration-100 hover:text-primary-green"
              >{{ link.name }}</NuxtLink
            >
          </li>
        </ul>
        <NuxtLink
          class="flex items-center gap-1 ml-auto mr-6 transition-colors duration-100 hover:text-primary-green"
          to="/search"
        >
          <IconsSearch class="w-5" />
          <span>Search (⌘K)</span>
        </NuxtLink>
        <ThemeSwitcher />
      </div>
    </LayoutContainer>
  </header>
</template>

<style scoped>
navbar .router-link-active {
  @apply decoration-wavy underline underline-offset-4;
  text-decoration-thickness: 2px;
}
</style>
