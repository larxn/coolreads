<script setup lang="ts">
import { Review } from '@/lib/models/content'

defineProps({
  user: {
    type: Object as PropType<Review['user']>,
    required: true,
  },
  book: {
    type: Object as PropType<Review['book']>,
    required: true,
  },
  review: {
    type: Object as PropType<Review['review']>,
    required: true,
  },
  meta: {
    type: Object as PropType<Review['meta']>,
    required: true,
  },
})
</script>

<template>
  <article class="flex gap-x-3">
    <div class="hidden md:block">
      <BaseAvatar :src="user.avatarUrl" variant="medium" />
    </div>

    <div class="grow">
      <!-- Header (Desktop) -->
      <CardHeader :published-at="meta.publishedAt">
        <p>
          <span class="font-bold">{{ user.fullName }}</span> rated a book
        </p>
        <BaseRating :value="review.rating" />
      </CardHeader>

      <!-- Card -->
      <section class="rounded bg-gray-400 px-5 py-4">
        <section class="flex gap-x-4">
          <div class="hidden md:block">
            <BaseCover :src="book.coverUrl" :title="book.title" />
          </div>

          <div>
            <!-- Header (Mobile) -->
            <div class="md:hidden">
              <div class="flex items-center gap-x-2">
                <BaseAvatar :src="user.avatarUrl" variant="medium" />
                <p class="font-bold">{{ user.fullName }}</p>
                <ReviewIcon class="text-gray-300" />
              </div>
              <hr class="mb-4 mt-2 h-0.5 bg-gray-500" />
            </div>

            <!-- Content -->
            <div class="flex gap-x-4">
              <div class="md:hidden">
                <BaseCover :src="book.coverUrl" :title="book.title" />
              </div>

              <div>
                <h2 class="text-lg font-bold leading-none">
                  {{ book.title }}
                </h2>
                <p>
                  By
                  <span class="italic">
                    {{ book.authors.map((author) => author).join(', ') }}
                  </span>
                </p>
                <div class="md:hidden">
                  <BaseRating :value="review.rating" />
                </div>
              </div>
            </div>
            <div class="mt-2 line-clamp-5 leading-5">
              {{ review.comment }}
            </div>
            <a class="underline" href="#"> read more </a>
          </div>
        </section>

        <CardFooter :likes="meta.likes" :comments="meta.comments" />
      </section>
    </div>
  </article>
</template>
