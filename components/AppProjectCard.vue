<template>
  <NuxtLink :to="path" class="group relative block h-full focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-2xl">
    <div class="h-full flex flex-col rounded-2xl border border-white/[0.06] bg-surface/40 backdrop-blur-lg overflow-hidden transition-all duration-300 group-hover:border-primary/25 group-hover:bg-surface/70 group-hover:shadow-2xl group-hover:shadow-primary/[0.06] group-hover:-translate-y-1">

      <!-- Top accent bar -->
      <div class="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <!-- Card header / visual area -->
      <div class="relative h-44 overflow-hidden bg-gradient-to-br from-surface-2 to-surface-3 border-b border-white/[0.04]">
        <div class="absolute inset-0 bg-grid-pattern opacity-60"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Project initial badge -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-3xl font-bold text-primary/40 group-hover:text-primary/70 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
            {{ initial }}
          </div>
        </div>

        <!-- Date badge -->
        <div class="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-surface/80 backdrop-blur-sm border border-white/[0.06] font-mono text-[11px] text-muted">
          {{ date }}
        </div>
      </div>

      <!-- Card body -->
      <div class="flex-1 flex flex-col p-5">
        <h3 class="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-1">
          {{ title }}
        </h3>
        <p class="text-sm text-secondary/80 line-clamp-2 flex-1 leading-relaxed">
          {{ description }}
        </p>

        <!-- Footer -->
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.05]">
          <div class="flex items-center gap-1.5 flex-wrap">
            <slot name="tags">
              <span class="tag">View Project</span>
            </slot>
          </div>
          <span class="flex items-center gap-1 text-xs text-primary font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Open
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  date?: string
  path: string
}>()

const initial = computed(() => props.title?.charAt(0).toUpperCase() || '#')
</script>
