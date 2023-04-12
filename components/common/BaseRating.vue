<script setup lang="ts">
defineProps({
  value: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <p class="flex items-center gap-x-0.5">
    <StarIcon class="text-yellow" />
    <span>{{ value.toFixed(1) }}</span>
  </p>
</template>
