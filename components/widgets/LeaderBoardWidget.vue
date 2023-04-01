<script setup lang="ts">
import { leaderboard } from '@/database/fixtures/leaderboard'
</script>

<template>
  <section>
    <WidgetHeader title="20 Reviews Challenge" subtitle="Leaderboard" />

    <section class="my-4 flex flex-col gap-y-4 px-6">
      <NuxtLink v-for="user in leaderboard" href="#" :key="user.id">
        <article class="flex items-start gap-x-2.5">
          <BaseAvatar :src="user.avatarUrl" variant="medium" />

          <div class="grow">
            <p class="line-clamp-1 font-bold leading-none">
              {{ user.fullName }}
            </p>
            <p class="mt-0.5 block w-fit leading-none text-gray-200">
              @{{ user.username }}
            </p>
          </div>

          <BaseBadge>{{ user.points }}</BaseBadge>
        </article>
      </NuxtLink>
    </section>

    <section class="flex gap-x-2.5 px-6">
      <BaseInput placeholder="Find users..." />
      <BaseButton variant="secondary">Find</BaseButton>
    </section>
  </section>
</template>
