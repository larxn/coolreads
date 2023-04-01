<script setup lang="ts">
import { List } from '@/lib/models/content'

defineProps({
  books: {
    type: Array as PropType<List['books']>,
    required: true,
  },
})
</script>

<template>
  <div class="h-[84px] max-w-full overflow-y-hidden">
    <div class="box-content h-full w-full overflow-x-auto pb-4">
      <div class="flex gap-x-5">
        <BaseCover
          v-for="book in books"
          :key="book.id"
          :src="book.coverUrl"
          :title="book.title"
        />
      </div>
    </div>
  </div>
</template>
