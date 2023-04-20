<script lang="ts" setup>
defineProps({
  maxLines: {
    type: Number,
    default: 5,
  },
})

const text = ref<HTMLDivElement>()
const isOpen = ref(false)
const isClamped = ref(false)

onMounted(() => {
  const observer = new ResizeObserver(() => {
    if (text.value) {
      isClamped.value = text.value.scrollHeight > text.value.clientHeight
      if (isClamped.value) observer.disconnect()
    }
  })

  if (text.value) observer.observe(text.value)
})
</script>

<template>
  <div
    class="box"
    :class="{ open: isOpen }"
    :style="{
      '--max-lines': maxLines,
    }"
  >
    <p ref="text" class="text m-0">
      <slot />
    </p>

    <button
      class="underline"
      :class="{ 'opacity-0': !isClamped }"
      @click="isOpen = !isOpen"
    >
      show {{ isOpen ? 'less' : 'more' }}
    </button>
  </div>
</template>

<style scoped>
/* Box */
.box {
  max-height: 162px;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
}

.box.open {
  max-height: 100rem;
  transition: max-height 0.3s cubic-bezier(0.9, 0, 0.8, 0.2);
}

.text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: var(--max-lines);
  -webkit-line-clamp: var(--max-lines);
}

.open .text {
  line-clamp: initial;
  -webkit-line-clamp: initial;
}
</style>
