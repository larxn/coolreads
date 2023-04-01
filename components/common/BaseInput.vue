<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <input
    class="w-full rounded bg-gray-600 px-4 py-1 placeholder:italic placeholder:text-gray-300"
    :placeholder="placeholder"
  />
</template>
