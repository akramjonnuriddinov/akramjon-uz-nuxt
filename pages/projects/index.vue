<script setup lang="ts">
useSeoMeta({
  title: "Projects | Akramjon Nuriddinov",
  description: "A showcase of my recent work and open source contributions.",
})

const { data: projects } = await useAsyncData('all-projects', () => 
  queryContent('projects')
    .sort({ id: -1 })
    .find()
)
</script>

<template>
  <div class="container mx-auto px-6 py-24">
    <SectionTitle subtitle="A collection of project I've built to solve real-world problems.">
      All Projects
    </SectionTitle>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AppProjectCard 
          v-for="project in projects"
          :key="project._path"
          :title="project.title || 'Untitled'"
          :description="project.description || ''"
          :path="project._path || '/'"
          :date="project.published || project.date || ''"
        />
    </div>
  </div>
</template>
