<script setup lang="ts">
import Popper from 'vue3-popper'
</script>

<template>
  <ClientOnly>
    <Popper arrow arrow-padding="20">
      <div class="cursor-pointer">
        <slot />
      </div>

      <template #content>
        <section
          class="flex w-56 flex-col gap-3 rounded bg-gray-50 px-4 py-2 text-center text-gray-500"
        >
          <slot name="content" />
        </section>
      </template>
    </Popper>
  </ClientOnly>
</template>

<style scoped>
:deep(.popper:hover),
:deep(.popper:hover > #arrow::before),
:deep(.popper #arrow::before) {
  @apply bg-gray-50;
}
</style>
