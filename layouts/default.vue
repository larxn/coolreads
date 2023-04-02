<script setup lang="ts">
const route = useRoute()

useHead({
  title: `${route.meta.title} - CoolReads`,
})
</script>

<template>
  <div>
    <TheNavigation class="hidden md:block" />
    <MobileNavigation class="block md:hidden" />

    <slot />
  </div>
</template>
