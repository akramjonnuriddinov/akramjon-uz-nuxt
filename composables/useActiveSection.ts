/** Tracks which page section is at the reading line, for the sidebar nav. */
export function useActiveSection(ids: string[]) {
  const active = ref(ids[0])

  const update = () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    if (atBottom) {
      active.value = ids[ids.length - 1]
      return
    }

    const readingLine = window.innerHeight * 0.4
    for (const id of ids) {
      const section = document.getElementById(id)
      if (section && section.getBoundingClientRect().top <= readingLine) active.value = id
    }
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return active
}
