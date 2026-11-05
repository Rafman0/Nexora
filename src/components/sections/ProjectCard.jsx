import React from 'react'

const ProjectCard = ({ project, index, onSelect }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect(project)
    }
  }

  return (
    <article
      className="project-card scroll-reveal"
      style={{ animationDelay: `${index * 0.15}s` }}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`View project: ${project.title}`}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
    >
      <div className="project-card-visual">
        <div className="project-card-gradient"></div>
        <div className="project-card-particles">
          <div className="project-particle"></div>
          <div className="project-particle"></div>
          <div className="project-particle"></div>
        </div>
      </div>
      <div className="project-card-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology} className="project-tag">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
