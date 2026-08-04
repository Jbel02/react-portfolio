import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  // Which project's dialog is open (null = closed). Storing the project rather
  // than a boolean means the modal always renders the right content.
  const [selectedProject, setSelectedProject] = useState(null)

  // Gradient wash behind the grid, matched to the hovered card — the same
  // hover interaction used on the original landing page.
  const [hoverGradient, setHoverGradient] = useState(null)

  return (
    <section
      id="projects"
      className={`section section-projects${hoverGradient ? ' is-hovering' : ''}`}
      style={{ '--hover-gradient': hoverGradient ?? 'none' }}
    >
      <div className="container section-inner">
        <p className="section-eyebrow text-center">My Work</p>
        <h2 className="section-heading text-center">Projects</h2>
        <div className="section-underline" />

        <div className="row g-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
              onHoverStart={() => setHoverGradient(project.gradient)}
              onHoverEnd={() => setHoverGradient(null)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
