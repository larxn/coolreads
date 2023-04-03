<script setup lang="ts">
import { Notification } from '@/lib/models/user'

defineProps({
  notifications: {
    type: Array as PropType<Notification[]>,
    required: true,
  },
})
</script>

<template>
  <div
    class="relative flex h-7 w-7 items-center justify-center rounded-full bg-gray-600"
  >
    <BellIcon />

    <span
      v-if="notifications?.some((notification) => !notification.isRead)"
      class="absolute right-0 top-0.5 h-[7px] w-[7px] rounded-full bg-white"
    />
  </div>
</template>
