<template>
  <footer class="py-10">
    <LayoutContainer>
      <div class="flex flex-col gap-4 md:flex-row items-center justify-between">
        <p class="whitespace-nowrap">
          Copyright © 2025 | {{ $t("copyright") }}
        </p>
        <div>
          <SharedSocialLinks />
        </div>
      </div>
    </LayoutContainer>
  </footer>
</template>
