<script setup lang="ts">
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

import { Activity } from '@/lib/models/content'
import ReviewCard from '@/components/cards/ReviewCard.vue'
import QuoteCard from '@/components/cards/QuoteCard.vue'
import ListCard from '@/components/cards/ListCard.vue'

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
  <DynamicScroller
    :items="activities"
    :min-item-size="260"
    :prerender="5"
    :buffer="600"
    page-mode
  >
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :data-index="index"
        :size-dependencies="[item.content]"
      >
        <component
          :is="getActivityCard(item)"
          v-bind="getActivityType(item)"
          class="pb-4"
        />
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>
