<script setup lang="ts">
import { Book } from '@/lib/models/content'

defineProps({
  results: {
    type: Array as PropType<Book[]>,
    default: () => [],
  },
})
</script>

<template>
  <section class="absolute top-0 z-10 w-80 rounded bg-gray-50">
    <ResultItem
      v-for="book in results"
      :key="book.id"
      :cover-url="book.coverUrl"
      :title="book.title"
      :authors="book.authors"
      class="border-b-2 border-b-gray-100/30 px-4 py-2 first:pt-4 last:border-none last:pb-4"
    />
  </section>
</template>
