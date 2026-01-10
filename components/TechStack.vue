<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div 
      v-for="tech in stack" 
      :key="tech.name"
      class="glass-card p-4 flex items-center gap-3 hover:bg-white/5 transition-colors"
    >
      <div class="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-white/5 text-2xl">
        <!-- Replaced colored icons with grayscale->color on hover effect if icons were available, creating text placeholders for now -->
        <span :class="tech.color" class="font-bold">{{ tech.name[0] }}</span> 
      </div>
      <div>
        <div class="font-medium text-white">{{ tech.name }}</div>
        <div class="text-xs text-gray-500">{{ tech.category }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stack = [
  { name: 'Vue.js', category: 'Frontend', color: 'text-[#42b883]' },
  { name: 'Nuxt', category: 'Framework', color: 'text-[#00dc82]' },
  { name: 'TypeScript', category: 'Language', color: 'text-[#3178c6]' },
  { name: 'Tailwind', category: 'Styling', color: 'text-[#38bdf8]' },
  { name: 'Supabase', category: 'Database', color: 'text-[#3ecf8e]' },
  { name: 'Git', category: 'Version Control', color: 'text-[#f05032]' },
  { name: 'Figma', category: 'Design', color: 'text-[#f24e1e]' },
  { name: 'Golang', category: 'Backend', color: 'text-[#3178c6]' },
  { name: 'Laravel', category: 'Framework', color: 'text-[#f05032]' },
  { name: 'SQL', category: 'Database', color: 'text-[#3178c6]' },
]
</script>
