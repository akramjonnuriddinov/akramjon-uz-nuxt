<template>
  <ContentList path="/posts" v-slot="{ list }">
    <ul class="flex flex-col gap-10 py-10">
      <li v-for="post in list" :key="post.id">
        <h3
          class="mb-1 text-lg font-medium transition-colors duration-100 hover:text-primary-green dark:hover:text-primary-light dark:text-primary-green"
        >
          <NuxtLink :to="post._path">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p class="mb-1">{{ post.description }}</p>
        <NuxtLink
          :to="post._path"
          class="transition-colors duration-100 hover:text-primary-green dark:hover:text-primary-light dark:text-primary-green"
          >Read More</NuxtLink
        >
      </li>
    </ul>
  </ContentList>
</template>
