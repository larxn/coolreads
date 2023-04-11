<script setup lang="ts">
import { ActivityType } from '@/lib/models/content'

defineProps({
  reviewCounter: {
    type: Number,
    required: true,
  },
  quoteCounter: {
    type: Number,
    required: true,
  },
  listCounter: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['change'])

const activeType = ref()

const onClick = (activityType?: ActivityType) => {
  emit('change', activityType)
  activeType.value = activityType
}
</script>

<template>
  <div
    class="relative -left-5 h-16 w-[calc(100%_+_2.5rem)] overflow-hidden md:mb-2"
  >
    <div class="box-content h-full overflow-x-auto pb-4">
      <nav
        class="relative flex min-w-fit justify-between gap-x-8 px-5 text-xl font-semibold"
      >
        <BaseTab
          label="Recent Activity"
          :is-active="!activeType"
          @click="onClick"
        />
        <BaseTab
          label="Reviews"
          :counter="reviewCounter"
          :is-active="activeType === 'review'"
          @click="onClick('review')"
        />
        <BaseTab
          label="Quotes"
          :counter="quoteCounter"
          :is-active="activeType === 'quote'"
          @click="onClick('quote')"
        />
        <BaseTab
          label="Lists"
          :counter="listCounter"
          :is-active="activeType === 'bookList'"
          @click="onClick('bookList')"
        />

        <!-- Tab For Widgets (Mobile) -->
        <div class="block md:hidden">
          <BaseTab label="More" :counter="2" />
        </div>

        <hr
          class="absolute bottom-0 left-5 -z-10 h-1 w-[calc(100%_-_2.5rem)] bg-gray-600"
        />
      </nav>
    </div>
  </div>
</template>
