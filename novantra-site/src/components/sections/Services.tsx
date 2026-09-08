'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import GlowButton from '@/components/ui/GlowButton'
import { services } from '@/lib/data/services'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const TAG_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  blue:   { bg: 'rgba(37,99,235,0.15)',   text: '#93c5fd', border: 'rgba(37,99,235,0.3)' },
  cyan:   { bg: 'rgba(6,182,212,0.15)',   text: '#67e8f9', border: 'rgba(6,182,212,0.3)' },
  purple: { bg: 'rgba(139,92,246,0.15)',  text: '#c4b5fd', border: 'rgba(139,92,246,0.3)' },
  gray:   { bg: 'rgba(100,116,139,0.15)', text: '#94a3b8', border: 'rgba(100,116,139,0.3)' },
  green:  { bg: 'rgba(34,197,94,0.12)',   text: '#86efac', border: 'rgba(34,197,94,0.25)' },
}

export default function Services() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="services" aria-label="Our Services" className="section-padding">
      <div className="site-container">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-14 sm:mb-20">
          <p className="section-label">WHAT WE BUILD</p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            Services Built for{' '}
            <span className="gradient-text">Business Impact</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            We craft digital products that solve real problems, scale with your growth,
            and deliver measurable ROI.
          </motion.p>
        </div>

        {/* Services grid — all 12, 3 columns desktop */}
        <div
          ref={gridRef}
          className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '28px' }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mid CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <div
            className="rounded-2xl border border-white/10 mx-auto max-w-2xl text-center"
            style={{ background: '#0d1b33', padding: '56px 40px' }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-poppins), sans-serif', marginBottom: '12px' }}
            >
              Need something custom? We build it.
            </h3>
            <p
              className="text-gray-400 text-sm md:text-base max-w-md mx-auto"
              style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: 1.7, marginBottom: '28px' }}
            >
              Tell us your challenge. Our team will architect the right solution.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-poppins)', padding: '14px 36px', borderRadius: '10px', minHeight: '44px' }}
            >
              Discuss Your Project →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: (typeof services)[0]
}

function ServiceCard({ service }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rX = ((y - cy) / cy) * -5
    const rY = ((x - cx) / cx) * 5
    card.style.transform = `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-4px)`
  }

  const tagStyle = service.tagColor ? TAG_STYLES[service.tagColor] : null

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        if (cardRef.current) {
          cardRef.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)'
        }
      }}
      className="card-glass flex flex-col h-full group relative overflow-hidden"
    >
      {/* Gradient border overlay on hover */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${service.color}`}
        style={{
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
      />

      {/* Tag badge */}
      {service.tag && tagStyle && (
        <div className="absolute top-3 right-3">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: tagStyle.bg,
              color: tagStyle.text,
              border: `1px solid ${tagStyle.border}`,
              fontFamily: 'var(--font-inter), sans-serif',
            }}
          >
            {service.tag}
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}
        style={{ marginBottom: '16px' }}
      >
        {service.icon}
      </div>

      <h3
        className="font-bold text-white text-base sm:text-lg leading-snug"
        style={{ fontFamily: 'var(--font-poppins), sans-serif', marginBottom: '10px' }}
      >
        {service.title}
      </h3>
      <p
        className="text-white/55 text-sm flex-1"
        style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: 1.7, marginBottom: '0' }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <div style={{ marginTop: '20px' }}>
        <a
          href="#contact"
          className="cta-link inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Get a Quote
          <span className="cta-arrow" style={{ display: 'inline-block', transition: 'transform 0.2s ease' }}>→</span>
        </a>
      </div>
    </div>
  )
}
