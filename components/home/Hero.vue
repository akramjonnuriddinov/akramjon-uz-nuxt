<template>
  <section class="py-20">
    <LayoutContainer>
      <h1 class="mb-8 text-4xl font-bold">{{ $t("hi") }}</h1>
      <p class="mb-4">
        {{ $t("hero_text") }}
      </p>
      <div class="flex items-center gap-2">
        <p>Social Links:</p>
        <SharedSocialLinks />
      </div>
    </LayoutContainer>
  </section>
</template>
