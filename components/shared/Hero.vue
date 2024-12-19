<script setup lang="ts">
defineProps(["title", "content"])
</script>

<template>
  <div>
    <h1 class="mb-1 text-4xl font-semibold">{{ title }}</h1>
    <p class="italic">{{ content }}</p>
  </div>
</template>
