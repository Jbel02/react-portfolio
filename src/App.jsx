import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggleButton from './components/ThemeToggleButton'
import BackToTop from './components/BackToTop'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useBackToTop } from './hooks/useBackToTop'

// Module-level constant, not an inline array: a fresh array on every render
// would change identity each time and re-run the scroll-spy effect.
const SECTION_IDS = ['about', 'projects', 'contact']

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [deviceView, setDeviceView] = useState('desktop')

  // A state setter used as a ref callback: refs don't trigger re-renders
  // when .current changes, but the scroll-spy/back-to-top hooks below need
  // to react when this element becomes available (and it's the same DOM
  // node for the app's whole lifetime, so this only fires once on mount).
  const [siteContentEl, setSiteContentEl] = useState(null)

  const isFramed = deviceView !== 'desktop'
  const scrollSpyRoot = isFramed ? siteContentEl : null

  const activeSection = useScrollSpy(SECTION_IDS, scrollSpyRoot)
  const backToTopVisible = useBackToTop('projects', siteContentEl, deviceView)

  const handleBackToTop = useCallback(() => {
    if (isFramed && siteContentEl) {
      siteContentEl.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isFramed, siteContentEl])

  return (
    <div className={`site-wrapper view-${deviceView}`}>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      {/* Floating instance for the Tablet/Phone frame — see
          ThemeToggleButton's comment for why it can't reuse the
          navbar-nested one there. */}
      <ThemeToggleButton
        theme={theme}
        onToggle={toggleTheme}
        className="theme-toggle--framed"
      />

      <BackToTop isVisible={backToTopVisible} onClick={handleBackToTop} />

      {/* Hover-reveal trigger strip for the collapsed Tablet/Phone sidebar. */}
      <div className="nav-hover-zone" aria-hidden="true" />

      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        deviceView={deviceView}
        onDeviceViewChange={setDeviceView}
      />

      <div className="site-content" ref={setSiteContentEl}>
        <main id="main">
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
