import React from 'react'
import ParticleTorus from '../effects/ParticleTorus'
import Button from '../ui/Button'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <ParticleTorus />
      <div className="container-custom">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in-up">
              Building digital experiences that <span className="text-gradient">move ideas forward.</span>
            </h1>
            
            <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We design and develop digital solutions that help businesses, individuals and organisations 
              turn ideas into meaningful technology.
            </p>
            
            <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button href="#projects" variant="primary" size="lg">
                Explore Our Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Let's Build Something
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line"></div>
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  )
}

export default Hero
