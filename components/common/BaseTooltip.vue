<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <BasePopover>
    <slot />
    <template #content>{{ message }}</template>
  </BasePopover>
</template>

<style scoped>
:deep(.popper:hover),
:deep(.popper:hover > #arrow::before),
:deep(.popper #arrow::before) {
  @apply bg-gray-50;
}
</style>
