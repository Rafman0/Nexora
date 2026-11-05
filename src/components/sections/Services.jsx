import React from 'react'
import Section from '../common/Section'
import './Services.css'

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies, optimized for performance and scalability.',
      tags: ['React', 'Performance', 'Responsive']
    },
    {
      number: '02',
      title: 'Digital Design',
      description: 'Immersive user interfaces and experiences that captivate and convert with motion-driven design.',
      tags: ['UI/UX', 'Motion', 'Branding']
    },
    {
      number: '03',
      title: 'Brand Identity',
      description: 'Cohesive brand systems that communicate your vision with clarity and impact across all touchpoints.',
      tags: ['Strategy', 'Identity', 'Guidelines']
    },
    {
      number: '04',
      title: 'Interactive Experiences',
      description: 'Engaging digital experiences with animations, micro-interactions, and cutting-edge web technologies.',
      tags: ['Animation', 'Canvas', 'WebGL']
    }
  ]

  return (
    <Section id="services" className="services">
      <div className="container-custom">
        <div className="services-header scroll-reveal">
          <span className="section-label">[SERVICES]</span>
          <h2 className="services-title">
            What we <span className="text-gradient">create</span>
          </h2>
          <p className="services-subtitle">
            Comprehensive digital solutions tailored to bring your vision to life
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.number} 
              className="service-card scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-card-header">
                <span className="service-number">{service.number}</span>
                <div className="service-glow"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map(tag => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Services
