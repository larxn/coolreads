<script setup lang="ts">
defineProps({
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <section class="mt-3 flex justify-between">
    <div class="flex items-center gap-x-1">
      <LikeButton />
      {{ likes || '' }}
    </div>

    <div class="flex items-center gap-x-4">
      <a v-if="comments" class="underline underline-offset-2" href="#">
        View {{ comments }} comment{{ comments > 1 ? 's' : '' }}
      </a>

      <BaseButton variant="tertiary">Reply</BaseButton>
    </div>
  </section>
</template>
