<script setup lang="ts">
useSeoMeta({
  title: "Math | Akramjon.N",
})
</script>

<template>
  <div>
    <LayoutContainer class="flex flex-col">
      <SharedBreadcrump breadCrump="Math (page 1)" />
      <SharedHero title="Math 📒" content="All the articles I've posted." />
      <MathList />
      <PostPagination class="flex-1" />
    </LayoutContainer>
  </div>
</template>
