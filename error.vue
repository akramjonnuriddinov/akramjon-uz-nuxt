<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">Page Not Found</h1>
    <h1 v-else>An Error Occurred</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup>
defineProps(["error"])
</script>

<style>
.error-page {
  text-align: center;
  margin: 50px auto;
}
</style>
