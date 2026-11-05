import React from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

const Section = ({ id, className = '', children, ...props }) => {
  useScrollReveal()
  
  return (
    <section id={id} className={`scroll-reveal ${className}`.trim()} {...props}>
      {children}
    </section>
  )
}

export default Section
