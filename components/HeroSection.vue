<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

    <!-- Decorative corner lines -->
    <div class="absolute top-24 left-8 w-16 h-16 border-l border-t border-white/5 rounded-tl-lg"></div>
    <div class="absolute top-24 right-8 w-16 h-16 border-r border-t border-white/5 rounded-tr-lg"></div>
    <div class="absolute bottom-16 left-8 w-16 h-16 border-l border-b border-white/5 rounded-bl-lg"></div>
    <div class="absolute bottom-16 right-8 w-16 h-16 border-r border-b border-white/5 rounded-br-lg"></div>

    <!-- Floating code snippets (decorative) -->
    <div class="hidden lg:block absolute top-1/4 right-[8%] font-mono text-xs text-primary/20 select-none animate-float leading-relaxed">
      <div>const dev = {</div>
      <div>&nbsp;&nbsp;name: "Akramjon",</div>
      <div>&nbsp;&nbsp;stack: ["Vue", "Nuxt"],</div>
      <div>&nbsp;&nbsp;passion: "UI/UX"</div>
      <div>}</div>
    </div>
    <div class="hidden lg:block absolute bottom-1/3 left-[6%] font-mono text-xs text-accent/20 select-none animate-float leading-relaxed" style="animation-delay: 3s;">
      <div>&lt;template&gt;</div>
      <div>&nbsp;&nbsp;&lt;Portfolio /&gt;</div>
      <div>&lt;/template&gt;</div>
    </div>

    <!-- Main content -->
    <div class="section-container relative z-10 py-24">
      <div class="max-w-4xl mx-auto text-center">

        <!-- Status badge -->
        <div
          class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/[0.06] backdrop-blur-sm mb-10"
          style="animation: fadeIn 0.6s ease-out forwards;"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span class="text-primary font-mono text-sm tracking-wide">Open to opportunities</span>
        </div>

        <!-- Headline -->
        <h1 class="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-bold leading-none tracking-tight mb-6">
          <span
            class="block text-white"
            style="animation: slideUp 0.7s ease-out 0.1s both;"
          >
            Hi, I'm
          </span>
          <span
            class="block text-transparent bg-clip-text animate-gradient-text"
            style="background-image: linear-gradient(90deg, #00dc82, #86efac, #818cf8, #00dc82); animation: slideUp 0.7s ease-out 0.2s both, gradient-text 5s ease infinite; background-size: 200% auto;"
          >
            Akramjon.
          </span>
        </h1>

        <!-- Role line -->
        <p
          class="text-xl md:text-2xl text-secondary font-light mb-6 tracking-wide"
          style="animation: slideUp 0.7s ease-out 0.32s both;"
        >
          Frontend Engineer
          <span class="text-primary/40 mx-3">·</span>
          Vue.js Specialist
          <span class="text-primary/40 mx-3">·</span>
          UI Craftsman
        </p>

        <!-- Description -->
        <p
          class="text-base md:text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          style="animation: slideUp 0.7s ease-out 0.42s both;"
        >
          I craft fast, accessible, and beautiful web experiences. Specializing in
          Vue.js &amp; Nuxt, with a focus on clean code and thoughtful design that users love.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          style="animation: slideUp 0.7s ease-out 0.52s both;"
        >
          <NuxtLink to="/projects" class="btn-primary group">
            View My Work
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
          <NuxtLink to="/about" class="btn-ghost">
            About Me
          </NuxtLink>
        </div>

        <!-- Social links -->
        <div
          class="flex items-center justify-center gap-2"
          style="animation: fadeIn 0.8s ease-out 0.65s both;"
        >
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :target="social.external ? '_blank' : undefined"
            :rel="social.external ? 'noopener noreferrer' : undefined"
            :aria-label="social.label"
            class="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-surface/30 text-muted hover:text-white hover:border-white/15 hover:bg-surface/60 transition-all duration-200"
          >
            <component :is="social.icon" class="w-4 h-4" />
            <span class="text-xs font-mono hidden sm:block">{{ social.label }}</span>
          </a>
        </div>

      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted/60 animate-bounce">
      <span class="text-[10px] font-mono uppercase tracking-widest">scroll</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const GithubIcon = defineComponent({
  render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'fill-rule': 'evenodd', d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.158-1.11-1.158-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', 'clip-rule': 'evenodd' })
  ])
})

const LinkedinIcon = defineComponent({
  render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' })
  ])
})

const TelegramIcon = defineComponent({
  render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { d: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' })
  ])
})

const EmailIcon = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
  ])
})

const socials = [
  { label: 'GitHub', href: 'https://github.com/akramjonnuriddinov', external: true, icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akramjon-nuriddinov', external: true, icon: LinkedinIcon },
  { label: 'Telegram', href: 'https://t.me/n_akramjon', external: true, icon: TelegramIcon },
  { label: 'Email', href: 'mailto:nn.akramjon@gmail.com', external: false, icon: EmailIcon },
]
</script>
