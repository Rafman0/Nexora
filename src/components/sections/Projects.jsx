import React, { useState } from 'react'
import Section from '../common/Section'
import Button from '../ui/Button'
import ProjectCard from './ProjectCard'
import ProjectPreviewModal from './ProjectPreviewModal'
import projects from '../../data/projects'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const renderProjectGrid = () => (
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
  )

  return (
    <>
      <Section id="projects" className="projects">
        <div className="container-custom">
          <div className="projects-header scroll-reveal">
            <span className="section-label">[PROJECTS]</span>
            <h2 className="projects-title">
              Featured <span className="text-gradient">work</span>
            </h2>
            <p className="projects-subtitle">
              A selection of our most impactful digital creations
            </p>
          </div>

          {renderProjectGrid()}

          <div className="projects-cta scroll-reveal">
            <Button href="/projects" variant="secondary" size="lg">
              View All Projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </Section>

      {selectedProject && (
        <ProjectPreviewModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

export default Projects
