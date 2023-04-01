<script setup lang="ts">
import user from '@/database/fixtures/user'
</script>

<template>
  <section class="bg-gray-400 py-2 text-white shadow-card">
    <div
      class="mx-auto flex w-full max-w-content-container items-center justify-between px-5"
    >
      <BaseTooltip message="This guy traded 3 neurons for this name.">
        <LogoIcon />
      </BaseTooltip>

      <div class="max-w-[150px]">
        <BaseInput placeholder="Find books..." />
      </div>

      <div class="flex items-center gap-x-10">
        <nav class="hidden gap-x-4 md:flex">
          <BaseLink href="/">Home</BaseLink>
          <BaseLink href="/">Profile</BaseLink>
        </nav>

        <div class="flex gap-x-4">
          <NotificationButton />

          <BaseAvatar :src="user?.avatarUrl || ''" variant="small" />
        </div>
      </div>
    </div>
  </section>
</template>
