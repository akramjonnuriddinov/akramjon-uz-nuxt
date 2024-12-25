<script setup lang="ts">
import { ref, onMounted } from "vue"
import IconsLinkedin from "@/components/icons/Linkedin.vue"
import IconsTelegram from "@/components/icons/Telegram.vue"

const components = [
  {
    link: "https://www.linkedin.com/in/akramjon-nuriddinov/",
    name: IconsLinkedin,
  },
  {
    link: "https://t.me/n_akramjon",
    name: IconsTelegram,
  },
]

const location = ref("")

onMounted(() => {
  location.value = window.location.href
})
</script>

<template>
  <div class="py-6">
    <h2>Share this post on:</h2>
    <ul class="flex gap-3">
      <li v-for="(component, index) in components" :key="index">
        <a
          class="flex w-5 transition-all duration-100 hover:text-primary-green hover:rotate-6"
          :href="`https://t.me/share/url?url=${location}`"
          target="_blank"
        >
          <component :is="component.name" />
        </a>
      </li>
    </ul>
  </div>
</template>
