<template>
  <div class="min-h-screen bg-background text-gray-200 font-sans">
    <!-- Fixed grid background -->
    <div class="fixed inset-0 -z-20 pointer-events-none bg-grid-pattern"></div>

    <!-- Ambient gradient blobs -->
    <div class="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div class="absolute top-[-15%] right-[-8%] w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[150px] animate-blob"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-[130px] animate-blob-2"></div>
      <div class="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px] animate-blob-3"></div>
    </div>

    <AppNavbar />

    <main class="min-h-screen">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(10px);
}
</style>
