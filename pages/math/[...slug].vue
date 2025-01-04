<script setup lang="ts">
definePageMeta({
  name: "math-slug",
})

const categories = ["Matematika", "Math"]

onMounted(() => {
  const observer = new MutationObserver(() => {
    document.querySelectorAll("pre").forEach((block) => {
      if (!block.querySelector(".copy-btn")) {
        const button = document.createElement("button")
        button.innerText = "Copy"
        button.className = "copy-btn"
        block.appendChild(button)

        button.addEventListener("click", () => {
          const code = block.querySelector("code")?.innerText || ""
          navigator.clipboard.writeText(code).then(() => {
            button.innerText = "Copied!"
            setTimeout(() => (button.innerText = "Copy"), 2000)
          })
        })
      }
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })
})
</script>

<template>
  <div>
    <main class="py-10 custom-code">
      <LayoutContainer>
        <NuxtLink to="/math" class="flex items-center">
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
    <LayoutContainer>
      <ul class="flex flex-wrap gap-3 ml-0">
        <li
          v-for="category in categories"
          :key="category"
          class="px-3 py-1 font-bold text-white rounded-full bg-primary-green selection:bg-transparent selection:text-white"
        >
          <NuxtLink to="/" class="whitespace-nowrap">{{ category }}</NuxtLink>
        </li>
      </ul>
      <SharedSharePost />
    </LayoutContainer>
  </div>
</template>
