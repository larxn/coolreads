<template>
  <section class="bg-gray-400 py-2 text-white shadow-card">
    <div
      class="mx-auto flex w-full max-w-content-container items-center justify-between px-5"
    >
      <BaseTooltip message="This guy traded 3 neurons for this name.">
        <LogoIcon />
      </BaseTooltip>

      <div class="flex items-center gap-x-4">
        <NotificationButton />

        <button class="flex h-7 w-7 items-center justify-center">
          <MenuIcon />
        </button>
      </div>
    </div>
  </section>
</template>
