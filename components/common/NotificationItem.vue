<script setup lang="ts">
import { User } from '@/lib/models/user'

defineProps({
  id: {
    type: String,
    required: true,
  },
  subject: {
    type: Object as PropType<User>,
    required: true,
  },
  predicate: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    :class="`${isRead ? 'opacity-60 grayscale' : ''} flex gap-2 text-left`"
  >
    <BaseAvatar :src="subject.avatarUrl || ''" variant="medium" />

    <p class="leading-5 text-gray-500">
      {{ subject.fullName }} {{ predicate }} ·
      <span class="text-gray-300">{{ timestamp }}</span>
    </p>
  </button>
</template>
