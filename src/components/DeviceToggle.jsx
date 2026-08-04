const DEVICES = [
  { value: 'desktop', label: 'Desktop view', icon: DesktopIcon },
  { value: 'tablet', label: 'Tablet view', icon: TabletIcon },
  { value: 'phone', label: 'Phone view', icon: PhoneIcon },
]

/**
 * Lets a visitor preview the layout at Desktop/Tablet/Phone widths without
 * resizing the real browser window — wraps the whole page in a scaled device
 * frame (see .site-wrapper.view-* in index.css) rather than simulating a
 * viewport, since CSS media queries only ever see the real window size.
 */
export default function DeviceToggle({ value, onChange }) {
  return (
    <div
      className="btn-group device-toggle me-3"
      role="group"
      aria-label="Device view toggle"
    >
      {DEVICES.map(({ value: deviceValue, label, icon: Icon }) => (
        <button
          key={deviceValue}
          type="button"
          className={`device-btn${value === deviceValue ? ' active' : ''}`}
          title={label}
          aria-label={label}
          aria-pressed={value === deviceValue}
          onClick={() => onChange(deviceValue)}
        >
          <Icon />
        </button>
      ))}
    </div>
  )
}

function DesktopIcon() {
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
      <rect x="2" y="4" width="20" height="13" rx="1.5" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function TabletIcon() {
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
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  )
}

function PhoneIcon() {
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
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  )
}
