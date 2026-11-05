import React from 'react'
import './Button.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  const buttonClass = `nexora-btn nexora-btn-${variant} nexora-btn-${size} ${className}`.trim()
  
  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick} {...props}>
        <span className="nexora-btn-content">{children}</span>
        <span className="nexora-btn-glow"></span>
      </a>
    )
  }
  
  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      <span className="nexora-btn-content">{children}</span>
      <span className="nexora-btn-glow"></span>
    </button>
  )
}

export default Button
