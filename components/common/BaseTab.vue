<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  counter: {
    type: Number,
    required: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <button class="flex gap-x-2 whitespace-nowrap leading-6">
      {{ label }}
      <BaseBadge v-if="counter" variant="dark">{{ counter }}</BaseBadge>
    </button>
    <hr :class="`${!isActive && 'invisible'} mt-1.5 h-1 bg-white`" />
  </div>
</template>
