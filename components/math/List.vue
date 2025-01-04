<template>
  <ContentList path="/math" v-slot="{ list }">
    <ul class="flex flex-col gap-10 py-10">
      <li v-for="math in list" :key="math.id">
        <h3
          class="mb-1 text-lg font-medium transition-colors duration-100 hover:text-primary-green dark:hover:text-primary-light dark:text-primary-green"
        >
          <NuxtLink :to="math._path">
            {{ math.title }}
          </NuxtLink>
        </h3>
        <p class="mb-1">{{ math.description }}</p>
        <NuxtLink
          :to="math._path"
          class="transition-colors duration-100 hover:text-primary-green dark:hover:text-primary-light dark:text-primary-green"
          >Read More</NuxtLink
        >
      </li>
    </ul>
  </ContentList>
</template>
