<script setup lang="ts">
defineProps<{ id: string; label: string }>()
</script>

<template>
  <section :id="id" :aria-label="label" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
      <h2 class="text-sm font-bold uppercase tracking-widest text-foreground">{{ label }}</h2>
    </div>
    <slot />
  </section>
</template>
