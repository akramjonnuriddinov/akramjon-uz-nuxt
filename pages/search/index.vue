<template>
  <AppContainer>
    <AppBreadcrump bread-crump="Search" />
    <h1 class="mb-1 text-4xl font-semibold">Search</h1>
    <p class="italic">Search any article ...</p>
    <div class="flex items-center justify-center">
      <div class="relative w-[70%] flex items-center py-10">
        <input
          class="w-full px-12 py-2 border border-gray-500 rounded-full focus:outline-primary-dark"
          type="text"
          placeholder="Search for anything..."
        />
        <IconsSearch class="absolute w-5 text-gray-400 left-4" />
      </div>
    </div>
  </AppContainer>
</template>
