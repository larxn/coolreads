<script setup lang="ts">
const avatarUrl =
  'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fhaylee.webp?alt=media'
</script>

<template>
  <section
    class="mb-9 flex flex-col items-center gap-x-5 md:mb-16 md:flex-row md:items-start"
  >
    <BaseAvatar :src="avatarUrl" variant="large" />

    <div class="flex grow flex-wrap items-start text-center md:text-left">
      <!-- User Info -->
      <div class="my-2 grow md:order-1 md:mt-0">
        <h1
          class="text-2xl font-semibold md:mb-0.5 md:text-3xl md:leading-none"
        >
          Haylee Caulfield
        </h1>
        <p class="text-lg leading-5 text-gray-200">@goldenfish</p>
      </div>

      <!-- Description -->
      <div class="basis-full md:order-3">
        <p class="mx-auto max-w-xs md:max-w-none">
          I could’ve told you my whole autobiography, but I didn’t felt like it.
        </p>
      </div>

      <!-- Action -->
      <div
        class="mt-4 flex shrink-0 basis-full items-start justify-center md:order-2 md:mt-0 md:basis-auto"
      >
        <BaseButton variant="tertiary">Follow</BaseButton>
      </div>
    </div>
  </section>
</template>
