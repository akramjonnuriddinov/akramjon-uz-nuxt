<script setup lang="ts">
defineProps<{ tags?: string[] }>()
</script>

<template>
  <ul v-if="tags?.length" class="flex flex-wrap gap-1.5" aria-label="Technologies used">
    <li v-for="tag in tags" :key="tag" class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">{{ tag }}</li>
  </ul>
</template>
