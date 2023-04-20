<script setup lang="ts">
import { getFormattedAuthorName } from '@/lib/utils/format'
import { Review } from '@/lib/models/content'

const props = defineProps({
  user: {
    type: Object as PropType<Review['user']>,
    required: true,
  },
  rating: {
    type: Number as PropType<Review['rating']>,
    required: true,
  },
  book: {
    type: Object as PropType<Review['book']>,
    required: true,
  },
  content: {
    type: String as PropType<Review['content']>,
    required: true,
  },
  socialMeta: {
    type: Object as PropType<Review['socialMeta']>,
    required: false,
  },
  createdAt: {
    type: String as PropType<Review['createdAt']>,
    required: true,
  },
})

const authors = computed(() =>
  props.book.authors.map((author) => getFormattedAuthorName(author)).join(', '),
)
</script>

<template>
  <article class="flex gap-x-3">
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
          rated a book
        </p>
        <BaseRating :value="rating" />
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
                <p class="font-bold">
                  {{ user.firstName }} {{ user.lastName }}
                </p>
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
                    {{ authors }}
                  </span>
                </p>
                <div class="md:hidden">
                  <BaseRating :value="rating" />
                </div>
              </div>
            </div>
            <ClampedText v-if="content" class="mt-2 leading-5">
              {{ content }}
            </ClampedText>
          </div>
        </section>

        <CardFooter
          :likes="socialMeta?.likes.length"
          :comments="socialMeta?.comments.length"
        />
      </section>
    </div>
  </article>
</template>
