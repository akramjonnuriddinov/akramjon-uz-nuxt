<template>
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
    <div class="container mx-auto px-6 relative z-10 text-center">
      
      <div class="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm">
        <span class="text-primary font-mono text-sm">Available for work</span>
      </div>

      <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
        Building the
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent animate-gradient-x">
          future web
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
        I'm Akramjon Nuriddinov, a frontend developer crafting premium digital experiences with modern web technologies.
      </p>

      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <NuxtLink
            to="/projects"
            class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-primary rounded-lg group hover:bg-primary-dim hover:scale-[1.02] cursor-pointer active:scale-[0.98] outline-none focus:ring-2 focus:ring-primary/50"
        >
            <span class="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span class="relative flex items-center gap-2">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </span>
        </NuxtLink>
        
        <NuxtLink 
          to="/about" 
          class="px-6 py-3 font-medium text-white transition-colors hover:text-primary"
        >
          About Me
        </NuxtLink>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-[100px] -z-10"></div>
  </section>
</template>
