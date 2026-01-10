<script setup lang="ts">
useSeoMeta({
  title: "Akramjon Nuriddinov | Vue.js developer",
  description: "Frontend Developer crafting premium digital experiences with Vue.js and Nuxt.",
  ogTitle: "Akramjon Nuriddinov | Vue.js developer",
  ogDescription: "Frontend Developer crafting premium digital experiences with Vue.js and Nuxt.",
})

const { data: projects } = await useAsyncData('featured-projects', () => 
  queryContent('projects')
    .sort({ id: -1 })
    .limit(3)
    .find()
)

const { data: posts } = await useAsyncData('latest-posts', () => 
  queryContent('posts')
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>

<template>
  <div>
    <HeroSection />
    
    <!-- Featured Projects -->
    <section class="py-24 container mx-auto px-6">
      <SectionTitle subtitle="Selected works that showcase my passion for clean code and user-centric design.">
        Featured Projects
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
      
      <div class="mt-12 text-center">
        <NuxtLink to="/projects" class="text-primary hover:text-primary-dim font-medium inline-flex items-center gap-2 group">
          View All Projects
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m4-4H3"></path></svg>
        </NuxtLink>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-24 bg-surface/30 border-y border-white/5">
      <div class="container mx-auto px-6">
        <SectionTitle subtitle="The technologies and tools I use to bring ideas to life.">
          Technical Arsenal
        </SectionTitle>
        <TechStack />
      </div>
    </section>
    
    <!-- Latest Posts (Simple List) -->
    <section class="py-24 container mx-auto px-6">
      <SectionTitle>Latest Thoughts</SectionTitle>
      <div class="flex flex-col gap-6">
        <NuxtLink 
          v-for="post in posts" 
          :key="post._path"
          :to="post._path"
          class="group block p-6 rounded-xl border border-white/5 hover:bg-surface/50 transition-colors"
        >
           <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{{ post.title }}</h3>
           <p class="text-gray-400 text-sm mb-3">{{ post.description }}</p>
           <div class="text-xs text-gray-500 font-mono">{{ post.date }}</div>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>
