'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  // BUG 6 FIX: pure React state only — no sessionStorage (blocked in sandboxed iframes)
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div
            id="announcement-bar"
            className="flex items-center justify-center px-10 py-2.5 text-white text-xs sm:text-sm font-medium relative"
            style={{
              background: 'linear-gradient(90deg, #2563EB 0%, #8B5CF6 50%, #06B6D4 100%)',
              fontFamily: 'var(--font-inter), sans-serif',
            }}
          >
            <span className="flex-shrink-0 mr-2">🚀</span>
            <span className="text-center">
              Now Accepting New Projects for Q3 2026 — Limited Slots Available
              <span className="mx-2 opacity-60">|</span>
              <a
                href="#contact"
                className="underline underline-offset-2 hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Talk to us →
              </a>
            </span>
            {/* BUG 6 FIX: absolute right-4, clearly visible X button */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-1 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
