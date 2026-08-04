import { useState } from 'react'
import DeviceToggle from './DeviceToggle'
import ThemeToggleButton from './ThemeToggleButton'

const NAV_LINKS = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
]

/**
 * Sticky navigation bar with an active-section indicator, theme switch, and
 * device-preview toggle.
 *
 * The mobile collapse is React state rather than Bootstrap's JS plugin, so the
 * menu closing after a link tap is just a state update.
 */
export default function Navbar({
  activeSection,
  theme,
  onToggleTheme,
  deviceView,
  onDeviceViewChange,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top app-navbar">
      <div className="container">
        <DeviceToggle value={deviceView} onChange={onDeviceViewChange} />

        <a
          className="navbar-brand fw-bold"
          href="#about"
          onClick={(event) => handleLinkClick(event, 'about')}
        >
          Johnbel<span className="brand-accent">.dev</span>
        </a>

        <div className="d-flex align-items-center gap-2 order-lg-last">
          {/* Hidden via CSS when framed (Tablet/Phone) — the floating
              instance in App.jsx takes over there instead, since this one
              lives inside the nav's collapsible subtree. */}
          <ThemeToggleButton theme={theme} onToggle={onToggleTheme} />

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mainNavLinks"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div
          className={`collapse navbar-collapse${isOpen ? ' show' : ''}`}
          id="mainNavLinks"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link${activeSection === link.id ? ' active' : ''}`}
                  href={`#${link.id}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  onClick={(event) => handleLinkClick(event, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
