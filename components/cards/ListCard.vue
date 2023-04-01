<script setup lang="ts">
import { List } from '@/lib/models/content'

defineProps({
  user: {
    type: Object as PropType<List['user']>,
    required: true,
  },
  books: {
    type: Array as PropType<List['books']>,
    required: true,
  },
  name: {
    type: String as PropType<List['name']>,
    required: true,
  },
  meta: {
    type: Object as PropType<List['meta']>,
    required: true,
  },
})
</script>

<template>
  <article class="gap-x-3 md:flex">
    <div class="hidden md:block">
      <BaseAvatar :src="user.avatarUrl" variant="medium" />
    </div>

    <div class="grow">
      <!-- Header (Desktop) -->
      <CardHeader :published-at="meta.publishedAt">
        <p>
          <span class="font-bold">{{ user.fullName }}</span> shared a new list
        </p>
      </CardHeader>

      <!-- Card -->
      <section class="rounded bg-gray-400 px-5 py-4">
        <!-- Header (Mobile) -->
        <div class="md:hidden">
          <div class="flex items-center gap-x-2">
            <BaseAvatar :src="user.avatarUrl" variant="medium" />
            <p class="font-bold">{{ user.fullName }}</p>
            <BooksIcon class="text-gray-300" />
          </div>
          <hr class="mb-4 mt-2 h-0.5 bg-gray-500" />
        </div>

        <!-- Content -->
        <section>
          <p class="mb-3 text-lg font-bold">{{ name }}</p>
          <BookList :books="books" />
        </section>

        <CardFooter :likes="meta.likes" :comments="meta.comments" />
      </section>
    </div>
  </article>
</template>
