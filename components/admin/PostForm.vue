<script setup lang="ts">
const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({
      title: '',
      description: '',
      content: '',
      date: new Date().toISOString().split('T')[0]
    })
  },
  submitLabel: {
    type: String,
    default: 'Save Post'
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit'])

const form = ref({ ...props.initialData })

// Watch for initialData changes to update form (useful for edit mode when data loads late)
watch(() => props.initialData, (newVal) => {
  form.value = { ...newVal }
}, { deep: true })

const handleSubmit = () => {
  emit('submit', form.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-6 max-w-4xl">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- Title -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-300">Post Title</label>
        <input 
          v-model="form.title"
          required
          type="text" 
          class="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-gray-600"
          placeholder="Enter post title..."
        />
      </div>

      <!-- Date -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-300">Publish Date</label>
        <input 
          v-model="form.date"
          required
          type="date" 
          class="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-gray-600"
        />
      </div>
    </div>

    <!-- Description -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-gray-300">Description (SEO)</label>
      <textarea 
        v-model="form.description"
        required
        rows="2"
        class="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-gray-600 resize-none"
        placeholder="Short description for search engines and preview cards..."
      />
    </div>

    <!-- Markdown Content -->
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <label class="block text-sm font-medium text-gray-300">Content (Markdown)</label>
        <span class="text-xs text-gray-500">Supports Github Flavored Markdown</span>
      </div>
      <div class="h-[500px] border border-white/10 rounded-xl overflow-hidden bg-surface/30 flex flex-col">
        <textarea 
          v-model="form.content"
          required
          class="flex-1 w-full p-6 bg-transparent outline-none text-white font-mono text-sm resize-none leading-relaxed"
          placeholder="# Write your masterpiece here..."
        />
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-end gap-4 pt-4">
      <NuxtLink to="/admin" class="px-6 py-2.5 text-gray-400 hover:text-white transition-colors">
        Cancel
      </NuxtLink>
      <button 
        type="submit" 
        :disabled="loading"
        class="px-8 py-2.5 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dim transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        <span v-if="loading" class="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        {{ submitLabel }}
      </button>
    </div>
  </form>
</template>
