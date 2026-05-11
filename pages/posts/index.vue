<script setup lang="ts">
useSeoMeta({
  title: 'Blog | Akramjon Nuriddinov',
  description: 'Thoughts, tutorials, and insights on frontend development.',
})

const { data: posts } = await useAsyncData('all-posts', () =>
  queryContent('posts').sort({ date: -1 }).find()
)

const { isVisible, el } = useReveal()
</script>

<template>
  <div class="section-container py-32">
    <!-- Page header -->
    <div class="max-w-3xl mb-16" style="animation: slideUp 0.7s ease-out both;">
      <div class="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4">Writing</div>
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
        Blog &
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400"> Articles</span>
      </h1>
      <p class="text-xl text-secondary leading-relaxed">
        Thoughts, tutorials, and insights on frontend development, Vue.js, and building for the web.
      </p>
    </div>

    <!-- Post list -->
    <div
      ref="el"
      class="max-w-3xl space-y-3"
      :class="isVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <NuxtLink
        v-for="(post, i) in posts"
        :key="post._path"
        :to="post._path"
        class="group flex items-start gap-5 p-6 rounded-2xl border border-white/[0.05] hover:border-primary/20 hover:bg-surface/40 transition-all duration-200"
        :style="{ transitionDelay: `${i * 50}ms` }"
      >
        <span class="font-mono text-xs text-muted mt-1.5 w-6 flex-shrink-0 select-none">
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        <article class="flex-1 min-w-0">
          <div class="flex items-center gap-3 mb-2">
            <span class="font-mono text-xs text-muted">{{ post.date }}</span>
            <template v-if="post.tags">
              <span class="w-1 h-1 bg-muted/40 rounded-full"></span>
              <span class="tag-primary">{{ post.tags }}</span>
            </template>
          </div>
          <h2 class="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2 line-clamp-1">
            {{ post.title }}
          </h2>
          <p v-if="post.description" class="text-secondary text-sm leading-relaxed line-clamp-2">
            {{ post.description }}
          </p>
        </article>
        <svg class="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </NuxtLink>
    </div>

    <!-- Empty state -->
    <div v-if="!posts?.length" class="text-center py-24 text-muted">
      <p class="text-sm font-mono">No posts yet.</p>
    </div>
  </div>
</template>
