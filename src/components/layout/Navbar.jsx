import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact Us', href: '#contact' }
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar-item">
                <a
                  href={link.href}
                  className={`navbar-link ${link.name === 'Contact Us' ? 'navbar-link-contact' : ''}`}
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="navbar-mobile-menu"
            type="button"
          >
            <span className={`navbar-toggle-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`navbar-toggle-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`navbar-toggle-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
        
        <div
          id="navbar-mobile-menu"
          className={`navbar-mobile-menu ${mobileMenuOpen ? 'navbar-mobile-menu-open' : ''}`}
        >
          <ul className="navbar-mobile-nav">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar-mobile-item">
                <a
                  href={link.href}
                  className={`navbar-mobile-link ${link.name === 'Contact Us' ? 'navbar-mobile-link-contact' : ''}`}
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
