<template>
  <div class="min-h-screen bg-background text-gray-200 flex">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-white/10 bg-surface/50 backdrop-blur flex flex-col fixed h-full z-10">
      <div class="p-6 border-b border-white/10">
        <NuxtLink to="/" class="text-xl font-bold font-outfit text-white tracking-tight hover:text-primary transition-colors">
          Admin Panel
        </NuxtLink>
      </div>

      <nav class="flex-1 p-4 space-y-2">
        <NuxtLink 
          to="/admin" 
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all hover:bg-white/5 hover:text-primary"
          active-class="bg-primary/10 text-primary border border-primary/20"
        >
          <span class="i-heroicons-squares-2x2-20-solid w-5 h-5" />
          Dashboard
        </NuxtLink>
        
        <NuxtLink 
          to="/admin/create" 
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all hover:bg-white/5 hover:text-primary"
          active-class="bg-primary/10 text-primary border border-primary/20"
        >
          <span class="i-heroicons-pencil-square-20-solid w-5 h-5" />
          Create Post
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-white/10">
        <NuxtLink 
          to="/" 
          class="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <span class="i-heroicons-arrow-left-20-solid w-4 h-4" />
          Back to Site
        </NuxtLink>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 ml-64 p-8">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-primary;
}
</style>
