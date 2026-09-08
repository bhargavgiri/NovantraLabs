'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { whyUsReasons } from '@/lib/data/whyus'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const supportStats = [
  { value: '< 48hrs', label: 'Response Time' },
  { value: '100%',    label: 'Project Transparency' },
  { value: 'NDA',     label: 'Protected Projects' },
  { value: '24/7',    label: 'Post-Launch Support' },
]

export default function WhyUs() {
  const gridRef = useScrollReveal()

  return (
    <section id="why-us" aria-label="Why Choose Novantra Labs" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: 0.04,
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.5) 0%, transparent 65%)',
        }}
      />

      <div className="site-container">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <p className="section-label">WHY CHOOSE US</p>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            Built Different.{' '}
            <span className="gradient-text">Delivered Better.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Six reasons our clients choose us over every other agency — and stay with us long-term.
          </motion.p>
        </motion.div>

        {/* Reasons grid */}
        <div
          ref={gridRef}
          className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {whyUsReasons.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col rounded-2xl border border-white/8 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300"
              style={{ background: '#0d1b33', padding: '28px' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.06)', marginBottom: '20px' }}
              >
                {reason.icon}
              </div>
              <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'var(--font-poppins)', marginBottom: '10px' }}>
                {reason.title}
              </h3>
              <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-inter)', lineHeight: 1.7 }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div style={{ marginTop: '48px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/8">
            {[
              { value: '< 48hrs', label: 'Response Time' },
              { value: '100%', label: 'Project Transparency' },
              { value: 'NDA', label: 'Protected Projects' },
              { value: '24/7', label: 'Post-Launch Support' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center border-b border-white/8 md:border-b-0 md:border-r border-white/8 last:border-0"
                style={{ background: 'rgba(13,27,51,0.6)', padding: '32px 16px' }}
              >
                <span className="text-2xl font-bold text-cyan-400" style={{ fontFamily: 'var(--font-poppins)', marginBottom: '6px' }}>{item.value}</span>
                <span className="text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--font-inter)' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: '40px' }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            style={{ fontFamily: 'var(--font-poppins)', padding: '14px 36px', borderRadius: '10px', minHeight: '44px' }}
          >
            Start Your Project Today →
          </a>
        </div>

      </div>
    </section>
  )
}
