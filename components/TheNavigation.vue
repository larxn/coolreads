<script setup lang="ts">
import user from '@/database/fixtures/user'
import { Book } from '@/lib/models/content'

const { notifications, onMarkAsRead } = useNotifications()

const results = ref<Book[]>([])
const { searchBooks } = useBookSearch(results)
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
        <BaseInput
          placeholder="Find books..."
          @keyup="(query) => searchBooks(query)"
        />
        <div class="relative">
          <ResultsPopover :results="results" />
        </div>
      </div>

      <div class="flex items-center gap-x-10">
        <nav class="hidden gap-x-4 md:flex">
          <BaseTooltip
            message="Let’s pretend you have something to do at home."
          >
            Home
          </BaseTooltip>
          <BaseTooltip message="Wanna have a drink with me instead?">
            Profile
          </BaseTooltip>
        </nav>

        <div class="flex gap-x-4">
          <NotificationPopover
            :notifications="notifications"
            @mark-as-read="onMarkAsRead"
          >
            <NotificationButton :notifications="notifications" />
          </NotificationPopover>

          <BaseAvatar :src="user?.avatarUrl || ''" variant="small" />
        </div>
      </div>
    </div>
  </section>
</template>
