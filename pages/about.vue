<script setup lang="ts">
useSeoMeta({
  title: "About 🏋️ | Akramjon.N",
})
</script>

<template>
  <LayoutContainer>
    <SharedBreadcrump bread-crump="About" />
    <SharedHero title="About 🏋️" />
    <h2 class="my-10">Frontend Developer | Vue.js | Uzbekistan</h2>
    <p class="mb-5">
      I’m a frontend developer passionate about crafting exceptional web
      experiences. With a background in media informatics, I thrive on bridging
      the gap between user-facing interfaces and robust backend systems.
    </p>
    <p>
      My journey is fueled by continuous learning and a desire to share
      knowledge.
    </p>

    <div class="py-5 mt-10">
      <h2 class="mb-5 text-2xl font-semibold text-primary-green">
        Professional Journey
      </h2>
      <ul class="flex flex-col">
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          <span class="text-primary-green">Vue.js Developer</span>
          <span>|</span>
          <span>Namangan Engineering-Construction Institute</span>
          <span>|</span>
          <span>2024, September - Present</span>
        </li>
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          <span class="text-primary-green"
            >Frontend Developer (Internship)
          </span>
          <span>|</span>
          <span>Teamly</span>
          <span>|</span>
          <span>2023, January - 2024, March</span>
        </li>
      </ul>
    </div>
    <div class="py-5">
      <h2 class="mb-5 text-2xl font-semibold text-primary-green">Tech Stack</h2>
      <ul class="flex flex-col">
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          <span class="text-primary-green">Language: </span>
          <span>HTML, CSS, JavaScript, TypeScript, Golang</span>
        </li>
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          <span class="text-primary-green">Frameworks: </span>
          <span>Vue.js, Nuxt, Tailwind, Firebase</span>
        </li>
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          <span class="text-primary-green">Store: </span>
          <span>Pinia, Vuex</span>
        </li>
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          <span class="text-primary-green">Tools: </span>
          <span>Git, VS Code, Figma, pnpm, yarn</span>
        </li>
      </ul>
    </div>
    <div class="py-5">
      <h2 class="mb-5 text-2xl font-semibold text-primary-green">Educations</h2>
      <ul class="flex flex-col">
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          <span class="text-primary-green"
            >Tashkent University of Information Technologies</span
          >
          <span>|</span>
          <span>Bachelor's degree</span>
          <span>|</span>
          <span>2020-2024</span>
        </li>
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          <span class="text-primary-green">Namangan Academic Lyceum</span>
          <span>|</span>
          <span>Lyceum</span>
          <span>|</span>
          <span>2018-2020</span>
        </li>
      </ul>
    </div>
    <div class="py-5">
      <h2 class="mb-5 text-2xl font-semibold text-primary-green">Languages</h2>
      <ul class="flex flex-col">
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          Uzbek (Native)
        </li>
        <li
          class="flex items-center last:mb-0 mb-5 gap-4 before:w-1.5 before:h-1.5 before:flex before:rounded-full before:bg-primary-green"
        >
          English (Intermediate)
        </li>
      </ul>
    </div>
  </LayoutContainer>
</template>
