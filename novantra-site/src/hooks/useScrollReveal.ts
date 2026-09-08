'use client'

import { useEffect, useRef } from 'react'

type RevealOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null)
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px', once = true } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Add will-animate so CSS hides items (safe: only runs when JS is active)
    element.classList.add('will-animate')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('will-animate')
            entry.target.classList.add('revealed')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('revealed')
            entry.target.classList.add('will-animate')
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
