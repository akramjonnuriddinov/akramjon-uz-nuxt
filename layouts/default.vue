<script setup lang="ts">
import { profile } from '~/data/profile'

const route = useRoute()
</script>

<template>
  <div class="relative min-h-screen bg-background font-sans leading-relaxed text-secondary">
    <SiteSpotlight />

    <div class="relative z-10">
      <div v-if="!route.meta.home" class="section-container pt-12 md:pt-16">
        <NuxtLink to="/" class="group inline-flex items-center gap-2 font-semibold text-primary">
          <span class="transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" aria-hidden="true">←</span>
          {{ profile.name }}
        </NuxtLink>
      </div>

      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
