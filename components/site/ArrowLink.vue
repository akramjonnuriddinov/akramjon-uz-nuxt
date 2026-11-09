<script setup lang="ts">
defineProps<{ to: string; newTab?: boolean }>()
</script>

<template>
  <NuxtLink
    :to="to"
    :target="newTab ? '_blank' : undefined"
    :external="newTab"
    class="group inline-flex items-center font-semibold leading-tight text-foreground transition-colors hover:text-primary focus-visible:text-primary"
  >
    <slot />
    <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2 motion-reduce:transition-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.64L10.2 5.05a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.19-4.2H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
    </svg>
  </NuxtLink>
</template>
