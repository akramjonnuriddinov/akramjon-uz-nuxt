<script setup lang="ts">
useSeoMeta({
  title: "About Me | Akramjon Nuriddinov",
  description: "I’m a frontend developer passionate about crafting exceptional web experiences.",
})
</script>

<template>
  <div class="container mx-auto px-6 py-24">
    <SectionTitle subtitle="A little bit about who I am and what I do.">
      About Me
    </SectionTitle>

    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Bio Section - Spans 2 cols -->
      <div class="lg:col-span-2 space-y-8">
        <div class="glass-card p-8">
          <h3 class="text-2xl font-bold mb-4 text-white">The Person Behind the Code</h3>
          <p class="text-gray-300 leading-relaxed mb-4">
             I’m a frontend developer passionate about crafting exceptional web experiences. With a background in media informatics, I thrive on bridging the gap between user-facing interfaces and robust backend systems.
          </p>
          <p class="text-gray-300 leading-relaxed">
             My journey is fueled by continuous learning and a desire to share knowledge. I believe in writing code that is not just functional, but also clean, maintainable, and beautiful.
          </p>
        </div>

        <!-- Experience -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-white flex items-center gap-2">
            <span class="w-2 h-8 bg-primary rounded-full"></span>
            Experience
          </h3>
          <div class="space-y-4">
             <div class="glass-card p-6 border-l-2 border-l-primary/50 hover:border-l-primary transition-colors">
               <div class="flex justify-between items-start mb-2">
                 <div>
                   <h4 class="text-lg font-bold text-white">Vue.js | Laravel Developer</h4>
                   <a href="https://2roomz.ru/" target="_blank" class="text-primary hover:underline">2ROOMZ</a>
                 </div>
                 <span class="text-xs font-mono text-gray-500 bg-surface px-2 py-1 rounded">2025 - Present</span>
               </div>
             </div>
             
             <div class="glass-card p-6 border-l-2 border-l-primary/50 hover:border-l-primary transition-colors">
               <div class="flex justify-between items-start mb-2">
                 <div>
                   <h4 class="text-lg font-bold text-white">Vue.js Developer</h4>
                   <span class="text-gray-400">Namangan Engineering-Construction Institute</span>
                 </div>
                 <span class="text-xs font-mono text-gray-500 bg-surface px-2 py-1 rounded">2024 - 2025</span>
               </div>
             </div>

             <div class="glass-card p-6 border-l-2 border-l-primary/50 hover:border-l-primary transition-colors">
               <div class="flex justify-between items-start mb-2">
                 <div>
                   <h4 class="text-lg font-bold text-white">Frontend Developer (Intern)</h4>
                   <span class="text-gray-400">Teamly</span>
                 </div>
                 <span class="text-xs font-mono text-gray-500 bg-surface px-2 py-1 rounded">2023 - 2024</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Skills & Education -->
      <div class="space-y-8">
        <!-- Education -->
        <div class="glass-card p-6">
          <h3 class="text-lg font-bold mb-4 text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
            Education
          </h3>
          <div class="space-y-6">
            <div class="relative pl-6 border-l border-white/10">
              <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-surface border border-primary"></div>
              <h4 class="text-white text-sm font-bold">Tashkent University of Information Technologies</h4>
              <p class="text-xs text-gray-400 mt-1">Bachelor's degree</p>
              <p class="text-xs text-gray-500 mt-1 font-mono">2020 - 2024</p>
            </div>
            <div class="relative pl-6 border-l border-white/10">
              <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-surface border border-gray-500"></div>
              <h4 class="text-white text-sm font-bold">Namangan Academic Lyceum</h4>
              <p class="text-xs text-gray-400 mt-1">Exact Sciences</p>
              <p class="text-xs text-gray-500 mt-1 font-mono">2018 - 2020</p>
            </div>
          </div>
        </div>
        
        <!-- Languages -->
        <div class="glass-card p-6">
          <h3 class="text-lg font-bold mb-4 text-white">Languages</h3>
           <div class="flex flex-wrap gap-2">
             <span class="px-3 py-1 bg-surface border border-white/10 rounded-full text-xs text-gray-300">Uzbek (Native)</span>
             <span class="px-3 py-1 bg-surface border border-white/10 rounded-full text-xs text-gray-300">English (Intermediate)</span>
             <span class="px-3 py-1 bg-surface border border-white/10 rounded-full text-xs text-gray-300">Russian (Basic)</span>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
