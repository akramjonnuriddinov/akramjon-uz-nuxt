<script setup lang="ts">
import { ref } from "vue"

const title = ref("")
const content = ref("")

const createMarkdownFile = () => {
  if (!title.value || !content.value) {
    alert("Title and content are required!")
    return
  }

  const date = new Date().toISOString().split("T")[0]
  const filename = `${date}-${title.value.toLowerCase().replace(/ /g, "-")}.md`

  const fileContent = `---
title: "${title.value}"
description: "Auto-generated post."
keywords: []
published: "${date}"
---

${content.value}`

  const blob = new Blob([fileContent], { type: "text/markdown" })
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = filename
  link.click()
}
</script>

<template>
  <div>
    <LayoutContainer>
      <form @submit.prevent="createMarkdownFile" class="flex flex-col">
        <div class="flex flex-col w-full mb-4">
          <label for="title" class="mb-2">Title</label>
          <input
            v-model="title"
            type="text"
            placeholder="Enter post title"
            class="px-4 py-2 mb-4 bg-transparent border-2 rounded-md outline-none border-primary-green"
            id="title"
          />
        </div>
        <div>
          <label for="content" class="flex flex-col w-full mb-2">Content</label>
          <textarea
            v-model="content"
            placeholder="Enter post content"
            class="mb-4 p-4 bg-transparent min-h-[400px] w-full border-2 rounded-md outline-none border-primary-green"
            id="content"
          ></textarea>
        </div>
        <button type="submit" class="hover:text-primary-green">
          Download Markdown File
        </button>
      </form>
    </LayoutContainer>
  </div>
</template>

<style scoped></style>
