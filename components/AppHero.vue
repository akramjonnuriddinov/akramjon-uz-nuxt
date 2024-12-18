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
  <section class="text-primary-light py-20">
    <AppContainer>
      <h1 class="text-4xl font-bold mb-8">👋 Hi there! I'm Akramjon.</h1>
      <p class="mb-4">
        If you want to get better as a Web Developer, I hope my blog posts will
        help you.
      </p>
      <div class="flex items-center gap-2">
        <p>Social Links:</p>
        <ul class="flex gap-3">
          <li v-for="component in components">
            <a
              class="w-5 flex hover:text-primary-green hover:rotate-6 transition-all duration-100"
              :title="component.link"
              :href="component.link"
            >
              <component :is="component.name" />
            </a>
          </li>
        </ul>
      </div>
    </AppContainer>
  </section>
</template>
