<script setup lang="ts">
import PostForm from '~/components/admin/PostForm.vue'

definePageMeta({
  layout: 'admin'
})

const route = useRoute()
const router = useRouter()
const { fetchPost, updatePost } = usePostsApi()
const post = ref(null)
const loading = ref(true)
const submitting = ref(false)

onMounted(async () => {
  post.value = await fetchPost(route.params.id as string)
  loading.value = false
  
  if (!post.value) {
    alert('Post not found')
    router.push('/admin')
  }
})

const handleUpdate = async (data: any) => {
  submitting.value = true
  try {
    await updatePost(route.params.id as string, data)
    router.push('/admin')
  } catch (error) {
    console.error('Failed to update post', error)
    alert('Failed to update post')
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-8">
    <div>
      <h1 class="text-3xl font-bold font-outfit text-white">Edit Post</h1>
      <p class="text-gray-400 mt-1">Update your content.</p>
    </div>

    <div v-if="loading" class="text-gray-400">Loading editor...</div>
    
    <PostForm 
      v-else
      :initial-data="post"
      submit-label="Save Changes" 
      :loading="submitting"
      @submit="handleUpdate" 
    />
  </div>
</template>
