<script setup lang="ts">
import getActivitiesByUser from '@/database/graphql/operations/activities-by-user.gql'
import getActivitiesStatsByUser from '@/database/graphql/operations/activity-stats-by-user.gql'
import { featuredBook } from '@/database/fixtures/widgets'
import { ActivityType } from '@/lib/models/content'
import {
  GetActivitiesByUserQuery,
  GetActivityStatsByUserQuery,
} from '@/.output/graphql/graphql'

definePageMeta({
  title: 'Haylee Caulfield',
})

const activities = ref()
const activityStats = ref()
const feedLoading = ref(true)
const statsLoading = ref(true)

const fetchStats = async () => {
  statsLoading.value = true
  const { data } = await useAsyncQuery<GetActivityStatsByUserQuery>(
    getActivitiesStatsByUser,
    {
      userId: 1,
    },
  )
  activityStats.value = data.value?.activityStats
  statsLoading.value = false
}

const fetchFeed = async (activityType?: ActivityType) => {
  feedLoading.value = true
  const { data } = await useAsyncQuery<GetActivitiesByUserQuery>(
    getActivitiesByUser,
    {
      userId: 1,
      take: 5,
      activityType,
    },
  )
  activities.value = data.value?.activities
  feedLoading.value = false
}

await fetchFeed()
await fetchStats()
</script>

<template>
  <div
    class="mx-auto mt-9 max-w-content-container grid-cols-main gap-x-10 px-5 md:grid"
  >
    <main class="pb-11">
      <ProfileHeader />
      <ActivityTabs
        v-if="!statsLoading && activityStats"
        :review-counter="activityStats.reviews"
        :quote-counter="activityStats.quotes"
        :list-counter="activityStats.bookLists"
        @change="fetchFeed"
      />

      <section class="flex flex-col gap-y-4">
        <div v-if="feedLoading">Loading...</div>
        <BaseFeed v-else :activities="activities" />
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
