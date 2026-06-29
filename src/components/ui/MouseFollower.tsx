'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MouseFollower() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-magnetic]')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => setIsHovering(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-cyan-400/30 mix-blend-difference"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? 'rgba(34,211,238,0.7)' : 'rgba(34,211,238,0.3)',
        }}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 300,
          mass: 0.5,
          opacity: { duration: 0.2 },
          borderColor: { duration: 0.3 },
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isHovering ? 6 : 6,
          height: isHovering ? 6 : 6,
          opacity: isVisible ? (isHovering ? 0.6 : 1) : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 500,
          mass: 0.2,
        }}
      />

      {/* Spotlight glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-0 rounded-full"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 60%)',
          width: 400,
          height: 400,
        }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 180,
          mass: 1.2,
        }}
      />
    </>
  )
}
