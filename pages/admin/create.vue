<script setup lang="ts">
import PostForm from '~/components/admin/PostForm.vue'

definePageMeta({
  layout: 'admin'
})

const { createPost } = usePostsApi()
const router = useRouter()
const submitting = ref(false)

const handleCreate = async (data: any) => {
  submitting.value = true
  try {
    await createPost(data)
    router.push('/admin')
  } catch (error) {
    console.error('Failed to create post', error)
    alert('Failed to create post')
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-8">
    <div>
      <h1 class="text-3xl font-bold font-outfit text-white">Create New Post</h1>
      <p class="text-gray-400 mt-1">Draft a new article for your blog.</p>
    </div>

    <PostForm 
      submit-label="Publish Post" 
      :loading="submitting"
      @submit="handleCreate" 
    />
  </div>
</template>
