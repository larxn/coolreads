<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useWindowVirtualizer } from '@tanstack/vue-virtual'

import type { Activity } from '@/lib/models/content'
import ReviewCard from '@/components/cards/ReviewCard.vue'
import QuoteCard from '@/components/cards/QuoteCard.vue'
import ListCard from '@/components/cards/ListCard.vue'

const props = defineProps({
  activities: {
    type: Array as PropType<Activity[]>,
    default: () => [],
  },
  hasNextPage: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'load-more'): void
}>()

const getActivityCard = (activity: Activity) => {
  if (activity.review) return ReviewCard
  if (activity.quote) return QuoteCard
  return ListCard
}

const getActivityType = (activity: Activity) => {
  return activity.review || activity.quote || activity.bookList
}

const mounted = ref(false)
const listRef = ref<HTMLElement | null>(null)

const rowVirtualizerOptions = computed(() => ({
  count: props.hasNextPage
    ? props.activities.length + 1
    : props.activities.length,
  estimateSize: () => 280,
  overscan: 5,
  scrollMargin: listRef.value?.offsetTop ?? 0,
}))

const rowVirtualizer = useWindowVirtualizer(rowVirtualizerOptions)

const virtualRows = computed(() => rowVirtualizer.value.getVirtualItems())
const totalSize = computed(() => rowVirtualizer.value.getTotalSize())

const checkLoadMore = () => {
  const [lastItem] = [...virtualRows.value].reverse()

  if (!lastItem) return

  if (
    lastItem.index >= props.activities.length - 1 &&
    props.hasNextPage &&
    !props.loading
  ) {
    emit('load-more')
  }
}

watch(
  () => props.loading,
  (loading) => {
    if (!loading) checkLoadMore()
  },
)

onMounted(() => {
  mounted.value = true
  checkLoadMore()
  window.addEventListener('scroll', checkLoadMore, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkLoadMore)
})
</script>

<template>
  <div ref="listRef">
    <template v-if="mounted">
      <div
        :style="{
          height: `${totalSize}px`,
          width: '100%',
          position: 'relative',
        }"
      >
        <div
          v-for="virtualRow in virtualRows"
          :key="virtualRow.key as PropertyKey"
          :style="{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: `translateY(${
              virtualRow.start - rowVirtualizer.options.scrollMargin
            }px)`,
          }"
          :data-index="virtualRow.index"
          :ref="(el) => rowVirtualizer.measureElement(el as HTMLElement)"
        >
          <template
            v-if="
              virtualRow.index < activities.length &&
              getActivityType(activities[virtualRow.index])
            "
          >
            <component
              :is="getActivityCard(activities[virtualRow.index])"
              v-bind="getActivityType(activities[virtualRow.index])!"
              class="pb-4"
            />
          </template>
          <template v-else>
            <div class="mx-auto flex justify-center py-4">
              <slot />
            </div>
          </template>
        </div>
      </div>
    </template>

    <template v-else>
      <div v-for="activity in activities" :key="activity.id">
        <component
          v-bind="getActivityType(activity)"
          :is="getActivityCard(activity)"
          class="pb-4"
        />
      </div>
    </template>
  </div>
</template>
