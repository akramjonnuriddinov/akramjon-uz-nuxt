<script setup lang="ts">
const { path } = useRoute()
const { data: doc } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())

useHead({
  title: doc.value?.title ? `${doc.value.title} | Akramjon Nuriddinov` : 'Project',
  meta: [{ name: 'description', content: doc.value?.description || '' }],
})
</script>

<template>
  <div class="section-container py-32">
    <div class="max-w-3xl mx-auto">
      <NuxtLink to="/projects" class="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-10 group">
        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Back to Projects
      </NuxtLink>

      <ContentDoc>
        <template #default="{ doc }">
          <article>
            <header class="mb-12">
              <div class="flex items-center gap-3 text-sm font-mono text-primary/70 mb-4">
                <time>{{ doc.published || doc.date }}</time>
              </div>
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{{ doc.title }}</h1>
              <p v-if="doc.description" class="text-xl text-secondary leading-relaxed">{{ doc.description }}</p>
            </header>
            <div class="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary-dim prose-code:text-accent prose-pre:bg-surface prose-pre:border prose-pre:border-white/5 prose-pre:rounded-xl">
              <ContentRenderer :value="doc" />
            </div>
          </article>
        </template>
        <template #not-found>
          <div class="text-center py-24">
            <h1 class="text-4xl font-bold text-white mb-4">Project not found</h1>
            <NuxtLink to="/projects" class="text-primary hover:underline">Back to projects</NuxtLink>
          </div>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>
