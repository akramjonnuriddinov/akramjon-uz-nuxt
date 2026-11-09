<script setup lang="ts">
import { IconsEmail, IconsGithub, IconsLinkedin, IconsTelegram } from '#components'
import { profile } from '~/data/profile'

const links = [
  { label: 'GitHub', href: 'https://github.com/akramjonnuriddinov', icon: IconsGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akramjon-nuriddinov', icon: IconsLinkedin },
  { label: 'Telegram', href: 'https://t.me/n_akramjon', icon: IconsTelegram },
  { label: 'Email', href: `mailto:${profile.email}`, icon: IconsEmail },
]
</script>

<template>
  <ul class="flex items-center gap-5" aria-label="Social media">
    <li v-for="link in links" :key="link.label">
      <a
        :href="link.href"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        rel="noreferrer noopener"
        :aria-label="link.label"
        :title="link.label"
        class="block text-secondary transition-colors hover:text-foreground"
      >
        <component :is="link.icon" class="h-6 w-6" />
      </a>
    </li>
  </ul>
</template>
