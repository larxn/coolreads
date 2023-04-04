<script setup lang="ts">
import { Book } from '@/lib/models/content'
import { getFormattedAuthors } from '@/lib/utils/format'

defineProps({
  coverUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array as PropType<Book['authors']>,
    required: true,
  },
})
</script>

<template>
  <NuxtLink to="/" class="block hover:bg-gray-100/20">
    <article class="flex shrink-0 gap-x-5">
      <BaseCover :src="coverUrl" :title="title" />

      <div class="grow text-gray-500">
        <p class="text-lg font-bold leading-none">
          {{ title }}
          <span class="block text-base font-normal italic leading-none">
            {{ getFormattedAuthors(authors) }}
          </span>
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
