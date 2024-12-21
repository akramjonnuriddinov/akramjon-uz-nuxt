<script lang="ts" setup>
const searchTerm = ref("")

const { data: articles, refresh } = await useAsyncData("posts", () =>
  queryContent("posts")
    .only(["id", "title", "description", "keywords", "published"])
    .where({
      $or: [
        { id: { $contains: searchTerm.value } },
        { title: { $contains: searchTerm.value } },
        { description: { $contains: searchTerm.value } },
        { keywords: { $contains: searchTerm.value } },
        { published: { $contains: searchTerm.value } },
      ],
    })
    .limit(10)
    .find()
)

const search = () => refresh()

const highlightText = (text: string) => {
  if (!searchTerm.value) return text
  const regExp = new RegExp(`(${searchTerm.value})`, "gi")
  return text.replace(regExp, '<span class="bg-primary-green/60">$1</span>')
}
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="relative w-[70%] flex items-center py-10">
      <input
        v-model="searchTerm"
        @input="search"
        class="w-full px-12 py-2 border border-gray-500 rounded-full focus:outline-primary-dark dark:bg-transparent"
        type="text"
        placeholder="Search for anything..."
      />
      <IconsSearch class="absolute w-5 text-gray-400 left-4" />
    </div>
  </div>
  <div v-if="searchTerm" class="w-[70%] mx-auto shadow-xl rounded-md p-5">
    <p class="py-4">
      Found {{ articles?.length }} results for '{{ searchTerm }}'
    </p>

    <ul class="flex flex-col">
      <li
        v-for="article in articles"
        class="py-2 border-b first:border-t last:border-none border-primary-green"
      >
        <h3 class="text-lg font-bold">
          <NuxtLink
            v-html="highlightText(article.title as any)"
            :to="{
              name: 'posts-slug',
              params: {
                slug: article.id,
              },
            }"
          >
          </NuxtLink>
        </h3>
        <p v-html="highlightText(article.description)"></p>
      </li>
    </ul>
  </div>
</template>
