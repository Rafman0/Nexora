import { useState, useEffect } from 'react'

const useDeviceCapability = () => {
  const [capability, setCapability] = useState({
    isLowEnd: false,
    isMobile: false,
    particleCount: 2000,
    enableEffects: true
  })

  useEffect(() => {
    const checkCapability = () => {
      const width = window.innerWidth
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      
      // Check for low-end indicators
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')
      
      const cores = navigator.hardwareConcurrency || 4
      const isLowCores = cores < 4
      
      const isLowEnd = isMobile && (isSlowConnection || isLowCores)
      
      let particleCount = 2500
      if (isMobile) particleCount = isLowEnd ? 300 : 800
      else if (isTablet) particleCount = 1500

      setCapability({
        isLowEnd,
        isMobile,
        particleCount,
        enableEffects: true
      })
    }

    checkCapability()
    window.addEventListener('resize', checkCapability)
    return () => window.removeEventListener('resize', checkCapability)
  }, [])

  return capability
}

export default useDeviceCapability
