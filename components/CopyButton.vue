<template>
  <button @click="copyCode" class="copy-btn" ref="copyButton">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue"

// A ref to the button itself
const copyButton = ref<HTMLElement | null>(null)
const buttonText = ref("Copy")

function copyCode() {
  // Find the closest `pre` element using `copyButton`
  const parentPre = copyButton.value?.closest("pre")
  const code = parentPre?.querySelector("code")?.innerText || ""

  navigator.clipboard.writeText(code).then(() => {
    buttonText.value = "Copied!"
    setTimeout(() => {
      buttonText.value = "Copy"
    }, 2000)
  })
}
</script>

<style scoped>
.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 0.9rem;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.copy-btn:hover {
  opacity: 1;
}
</style>
