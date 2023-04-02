<script setup lang="ts">
import { review, quote, list } from '@/database/fixtures/recent-activity'
import { featuredBook } from '@/database/fixtures/widgets'

definePageMeta({
  title: 'Haylee Caulfield',
})
</script>

<template>
  <div
    class="mx-auto mt-9 max-w-content-container grid-cols-main gap-x-10 px-5 md:grid"
  >
    <main class="pb-11">
      <ProfileHeader />
      <ActivityTabs />

      <section class="flex flex-col gap-y-4">
        <ReviewCard
          :user="review.user"
          :book="review.book"
          :review="review.review"
          :meta="review.meta"
        />
        <QuoteCard
          :user="quote.user"
          :book="quote.book"
          :quote="quote.quote"
          :meta="quote.meta"
        />
        <ListCard
          :user="list.user"
          :books="list.books"
          :name="list.name"
          :meta="list.meta"
        />
      </section>
    </main>

    <div class="hidden md:block">
      <aside class="flex flex-col gap-y-10">
        <LeaderBoardWidget />
        <FeaturedBookWidget
          title="Recommended by Haylee"
          subtitle="This week"
          :book="featuredBook"
        />
      </aside>

      <TheFooter />
    </div>
  </div>
</template>
