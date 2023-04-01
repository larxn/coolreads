<script setup lang="ts">
import { Quote } from '@/lib/models/content'

defineProps({
  user: {
    type: Object as PropType<Quote['user']>,
    required: true,
  },
  book: {
    type: Object as PropType<Quote['book']>,
    required: true,
  },
  quote: {
    type: String as PropType<Quote['quote']>,
    required: true,
  },
  meta: {
    type: Object as PropType<Quote['meta']>,
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
          <span class="font-bold">{{ user.fullName }}</span> shared a quote
        </p>
      </CardHeader>

      <!-- Card -->
      <section class="rounded bg-gray-400 px-5 py-4">
        <!-- Header (Mobile) -->
        <div class="md:hidden">
          <div class="flex items-center gap-x-2">
            <BaseAvatar :src="user.avatarUrl" variant="medium" />
            <p class="font-bold">{{ user.fullName }}</p>
            <QuoteIcon class="text-gray-300" />
          </div>
          <hr class="mb-4 mt-2 h-0.5 bg-gray-500" />
        </div>

        <!-- Content -->
        <section class="flex gap-x-4">
          <div class="hidden w-[50px] shrink-0 md:block">
            <QuoteIcon class="mt-1.5 h-fit w-full text-gray-600" />
          </div>

          <div>
            <div class="line-clamp-5 leading-5">{{ quote }}</div>
            <a class="underline" href="#"> read more </a>

            <div class="text-right">
              <p>
                ―
                <span class="font-semibold leading-none">
                  {{ book.authors[0] }}
                </span>
                <span v-if="book.authors.length > 1"> et al. </span>
              </p>
              <p class="text-sm italic leading-none text-gray-200">
                {{ book.title }}
              </p>
            </div>
          </div>
        </section>

        <EntryFooter :likes="meta.likes" :comments="meta.comments" />
      </section>
    </div>
  </article>
</template>
