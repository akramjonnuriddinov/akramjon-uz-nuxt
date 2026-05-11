<template>
  <div class="mb-12" :class="centered ? 'text-center' : ''">
    <div v-if="number" class="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-3" :class="centered ? 'text-center' : ''">
      {{ number }}
    </div>
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">
      <slot />
    </h2>
    <p v-if="subtitle" class="text-secondary leading-relaxed" :class="centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'">
      {{ subtitle }}
    </p>
    <div v-if="!centered" class="mt-4 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  subtitle?: string
  number?: string
  centered?: boolean
}>()
</script>
