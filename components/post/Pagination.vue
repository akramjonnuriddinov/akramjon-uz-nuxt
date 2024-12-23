<template>
  <div class="flex items-end justify-center">
    <div class="flex items-center gap-2">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 transition-colors duration-100 hover:text-primary-green"
      >
        <IconsLeft class="w-4" />
        Prev</NuxtLink
      >
      <span class="mx-5">1 / 5</span>
      <NuxtLink
        to="/"
        class="flex items-center gap-2 transition-colors duration-100 hover:text-primary-green"
      >
        Next
        <IconsRight class="w-4" />
      </NuxtLink>
    </div>
  </div>
</template>
