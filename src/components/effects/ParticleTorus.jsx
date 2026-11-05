import React, { useRef, useEffect } from 'react'
import useMousePosition from '../../hooks/useMousePosition'
import useDeviceCapability from '../../hooks/useDeviceCapability'
import useReducedMotion from '../../hooks/useReducedMotion'
import './ParticleTorus.css'

const ParticleTorus = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const mousePosRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)
  
  const mousePosition = useMousePosition()
  const { particleCount, enableEffects, isMobile } = useDeviceCapability()
  const prefersReducedMotion = useReducedMotion()
  
  useEffect(() => {
    mousePosRef.current = mousePosition
  }, [mousePosition])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    
    const resizeCanvas = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    particlesRef.current = []
    const count = prefersReducedMotion ? Math.floor(particleCount * 0.3) : particleCount
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      particlesRef.current.push({
        angle: angle,
        radiusX: 140 + Math.random() * 60,
        radiusY: 90 + Math.random() * 40,
        tilt: 0.25,
        zOffset: (Math.random() - 0.5) * 50,
        size: Math.random() * 2 + 0.6,
        speed: (Math.random() * 0.012 + 0.008) * (prefersReducedMotion ? 0.3 : 1),
        hue: Math.random() * 70 + 175,
        alpha: Math.random() * 0.65 + 0.35,
        pulse: Math.random() * Math.PI * 2,
        wobble: Math.random() * Math.PI * 2
      })
    }
    
    const animate = () => {
      timeRef.current += 0.008
      
      ctx.clearRect(0, 0, width, height)
      
      const centerX = width * 0.68
      const centerY = height * 0.58
      
      const mouseInfluenceX = (mousePosRef.current.x - window.innerWidth / 2) * 0.00008
      const mouseInfluenceY = (mousePosRef.current.y - window.innerHeight / 2) * 0.00008
      
      particlesRef.current.forEach((particle, index) => {
        if (!prefersReducedMotion) {
          particle.angle += particle.speed + mouseInfluenceX * 0.2
          particle.pulse += 0.025
          particle.wobble += 0.015
        }
        
        // Torus tilted slightly downwards
        const tilt = 0.35
        const cosA = Math.cos(particle.angle)
        const sinA = Math.sin(particle.angle)
        
        const x = centerX + cosA * particle.radiusX
        const y = centerY + sinA * particle.radiusY * tilt + particle.zOffset * 0.4 + Math.sin(particle.wobble) * 3
        const z = sinA * cosA * 30
        
        const parallaxX = mouseInfluenceX * (index % 4 + 1) * 14
        const parallaxY = mouseInfluenceY * (index % 4 + 1) * 10
        
        const finalX = x + parallaxX
        const finalY = y + parallaxY
        
        const depthFactor = (z + 40) / 80
        const size = particle.size * depthFactor * (1 + Math.sin(particle.pulse) * 0.28)
        const alpha = particle.alpha * depthFactor * (0.65 + Math.sin(particle.pulse) * 0.35)
        
        let gradient
        if (particle.hue < 205) {
          gradient = `rgba(0, 212, 255, ${alpha})`
        } else if (particle.hue < 245) {
          gradient = `rgba(0, 102, 255, ${alpha})`
        } else if (particle.hue < 285) {
          gradient = `rgba(139, 92, 246, ${alpha})`
        } else {
          gradient = `rgba(0, 255, 204, ${alpha})`
        }
        
        ctx.save()
        ctx.beginPath()
        ctx.arc(finalX, finalY, Math.max(size, 0.1), 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.shadowBlur = size * 3.5
        ctx.shadowColor = gradient
        ctx.fill()
        ctx.restore()
      })
      
      if (!isMobile && !prefersReducedMotion && enableEffects) {
        ctx.save()
        ctx.globalAlpha = 0.09
        for (let i = 0; i < Math.min(28, particlesRef.current.length); i++) {
          const p1 = particlesRef.current[i * Math.floor(particlesRef.current.length / 28)]
          if (!p1) continue
          
          const cosA1 = Math.cos(p1.angle)
          const sinA1 = Math.sin(p1.angle)
          const x1 = centerX + cosA1 * p1.radiusX
          const y1 = centerY + sinA1 * p1.radiusY * 0.35 + p1.zOffset * 0.4
          
          for (let j = i + 1; j < Math.min(i + 4, 28); j++) {
            const p2 = particlesRef.current[j * Math.floor(particlesRef.current.length / 28)]
            if (!p2) continue
            
            const distance = Math.abs(p1.angle - p2.angle)
            if (distance < 0.38) {
              const cosA2 = Math.cos(p2.angle)
              const sinA2 = Math.sin(p2.angle)
              const x2 = centerX + cosA2 * p2.radiusX
              const y2 = centerY + sinA2 * p2.radiusY * 0.35 + p2.zOffset * 0.4
              
              ctx.beginPath()
              ctx.moveTo(x1, y1)
              ctx.lineTo(x2, y2)
              ctx.strokeStyle = 'rgba(0, 212, 255, 0.22)'
              ctx.lineWidth = 0.4
              ctx.stroke()
            }
          }
        }
        ctx.restore()
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    if (enableEffects) {
      animate()
    }
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount, enableEffects, isMobile, prefersReducedMotion])

  if (prefersReducedMotion || !enableEffects) {
    return (
      <div className="particle-torus-container">
        <div className="particle-fallback">
          <div className="particle-fallback-ring"></div>
          <div className="particle-fallback-ring particle-fallback-ring-2"></div>
          <div className="particle-fallback-ring particle-fallback-ring-3"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="particle-torus-container">
      <canvas 
        ref={canvasRef} 
        className="particle-torus-canvas"
        aria-hidden="true"
      />
    </div>
  )
}

export default ParticleTorus
