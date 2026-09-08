'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Only on devices with hover capability
    if (window.matchMedia('(hover: none)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }

      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.left = `${posRef.current.x}px`
          glowRef.current.style.top = `${posRef.current.y}px`
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        transition: 'left 0.15s linear, top 0.15s linear',
        top: '-9999px',
        left: '-9999px',
      }}
    />
  )
}
