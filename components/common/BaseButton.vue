<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'tertiary'>,
    default: 'primary',
  },
})
</script>

<template>
  <button :class="`${variant}-btn rounded px-2.5 py-1.5 leading-5`">
    <slot />
  </button>
</template>
