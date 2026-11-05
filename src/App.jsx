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

const isProjectsPath = () => {
  const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname
    .replace(/\/+$/, '')
  const pathname = window.location.pathname
  const appPath = basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
    ? pathname.slice(basePath.length)
    : pathname

  return appPath.replace(/\/+$/, '') === '/projects'
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isProjectsPage, setIsProjectsPage] = useState(isProjectsPath)
  const { theme } = useTheme()
  useSmoothScroll()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handlePopState = () => setIsProjectsPage(isProjectsPath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateToProjects = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', `${import.meta.env.BASE_URL}projects`)
    setIsProjectsPage(true)
    window.scrollTo(0, 0)
  }

  const navigateHome = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', import.meta.env.BASE_URL)
    setIsProjectsPage(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className={`app ${isLoaded ? 'app-loaded' : ''}`}>
      <a
        className="brand-logo"
        href={isProjectsPage ? import.meta.env.BASE_URL : '#home'}
        onClick={isProjectsPage ? navigateHome : undefined}
        aria-label="Nexora home"
      >
        <img src={theme === 'light' ? nexoraLogoLight : nexoraLogo} alt="Nexora" />
      </a>
      <div className="theme-toggle-standalone">
        <ThemeToggle />
      </div>
      {!isProjectsPage && <Navbar />}
      <main>
        {isProjectsPage ? (
          <AllProjects onNavigateHome={navigateHome} />
        ) : (
          <>
            <Hero />
            <Services />
            <Projects onNavigateToProjects={navigateToProjects} />
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
