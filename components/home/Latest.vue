<template>
  <section>
    <LayoutContainer>
      <h2 class="mb-2 text-2xl font-semibold">📝 {{ $t("latest_posts") }}</h2>
      <ContentList path="posts" v-slot="{ list }">
        <ul class="flex flex-col">
          <li
            v-for="post in list"
            :key="post.title"
            class="pt-4 pb-10 font-medium transition-all duration-100 border-b group hover:opacity-80 last:border-none"
          >
            <NuxtLink
              :to="post._path"
              class="flex items-center justify-between"
            >
              <span>{{ post.title }}</span>
              <div class="w-4 transition-all opacity-0 group-hover:opacity-100">
                <IconsRight />
              </div>
            </NuxtLink>
          </li>
        </ul>
      </ContentList>
      <div
        class="flex justify-center mt-10 mb-20 transition-opacity duration-100 hover:opacity-80"
      >
        <NuxtLink to="/posts" class="flex items-center gap-2"
          >📚 {{ $t("all_posts") }}
          <IconsRight class="w-4" />
        </NuxtLink>
      </div>
    </LayoutContainer>
  </section>
</template>
