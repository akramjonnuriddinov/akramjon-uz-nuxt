export const useReveal = (threshold = 0.12) => {
  const isVisible = ref(false)
  const el = ref<Element | null>(null)

  onMounted(() => {
    if (!el.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el.value)
  })

  return { isVisible, el }
}
