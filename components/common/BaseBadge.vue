<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<'dark' | 'light'>,
    default: 'light',
  },
})

const theme = {
  dark: 'bg-gray-400',
  light: 'bg-gray-100 text-gray-600',
}
</script>

<template>
  <span
    :class="`${theme[variant]} flex shrink items-center rounded p-1 font-mono text-xs font-normal leading-none`"
  >
    <slot />
  </span>
</template>
