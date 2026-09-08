'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  tilt?: boolean
  glowColor?: string
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  tilt = false,
  glowColor = 'rgba(37,99,235,0.2)',
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (!tilt || !cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        glass-card rounded-2xl
        ${hover ? 'transition-all duration-300 hover:border-white/20' : ''}
        ${className}
      `}
      style={{
        transition: tilt ? 'transform 0.1s ease' : undefined,
      }}
    >
      {children}
    </motion.div>
  )
}
