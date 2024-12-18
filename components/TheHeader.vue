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
  <header class="text-primary-light py-8">
    <AppContainer>
      <div class="flex items-center justify-between">
        <a class="font-bold text-lg flex mr-10" href="#">Akramjon.Dev</a>
        <ul class="flex items-center font-medium gap-6">
          <li v-for="link in links" :key="link.name">
            <RouterLink :to="link.path">{{ link.name }}</RouterLink>
          </li>
        </ul>
        <RouterLink class="text-white flex items-center gap-1" to="/search">
          <IconsSearch class="w-5" />
          <span>Search (⌘K)</span>
        </RouterLink>
      </div>
    </AppContainer>
  </header>
</template>
