<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

const move = (event: PointerEvent) => {
  el.value?.style.setProperty('--x', `${event.clientX}px`)
  el.value?.style.setProperty('--y', `${event.clientY}px`)
}

onMounted(() => window.addEventListener('pointermove', move, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('pointermove', move))
</script>

<template>
  <div ref="el" class="spotlight pointer-events-none fixed inset-0 z-0 hidden lg:block" aria-hidden="true"></div>
</template>

<style scoped>
.spotlight {
  --x: 50vw;
  --y: 30vh;
  background: radial-gradient(600px circle at var(--x) var(--y), rgba(0, 220, 130, 0.07), transparent 80%);
}
</style>
