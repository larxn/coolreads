<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
})

const opacity = ref('')

defineEmits(['load'])
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="`${opacity} h-full w-full object-cover text-transparent`"
    @error="opacity = 'opacity-0'"
    @load="$emit('load')"
  />
</template>
