<template>
  <div class="min-h-screen bg-background text-gray-200 selection:bg-primary/20 selection:text-primary font-sans">
    <!-- Ambient Background Glow -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
       <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-20"></div>
       <div class="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] opacity-20"></div>
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(4px);
  transform: translateY(10px);
}
</style>
