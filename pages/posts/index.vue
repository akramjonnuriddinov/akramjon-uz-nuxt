<script setup lang="ts">
useSeoMeta({
  title: "Posts | Akramjon.N",
})
</script>

<template>
  <LayoutContainer class="flex flex-col">
    <SharedBreadcrump breadCrump="Posts (page 1)" />
    <SharedHero title="Posts 📒" content="All the articles I've posted." />
    <PostList />
    <PostPagination class="flex-1" />
  </LayoutContainer>
</template>
