<script setup lang="ts">
useSeoMeta({
  title: "Posts | Akramjon.N",
})
</script>

<template>
  <AppContainer>
    <AppBreadcrump breadCrump="Posts (page 1)" />
    <SharedHero title="Posts" content="All the articles I've posted." />
    <PostList />
    <BlogPagination />
  </AppContainer>
</template>
