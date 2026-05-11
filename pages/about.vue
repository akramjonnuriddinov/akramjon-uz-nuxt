<script setup lang="ts">
useSeoMeta({
  title: 'About | Akramjon Nuriddinov',
  description: 'Frontend Developer passionate about crafting exceptional web experiences with Vue.js and Nuxt.',
})

const { isVisible: bioVisible, el: bioEl } = useReveal()
const { isVisible: expVisible, el: expEl } = useReveal()
const { isVisible: eduVisible, el: eduEl } = useReveal()

const experience = [
  {
    role: 'Vue.js | Laravel Developer',
    company: '2ROOMZ',
    url: 'https://2roomz.ru/',
    period: 'Jun 2025 — Present',
    current: true,
    description: 'Building full-stack web applications with Vue.js and Laravel for the real estate platform.',
  },
  {
    role: 'Vue.js Developer',
    company: 'Namangan Engineering-Construction Institute',
    url: 'https://namdtu.uz/',
    period: 'Sep 2024 — Jun 2025',
    current: false,
    description: 'Developed and maintained institutional web applications using Vue.js ecosystem.',
  },
  {
    role: 'Frontend Developer (Intern)',
    company: 'Teamly',
    url: 'https://teamly.uz/',
    period: 'March 2023 — March 2024',
    current: false,
    description: 'Built responsive UI components and contributed to the company\'s main product.',
  },
]

const education = [
  {
    degree: "Bachelor's Degree in Software Engineering",
    institution: 'Tashkent University of Information Technologies',
    period: '2020 — 2024',
    active: false,
  },
  {
    degree: 'Exact Sciences',
    institution: 'Namangan Academic Lyceum',
    period: '2018 — 2020',
    active: false,
  },
]

const languages = [
  { name: 'Uzbek', level: 'Native', pct: 100 },
  { name: 'English', level: 'Intermediate', pct: 60 },
  { name: 'Russian', level: 'Basic', pct: 30 },
]
</script>

<template>
  <div class="section-container py-32">

    <!-- Page header -->
    <div class="max-w-3xl mb-20" style="animation: slideUp 0.7s ease-out both;">
      <div class="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-4">About me</div>
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        The person<br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">behind the code.</span>
      </h1>
      <p class="text-xl text-secondary leading-relaxed">
          I'm a fullstack developer passionate about building real products — from 
          Vue.js frontends to Go backends and production deployments.
      </p>
    </div>

    <!-- Bio section -->
    <div
      ref="bioEl"
      class="grid lg:grid-cols-5 gap-8 mb-20"
      :class="bioVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <!-- Bio text -->
      <div class="lg:col-span-3 space-y-6">
        <div class="glass-card p-8 space-y-4">
          <h2 class="text-xl font-bold text-white flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            Who I Am
          </h2>
          <p class="text-secondary leading-relaxed">
            I'm a frontend developer based in Namangan, Uzbekistan, specializing in Vue.js. 
            Over the past 2+ years I've built production web applications — hotel management 
            SaaS and an AI-powered hair styling app — handling both frontend and backend.
          </p>
          <p class="text-secondary leading-relaxed">
            I care about clean, maintainable code that solves real problems — not just code 
            that works, but code that the next developer (or future me) won't hate.
          </p>
          <p class="text-secondary leading-relaxed">
            When I'm not coding, I'm usually reading about business, exploring a new idea, 
            or going deeper on something I already use.
          </p>
        </div>
      </div>

      <!-- Quick info -->
      <div class="lg:col-span-2 space-y-4">
        <!-- Location / status card -->
        <div class="glass-card p-6 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-muted uppercase tracking-widest">Status</span>
            <div class="flex items-center gap-2">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span class="text-primary text-xs font-medium">Available</span>
            </div>
          </div>
          <div class="space-y-3 text-sm">
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-secondary">Namangan, Uzbekistan</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="text-secondary">Vue.js / Go Dev @ 2ROOMZ</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:nn.akramjon@gmail.com" class="text-primary hover:text-primary-dim transition-colors">
                nn.akramjon@gmail.com
              </a>
            </div>
          </div>
        </div>

        <!-- Languages card -->
        <div class="glass-card p-6 space-y-4">
          <h3 class="text-xs font-mono text-muted uppercase tracking-widest">Languages</h3>
          <div class="space-y-3">
            <div v-for="lang in languages" :key="lang.name" class="space-y-1.5">
              <div class="flex items-center justify-between text-sm">
                <span class="text-white font-medium">{{ lang.name }}</span>
                <span class="text-muted text-xs">{{ lang.level }}</span>
              </div>
              <div class="h-1 rounded-full bg-surface-2 overflow-hidden">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400"
                  :style="{ width: `${lang.pct}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div
      ref="expEl"
      class="mb-20"
      :class="expVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <div class="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-2">02 — Experience</div>
      <h2 class="text-3xl font-bold text-white mb-8">Work History</h2>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent hidden md:block"></div>

        <div class="space-y-5">
          <div
            v-for="(job, i) in experience"
            :key="i"
            class="relative md:pl-16 group"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <!-- Timeline dot -->
            <div class="hidden md:flex absolute left-0 top-6 w-12 items-center justify-center">
              <div
                class="w-3 h-3 rounded-full border-2 transition-colors"
                :class="job.current ? 'border-primary bg-primary/30' : 'border-white/20 bg-surface group-hover:border-primary/50'"
              >
                <span v-if="job.current" class="relative flex h-full w-full">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                </span>
              </div>
            </div>

            <div class="glass-card p-6 group-hover:border-primary/20 transition-all duration-300">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 class="text-lg font-bold text-white mb-1">{{ job.role }}</h3>
                  <a :href="job.url" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dim text-sm transition-colors flex items-center gap-1">
                    {{ job.company }}
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
                <div class="flex items-center gap-2">
                  <span v-if="job.current" class="tag-primary">Current</span>
                  <span class="font-mono text-xs text-muted bg-surface-2 px-3 py-1 rounded-lg border border-white/[0.05]">
                    {{ job.period }}
                  </span>
                </div>
              </div>
              <p class="text-secondary text-sm leading-relaxed">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div
      ref="eduEl"
      :class="eduVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <div class="font-mono text-xs text-primary/60 tracking-[0.2em] uppercase mb-2">03 — Education</div>
      <h2 class="text-3xl font-bold text-white mb-8">Academic Background</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="(edu, i) in education"
          :key="i"
          class="glass-card p-6"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-white mb-1">{{ edu.institution }}</h3>
              <p class="text-secondary text-sm mb-2">{{ edu.degree }}</p>
              <span class="font-mono text-xs text-muted">{{ edu.period }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA strip -->
    <div class="mt-20 pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <p class="text-white font-semibold text-lg mb-1">Ready to work together?</p>
        <p class="text-secondary text-sm">I'm currently available for new opportunities.</p>
      </div>
      <div class="flex items-center gap-3">
        <a href="mailto:nn.akramjon@gmail.com" class="btn-primary">
          Get in Touch
        </a>
        <NuxtLink to="/projects" class="btn-ghost">
          See My Work
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
