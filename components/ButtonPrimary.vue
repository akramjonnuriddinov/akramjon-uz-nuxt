<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-primary rounded-lg group hover:bg-primary-dim hover:scale-[1.02] cursor-pointer active:scale-[0.98] outline-none focus:ring-2 focus:ring-primary/50"
  >
    <span class="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
    <span class="relative flex items-center gap-2">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  to?: string;
}>();
</script>
