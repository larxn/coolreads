<script setup lang="ts">
import Popper from 'vue3-popper'
import { Notification } from '@/lib/models/user'

defineProps({
  notifications: {
    type: Array as PropType<Notification[]>,
    required: true,
  },
})

defineEmits(['mark-as-read'])
</script>

<template>
  <ClientOnly>
    <Popper
      arrow
      placement="top-end"
      arrow-padding="20"
      offsetDistance="8"
      offsetSkid="16"
      class="relative"
    >
      <div class="cursor-pointer">
        <slot />
      </div>

      <template #content>
        <section class="min-w-[300px]">
          <header class="rounded-t bg-gray-200 px-4 py-1">
            Notifications
          </header>

          <section class="flex flex-col gap-3 rounded-b bg-gray-50 px-4 py-2">
            <NotificationItem
              v-for="notification in notifications"
              :key="notification.id"
              :id="notification.id"
              :subject="notification.subject"
              :predicate="notification.predicate"
              :timestamp="notification.timestamp"
              :isRead="notification.isRead"
              @click="$emit('mark-as-read', notification.id)"
            />
          </section>
        </section>
      </template>
    </Popper>
  </ClientOnly>
</template>

<style scoped>
:deep(.popper:hover),
:deep(.popper:hover > #arrow::before),
:deep(.popper #arrow::before) {
  @apply bg-gray-200;
}
</style>
