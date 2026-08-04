import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-react-theme'

/**
 * Light/dark theme state, persisted to localStorage and mirrored onto a
 * `data-theme` attribute so plain CSS variables can do the actual theming.
 *
 * Kept as a hook rather than inline state so the persistence rules live in one
 * place — App only cares about `theme` and `toggleTheme`.
 */
export function useTheme() {
  // Lazy initialiser: localStorage is read once on mount instead of on every
  // render, and the stored value wins over the OS preference.
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
