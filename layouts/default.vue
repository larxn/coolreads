<script setup lang="ts">
const route = useRoute()

useHead({
  title: `${route.meta.title} - CoolReads`,
})
</script>

<template>
  <div>
    <TheNavigation class="sticky top-0 z-20 hidden md:block" />
    <MobileNavigation class="block md:hidden" />

    <slot />
  </div>
</template>
