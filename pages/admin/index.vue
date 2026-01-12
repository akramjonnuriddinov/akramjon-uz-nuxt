<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

const { fetchPosts, deletePost } = usePostsApi()
const posts = ref([])
const loading = ref(true)

onMounted(async () => {
  posts.value = await fetchPosts()
  loading.value = false
})

const handleDelete = async (id: string) => {
  if (confirm('Are you sure you want to delete this post?')) {
    await deletePost(id)
    posts.value = await fetchPosts()
  }
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold font-outfit text-white">Dashboard</h1>
        <p class="text-gray-400 mt-1">Manage your blog posts and content.</p>
      </div>
      <NuxtLink to="/admin/create" class="px-4 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary-dim transition-colors flex items-center gap-2">
        <span class="i-heroicons-plus-20-solid w-5 h-5" />
        New Post
      </NuxtLink>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 bg-surface/50 border border-white/5 rounded-xl backdrop-blur-sm">
        <div class="text-gray-400 text-sm font-medium mb-2">Total Posts</div>
        <div class="text-3xl font-bold text-white">{{ posts.length }}</div>
      </div>
      <div class="p-6 bg-surface/50 border border-white/5 rounded-xl backdrop-blur-sm">
        <div class="text-gray-400 text-sm font-medium mb-2">Total Views</div>
        <div class="text-3xl font-bold text-white">12.5k</div>
      </div>
      <div class="p-6 bg-surface/50 border border-white/5 rounded-xl backdrop-blur-sm">
        <div class="text-gray-400 text-sm font-medium mb-2">Avg. Read Time</div>
        <div class="text-3xl font-bold text-white">4 min</div>
      </div>
    </div>

    <!-- Recent Posts Table -->
    <div class="bg-surface/30 border border-white/5 rounded-xl overflow-hidden">
      <div class="p-6 border-b border-white/5">
        <h2 class="text-lg font-semibold text-white">Recent Posts</h2>
      </div>
      
      <div v-if="loading" class="p-8 text-center text-gray-400">
        Loading posts...
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-white/5 text-gray-400 text-sm">
              <th class="p-4 font-medium">Title</th>
              <th class="p-4 font-medium">Date</th>
              <th class="p-4 font-medium">ID</th>
              <th class="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr v-for="post in posts" :key="post.id" class="group hover:bg-white/5 transition-colors">
              <td class="p-4">
                <div class="font-medium text-white group-hover:text-primary transition-colors">{{ post.title }}</div>
                <div class="text-sm text-gray-500 truncate max-w-xs">{{ post.description }}</div>
              </td>
              <td class="p-4 text-gray-400 text-sm">{{ post.date }}</td>
              <td class="p-4 text-gray-500 text-xs font-mono">{{ post.id }}</td>
              <td class="p-4 text-right">
                <div class="flex items-center justify-end gap-2">
                  <NuxtLink :to="`/admin/edit/${post.id}`" class="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                    <span class="i-heroicons-pencil-square-20-solid w-5 h-5" />
                  </NuxtLink>
                  <button @click="handleDelete(post.id)" class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                    <span class="i-heroicons-trash-20-solid w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
