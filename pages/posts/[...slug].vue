<script setup lang="ts">
definePageMeta({
  name: "posts-slug",
})
</script>

<template>
  <main class="py-10 custom-code">
    <AppContainer>
      <NuxtLink to="/posts" class="flex items-center">
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
    </AppContainer>
  </main>
</template>

<style>
* {
  scroll-behavior: smooth;
}
/* Header and Title */
.custom-code h1,
.custom-code h2,
.custom-code h3,
.custom-code h4,
.custom-code h5,
.custom-code h6 {
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.custom-code h1 {
  font-size: 2rem;
  font-weight: bold;
}

.custom-code h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
}

.custom-code h3 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}

/* Lists */
.custom-code ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.custom-code ul li {
  margin-bottom: 0.5rem;
}

/* Code Styling */
.custom-code code {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: "Jetbrains Mono", "IBM Plex Mono" !important;
  line-height: 2;
  zoom: 120%;
  font-size: 0.95rem;
}

.custom-code pre {
  @apply bg-white dark:bg-[#252526] text-[#252526] dark:text-[#f8f8f2];
  padding: 1rem 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: "Jetbrains Mono", "IBM Plex Mo" !important;
  font-size: 0.95rem;
  margin: 1rem 0;
  line-height: 1.5;
  border: 1px solid #252525;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); */
}

.custom-code pre code .keyword {
  color: #66d9ef;
}

.custom-code pre code .string {
  color: #a6e22e;
}

.custom-code pre code .number {
  color: #ae81ff;
}

.custom-code pre code .comment {
  color: #75715e;
  font-style: italic;
}

.custom-code pre code .function {
  color: #fd971f;
}

/* Images */
.custom-code img {
  max-width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Blockquote */
.custom-code blockquote {
  margin: 1.5rem 0;
  padding: 1rem;
  border-left: 4px solid #3498db;
  font-style: italic;
}

/* Summary GIFs */
.custom-code .summary-img {
  display: block;
  margin: 1rem auto;
  max-width: 400px;
  border-radius: 8px;
}

.custom-code table {
  border-collapse: collapse;
  width: 100%;
}

.custom-code th,
.custom-code td {
  border: 1px solid #ccc;
  padding: 8px 12px;
}

.custom-code th {
  background-color: #f4f4f4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .custom-code h1 {
    font-size: 2rem;
  }

  .custom-code h2 {
    font-size: 1.75rem;
  }

  .custom-code h3 {
    font-size: 1.5rem;
  }

  .custom-code .container {
    padding: 1rem;
  }
}
</style>
