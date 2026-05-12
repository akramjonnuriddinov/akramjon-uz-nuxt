<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 pointer-events-none">
    <div
      class="pointer-events-auto flex items-center gap-2 px-3 py-2.5 rounded-2xl border transition-all duration-500"
      :class="isScrolled
        ? 'border-white/10 bg-surface/80 backdrop-blur-2xl shadow-2xl shadow-black/30'
        : 'border-white/5 bg-surface/40 backdrop-blur-xl'"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="font-mono font-bold text-sm px-2 py-1 rounded-lg hover:bg-white/5 transition-colors group">
        <span class="text-primary group-hover:text-primary-dim transition-colors">&lt;</span>
        <span class="text-white">AN</span>
        <span class="text-primary group-hover:text-primary-dim transition-colors">/&gt;</span>
      </NuxtLink>

      <div class="w-px h-4 bg-white/10 mx-1"></div>

      <!-- Desktop Links -->
      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="px-3 py-1.5 text-sm font-medium text-secondary hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-150"
          active-class="!text-white bg-white/[0.07]"
          exact-active-class="!text-primary bg-primary/[0.08]"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <div class="hidden md:block w-px h-4 bg-white/10 mx-1"></div>

      <!-- CTA -->
      <a
        href="/Nuriddinov_Akramjon_CV.pdf"
        target="_blank"
        class="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-background text-sm font-semibold rounded-xl hover:bg-primary-dim transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
      >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Resume
      </a>

      <!-- Mobile Toggle -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden text-secondary hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors ml-1"
        aria-label="Toggle menu"
      >
        <svg class="w-5 h-5 transition-transform duration-200" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-3 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-3 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="pointer-events-auto absolute top-[4.5rem] left-4 right-4 bg-surface/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/40 flex flex-col gap-1"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          @click="isMobileMenuOpen = false"
          class="px-4 py-2.5 text-sm font-medium text-secondary hover:text-white rounded-xl hover:bg-white/5 transition-all"
          active-class="!text-white bg-white/[0.06]"
          exact-active-class="!text-primary bg-primary/[0.08]"
        >
          {{ link.name }}
        </NuxtLink>
        <div class="h-px bg-white/[0.06] my-1"></div>
        <a
          href="mailto:nn.akramjon@gmail.com"
          class="px-4 py-2.5 bg-primary text-background text-sm font-semibold rounded-xl text-center hover:bg-primary-dim transition-colors"
          @click="isMobileMenuOpen = false"
        >
          Hire Me
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/posts' },
]

onMounted(() => {
  const handler = () => { isScrolled.value = window.scrollY > 30 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>
