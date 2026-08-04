import { useEffect, useState } from 'react'

/**
 * Returns the id of whichever section is currently in view, so the navbar can
 * highlight the matching link.
 *
 * IntersectionObserver is used instead of a scroll listener because it fires
 * only when a section actually crosses the threshold, rather than on every
 * scroll frame.
 *
 * @param {string[]} sectionIds ids to watch, in document order
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // Top margin clears the sticky navbar; the large bottom margin means a
      // section only counts as "active" once it reaches the upper half of the
      // screen, which stops two sections claiming it at once.
      { rootMargin: '-90px 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    // Cleanup matters here: without it, StrictMode's double-mount in dev would
    // leave a second observer running against stale nodes.
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
