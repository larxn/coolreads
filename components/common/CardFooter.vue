<script setup lang="ts">
defineProps({
  likes: {
    type: Number,
    required: true,
  },
  comments: {
    type: Array as PropType<string[]>,
    required: true,
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
      <a v-if="comments.length" class="underline underline-offset-2" href="#">
        View {{ comments.length }} comments
      </a>

      <div class="hidden md:block">
        <BaseButton variant="tertiary">Reply</BaseButton>
      </div>
    </div>
  </section>
</template>
