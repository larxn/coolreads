<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const showFrame = ref(false)
</script>

<template>
  <div
    class="h-cover w-cover shrink-0 overflow-hidden rounded bg-gray-600"
    :title="title"
  >
    <BaseImage
      :src="src"
      :alt="` Cover of '${title}'`"
      class="rounded"
      :class="{ 'border-2 border-white': showFrame }"
      @load="showFrame = true"
    />
  </div>
</template>
