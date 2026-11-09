<script setup lang="ts">
useSeoMeta({
  title: 'Writing | Akramjon Nuriddinov',
  description: 'Notes and interview guides on Vue.js, Laravel and full-stack development.',
})

const { data: posts } = await useAsyncData('all-posts', async () => {
  const all = await queryContent('posts').find()
  return all.sort(byNewest)
})
</script>

<template>
  <div class="section-container pb-24 pt-6">
    <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">All Writing</h1>

    <ul class="group/list mt-16 max-w-3xl space-y-10">
      <SiteRow v-for="post in posts" :key="post._path" :title="post.title" :to="post._path">
        <template #aside>
          <p class="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">{{ publishedYear(post.published) }}</p>
        </template>
        <p v-if="post.description" class="mt-2 text-sm leading-normal">{{ post.description }}</p>
      </SiteRow>
    </ul>

    <p v-if="!posts?.length" class="mt-12 text-sm text-muted">No posts yet.</p>
  </div>
</template>
