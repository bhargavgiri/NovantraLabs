'use client'

import Link from 'next/link'
import React from 'react'

interface GlowButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: GlowButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-display font-semibold text-sm sm:text-base
    px-6 py-3 rounded-xl
    transition-all duration-300 ease-out
    min-h-[44px] min-w-[44px]
    cursor-pointer select-none
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-primary to-cyan-accent
      text-white
      shadow-glow-blue
      hover:shadow-[0_0_40px_rgba(37,99,235,0.6),0_0_80px_rgba(37,99,235,0.3)]
      hover:scale-[1.02]
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent
      border border-white/20
      text-brand-text
      hover:border-cyan-accent
      hover:text-cyan-accent
      hover:bg-cyan-accent/5
    `,
    outline: `
      bg-transparent
      border border-blue-primary/50
      text-blue-primary
      hover:border-blue-primary
      hover:bg-blue-primary/10
    `,
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    if (href.startsWith('#') || href.startsWith('/')) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
