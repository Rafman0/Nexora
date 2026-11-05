import React from 'react'
import './Skeleton.css'

const Skeleton = ({ 
  width = '100%', 
  height = '20px', 
  borderRadius = '4px',
  className = '',
  variant = 'text'
}) => {
  const skeletonClass = `skeleton skeleton-${variant} ${className}`.trim()
  
  return (
    <div 
      className={skeletonClass} 
      style={{ 
        width, 
        height, 
        borderRadius 
      }}
      aria-hidden="true"
    />
  )
}

export default Skeleton
