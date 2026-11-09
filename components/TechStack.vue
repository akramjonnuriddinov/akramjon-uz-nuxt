<template>
  <div class="space-y-8">
    <div v-for="category in categories" :key="category.name">
      <h3 class="text-xs font-mono text-muted uppercase tracking-widest mb-4 flex items-center gap-3">
        <span>{{ category.name }}</span>
        <span class="flex-1 h-px bg-white/[0.05]"></span>
      </h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <div
          v-for="tech in category.items"
          :key="tech.name"
          class="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-surface/30 hover:bg-surface/70 hover:border-white/12 transition-all duration-200 hover:-translate-y-0.5"
        >
          <div
            class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-200 group-hover:scale-110"
            :style="{ backgroundColor: tech.bgColor, color: tech.color }"
          >
            {{ tech.icon }}
          </div>
          <div class="min-w-0">
            <div class="text-sm font-medium text-white truncate">{{ tech.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    name: 'Frontend',
    items: [
      { name: 'Vue.js', icon: 'V', color: '#ffffff', bgColor: '#42b883' },
      { name: 'Nuxt', icon: 'N', color: '#ffffff', bgColor: '#00dc82' },
      { name: 'React', icon: 'R', color: '#ffffff', bgColor: '#149eca' },
      { name: 'TypeScript', icon: 'TS', color: '#ffffff', bgColor: '#3178c6' },
      { name: 'Tailwind', icon: 'TW', color: '#ffffff', bgColor: '#0ea5e9' },
    ],
  },
  {
    name: 'Backend & Database',
    items: [
      { name: 'Laravel', icon: 'L', color: '#ffffff', bgColor: '#ff2d20' },
      { name: 'Go', icon: 'Go', color: '#ffffff', bgColor: '#00add8' },
      { name: 'PostgreSQL', icon: 'PG', color: '#ffffff', bgColor: '#336791' },
      { name: 'Redis', icon: 'RD', color: '#ffffff', bgColor: '#d82c20' },
      { name: 'Supabase', icon: 'SB', color: '#ffffff', bgColor: '#3ecf8e' },
    ],
  },
  {
    name: 'Mobile, Real-time & AI',
    items: [
      { name: 'Flutter', icon: 'F', color: '#ffffff', bgColor: '#02569b' },
      { name: 'WebSocket', icon: 'WS', color: '#ffffff', bgColor: '#6d28d9' },
      { name: 'Twilio Voice', icon: 'TV', color: '#ffffff', bgColor: '#f22f46' },
      { name: 'ElevenLabs', icon: 'XI', color: '#ffffff', bgColor: '#27272a' },
      { name: 'Gemini API', icon: 'G', color: '#ffffff', bgColor: '#4285f4' },
    ],
  },
  {
    name: 'DevOps',
    items: [
      { name: 'Docker', icon: 'D', color: '#ffffff', bgColor: '#2496ed' },
      { name: 'Nginx', icon: 'NX', color: '#ffffff', bgColor: '#009639' },
      { name: 'GitHub Actions', icon: 'GA', color: '#ffffff', bgColor: '#2088ff' },
      { name: 'Linux', icon: 'LX', color: '#ffffff', bgColor: '#3f3f46' },
      { name: 'Git', icon: 'G', color: '#ffffff', bgColor: '#f05032' },
    ],
  },
]
</script>
