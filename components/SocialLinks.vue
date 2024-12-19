<script setup lang="ts">
import IconsGithub from "@/components/icons/Github.vue"
import IconsLinkedin from "@/components/icons/Linkedin.vue"
import IconsEmail from "@/components/icons/Email.vue"
import IconsPhone from "~/components/icons/Phone.vue"

const components = [
  {
    link: "https://github.com/akramjonnuriddinov",
    name: IconsGithub,
  },
  {
    link: "https://www.linkedin.com/in/akramjon-nuriddinov/",
    name: IconsLinkedin,
  },
  {
    link: "nn.akramjon@gmail.com",
    name: IconsEmail,
  },
  {
    link: "tel:+998900506166",
    name: IconsPhone,
  },
]
</script>

<template>
  <ul class="flex gap-3">
    <li v-for="component in components">
      <a
        class="flex w-5 transition-all duration-100 hover:text-primary-green hover:rotate-6"
        :title="component.link"
        :href="component.link"
      >
        <component :is="component.name" />
      </a>
    </li>
  </ul>
</template>
