'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { androidApps, iosApps, webProjects } from '@/lib/data/portfolio'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ExternalLink } from 'lucide-react'

type TabId = 'android' | 'ios' | 'web'

const tabs: { id: TabId; label: string; count: string }[] = [
  { id: 'android', label: 'Android Apps', count: '9+' },
  { id: 'ios', label: 'iOS Apps', count: '4+' },
  { id: 'web', label: 'Web Projects', count: '4+' },
]

const stats = [
  { value: '9+',   label: 'Android Apps' },
  { value: '4+',   label: 'iOS Apps' },
  { value: '4+',   label: 'Web Projects' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabId>('android')

  return (
    <section id="portfolio" aria-label="Our Work" className="section-padding">
      <div className="site-container">

        {/* Header — FIX 6: max-width 900px, centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
          style={{
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            marginBottom: '0',
          }}
        >
          {/* FIX 5: OUR WORK → heading gap: 8px */}
          <motion.div variants={fadeInUp} style={{ marginBottom: '8px' }}>
            <p className="section-label">OUR WORK</p>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
            style={{ fontFamily: 'var(--font-poppins), sans-serif', marginBottom: '12px' }}
          >
            Products We&apos;ve{' '}
            <span className="gradient-text">Shipped</span>
          </motion.h2>

          {/* FIX 5: heading → subtitle gap: 12px already done via marginBottom above */}
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: 1.6 }}
          >
            Real apps, real downloads, real impact. Here&apos;s a selection of what we&apos;ve built.
          </motion.p>
        </motion.div>

        {/* Tabs — FIX 1-4, 7: centered, uniform sizing, proper spacing from subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{
            display: 'flex',
            flexWrap: 'wrap',          /* FIX 7: mobile wrap */
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',               /* FIX 1: equal spacing */
            marginTop: '20px',         /* FIX 4: subtitle→tabs 20px */
            marginBottom: '40px',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                /* FIX 2: uniform padding, same height */
                padding: '8px 18px',
                borderRadius: '20px',          /* FIX 2: consistent pill */
                fontSize: '14px',              /* FIX 2: same font size */
                fontWeight: 500,
                fontFamily: 'var(--font-poppins), sans-serif',
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
                whiteSpace: 'nowrap',
                /* FIX 3: smooth 0.2s transition */
                transition: 'background 0.2s ease, box-shadow 0.2s ease, color 0.2s ease, opacity 0.2s ease',
                ...(activeTab === tab.id
                  ? {
                      /* FIX 3: active — slightly brighter, subtle glow */
                      background: '#2563eb',
                      color: '#ffffff',
                      boxShadow: '0 0 16px rgba(37,99,235,0.45), 0 0 4px rgba(37,99,235,0.2)',
                      opacity: 1,
                    }
                  : {
                      /* FIX 3: inactive — lower opacity, border, hover handled via CSS class */
                      background: 'rgba(255,255,255,0.04)',
                      color: 'rgba(255,255,255,0.55)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      opacity: 0.85,
                    }),
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'
                  e.currentTarget.style.opacity = '1'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                  e.currentTarget.style.opacity = '0.85'
                }
              }}
            >
              {tab.label}
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: '20px',
                  lineHeight: 1,
                  background: activeTab === tab.id ? 'rgba(255,255,255,0.20)' : 'rgba(255,255,255,0.08)',
                  color: activeTab === tab.id ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>


        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'android' && <AndroidGrid />}
            {activeTab === 'ios'     && <IosGrid />}
            {activeTab === 'web'     && <WebGrid />}
          </motion.div>
        </AnimatePresence>

        {/* Stats strip — FIX 10: 40px margin-top, 32px vertical padding */}
        <div
          style={{
            marginTop: '40px',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center border-b border-white/8 md:border-b-0 md:border-r border-white/8 last:border-0"
                style={{ background: 'rgba(13,27,51,0.8)', padding: '32px 16px' }}
              >
                <div
                  className="text-2xl font-bold text-cyan-400"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif', marginBottom: '6px' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-gray-500 text-center"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function AndroidGrid() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      style={{ gap: '24px', gridAutoRows: '1fr' }}
    >
      {androidApps.map((app) => (
        <AppCard
          key={app.name}
          name={app.name}
          category={app.category}
          description={app.description}
          tech={app.tech}
          gradient={app.gradient}
          letter={app.letter}
          badge={app.downloads}
          featured={app.featured}
          linkUrl={app.playStoreUrl}
          linkLabel="View on Play Store"
        />
      ))}
    </div>
  )
}

