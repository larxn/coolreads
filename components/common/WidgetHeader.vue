<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class="rounded bg-gray-600 px-6 py-3">
    <p class="text-lg leading-none">{{ title }}</p>
    <p class="mt-1 text-base leading-5 text-gray-100">{{ subtitle }}</p>
  </header>
</template>
