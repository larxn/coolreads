<script setup lang="ts">
defineProps({
  publishedAt: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class="mb-2 flex justify-end leading-none md:justify-between">
    <div class="hidden items-end gap-x-3 md:flex">
      <slot />
    </div>
    <time class="flex items-end text-gray-300">{{ publishedAt }}</time>
  </header>
</template>
