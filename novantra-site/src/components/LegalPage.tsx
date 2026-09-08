'use client'

import Link from 'next/link'

export interface LegalSection {
  title: string
  content?: string
  contentNode?: React.ReactNode
  list?: string[]
}

export interface LegalPageProps {
  title: string
  icon: string
  lastUpdated: string
  highlight?: { icon: string; title: string; text: string }
  sections: LegalSection[]
}

export default function LegalPage({ title, icon, lastUpdated, highlight, sections }: LegalPageProps) {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a1628',
        paddingTop: '7rem',
        paddingBottom: '6rem',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '48rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        {/* Breadcrumb — BUG 4: "Home → Legal → [Page Name]" */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            color: 'rgba(148,163,184,0.6)',
            marginBottom: '2rem',
          }}
        >
          <Link
            href="/"
            style={{ color: 'rgba(148,163,184,0.6)', textDecoration: 'none' }}
          >
            Home
          </Link>
          <span>→</span>
          <span>Legal</span>
          <span>→</span>
          <span style={{ color: 'rgba(248,250,252,0.8)' }}>{title}</span>
        </div>

        {/* Page header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1 }}>{icon}</div>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '0.5rem',
              lineHeight: 1.15,
              fontFamily: 'var(--font-poppins), sans-serif',
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: '13px', color: 'rgba(148,163,184,0.55)' }}>
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Highlight box — BUG 4: bg-[#0d1b33] with blue border */}
        {highlight && (
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1.25rem',
              borderRadius: '12px',
              background: '#0d1b33',
              border: '1px solid rgba(37,99,235,0.2)',
              marginBottom: '2.5rem',
            }}
          >
            <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{highlight.icon}</span>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'white',
                  marginBottom: '4px',
                  fontFamily: 'var(--font-poppins), sans-serif',
                }}
              >
                {highlight.title}
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(203,213,225,0.8)' }}>
                {highlight.text}
              </p>
            </div>
          </div>
        )}

        {/* Sections */}
        <div>
          {sections.map((section, i) => (
            <div
              key={i}
              style={{
                borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                marginTop: i === 0 ? 0 : '2rem',
                paddingTop: i === 0 ? 0 : '2rem',
              }}
            >
              {/* BUG 4: border-l-4 border-blue-500 pl-4 heading style */}
              <h2
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  color: 'white',
                  marginBottom: '0.75rem',
                  marginTop: '2rem',
                  paddingLeft: '1rem',
                  borderLeft: '4px solid #3b82f6',
                  lineHeight: 1.3,
                  fontFamily: 'var(--font-poppins), sans-serif',
                }}
              >
                <span style={{ color: '#60a5fa', marginRight: '6px' }}>
                  {i + 1}.
                </span>
                {section.title}
              </h2>

              {/* BUG 4: text-gray-400 leading-relaxed */}
              {section.content && (
                <p
                  style={{
                    color: '#9ca3af', /* text-gray-400 */
                    fontSize: '15px',
                    lineHeight: 1.8,
                    paddingLeft: '1rem',
                  }}
                >
                  {section.content}
                </p>
              )}

              {section.contentNode && (
                <div style={{ paddingLeft: '1rem', color: '#9ca3af', fontSize: '15px', lineHeight: 1.8 }}>
                  {section.contentNode}
                </div>
              )}

              {section.list && (
                <ul style={{ paddingLeft: '1rem', marginTop: '0.75rem', listStyle: 'none', padding: 0 }}>
                  {section.list.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: '#9ca3af', /* text-gray-400 */
                        fontSize: '14px',
                        lineHeight: 1.7,
                        marginBottom: '6px',
                        paddingLeft: '1rem',
                      }}
                    >
                      <span style={{ color: '#60a5fa', flexShrink: 0, marginTop: '3px' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Link
            href="/"
            style={{
              color: '#60a5fa',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            ← Back to Novantra Labs
          </Link>
          <p style={{ fontSize: '12px', color: 'rgba(148,163,184,0.45)' }}>
            Questions?{' '}
            <a
              href="mailto:hello@novantra.com"
              style={{ color: '#22d3ee', textDecoration: 'none' }}
            >
              hello@novantra.com
            </a>
          </p>
        </div>

      </div>
    </main>
  )
}
