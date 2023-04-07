<template>
  <footer class="mt-5 border-t-4 border-gray-600 pt-5 text-center">
    <p class="text-gray-100">
      Avatars adapted from
      <a
        class="font-semibold text-white"
        href="https://www.freepik.com/author/pikisuperstar"
        target="_blank"
        rel="noreferrer"
      >
        @pikisuperstar
      </a>
      ’s illustrations. Sound Effect by a
      <a
        class="font-semibold text-white"
        href="https://pixabay.com/users/soundsforyou-4861230/"
        >SoundsForYou</a
      >.
      <a
        class="font-semibold text-white"
        href="https://www.iconfinder.com/bitfreak86"
        >bitfreak86</a
      >
      made the rocking hand I used as favicon. Developed by
      <a
        class="font-semibold text-white"
        href="https://github.com/luvejo"
        target="_blank"
        rel="noreferrer"
      >
        @luvejo
      </a>
      .
    </p>

    <nav class="mt-5 flex justify-center gap-x-4">
      <BaseTooltip
        message="Don't you have a life? Not that I don't need one too."
      >
        <NuxtLink class="underline" to="/"> Privacy </NuxtLink>
      </BaseTooltip>

      <BaseTooltip
        message="The only hidden stuff you might miss is silly jokes."
      >
        <NuxtLink class="underline" to="/"> Terms </NuxtLink>
      </BaseTooltip>

      <BaseTooltip message="No, we don't eat those around here.">
        <NuxtLink class="underline" to="/"> Cookies </NuxtLink>
      </BaseTooltip>
    </nav>
  </footer>
</template>
