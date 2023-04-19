/*
  Important: it's usually a good practice to use "use" as a prefix
  for composable names (e. g., "useInfiniteScrolling"). In this
  case we used Vue 3's convention for calling hooks: the "on" prefix,
  as in onMounted(), onCreated(), etc.
*/
import debounce from 'lodash/debounce'

export function onWindowResize(cb: (...args: any) => any, timeout = 100) {
  onMounted(() => {
    window.addEventListener('resize', debounce(cb, timeout))
  })
}
