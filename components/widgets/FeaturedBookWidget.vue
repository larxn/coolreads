<script setup lang="ts">
import { Book } from '@/lib/models/content'
import { getFormattedAuthors } from '@/lib/utils/format'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  book: {
    type: Object as PropType<Book>,
    required: true,
  },
})
</script>

<template>
  <section>
    <WidgetHeader :title="title" :subtitle="subtitle" />

    <section class="my-4 flex flex-col items-center gap-y-4 px-6">
      <BaseCover :src="book.coverUrl" :title="book.title" />

      <div class="w-full">
        <p class="text-center text-lg leading-none">{{ book.title }}</p>
        <p class="text-center italic">
          By {{ getFormattedAuthors(book.authors) }}
        </p>

        <div class="mt-4 line-clamp-4 leading-5">{{ book.summary }}</div>
        <a class="underline" href="#"> read more </a>
      </div>
    </section>
  </section>
</template>
