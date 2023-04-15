<script setup lang="ts">
import { BookList } from '@/lib/models/content'

type Book = Exclude<BookList['books'][number], null>

defineProps({
  books: {
    type: Array as PropType<Book[]>,
    required: true,
  },
})
</script>

<template>
  <div class="h-[84px] max-w-full overflow-y-hidden">
    <div class="box-content h-full w-full overflow-x-auto pb-4">
      <div class="flex gap-x-5">
        <BaseCover
          v-for="book in books"
          :key="book.id"
          :src="book.coverUrl"
          :title="book.title"
        />
      </div>
    </div>
  </div>
</template>
