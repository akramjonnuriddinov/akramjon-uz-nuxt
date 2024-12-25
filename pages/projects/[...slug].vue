<script setup lang="ts">
definePageMeta({
  name: "projects-slug",
})
</script>

<template>
  <main class="py-10 custom-code">
    <LayoutContainer>
      <NuxtLink to="/projects" class="flex items-center">
        <IconsBack class="w-2.5 mr-2" />
        Go back
      </NuxtLink>
      <ContentDoc>
        <template v-slot="{ doc }">
          <Head>
            <Title>{{ doc.title }}</Title>
            <Meta name="description" :content="doc.description" />
            <Meta name="keywords" :content="doc.keywords" />
          </Head>
          <article>
            <h1 class="mt-2 text-2xl font-bold">{{ doc.title }}</h1>
            <div class="flex my-10">
              <IconsCalendar class="w-4 mr-3" />
              <time>{{ doc.published }}</time>
            </div>
            <ContentRenderer :value="doc" />
          </article>
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </LayoutContainer>
  </main>
</template>
