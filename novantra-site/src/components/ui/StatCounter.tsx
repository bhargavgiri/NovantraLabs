'use client'

import { useCountUp } from '@/hooks/useCountUp'
import React from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  className?: string
}

const StatCounter = React.memo(function StatCounter({
  value,
  suffix = '',
  label,
  className = '',
}: StatCounterProps) {
  const { count, ref } = useCountUp(value, 2000)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center ${className}`}>
      <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl gradient-text">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm sm:text-base mt-1 font-body">{label}</div>
    </div>
  )
})

export default StatCounter
