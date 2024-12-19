<script setup lang="ts">
import { isThemeChecked, toggleTheme } from "~/composables/useTheme"
</script>

<template>
  <button @click="toggleTheme" class="cursor-pointer flex items-center gap-2">
    <IconsSun v-if="!isThemeChecked" class="w-4" />
    <IconsMoon v-if="isThemeChecked" class="w-4" />
  </button>
</template>
