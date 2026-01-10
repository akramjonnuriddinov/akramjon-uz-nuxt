<template>
  <NuxtLink :to="path" class="group relative block h-full">
    <div class="h-full glass-card overflow-hidden p-6 flex flex-col relative z-10">
      
      <!-- Project Image Placeholder (or real image if frontmatter has one) -->
      <div class="relative w-full aspect-video mb-6 rounded-lg overflow-hidden bg-surface border border-white/5 group-hover:border-primary/20 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <!-- Icon/Logo Placeholder -->
        <div class="absolute inset-0 flex items-center justify-center text-4xl text-gray-700 group-hover:text-primary transition-colors">
           <!-- You could add dynamic icons here based on frontmatter -->
           <span>{{ initial }}</span>
        </div>
      </div>

      <div class="flex-grow">
        <h3 class="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {{ title }}
        </h3>
        <p class="text-gray-400 text-sm line-clamp-3 mb-4">
          {{ description }}
        </p>
      </div>

      <div class="pt-4 mt-auto border-t border-white/5 flex items-center justify-between text-sm">
        <span class="text-gray-500 font-mono">{{ date }}</span>
        <span class="flex items-center gap-1 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
           Read More
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </span>
      </div>
    </div>
    
    <!-- Hover Glow -->
    <div class="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-lg transition duration-500 -z-10"></div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  date?: string;
  path: string;
}>();

const initial = computed(() => props.title?.charAt(0) || '#');
</script>
