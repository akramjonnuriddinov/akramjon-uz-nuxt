---
title: "Creating and Downloading a Markdown File in Nuxt"
description: "Auto-generated post."
keywords: []
published: "2024-12-25"
---

Without a backend, creating files directly in the file system is not possible from the client-side browser environment due to security restrictions. However, if you're using Nuxt as a static site generator (SSG), you can use a **browser-based workaround** to download the `.md` file locally. Afterward, you can manually move the file to the appropriate directory in your project.

Here’s how you can achieve this:

### **Creating and Downloading a Markdown File in Nuxt**

#### **1. Update `add-post.vue`**

```vue [file.js]{4-6,7} meta-info=val
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
    <form @submit.prevent="createMarkdownFile">
      <input
        v-model="title"
        type="text"
        placeholder="Enter post title"
        class="mb-4"
      />
      <textarea
        v-model="content"
        placeholder="Enter post content"
        class="mb-4"
      ></textarea>
      <button type="submit">Download Markdown File</button>
    </form>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}
button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
```

### **How It Works**

1. **User Input**:

   - The user enters the title and content for the post.

2. **File Content Generation**:

   - A Markdown file structure is generated with frontmatter (`title`, `description`, `published`).

3. **Download File**:
   - A `.md` file is created and downloaded to the user’s local system.

### **Steps After Download**

- Once you download the file:
  1. Manually move it to the appropriate directory in your Nuxt project (e.g., `content/posts`).
  2. The next time you run your Nuxt app (`npm run dev` or `npm run generate`), the new file will be included.

### **Advantages**

- No backend is needed.
- It provides a quick way to create Markdown files.
- Easy to implement in your existing Nuxt setup.

### **Future Considerations**

If you often need to add posts, you might consider integrating a lightweight CMS like **Netlify CMS** or **Contentful** for dynamic content management. These tools allow you to create and manage posts directly without manual file handling.
