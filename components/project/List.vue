<template>
  <ContentList path="/project" v-slot="{ list }">
    <ul class="flex flex-col gap-5 py-10">
      <li v-for="project in list" class="mb-5">
        <NuxtLink
          :to="project._path"
          class="flex items-end justify-between group"
        >
          <div class="max-w-lg">
            <h3
              class="group-hover:text-primary-green transition-colors duration-100"
            >
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ project.description }}
            </p>
          </div>
          <div
            class="flex-1 mx-5 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
          ></div>
          <div>
            <img width="50" src="/images/1.png" alt="" format="webp" />
          </div>
        </NuxtLink>
      </li>
    </ul>
  </ContentList>
</template>
