import { useEffect, useRef } from 'react'

/**
 * Project detail dialog.
 *
 * Bootstrap's modal *styles* are reused, but visibility is driven entirely by
 * React — rendering nothing when there is no selected project. Mixing in
 * Bootstrap's JS plugin would mean two systems mutating the same DOM node.
 */
export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    // Stop the page behind the dialog from scrolling while it is open.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Move focus into the dialog so keyboard and screen-reader users land
    // inside it rather than continuing from wherever they were on the page.
    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose} />

      <div
        className="modal fade show d-block"
        role="dialog"
        aria-modal="true"
        aria-labelledby="projectModalTitle"
        // Clicks on the backdrop area close the dialog; clicks that started
        // inside the panel bubble up here too, so the target is checked.
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose()
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title h5" id="projectModalTitle">
                {project.title}
              </h2>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                ref={closeButtonRef}
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <img
                src={project.image}
                className="img-fluid rounded mb-3"
                alt={project.title}
              />

              <p className="mb-2">
                <strong>Tech Stack:</strong> {project.tech}
              </p>

              <ul className="tag-list" aria-label="Project highlights">
                {project.tags.map((tag) => (
                  <li className="tag-chip" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <p className="body-text mb-0">{project.details}</p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
