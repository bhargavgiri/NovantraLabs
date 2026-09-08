'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const HeroScene = dynamic(
  () => import('@/components/three/HeroScene').catch(() => ({ default: () => null })),
  { ssr: false, loading: () => null }
)

const TRUST_BADGES = [
  { icon: '⚡', label: 'Fast Delivery' },
  { icon: '🔒', label: 'Secure & Reliable' },
  { icon: '✔', label: 'Scalable Architecture' },
  { icon: '🌍', label: 'Global Standards' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: '#0F172A',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--navbar-height, 64px) + var(--announcement-height, 40px) + 32px)',
        paddingBottom: '80px',
      }}
    >
      {/* ── Background glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-2/3 h-2/3"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(37,99,235,0.2) 0%, transparent 60%)' }}
        />
        <div
          className="absolute top-0 right-0 w-2/3 h-2/3"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(139,92,246,0.18) 0%, transparent 60%)' }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2"
          style={{ background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 60%)' }}
        />
        {/* Mobile colour splash */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            opacity: 0.25,
            background:
              'radial-gradient(ellipse at 75% 15%, rgba(37,99,235,0.35) 0%, transparent 55%), radial-gradient(ellipse at 25% 85%, rgba(139,92,246,0.25) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* ── Three.js scene — isolated, NEVER blocks content ── */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 1 }}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* ══════════════════════════════════════════════════════
          MAIN CONTENT — CSS animated, always visible, z-10
      ══════════════════════════════════════════════════════ */}
      <div
        className="section-container relative w-full"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-3xl mx-auto lg:mx-0">

          {/* Live badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 rounded-full mb-6 sm:mb-8"
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: '#4ade80', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite' }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#4ade80' }} />
            </span>
            <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 500, whiteSpace: 'nowrap' }}>
              Premium Digital Innovation Studio
            </span>
          </div>

          {/* H1 */}
          <h1
            className="hero-title font-bold leading-tight tracking-tight"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              color: 'white',
              marginBottom: '1.25rem',
            }}
          >
            Transforming SaaS with{' '}
            <span className="gradient-text">
              AI-Powered Product Engineering
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-sub leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              maxWidth: '560px',
              marginBottom: '2rem',
              fontFamily: 'var(--font-inter), sans-serif',
            }}
          >
            We build apps, automation tools &amp; scalable tech solutions that grow your
            business faster — with engineering excellence and zero fluff.
          </p>

          {/* CTA buttons */}
          <div className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8 sm:mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', padding: '12px 28px', minHeight: '44px' }}
            >
              Get Started →
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white/90 border border-white/20 hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', padding: '12px 28px', minHeight: '44px' }}
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-600/10 transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', padding: '12px 24px', minHeight: '44px', color: '#06B6D4' }}
            >
              Request Free Demo <span style={{ fontSize: '12px' }}>◉</span>
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="hero-badges flex flex-wrap justify-center lg:justify-start"
            style={{ gap: '8px 16px' }}
          >
            {TRUST_BADGES.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontFamily: 'var(--font-inter), sans-serif' }}
              >
                <span>{icon}</span>
                <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute hidden sm:flex flex-col items-center gap-1.5"
        style={{ bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
            animation: 'bounce-gentle 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
