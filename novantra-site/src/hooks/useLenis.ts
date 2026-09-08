'use client'

import { useEffect } from 'react'

export function useLenis() {
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void
      destroy: () => void
    } | null = null

    const init = async () => {
      try {
        const LenisModule = await import('lenis')
        const Lenis = LenisModule.default

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        })

        function raf(time: number) {
          lenis?.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis not available, skip
        console.warn('Lenis smooth scroll not available:', e)
      }
    }

    init()

    return () => {
      lenis?.destroy()
    }
  }, [])
}
