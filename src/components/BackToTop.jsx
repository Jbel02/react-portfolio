/**
 * Rendered as a sibling of <Navbar>, not nested inside it — the Tablet/Phone
 * frame collapses the nav to width:0/overflow:hidden when not hovered (see
 * .app-navbar rules in index.css), which would clip this button too if it
 * lived inside that subtree.
 */
export default function BackToTop({ isVisible, onClick }) {
  return (
    <button
      type="button"
      className={`back-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={onClick}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  )
}
