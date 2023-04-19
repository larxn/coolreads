<script setup lang="ts">
import { CSSProperties } from 'vue'

const sidebarContainer = ref<HTMLDivElement>()
const topRef = ref<HTMLDivElement>()
const sidebar = ref<HTMLDivElement>()

const stickyTop = ref(0)
const stickyBottom = ref(0)

const containerOffset = ref(0)
const offset = ref(0)
const sidebarPosition = ref<CSSProperties>({})

const setOffset = () => {
  const top = topRef.value?.getBoundingClientRect().top
  if (top !== undefined) {
    offset.value = window.scrollY + top - containerOffset.value
  }
}

onMounted(() => {
  /* 
    We wait for the next DOM rendering so that
    getBoundingClientRect() includes paddings
    in its calculations.
  */
  nextTick(() => {
    if (sidebarContainer.value && sidebar.value) {
      containerOffset.value =
        sidebarContainer.value.getBoundingClientRect().top + window.scrollY

      stickyTop.value =
        window.innerHeight -
        sidebar.value.getBoundingClientRect().height -
        containerOffset.value

      stickyBottom.value =
        window.innerHeight - sidebar.value.getBoundingClientRect().height

      sidebarPosition.value = {
        bottom: `${stickyTop.value}px`,
        top: `${stickyBottom.value}px`,
      }
    }

    const { directions } = useScroll(window)

    watch(() => directions.top, setOffset)
  })
})
</script>

<template>
  <div ref="sidebarContainer">
    <div :style="{ marginTop: `${offset.toFixed(4)}px` }" />

    <div ref="sidebar" class="sticky" :style="sidebarPosition">
      <div ref="topRef" />
      <slot />
    </div>
  </div>
</template>
