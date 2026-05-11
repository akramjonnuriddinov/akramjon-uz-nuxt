---
name: Portfolio Project Context
description: Akramjon's personal portfolio site — tech stack, design system, and key decisions
type: project
---

Nuxt 3 personal portfolio for Akramjon Nuriddinov (Vue.js / Frontend Developer).

**Why:** Personal brand site with blog and projects showcase.

**How to apply:** When making changes, follow the established design system (see below). Don't break content layer (@nuxt/content).

## Design System (post-May-2026 redesign)

- **Colors:** background `#050509`, surface `#0d0d16`, primary `#00dc82` (Nuxt green), accent `#818cf8`
- **Fonts:** Outfit (sans), JetBrains Mono (mono)
- **Key utility classes:** `glass-card`, `btn-primary`, `btn-ghost`, `section-container`, `reveal-hidden`/`reveal-visible`, `bg-grid-pattern`, `text-gradient`, `divider`, `tag`, `tag-primary`
- **Scroll reveal:** `useReveal()` composable in `composables/useReveal.ts`
- **Navbar:** Floating pill style (`fixed top-5`, centered, glassmorphism)
- **Hero:** Full-screen with animated gradient text, social links, decorative floating code snippets

## Stack

- Nuxt 3.x + Vue 3 + TypeScript
- Tailwind CSS v3 + @tailwindcss/typography
- @nuxt/content v2 (blog posts in `content/posts/`, projects in `content/projects/`)
- @nuxtjs/i18n (en/uz/ru, currently minimal usage)
- pnpm package manager

## Key files

- `tailwind.config.js` — colors, animations, keyframes
- `assets/css/style.css` — base styles, utility classes
- `layouts/default.vue` — ambient blobs + grid background
- `composables/useReveal.ts` — IntersectionObserver scroll reveal
- `components/AppNavbar.vue` — floating pill nav
- `components/HeroSection.vue` — full-screen hero
- `pages/index.vue` — home with stats, projects, tech, posts, CTA sections
- `pages/about.vue` — bio, timeline experience, education, languages

## Personal info

- Name: Akramjon Nuriddinov
- Email: nn.akramjon@gmail.com
- Location: Namangan, Uzbekistan
- Current role: Vue.js | Laravel Dev @ 2ROOMZ
- GitHub: akramjonnuriddinov
- LinkedIn: akramjon-nuriddinov
- Telegram: n_akramjon
