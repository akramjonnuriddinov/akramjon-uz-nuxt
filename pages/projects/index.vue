<script setup lang="ts">
useSeoMeta({
  title: 'Projects | Akramjon Nuriddinov',
  description: 'Case studies: hotel SaaS features used by 800+ hotels, AI products and web apps by Akramjon Nuriddinov.',
})

const { data: projects } = await useAsyncData('all-projects', () =>
  queryContent('projects').sort({ id: -1 }).find()
)
</script>

<template>
  <div class="section-container pb-24 pt-6">
    <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">All Projects</h1>

    <table class="mt-12 w-full border-collapse text-left">
      <thead class="sticky top-0 z-10 border-b border-white/10 bg-background/75 backdrop-blur">
        <tr>
          <th class="py-4 pr-8 text-sm font-semibold text-foreground">Project</th>
          <th class="hidden py-4 pr-8 text-sm font-semibold text-foreground lg:table-cell">Built with</th>
          <th class="hidden py-4 text-sm font-semibold text-foreground sm:table-cell">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project._path" class="border-b border-white/5 last:border-none">
          <td class="py-4 pr-8 align-top">
            <NuxtLink :to="project._path" class="font-semibold leading-snug text-foreground transition-colors hover:text-primary focus-visible:text-primary">
              {{ project.title }}
            </NuxtLink>
            <p class="mt-1 max-w-xl text-sm leading-normal">{{ project.description }}</p>
          </td>
          <td class="hidden py-4 pr-8 align-top lg:table-cell">
            <SiteTags :tags="project.tags" />
          </td>
          <td class="hidden whitespace-nowrap py-4 align-top text-sm sm:table-cell">
            <a v-if="project.url" :href="project.url" target="_blank" rel="noreferrer noopener" class="transition-colors hover:text-primary focus-visible:text-primary">
              {{ hostname(project.url) }} ↗
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
