import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'

// Module-level constant, not an inline array: a fresh array on every render
// would change identity each time and re-run the scroll-spy effect.
const SECTION_IDS = ['about', 'projects', 'contact']

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(SECTION_IDS)

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main">
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
