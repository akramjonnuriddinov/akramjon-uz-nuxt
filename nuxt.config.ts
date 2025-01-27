export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/style.css'],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Akramjon Nuriddinov | Vue.js Developer",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/fav.png' }],
      meta: [
        { hid: 'description', name: 'description', content: 'Blog website from Vue.js developer' },
        { hid: 'og:description', property: 'og:description', content: 'Blog website from Vue.js developer' },
        { hid: 'og:title', property: 'og:title', content: 'Akramjon.N | Vue.js developer' },
        { hid: 'og:keywords', property: 'og:keywords', content: 'Akramjon.N | Vue.js developer' },
      ]
    }
  },

  content: {
    highlight: {
      // theme: 'dracula', // Choose from popular themes like 'dracula', 'github-dark', etc.
      theme: {
        default: 'light-plus',
        dark: 'dracula'
      }
    },
  },

  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    langDir: '/locales',
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