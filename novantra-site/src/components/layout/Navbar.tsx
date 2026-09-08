'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Products', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
]

const serviceDropdownItems = [
  { icon: '📱', label: 'Mobile Apps', desc: 'iOS & Android — React Native / Flutter', href: '#services' },
  { icon: '🌐', label: 'Web Development', desc: 'High-performance Next.js web platforms', href: '#services' },
  { icon: '🤖', label: 'AI Solutions', desc: 'Intelligent ML pipelines & automation', href: '#services' },
  { icon: '⚡', label: 'Automation', desc: 'End-to-end business process automation', href: '#services' },
  { icon: '☁️', label: 'Cloud & Backend', desc: 'AWS, GCP, Azure — built to scale', href: '#services' },
  { icon: '🎨', label: 'UI/UX Design', desc: 'Conversion-engineered premium interfaces', href: '#services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLLIElement>(null)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])



  // Body scroll lock + CSS variable for navbar height
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Set --navbar-height CSS variable
  useEffect(() => {
    const el = navRef.current
    if (!el) return
    const update = () => {
      document.documentElement.style.setProperty('--navbar-height', `${el.offsetHeight}px`)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const closeAll = () => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }

  return (
    <>
      <header
        id="main-navbar"
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: scrolled ? 'rgba(15,23,42,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="section-container">
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '64px',
              gap: '8px',
            }}
          >
            {/* ── Logo ── */}
            <Link
              href="#home"
              onClick={closeAll}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(37,99,235,0.35)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 16L7 3L12 12L15 7L18 16" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Show "N" on tiny screens, full name sm+ */}
              <span
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'white',
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="sm:hidden">N</span>
                <span className="hidden sm:inline">Novantra <span style={{ color: '#06B6D4' }}>Labs</span></span>
              </span>
            </Link>

            {/* ── Desktop Nav (md+) ── */}
            <ul
              className="hidden md:flex"
              style={{
                listStyle: 'none',
                alignItems: 'center',
                gap: '2px',
                margin: 0,
                padding: 0,
                flex: 1,
                justifyContent: 'center',
              }}
            >
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <li
                    key={link.label}
                    ref={dropdownRef}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '8px 12px',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '14px',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontWeight: 500,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease',
                        minHeight: '44px',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'white'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        style={{
                          transition: 'transform 0.2s ease',
                          transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.15 }}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 12px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '600px',
                            minWidth: '600px',
                            background: 'rgba(8, 14, 33, 0.98)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '16px',
                            padding: '24px',
                            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                            zIndex: 9999,
                            overflow: 'hidden',
                          }}
                        >
                          <div className="grid grid-cols-2 gap-2">
                            {serviceDropdownItems.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={closeAll}
                                className="group flex items-start gap-3 p-3 rounded-xl bg-transparent transition-colors hover:bg-white/5 cursor-pointer"
                                style={{ textDecoration: 'none' }}
                              >
                                <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center bg-blue-600/20 text-blue-400">
                                  <span style={{ fontSize: '18px' }}>{item.icon}</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <div className="text-sm font-semibold text-white">{item.label}</div>
                                  <div className="text-xs text-gray-400 mt-0.5 line-clamp-2 max-w-[160px]">{item.desc}</div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={closeAll}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 12px',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '14px',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontWeight: 500,
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease',
                        minHeight: '44px',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'white'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* ── Desktop CTAs (md+) ── */}
            <div
              className="hidden md:flex"
              style={{ alignItems: 'center', gap: '10px', flexShrink: 0 }}
            >
              <a
                href="#contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  minHeight: '40px',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#06B6D4'
                  e.currentTarget.style.color = '#06B6D4'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                }}
              >
                Contact
              </a>
              <a
                href="#contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '9px 18px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins), sans-serif',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 0 18px rgba(37,99,235,0.35)',
                  minHeight: '40px',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 36px rgba(37,99,235,0.6)'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 18px rgba(37,99,235,0.35)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Get Started →
              </a>
            </div>

            {/* ── Hamburger (< md) ── */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{
                display: 'flex',
                width: '44px',
                height: '44px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'background 0.2s ease',
              }}
            >
              {mobileOpen ? <X size={20} color="white" /> : <Menu size={20} color="white" />}
            </button>
          </nav>
        </div>
      </header>

      {/* ════════════════════════════════════
          Mobile menu (full-screen slide-in)
      ════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 48,
                background: 'rgba(0,0,0,0.65)',
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 49,
                width: 'min(85vw, 320px)',
                background: '#070E1F',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: 'var(--font-poppins)', fontWeight: 700, fontSize: '16px', color: 'white' }}>
                  Novantra <span style={{ color: '#06B6D4' }}>Labs</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <X size={18} color="rgba(255,255,255,0.7)" />
                </button>
              </div>

              {/* Nav links */}
              <nav style={{ flex: 1, padding: '8px 0' }}>
                {[...navLinks, { label: 'Contact', href: '#contact', hasDropdown: false }].map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={closeAll}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 24px',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '16px',
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontWeight: 500,
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      transition: 'background 0.15s ease, color 0.15s ease',
                      minHeight: '52px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    {link.label}
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>→</span>
                  </motion.a>
                ))}
              </nav>

              {/* Panel footer — contact + CTA */}
              <div
                style={{
                  padding: '20px',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Get in touch
                </p>
                <a
                  href="mailto:hello@novantra.com"
                  style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', textDecoration: 'none', wordBreak: 'break-word' }}
                >
                  📧 hello@novantra.com
                </a>
                <a
                  href="https://wa.me/919157433115"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', textDecoration: 'none' }}
                >
                  📱 +91 9157433115
                </a>
                <a
                  href="#contact"
                  onClick={closeAll}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '13px',
                    marginTop: '4px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                    color: 'white',
                    fontSize: '15px',
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 0 24px rgba(37,99,235,0.45)',
                  }}
                >
                  Get Started →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
