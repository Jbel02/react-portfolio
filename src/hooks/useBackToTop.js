import { useEffect, useState } from 'react'

/**
 * Tracks whether the "back to top" button should be visible (once the given
 * trigger section reaches the upper part of the viewport) and re-checks on
 * every scroll of either the real window or a framed scroll container.
 *
 * getBoundingClientRect() is always relative to the browser viewport
 * regardless of whether the page itself scrolls (Desktop) or a container
 * scrolls internally (the Tablet/Phone device-preview frame), so one check
 * covers both cases without branching on which is active.
 *
 * @param {string} triggerId id of the section that should reveal the button
 * @param {Element|null} containerEl the framed scroll container, or null on
 *   Desktop — listened on in addition to window so scrolling inside the
 *   frame (which never fires a window 'scroll' event) still updates visibility
 * @param {unknown} [recomputeKey] any value that should force an immediate
 *   recheck when it changes, e.g. switching device view changes layout
 *   instantly without a scroll event
 */
export function useBackToTop(triggerId, containerEl, recomputeKey) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const trigger = document.getElementById(triggerId)
    if (!trigger) return

    const update = () => setIsVisible(trigger.getBoundingClientRect().top <= 80)
    update()

    window.addEventListener('scroll', update, { passive: true })
    containerEl?.addEventListener('scroll', update, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
      containerEl?.removeEventListener('scroll', update)
    }
  }, [triggerId, containerEl, recomputeKey])

  return isVisible
}
