<script setup lang="ts">
useSeoMeta({
  title: 'Projects | Akramjon Nuriddinov',
  description: 'A showcase of my recent work and open source contributions.',
})

const { data: projects } = await useAsyncData('all-projects', () =>
  queryContent('projects').sort({ id: -1 }).find()
)

const { isVisible, el } = useReveal()
</script>

<template>
  <div class="section-container py-32">
    <!-- Page header -->
    <div class="max-w-3xl mb-16" style="animation: slideUp 0.7s ease-out both;">
      <div class="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4">My Work</div>
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
        Projects &
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400"> Case Studies</span>
      </h1>
      <p class="text-xl text-secondary leading-relaxed">
        A collection of projects I've built to solve real-world problems, from full-stack web apps to open source tooling.
      </p>
    </div>

    <!-- Projects grid -->
    <div
      ref="el"
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      :class="isVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <AppProjectCard
        v-for="(project, i) in projects"
        :key="project._path"
        :title="project.title || 'Untitled'"
        :description="project.description || ''"
        :path="project._path || '/'"
        :date="project.published || project.date || ''"
        :style="{ transitionDelay: `${i * 60}ms` }"
      />
    </div>

    <!-- Empty state -->
    <div v-if="!projects?.length" class="text-center py-24 text-muted">
      <svg class="w-12 h-12 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
      </svg>
      <p class="text-sm">No projects yet.</p>
    </div>
  </div>
</template>
