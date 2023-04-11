<script setup lang="ts">
import { GetActivitiesByUserQuery } from '@/.output/graphql/graphql'

type BookList = Exclude<
  GetActivitiesByUserQuery['activities'][number]['bookList'],
  null | undefined
>

defineProps({
  user: {
    type: Object as PropType<BookList['user']>,
    required: true,
  },
  books: {
    type: Array as PropType<BookList['books']>,
    required: true,
  },
  name: {
    type: String as PropType<BookList['name']>,
    required: true,
  },
  socialMeta: {
    type: Object as PropType<BookList['socialMeta']>,
    required: true,
  },
  createdAt: {
    type: String as PropType<BookList['createdAt']>,
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
      <CardHeader :published-at="createdAt">
        <p>
          <span class="font-bold">
            {{ user.firstName }} {{ user.lastName }}
          </span>
          shared a new list
        </p>
      </CardHeader>

      <!-- Card -->
      <section class="rounded bg-gray-400 px-5 py-4">
        <!-- Header (Mobile) -->
        <div class="md:hidden">
          <div class="flex items-center gap-x-2">
            <BaseAvatar :src="user.avatarUrl" variant="medium" />
            <p class="font-bold">
              {{ user.firstName }}
              {{ user.lastName }}
            </p>
            <BooksIcon class="text-gray-300" />
          </div>
          <hr class="mb-4 mt-2 h-0.5 bg-gray-500" />
        </div>

        <!-- Content -->
        <section>
          <p class="mb-3 text-lg font-bold">{{ name }}</p>
          <BookList :books="books" />
        </section>

        <CardFooter
          :likes="socialMeta?.likes.length"
          :comments="socialMeta?.comments.length"
        />
      </section>
    </div>
  </article>
</template>
