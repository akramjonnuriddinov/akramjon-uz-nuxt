<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-white/10" :class="{ 'bg-background/80 backdrop-blur-md border-b': isScrolled }">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold font-mono group">
        <span class="text-primary group-hover:text-primary-dim transition-colors">&lt;</span>
        Akramjon
        <span class="text-primary group-hover:text-primary-dim transition-colors">/&gt;</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink 
          v-for="link in links" 
          :key="link.path" 
          :to="link.path"
          class="text-sm font-medium text-gray-400 hover:text-primary transition-colors relative group py-2"
          active-class="!text-white"
        >
          {{ link.name }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-[.router-link-active]:w-full"></span>
        </NuxtLink>
        
        <!-- Locale Switcher Placeholder (if needed later) -->
        <!-- <div class="w-px h-4 bg-white/10 mx-2"></div> -->
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform opacity-0 -translate-y-2"
        enter-to-class="transform opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 -translate-y-2"
      >
        <div v-if="isMobileMenuOpen" class="absolute top-20 left-0 right-0 bg-surface border-b border-white/5 md:hidden p-4 flex flex-col gap-4 shadow-xl">
          <NuxtLink 
            v-for="link in links" 
            :key="link.path" 
            :to="link.path"
            @click="isMobileMenuOpen = false"
            class="text-gray-300 hover:text-primary py-2 px-4 rounded-lg hover:bg-white/5 transition-colors"
            active-class="bg-white/5 text-primary"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/posts' },
];

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20;
  });
});
</script>
