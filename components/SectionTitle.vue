<template>
  <div class="mb-12">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">
      <span class="text-gradient">
        <slot />
      </span>
    </h2>
    <p v-if="subtitle" class="text-secondary text-lg max-w-2xl">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  subtitle?: string;
}>();
</script>
