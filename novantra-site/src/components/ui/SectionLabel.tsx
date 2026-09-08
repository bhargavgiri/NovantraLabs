import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
      <span className="text-cyan-accent text-xs sm:text-sm font-display font-semibold tracking-widest uppercase">
        {children}
      </span>
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
    </div>
  )
}
