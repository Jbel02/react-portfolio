/**
 * One project tile. Purely presentational — it receives the project object and
 * reports clicks upward, so Projects owns all the modal state.
 */
export default function ProjectCard({ project, onOpen, onHoverStart, onHoverEnd }) {
  return (
    <div className="col-md-6 col-lg-4">
      <article
        className="card project-card h-100"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        <img
          src={project.image}
          className="card-img-top project-image"
          alt={project.title}
          loading="lazy"
        />

        <div className="card-body d-flex flex-column">
          <span className="tech-pill">{project.tech}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="body-text flex-grow-1">{project.summary}</p>

          <button
            type="button"
            className="btn btn-outline-accent mt-3"
            onClick={onOpen}
          >
            View Details
          </button>
        </div>
      </article>
    </div>
  )
}
