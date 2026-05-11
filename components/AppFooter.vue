<template>
  <footer class="relative mt-24 border-t border-white/[0.06] overflow-hidden">
    <!-- Top gradient line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

    <div class="section-container py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        <!-- Brand -->
        <div class="space-y-4">
          <div class="font-mono font-bold text-xl">
            <span class="text-primary">&lt;</span>
            <span class="text-white">AN</span>
            <span class="text-primary">/&gt;</span>
          </div>
          <p class="text-secondary text-sm leading-relaxed max-w-xs">
            Frontend Developer building exceptional web experiences with Vue.js, Nuxt, and modern technologies.
          </p>
          <div class="flex items-center gap-1">
            <span class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            <span class="text-xs font-mono text-primary ml-1.5">Available for hire</span>
          </div>
        </div>

        <!-- Navigation -->
        <div class="space-y-4">
          <h4 class="text-xs font-mono text-muted uppercase tracking-widest">Navigation</h4>
          <nav class="grid grid-cols-2 gap-2">
            <NuxtLink
              v-for="link in links"
              :key="link.path"
              :to="link.path"
              class="text-secondary hover:text-white text-sm transition-colors hover:translate-x-0.5 transform duration-150"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h4 class="text-xs font-mono text-muted uppercase tracking-widest">Get in touch</h4>
          <div class="space-y-2">
            <a href="mailto:nn.akramjon@gmail.com" class="flex items-center gap-2 text-secondary hover:text-primary text-sm transition-colors group">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              nn.akramjon@gmail.com
            </a>
          </div>
          <div class="flex items-center gap-3 pt-2">
            <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank" rel="noopener noreferrer" :aria-label="social.label"
               class="w-9 h-9 rounded-xl border border-white/[0.07] bg-surface/50 flex items-center justify-center text-muted hover:text-white hover:border-white/15 hover:bg-surface transition-all duration-200">
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="divider mb-6"></div>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-mono">
        <span>© {{ new Date().getFullYear() }} Akramjon Nuriddinov. All rights reserved.</span>
        <span class="flex items-center gap-1.5">
          Built with
          <span class="text-primary">Vue.js</span>
          &amp;
          <span class="text-primary">Nuxt</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/posts' },
]

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

const socials = [
  { label: 'GitHub', href: 'https://github.com/akramjonnuriddinov', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akramjon-nuriddinov', icon: LinkedinIcon },
  { label: 'Telegram', href: 'https://t.me/n_akramjon', icon: TelegramIcon },
]
</script>
