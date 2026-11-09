<script setup lang="ts">
import { profile, sections } from '~/data/profile'

const active = useActiveSection(sections.map(section => section.id))
</script>

<template>
  <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        <NuxtLink to="/">{{ profile.name }}</NuxtLink>
      </h1>
      <h2 class="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">{{ profile.role }}</h2>
      <p class="mt-4 max-w-xs leading-normal text-secondary">{{ profile.tagline }}</p>
      <p class="mt-5 inline-flex items-center gap-2 font-mono text-xs text-primary">
        <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
        {{ profile.status }}
      </p>

      <nav class="mt-16 hidden lg:block" aria-label="In-page navigation">
        <ul class="w-max">
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.id}`" class="group flex items-center py-3" :aria-current="active === section.id ? 'true' : undefined">
              <span
                class="mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"
                :class="active === section.id ? 'w-16 bg-foreground' : 'w-8 bg-muted'"
              ></span>
              <span
                class="text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-foreground group-focus-visible:text-foreground"
                :class="active === section.id ? 'text-foreground' : 'text-muted'"
              >{{ section.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <SiteSocials class="mt-8" />
  </header>
</template>
