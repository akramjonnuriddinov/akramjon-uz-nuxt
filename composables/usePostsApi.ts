// Simulated database
const posts = ref([
  {
    id: '1',
    title: 'Getting Started with Nuxt 3',
    description: 'A comprehensive guide to building modern web applications with Nuxt 3.',
    date: '2024-01-15',
    content: '# Getting Started with Nuxt 3\n\nNuxt 3 is an amazing framework...'
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS',
    description: 'Learn how to build beautiful interfaces rapidly with Tailwind CSS.',
    date: '2024-02-01',
    content: '# Mastering Tailwind CSS\n\nTailwind CSS is a utility-first CSS framework...'
  }
])

export const usePostsApi = () => {
  const fetchPosts = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return posts.value
  }

  const fetchPost = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return posts.value.find(p => p.id === id)
  }

  const createPost = async (post: any) => {
    await new Promise(resolve => setTimeout(resolve, 800))
    const newPost = {
      ...post,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0]
    }
    posts.value.push(newPost)
    return newPost
  }

  const updatePost = async (id: string, updatedPost: any) => {
    await new Promise(resolve => setTimeout(resolve, 800))
    const index = posts.value.findIndex(p => p.id === id)
    if (index !== -1) {
      posts.value[index] = { ...posts.value[index], ...updatedPost }
      return posts.value[index]
    }
    throw new Error('Post not found')
  }

  const deletePost = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    posts.value = posts.value.filter(p => p.id !== id)
  }

  return {
    fetchPosts,
    fetchPost,
    createPost,
    updatePost,
    deletePost
  }
}
