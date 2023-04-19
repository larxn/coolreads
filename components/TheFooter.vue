<template>
  <footer class="mt-5 border-t-4 border-gray-600 pb-12 text-center">
    <nav class="mt-5 flex flex-wrap justify-center gap-x-4">
      <BasePopover>
        <NuxtLink class="underline" to="/"> Credits </NuxtLink>

        <template #content>
          <p> A huge thank you to <br />these artists: </p>
          <p>
            Avatars:
            <a
              class="font-semibold text-gray-600"
              href="https://www.freepik.com/author/pikisuperstar"
              target="_blank"
              rel="noreferrer"
            >
              @pikisuperstar
            </a>
            <br />
            Sound:
            <a
              class="font-semibold text-gray-600"
              href="https://pixabay.com/users/soundsforyou-4861230/"
              target="_blank"
              rel="noreferrer"
              >SoundsForYou</a
            >
            <br />

            Favicon:
            <a
              class="font-semibold text-gray-600"
              href="https://www.iconfinder.com/bitfreak86"
              target="_blank"
              rel="noreferrer"
              >bitfreak86</a
            >
          </p>
          <p>
            A project by
            <a
              class="font-semibold text-gray-600"
              href="https://github.com/luvejo"
              target="_blank"
              rel="noreferrer"
            >
              @luvejo</a
            >.
          </p>
        </template>
      </BasePopover>

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
