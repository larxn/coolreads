<template>
  <div>
    <p class="w-full text-wrap whitespace-pre font-[inherit]"
      >{{ truncatedText && !isOpen ? truncatedText : text }}
      <a
        v-if="truncatedText"
        class="text-gray-200 underline underline-offset-2"
        @click="isOpen = !isOpen"
        >See {{ isOpen ? 'less' : 'more' }}
      </a></p
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    default: 400,
  },
})

const isOpen = ref(false)

const truncatedText = computed(() =>
  props.text.length > props.limit
    ? props.text.slice(0, props.limit) + '...'
    : '',
)
</script>
