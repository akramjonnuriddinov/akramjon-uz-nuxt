<script setup lang="ts">
useSeoMeta({
  title: "Blog | Akramjon Nuriddinov",
  description: "Thoughts, tutorials, and insights on frontend development.",
})

const { data: posts } = await useAsyncData('all-posts', () => 
  queryContent('posts')
    .sort({ date: -1 })
    .find()
)
</script>

<template>
  <div class="container mx-auto px-6 py-24">
    <SectionTitle subtitle="Thoughts, tutorials, and insights on frontend development.">
      Blog & Articles
    </SectionTitle>

    <div class="max-w-4xl">
       <div class="space-y-8">
         <NuxtLink 
           v-for="post in posts" 
           :key="post._path" 
           :to="post._path"
           class="group block glass-card p-8 hover:bg-surface/60 transition-all border-l-4 border-l-transparent hover:border-l-primary"
         >
           <article>
             <div class="flex items-center gap-3 text-sm text-gray-500 mb-3 font-mono">
               <span>{{ post.date }}</span>
               <span v-if="post.tags" class="w-1 h-1 bg-gray-600 rounded-full"></span>
               <span v-if="post.tags" class="text-primary">{{ post.tags }}</span>
             </div>
             <h2 class="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
               {{ post.title }}
             </h2>
             <p class="text-gray-400 leading-relaxed">
               {{ post.description }}
             </p>
             <div class="mt-4 flex items-center text-primary text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
               Read Article
               <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m4-4H3"></path></svg>
             </div>
           </article>
         </NuxtLink>
       </div>
    </div>
  </div>
</template>
