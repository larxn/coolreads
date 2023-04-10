<script setup lang="ts">
import { GetActivitiesByUserQuery } from '@/.output/graphql/graphql'
import ReviewCard from '@/components/cards/ReviewCard.vue'
import QuoteCard from '@/components/cards/QuoteCard.vue'
import ListCard from '@/components/cards/ListCard.vue'

type Activity = GetActivitiesByUserQuery['activities'][number]

defineProps({
  activities: {
    type: Array as PropType<Activity[]>,
    default: () => [],
  },
})

const getActivityCard = (activity: Activity) => {
  if (activity.review) return ReviewCard
  if (activity.quote) return QuoteCard
  return ListCard
}

const getActivityType = (activity: Activity) => {
  return activity.review || activity.quote || activity.bookList
}
</script>

<template>
  <component
    :is="getActivityCard(activity)"
    v-for="activity in activities"
    :key="activity.id"
    v-bind="getActivityType(activity)"
  />
</template>
