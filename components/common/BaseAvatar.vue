<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
})

const size = {
  small: 'h-7 w-7',
  medium: 'h-[34px] w-[34px]',
  large: 'h-20 w-20',
}
</script>

<template>
  <div
    :class="`${size[variant]} relative shrink-0 overflow-hidden rounded-full bg-gray-600`"
  >
    <BaseImage :src="src" alt=" Avatar" />

    <div
      class="absolute top-0 h-full w-full rounded-full border-2 border-gray-600/10"
    />
  </div>
</template>
