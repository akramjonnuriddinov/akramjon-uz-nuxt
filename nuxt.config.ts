export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/style.css'],
  pages: true,
  routeRules: {
    '/Nuriddinov_Akramjon_CV.pdf': { redirect: '/Akramjon_Nuriddinov_CV.pdf' },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Akramjon Nuriddinov | Full-Stack Developer",
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/fav.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700&display=swap' }
      ],
      meta: [
        { name: 'description', content: 'Full-stack developer (Vue, React, Laravel, Go) building features used by 800+ hotels across the EU, UK and Canada. Open to remote roles.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Akramjon Nuriddinov' },
        { property: 'og:url', content: 'https://nuriddinov.uz' },
        { property: 'og:image', content: 'https://nuriddinov.uz/og.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://nuriddinov.uz/og.png' },
      ]
    }
  },

  content: {
    highlight: {
      theme: 'dracula', // Choose from popular themes like 'dracula', 'github-dark', etc.
    //   theme: {
    //     default: 'dracula', // light-plus
    //     dark: 'dracula'
    //   }
    },
  },

  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    langDir: 'locales',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'uz',
        file: 'uz.json',
        name: 'Uzbek',
      },
      {
        code: 'ru',
        file: "ru.json",
        name: "Русский"
      }
    ]
  }
})