<script setup lang="ts">
import getActivitiesByUser from '@/database/graphql/operations/activities-by-user.gql'
import { featuredBook } from '@/database/fixtures/widgets'
import { GetActivitiesByUserQuery } from '@/.output/graphql/graphql'

definePageMeta({
  title: 'Haylee Caulfield',
})

const { data, pending } = useAsyncQuery<GetActivitiesByUserQuery>(
  getActivitiesByUser,
  {
    userId: 1,
    take: 5,
  },
)

const activities = computed(() => {
  if (data.value?.activities?.length) {
    return data.value.activities
  }
  return []
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
        <div v-if="pending">Loading...</div>
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
