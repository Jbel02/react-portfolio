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
 * @param {Element|null} [root] the scrolling container to measure against.
 *   Pass null for the real browser viewport (Desktop). The Tablet/Phone
 *   device-preview frame scrolls inside its own fixed-height container
 *   instead of the document, so IntersectionObserver has to be told that
 *   container is the root or it will measure against the (non-scrolling)
 *   viewport and never fire.
 */
export function useScrollSpy(sectionIds, root = null) {
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
      { root, rootMargin: '-90px 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    // Cleanup matters here: without it, StrictMode's double-mount in dev would
    // leave a second observer running against stale nodes.
    return () => observer.disconnect()
  }, [sectionIds, root])

  return activeId
}
