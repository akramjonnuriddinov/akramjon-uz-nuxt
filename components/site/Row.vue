<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  to?: string
  /** Puts the aside after the text on phones (used for images). */
  asideLast?: boolean
}>(), { to: undefined, asideLast: false })

const isExternal = (to: string) => to.startsWith('http')
</script>

<template>
  <!-- Rows only dim when a parent list has the `group/list` class. -->
  <li class="group relative grid gap-2 pb-1 transition-opacity motion-reduce:transition-none sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div class="absolute -inset-x-6 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface-2/60 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"></div>

    <div class="z-10 sm:col-span-2" :class="asideLast ? 'order-2 sm:order-1' : ''">
      <slot name="aside" />
    </div>

    <div class="z-10 sm:order-2 sm:col-span-6">
      <h3 class="font-medium leading-snug text-foreground">
        <NuxtLink
          v-if="to"
          :to="to"
          :target="isExternal(to) ? '_blank' : undefined"
          :rel="isExternal(to) ? 'noreferrer noopener' : undefined"
          class="inline-flex items-baseline text-base font-medium leading-tight transition-colors hover:text-primary focus-visible:text-primary lg:group-hover:text-primary"
        >
          <span class="absolute -inset-x-6 -inset-y-4 hidden rounded-md lg:block"></span>
          <span>{{ title }}</span>
          <svg class="ml-1 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-px group-hover:translate-x-1 motion-reduce:transition-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
        <span v-else>{{ title }}</span>
      </h3>
      <slot />
    </div>
  </li>
</template>