function IosGrid() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      style={{ gap: '24px', gridAutoRows: '1fr' }}
    >
      {iosApps.map((app) => (
        <AppCard
          key={app.name}
          name={app.name}
          category={app.category}
          description={app.description}
          tech={app.tech}
          gradient={app.gradient}
          letter={app.letter}
          linkUrl={app.appStoreUrl}
          linkLabel="View on App Store"
        />
      ))}
    </div>
  )
}

function WebGrid() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2"
      style={{ gap: '24px', gridAutoRows: '1fr' }}
    >
      {webProjects.map((project) => (
        <AppCard
          key={project.name}
          name={project.name}
          category={project.category}
          description={project.description}
          tech={project.tech}
          gradient={project.gradient}
          letter={project.letter}
          linkUrl={project.liveUrl}
          linkLabel="View Demo"
        />
      ))}
    </div>
  )
}

interface AppCardProps {
  name: string
  category: string
  description: string
  tech: string[]
  gradient: string
  letter: string
  badge?: string
  featured?: boolean
  linkUrl: string
  linkLabel: string
}

function AppCard({
  name, category, description, tech, gradient, letter, badge, featured, linkUrl, linkLabel,
}: AppCardProps) {
  const isReal = linkUrl.startsWith('https://')

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl border border-white/8 hover:border-blue-500/30 transition-all duration-300"
      style={{
        background: '#0d1b33',
        opacity: isReal ? 1 : 0.80,
        borderStyle: isReal ? 'solid' : 'dashed',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        height: '100%',
      }}
    >
      {featured && (
        <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(245,158,11,0.12)',
              border: '1px solid rgba(245,158,11,0.25)',
              color: '#fbbf24',
              fontFamily: 'var(--font-poppins)',
              whiteSpace: 'nowrap',
            }}
          >
            ⭐ Featured
          </span>
        </div>
      )}

      {!isReal && (
        <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(245,158,11,0.10)',
              border: '1px solid rgba(245,158,11,0.22)',
              color: '#fbbf24',
              fontFamily: 'var(--font-inter)',
              whiteSpace: 'nowrap',
            }}
          >
            🚧 Coming Soon
          </span>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            marginBottom: '12px',
          }}
        >
          <div
            className={`bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold shadow-lg shrink-0`}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              fontSize: '20px',
              fontFamily: 'var(--font-poppins)',
            }}
          >
            {letter}
          </div>
          <div style={{ flex: 1, minWidth: 0, paddingRight: (featured || !isReal) ? '76px' : '0' }}>
            <h3
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '15px',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.3,
                marginBottom: '6px',
                marginTop: '2px',
              }}
            >
              {name}
            </h3>
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                padding: '2px 8px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.40)',
                fontFamily: 'var(--font-inter)',
              }}
            >
              {category}
            </span>
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            color: 'rgba(156,163,175,0.95)',
            lineHeight: 1.6,
            marginBottom: '10px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </p>

        {badge && (
          <div style={{ marginBottom: '12px', marginTop: '0' }}>
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '12px',
                fontWeight: 500,
                color: '#4ade80',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              ↓ {badge} downloads
            </span>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '16px',
          }}
        >
          {tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 500,
                padding: '5px 10px',
                borderRadius: '20px',
                background: 'rgba(37,99,235,0.10)',
                border: '1px solid rgba(37,99,235,0.22)',
                color: '#93c5fd',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {isReal ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: 600,
            color: '#22d3ee',
            fontFamily: 'var(--font-inter)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            marginTop: 'auto',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#67e8f9')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#22d3ee')}
        >
          {linkLabel} <ExternalLink size={13} />
        </a>
      ) : (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '11px',
            fontWeight: 500,
            padding: '5px 12px',
            borderRadius: '20px',
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.15)',
            color: 'rgba(251,191,36,0.6)',
            fontFamily: 'var(--font-inter)',
            marginTop: 'auto',
            alignSelf: 'flex-start',
          }}
        >
          In Development
        </span>
      )}
    </motion.div>
  )
}
