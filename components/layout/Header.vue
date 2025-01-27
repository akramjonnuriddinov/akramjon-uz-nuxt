<script setup lang="ts">
const { setLocale } = useI18n()
const links = [
  { name: "Posts", path: "/posts" },
  { name: "TILs", path: "/tils" },
  { name: "Tags", path: "/tags" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
]
const isMenuOpen = ref(false)

const changeLocale = (event: Event) => {
  const target = event.target as HTMLSelectElement
  setLocale(target.value)
}
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
        <ul class="items-center hidden gap-6 font-medium md:flex navbar">
          <li v-for="link in links" :key="link.name">
            <NuxtLink
              :to="link.path"
              class="transition-colors duration-100 hover:text-primary-green"
              >{{ link.name }}</NuxtLink
            >
          </li>
        </ul>

        <!-- Search and Theme Switcher -->
        <div class="items-center hidden md:flex">
          <NuxtLink
            class="flex items-center gap-1 ml-auto mr-6 transition-colors duration-100 hover:text-primary-green"
            to="/search"
          >
            <IconsSearch class="w-5" />
            <span>Search (⌘K)</span>
          </NuxtLink>
          <select
            @change="changeLocale"
            class="mr-6 bg-transparent outline-none dark:bg-primary-dark"
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">РУ</option>
          </select>
          <ThemeSwitcher />
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="mt-4 md:hidden">
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
