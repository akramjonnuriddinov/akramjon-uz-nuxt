<script setup lang="ts">
defineProps(["breadCrump"])
</script>

<template>
  <div class="flex items-center gap-2 mt-10 mb-2 text-gray-600">
    <NuxtLink to="/" class="hover:text-primary-dark">Home</NuxtLink>
    <span>»</span>
    <NuxtLink>{{ breadCrump }}</NuxtLink>
  </div>
</template>
