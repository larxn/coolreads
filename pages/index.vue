<script setup lang="ts">
import type { Activity, ActivityType } from '@/lib/models/content'

definePageMeta({
  title: 'Aurora Griffiths',
})

const ITEMS_PER_PAGE = 5
const hasNextPage = ref(true)
const feedType = ref<ActivityType | undefined>(undefined)
const skip = ref(0)
const activities = ref<Activity[]>([])
const activityStats = ref()
const feedLoading = ref(true)
const statsLoading = ref(true)
const featuredBook = getBook(1)

const fetchStats = async () => {
  statsLoading.value = true
  const { data } = await useAsyncData('stats', () =>
    Promise.resolve(
      useFixtures().getActivityStatsByUser({
        userId: 1,
      }),
    ),
  )
  activityStats.value = data.value?.activityStats
  statsLoading.value = false
}

const setFeedType = (activityType?: ActivityType) => {
  feedType.value = activityType
  skip.value = 0
  hasNextPage.value = true
  activities.value = []
}

const fetchFeed = (activityType?: ActivityType) => {
  if (feedType.value !== activityType) {
    setFeedType(activityType)
  }

  if (!hasNextPage.value) return

  feedLoading.value = true

  const result = useFixtures().getActivitiesByUser({
    userId: 1,
    take: ITEMS_PER_PAGE,
    skip: skip.value,
    activityType: feedType.value,
  })

  if (result.activities.nodes)
    activities.value = [...activities.value, ...result.activities.nodes]

  hasNextPage.value = !!result.activities.pageInfo.hasNextPage
  skip.value += ITEMS_PER_PAGE

  feedLoading.value = false
}

await fetchStats()
fetchFeed()
</script>

<template>
  <div
    class="mx-auto mt-9 max-w-content-container grid-cols-main gap-x-10 px-5 md:grid"
  >
    <main class="pb-8">
      <ProfileHeader />
      <ActivityTabs
        v-if="!statsLoading && activityStats"
        :review-counter="activityStats.reviews"
        :quote-counter="activityStats.quotes"
        :list-counter="activityStats.bookLists"
        @change="fetchFeed"
      />

      <section class="flex flex-col gap-y-4">
        <ClientOnly>
          <BaseFeed
            :activities="activities"
            :has-next-page="hasNextPage"
            :loading="feedLoading"
            @load-more="fetchFeed(feedType)"
          >
            <LoadingIcon v-if="feedLoading" />
          </BaseFeed>
        </ClientOnly>
      </section>
    </main>

    <ScrollableStickySidebar class="hidden md:block">
      <aside class="flex flex-col gap-y-10">
        <LeaderBoardWidget />
        <FeaturedBookWidget
          title="Recommended by Aurora"
          subtitle="This week"
          :book="featuredBook"
        />
      </aside>

      <TheFooter />
    </ScrollableStickySidebar>
  </div>
</template>
