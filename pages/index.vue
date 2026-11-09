<script setup lang="ts">
import { education, experience, profile } from '~/data/profile'

definePageMeta({ home: true })

useSeoMeta({
  title: 'Akramjon Nuriddinov | Full-Stack Developer — Vue · React · Laravel · Go',
  description: 'Full-stack developer building features used by 800+ hotels across the EU, UK and Canada. Vue, React, Laravel, Go, Flutter and AI integrations. Open to remote roles.',
  ogTitle: 'Akramjon Nuriddinov | Full-Stack Developer',
  ogDescription: 'Building features used by 800+ hotels across the EU, UK and Canada. Vue, React, Laravel, Go, Flutter and AI integrations. Open to remote roles.',
})

const { data: projects } = await useAsyncData('featured-projects', () =>
  queryContent('projects').where({ featured: true }).sort({ id: -1 }).find()
)

const { data: posts } = await useAsyncData('latest-posts', async () => {
  const all = await queryContent('posts').find()
  return all.sort(byNewest).slice(0, 4)
})
</script>

<template>
  <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
    <a href="#content" class="absolute left-0 top-0 z-50 -translate-y-full rounded-br bg-primary px-4 py-3 text-sm font-bold text-background focus-visible:translate-y-0">
      Skip to content
    </a>

    <div class="lg:flex lg:justify-between lg:gap-4">
      <SiteSidebar />

      <div id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <SiteSection id="about" label="About">
          <div class="space-y-4">
            <p>
              I'm a full-stack developer based in Namangan, Uzbekistan, working remotely in UTC+5. I care about clean,
              maintainable code that solves real problems: not just code that works, but code the next developer
              (or future me) won't hate.
            </p>
            <p>
              Right now I'm a Software Developer at
              <a href="https://dgstay.com/" target="_blank" rel="noreferrer noopener" class="font-medium text-foreground hover:text-primary focus-visible:text-primary">2ROOMZ</a>,
              a guest-experience platform for hotels. I own features end to end, from Vue and React frontends to
              Laravel APIs, real-time chat, AI voice and Flutter releases.
            </p>
            <p>
              When I'm not coding, I'm usually reading about business, exploring a new idea, or going deeper on
              something I already use. I speak Uzbek natively, English at B1–B2 and some Russian.
            </p>
            <p>
              Need a website, Telegram bot or CRM for your business?
              <NuxtLink to="/services" class="font-medium text-foreground hover:text-primary focus-visible:text-primary">See my services</NuxtLink>.
            </p>
          </div>
        </SiteSection>

        <SiteSection id="experience" label="Experience">
          <ol class="group/list space-y-12">
            <SiteRow v-for="job in experience" :key="job.company" :title="`${job.role} · ${job.company}`" :to="job.url">
              <template #aside>
                <p class="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">{{ job.period }}</p>
              </template>
              <p class="mt-2 text-sm leading-normal">{{ job.summary }}</p>
              <SiteTags :tags="job.tags" class="mt-3" />
            </SiteRow>
          </ol>

          <div class="mt-12">
            <SiteArrowLink :to="profile.cv" new-tab>View Full Résumé</SiteArrowLink>
          </div>

          <h3 class="mb-6 mt-16 text-xs font-bold uppercase tracking-widest text-foreground">Education</h3>
          <ul class="space-y-6">
            <li v-for="item in education" :key="item.institution" class="grid gap-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
              <p class="mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">{{ item.period }}</p>
              <div class="sm:col-span-6">
                <p class="font-medium leading-snug text-foreground">{{ item.institution }}</p>
                <p class="mt-1 text-sm">{{ item.degree }}</p>
              </div>
            </li>
          </ul>
        </SiteSection>

        <SiteSection id="projects" label="Projects">
          <ul class="group/list space-y-12">
            <SiteRow v-for="project in projects" :key="project._path" :title="shortTitle(project.title)" :to="project._path" aside-last>
              <template #aside>
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="`Screenshot of ${shortTitle(project.title)}`"
                  loading="lazy"
                  width="200"
                  height="125"
                  class="mt-1 w-48 rounded border-2 border-white/10 transition group-hover:border-white/25 motion-reduce:transition-none sm:w-full"
                />
                <div v-else class="mt-1 flex aspect-[8/5] w-48 flex-col items-center justify-center rounded border-2 border-white/10 bg-surface-2 transition group-hover:border-white/25 motion-reduce:transition-none sm:w-full">
                  <span class="font-mono text-lg font-bold text-primary">{{ project.tile }}</span>
                  <span class="text-[11px] text-secondary">{{ project.tileLabel }}</span>
                </div>
              </template>
              <p class="mt-2 text-sm leading-normal">{{ project.description }}</p>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noreferrer noopener"
                class="relative z-20 mt-2 inline-block font-mono text-xs text-secondary transition-colors hover:text-primary focus-visible:text-primary"
              >{{ hostname(project.url) }} ↗</a>
              <SiteTags :tags="project.tags" class="mt-3" />
            </SiteRow>
          </ul>

          <div class="mt-12">
            <SiteArrowLink to="/projects">View All Projects</SiteArrowLink>
          </div>
        </SiteSection>

        <SiteSection id="writing" label="Writing">
          <ul class="group/list space-y-10">
            <SiteRow v-for="post in posts" :key="post._path" :title="post.title" :to="post._path">
              <template #aside>
                <p class="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">{{ publishedYear(post.published) }}</p>
              </template>
            </SiteRow>
          </ul>

          <div class="mt-12">
            <SiteArrowLink to="/posts">View All Writing</SiteArrowLink>
          </div>
        </SiteSection>

        <footer class="max-w-md pb-16 text-sm text-muted sm:pb-0">
          <p>
            Built with Nuxt and Tailwind CSS, set in Outfit. Layout inspired by
            <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer noopener" class="font-medium text-secondary hover:text-primary focus-visible:text-primary">Brittany Chiang</a>.
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>
