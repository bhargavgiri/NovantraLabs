'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations'

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Novantra Labs"
      className="section-padding relative overflow-hidden"
    >
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.08, background: 'radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, transparent 70%)' }}
      />

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={staggerContainer}
          >
            <motion.div variants={slideInLeft} className="mb-4">
              <p className="section-label">About Novantra Labs</p>
            </motion.div>

            <motion.h2
              variants={slideInLeft}
              className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              We Build Digital Products{' '}
              <span className="gradient-text">That Actually Work</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/60 text-base sm:text-lg leading-8 mb-5" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Novantra Labs is a premium digital innovation studio specializing in custom software, AI-powered solutions, and scalable technology products. We partner with ambitious businesses to transform their operations and accelerate growth.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-white/60 text-base sm:text-lg leading-8 mb-8" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Our team of senior engineers, designers, and strategists work obsessively on one goal: building products that drive real business outcomes — faster operations, more revenue, and happier customers.
            </motion.p>

            {/* Team card */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-start gap-4 rounded-2xl border border-white/8 bg-white/3"
              style={{ padding: '24px' }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                NL
              </div>
              <div style={{ flex: 1 }}>
                <p className="font-semibold text-white text-sm" style={{ marginBottom: '8px' }}>Novantra Labs Team</p>
                <p className="text-gray-400 text-sm" style={{ lineHeight: 1.7, marginBottom: '16px' }}>
                  A tight-knit team of senior engineers and product designers who have shipped software for businesses across India, UAE, UK, and the US.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Remote-First', '5+ Years Experience', 'NDA Protected', 'Post-Launch Support'].map(tag => (
                    <span key={tag} className="text-xs rounded-full border border-blue-500/20 text-blue-300" style={{ background: 'rgba(37,99,235,0.12)', padding: '4px 12px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(to right, #2563eb, #06b6d4)', boxShadow: '0 0 24px rgba(37,99,235,0.35)', fontFamily: 'var(--font-poppins)', padding: '12px 28px', borderRadius: '10px', minHeight: '44px' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(37,99,235,0.55)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(37,99,235,0.35)' }}
              >
                Start a Project →
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center font-semibold text-white/90 text-sm border border-white/20 transition-all hover:border-blue-500/50 hover:bg-blue-600/10"
                style={{ fontFamily: 'var(--font-poppins)', padding: '12px 28px', borderRadius: '10px', minHeight: '44px' }}
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right column: Stats grid */}
          <div className="grid grid-cols-2 gap-3 lg:pt-16 lg:self-start">
            {[
              { number: '120+', label: 'Projects Delivered' },
              { number: '80+', label: 'Happy Clients' },
              { number: '15+', label: 'Solutions Shipped' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/8 text-center"
                style={{ background: '#0d1b33' }}
              >
                <div className="text-3xl font-bold text-cyan-400 leading-none mb-2" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 tracking-wide" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
