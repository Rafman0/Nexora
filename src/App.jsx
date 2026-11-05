import React, { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import ThemeToggle from './components/ui/ThemeToggle'
import nexoraLogo from './assets/images/Glossy Neon NEXORA Tech Logo.png'
import nexoraLogoLight from './assets/images/Glossy Neon NEXORA Tech Logo Light.png'
import { useTheme } from './context/ThemeContext'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import AllProjects from './components/sections/AllProjects'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import useSmoothScroll from './hooks/useSmoothScroll'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme } = useTheme()
  const isProjectsPage = window.location.pathname.replace(/\/+$/, '') === '/projects'
  useSmoothScroll()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'app-loaded' : ''}`}>
      <a className="brand-logo" href={isProjectsPage ? '/' : '#home'} aria-label="Nexora home">
        <img src={theme === 'light' ? nexoraLogoLight : nexoraLogo} alt="Nexora" />
      </a>
      <div className="theme-toggle-standalone">
        <ThemeToggle />
      </div>
      {!isProjectsPage && <Navbar />}
      <main>
        {isProjectsPage ? (
          <AllProjects />
        ) : (
          <>
            <Hero />
            <Services />
            <Projects />
            <About />
            <Contact />
          </>
        )}
      </main>
      {!isProjectsPage && <Footer />}
    </div>
  )
}

export default App
