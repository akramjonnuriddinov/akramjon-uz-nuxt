<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="(service, i) in services"
      :key="service.title"
      class="group p-6 rounded-2xl border border-white/[0.06] bg-surface/30 hover:bg-surface/70 hover:border-primary/20 transition-all duration-200 hover:-translate-y-0.5"
      :style="{ transitionDelay: `${i * 60}ms` }"
    >
      <div class="w-10 h-10 mb-4 rounded-xl flex items-center justify-center bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-110">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
        </svg>
      </div>
      <h3 class="text-base font-semibold text-white group-hover:text-primary transition-colors mb-2">
        {{ service.title }}
      </h3>
      <p class="text-sm text-secondary leading-relaxed">{{ service.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Websites & Web Apps',
    description: 'Landing pages, corporate sites, online stores and custom web applications — fast, responsive and SEO-friendly.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
  {
    title: 'Telegram Bots',
    description: 'Bots for orders, bookings, customer support, notifications and payments — integrated with your business.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
  },
  {
    title: 'CRM & Admin Panels',
    description: 'Custom CRM systems, dashboards and internal tools to manage clients, sales, staff and inventory.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform iOS and Android apps for your customers and team.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'Backend & Integrations',
    description: 'APIs, databases, payment systems (Click, Payme), and integrations with third-party services.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  },
  {
    title: 'Support & Maintenance',
    description: 'Hosting, deployment, bug fixes and ongoing improvements for your existing products.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
]
</script>
