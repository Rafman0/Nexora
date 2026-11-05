import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Skeleton from '../ui/Skeleton'

const getExternalUrl = (value) => {
  if (!value) return null

  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null
  } catch {
    return null
  }
}

const ProjectPreviewModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const backdropRef = useRef(null)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const expandedCloseButtonRef = useRef(null)
  const galleryImageButtonRef = useRef(null)
  const expandedRef = useRef(false)
  const screenshots = project.screenshots || []
  const liveUrl = getExternalUrl(project.liveUrl)
  const githubUrl = getExternalUrl(project.githubUrl)

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        if (expandedRef.current) {
          setIsExpanded(false)
          requestAnimationFrame(() => galleryImageButtonRef.current?.focus())
        } else {
          onClose()
        }
      } else if (event.key === 'ArrowRight' && screenshots.length > 1) {
        setActiveImage((index) => (index + 1) % screenshots.length)
      } else if (event.key === 'ArrowLeft' && screenshots.length > 1) {
        setActiveImage((index) => (index - 1 + screenshots.length) % screenshots.length)
      } else if (event.key === 'Tab') {
        const focusScope = expandedRef.current
          ? backdropRef.current?.querySelector('.project-lightbox')
          : dialogRef.current
        const focusable = [...(focusScope?.querySelectorAll(
          'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])',
        ) || [])].filter((element) => element.getClientRects().length > 0)
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [onClose, screenshots.length])

  useEffect(() => {
    expandedRef.current = isExpanded
    if (isExpanded) {
      requestAnimationFrame(() => expandedCloseButtonRef.current?.focus())
    }
  }, [isExpanded])

  useEffect(() => {
    setImageLoaded(false)
    setImageError(false)
  }, [activeImage, project.id])

  const moveImage = (direction) => {
    setActiveImage((index) => (index + direction + screenshots.length) % screenshots.length)
  }

  const closeExpandedImage = () => {
    setIsExpanded(false)
    requestAnimationFrame(() => galleryImageButtonRef.current?.focus())
  }

  const renderImagePlaceholder = (message) => (
    <div className="project-preview-placeholder">
      <span className="project-preview-placeholder-icon" aria-hidden="true">N</span>
      <p>{message}</p>
    </div>
  )

  const screenshot = screenshots[activeImage]
  const screenshotSrc = typeof screenshot === 'string' ? screenshot : screenshot?.src
  const screenshotAlt = typeof screenshot === 'string'
    ? `${project.title} project screenshot ${activeImage + 1}`
    : screenshot?.alt || `${project.title} project screenshot ${activeImage + 1}`

  return createPortal(
    <div
      ref={backdropRef}
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        ref={dialogRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="project-modal-close"
          aria-label="Close project preview"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <header className="project-modal-header">
          <span className="project-category">{project.category}</span>
          <h2 id="project-modal-title">{project.title}</h2>
        </header>

        <div className="project-gallery">
          {screenshotSrc && !imageError ? (
            <>
              {!imageLoaded && <Skeleton className="project-gallery-skeleton" variant="card" />}
              <button
                ref={galleryImageButtonRef}
                type="button"
                className={`project-gallery-image-button ${imageLoaded ? 'project-gallery-image-loaded' : ''}`}
                aria-label="View larger screenshot"
                onClick={() => setIsExpanded(true)}
              >
                <img
                  key={`${project.id}-${activeImage}`}
                  src={screenshotSrc}
                  alt={screenshotAlt}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageLoaded(true)
                    setImageError(true)
                  }}
                />
              </button>
            </>
          ) : renderImagePlaceholder(
            imageError ? 'Project screenshot unavailable' : 'Project screenshots coming soon',
          )}

          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                className="project-gallery-arrow project-gallery-previous"
                aria-label="Previous screenshot"
                onClick={() => moveImage(-1)}
              >
                &#8249;
              </button>
              <button
                type="button"
                className="project-gallery-arrow project-gallery-next"
                aria-label="Next screenshot"
                onClick={() => moveImage(1)}
              >
                &#8250;
              </button>
            </>
          )}
        </div>

        {screenshots.length > 1 && (
          <div className="project-gallery-thumbnails" aria-label="Project screenshots">
            {screenshots.map((image, index) => {
              const src = typeof image === 'string' ? image : image.src
              return (
                <button
                  key={src}
                  type="button"
                  className={`project-gallery-thumbnail ${index === activeImage ? 'active' : ''}`}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-pressed={index === activeImage}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              )
            })}
          </div>
        )}

        <div className="project-modal-body">
          <section>
            <h3>Overview</h3>
            <p id="project-modal-description">{project.description}</p>
          </section>
          <section>
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </section>
          <section>
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </section>
          <section>
            <h3>Key features</h3>
            <ul className="project-feature-list">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>
          <section>
            <h3>Technologies &amp; tools</h3>
            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology} className="project-tag">{technology}</span>
              ))}
            </div>
          </section>

          {(liveUrl || githubUrl) && (
            <div className="project-modal-links">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Project
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  View Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {isExpanded && screenshotSrc && (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project screenshot"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeExpandedImage()
          }}
        >
          <button
            ref={expandedCloseButtonRef}
            type="button"
            className="project-modal-close"
            aria-label="Close expanded screenshot"
            onClick={closeExpandedImage}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <img src={screenshotSrc} alt={screenshotAlt} />
        </div>
      )}
    </div>,
    document.body,
  )
}

export default ProjectPreviewModal
