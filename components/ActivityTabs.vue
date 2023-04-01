<template>
  <div
    class="relative -left-5 h-16 w-[calc(100%_+_2.5rem)] overflow-hidden md:mb-2"
  >
    <div class="box-content h-full overflow-x-auto pb-4">
      <nav
        class="relative flex min-w-fit justify-between gap-x-8 px-5 text-xl font-semibold"
      >
        <BaseTab label="Recent Activity" is-active />
        <BaseTab label="Reviews" :counter="4" />
        <BaseTab label="Quotes" :counter="13" />
        <BaseTab label="Lists" :counter="2" />

        <!-- Tab For Widgets (Mobile) -->
        <div class="block md:hidden">
          <BaseTab label="More" :counter="2" />
        </div>

        <hr
          class="absolute bottom-0 left-5 -z-10 h-1 w-[calc(100%_-_2.5rem)] bg-gray-600"
        />
      </nav>
    </div>
  </div>
</template>
