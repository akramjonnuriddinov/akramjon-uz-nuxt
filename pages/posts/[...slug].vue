<script setup lang="ts">
const { path } = useRoute()
const { data: doc } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())

useHead({
  title: doc.value?.title || 'Post',
  meta: [
    { name: 'description', content: doc.value?.description || '' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-6 py-24">
    <div class="max-w-3xl mx-auto">
      <!-- Back Link -->
      <NuxtLink to="/posts" class="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-8 group">
        <svg class="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        Back to Posts
      </NuxtLink>

      <ContentDoc>
        <template #default="{ doc }">
          <article>
            <!-- Header -->
            <header class="mb-12">
              <div class="flex items-center gap-3 text-sm text-primary font-mono mb-4">
                <time>{{ doc.date || doc.published }}</time>
                <span v-if="doc.tags" class="w-1 h-1 bg-primary rounded-full"></span>
                <span v-if="doc.tags">{{ doc.tags }}</span>
              </div>
              
              <h1 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {{ doc.title }}
              </h1>
              
              <p class="text-xl text-gray-400 leading-relaxed">
                {{ doc.description }}
              </p>
            </header>

            <!-- Content -->
            <div class="custom-code prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary-dim prose-code:text-accent prose-pre:bg-surface prose-pre:border prose-pre:border-white/5">
              <ContentRenderer :value="doc" />
            </div>
          </article>
        </template>
        
        <template #not-found>
          <div class="text-center py-20">
            <h1 class="text-4xl font-bold text-white mb-4">Post not found</h1>
            <NuxtLink to="/posts" class="text-primary hover:underline">Return to blog</NuxtLink>
          </div>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>

<style>
/* Custom prose overrides for code blocks if needed */
.prose pre {
  /* @apply rounded-xl backdrop-blur-sm bg-surface/50; */
}
</style>
