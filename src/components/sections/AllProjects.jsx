import React, { useCallback, useState } from 'react'
import Section from '../common/Section'
import ProjectCard from './ProjectCard'
import ProjectPreviewModal from './ProjectPreviewModal'
import projects from '../../data/projects'
import './Projects.css'

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const closePreview = useCallback(() => setSelectedProject(null), [])

  return (
    <>
      <Section id="all-projects" className="projects all-projects-page">
        <div className="container-custom">
          <div className="projects-header scroll-reveal">
            <a className="all-projects-back" href="/" aria-label="Back to Nexora portfolio">
              <span aria-hidden="true">&larr;</span> Back to portfolio
            </a>
            <span className="section-label">[PORTFOLIO]</span>
            <h1 className="projects-title">
              All <span className="text-gradient">projects</span>
            </h1>
            <p className="projects-subtitle">
              Explore the complete collection of current projects
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </Section>

      {selectedProject && (
        <ProjectPreviewModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={closePreview}
        />
      )}
    </>
  )
}

export default AllProjects
