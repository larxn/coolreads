<script setup lang="ts">
const isLiked = ref(false)
</script>

<template>
  <button @click="isLiked = !isLiked">
    <HeartFullIcon v-if="isLiked" />
    <HeartEmptyIcon v-else />
  </button>
</template>
