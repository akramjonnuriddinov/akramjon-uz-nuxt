<script setup lang="ts">
useSeoMeta({
  title: 'Akramjon Nuriddinov | Frontend Developer',
  description: 'Frontend Developer crafting premium digital experiences with Vue.js and Nuxt.',
  ogTitle: 'Akramjon Nuriddinov | Frontend Developer',
  ogDescription: 'Frontend Developer crafting premium digital experiences with Vue.js and Nuxt.',
})

const { data: projects } = await useAsyncData('featured-projects', () =>
  queryContent('projects').sort({ id: -1 }).limit(3).find()
)

const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('posts').sort({ date: -1 }).limit(4).find()
)

const { isVisible: statsVisible, el: statsEl } = useReveal()
const { isVisible: projectsVisible, el: projectsEl } = useReveal()
const { isVisible: techVisible, el: techEl } = useReveal()
const { isVisible: postsVisible, el: postsEl } = useReveal()
const { isVisible: ctaVisible, el: ctaEl } = useReveal()

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '∞', label: 'Lines of Code' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection />

    <!-- Stats bar -->
    <section
      ref="statsEl"
      class="py-16 border-y border-white/[0.05]"
      :class="statsVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <div class="section-container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="text-center"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <div class="text-4xl md:text-5xl font-bold text-white mb-1 font-mono">
              <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-emerald-400">{{ stat.value }}</span>
            </div>
            <div class="text-sm text-muted">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section
      ref="projectsEl"
      class="py-24"
      :class="projectsVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <div class="section-container">
        <div class="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionTitle number="01 — Projects" subtitle="Selected works that showcase my skills and passion.">
            Featured Work
          </SectionTitle>
          <NuxtLink
            to="/projects"
            class="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group mb-12"
          >
            All Projects
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AppProjectCard
            v-for="(project, i) in projects"
            :key="project._path"
            :title="project.title || 'Untitled'"
            :description="project.description || ''"
            :path="project._path || '/'"
            :date="project.published || project.date || ''"
            :style="{ transitionDelay: `${i * 100}ms` }"
          />
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="section-container"><div class="divider"></div></div>

    <!-- Tech Stack -->
    <section
      ref="techEl"
      class="py-24"
      :class="techVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <div class="section-container">
        <SectionTitle
          number="02 — Stack"
          subtitle="The tools and technologies I use to bring ideas to life."
        >
          Technical Arsenal
        </SectionTitle>
        <TechStack />
      </div>
    </section>

    <!-- Divider -->
    <div class="section-container"><div class="divider"></div></div>

    <!-- Latest Posts -->
    <section
      ref="postsEl"
      class="py-24"
      :class="postsVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <div class="section-container">
        <div class="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionTitle number="03 — Blog" subtitle="Thoughts on frontend development, tech, and the web.">
            Latest Thoughts
          </SectionTitle>
          <NuxtLink
            to="/posts"
            class="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group mb-12"
          >
            All Posts
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>

        <div class="space-y-3">
          <NuxtLink
            v-for="(post, i) in posts"
            :key="post._path"
            :to="post._path"
            class="group flex items-start gap-5 p-5 rounded-2xl border border-white/[0.05] hover:border-primary/20 hover:bg-surface/40 transition-all duration-200"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <span class="font-mono text-xs text-muted mt-1 w-6 flex-shrink-0 select-none">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="flex-1 min-w-0">
              <h3 class="text-base font-semibold text-white group-hover:text-primary transition-colors mb-1.5 line-clamp-1">
                {{ post.title }}
              </h3>
              <p v-if="post.description" class="text-sm text-secondary line-clamp-1">{{ post.description }}</p>
            </div>
            <div class="flex-shrink-0 flex items-center gap-3">
              <span class="hidden sm:block font-mono text-xs text-muted">{{ post.date }}</span>
              <svg class="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section
      ref="ctaEl"
      class="py-24"
      :class="ctaVisible ? 'reveal-visible' : 'reveal-hidden'"
    >
      <div class="section-container">
        <div class="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-accent/[0.04] p-12 md:p-16 text-center">
          <!-- Background decoration -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[80px] -z-0"></div>
          <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <span class="relative flex h-1.5 w-1.5">
                <span class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              <span class="text-primary text-xs font-mono">Available for new projects</span>
            </div>

            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's build something
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400"> great together</span>
            </h2>
            <p class="text-secondary text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              I'm currently open to freelance projects and full-time opportunities. Let's talk about how I can help.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="mailto:nn.akramjon@gmail.com" class="btn-primary">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send me an email
              </a>
              <NuxtLink to="/about" class="btn-ghost">
                View Resume
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
