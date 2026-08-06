import { useState } from 'react'
import DeviceToggle from './DeviceToggle'
import ThemeToggleButton from './ThemeToggleButton'

const NAV_LINKS = [
  { id: 'about', label: 'About Me', icon: AboutIcon },
  { id: 'projects', label: 'Projects', icon: ProjectsIcon },
  { id: 'contact', label: 'Contact Me', icon: ContactIcon },
]

/**
 * Sticky navigation bar with an active-section indicator, theme switch, and
 * device-preview toggle.
 *
 * The mobile collapse is React state rather than Bootstrap's JS plugin, so the
 * menu closing after a link tap is just a state update.
 *
 * Also renders the Phone-only bottom tab bar as a sibling `<nav>` — CSS
 * hides it everywhere except .view-phone (see index.css), same pattern as
 * the floating ThemeToggleButton/BackToTop instances in App.jsx.
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

  // Drives the sliding highlight pill in the Phone bottom tab bar — falls
  // back to 0 (About) since useScrollSpy never actually returns an id
  // outside NAV_LINKS.
  const activeIndex = Math.max(
    NAV_LINKS.findIndex((link) => link.id === activeSection),
    0,
  )

  return (
    <>
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

      <nav className="phone-tab-bar" aria-label="Section navigation">
        <div
          className="phone-tab-highlight"
          style={{ '--tab-index': activeIndex }}
          aria-hidden="true"
        />
        {NAV_LINKS.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`phone-tab-link${activeSection === link.id ? ' active' : ''}`}
              aria-current={activeSection === link.id ? 'page' : undefined}
              onClick={(event) => handleLinkClick(event, link.id)}
            >
              <span className="phone-tab-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="phone-tab-label">{link.label}</span>
            </a>
          )
        })}
      </nav>
    </>
  )
}

function AboutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5" />
    </svg>
  )
}

function ProjectsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.3" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.3" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.3" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.3" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
