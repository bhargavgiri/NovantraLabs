'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const serviceLinks = [
  'Mobile Apps', 'Web Development', '.NET Development', 'AI & ML Solutions',
  'Business Automation', 'Cloud & Backend', 'UI/UX Design', 'SEO Services',
]

const companyLinks = [
  { label: 'About Us',        href: '#about' },
  { label: 'Our Work',        href: '#portfolio' },
  { label: 'Why Choose Us',   href: '#why-us' },
  { label: 'Contact',         href: '#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy',    href: '/privacy' },
  { label: 'Terms of Service',  href: '/terms' },
  { label: 'NDA Policy',        href: '/nda' },
]

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative"
      style={{ backgroundColor: '#080D1A', fontFamily: 'var(--font-inter), sans-serif' }}
    >
      {/* Top gradient border separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="site-container pt-16 sm:pt-20 pb-8">

        {/* Main links grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-8">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                  boxShadow: '0 0 20px rgba(37,99,235,0.35)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 16L7 3L12 12L15 7L18 16" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span
                className="font-bold text-lg text-white"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                Novantra <span style={{ color: '#06B6D4' }}>Labs</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Transforming SaaS with AI-Powered Product Engineering. Apps, Automation & Scalable Tech Solutions that accelerate business growth.
            </p>
            {/* Social icons — WhatsApp + Email only (no fake links) */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919157433115"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 transition-all duration-200 text-sm"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)'
                  e.currentTarget.style.color = '#25D366'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                }}
              >
                💬
              </a>
              <a
                href="mailto:hello@novantra.com"
                aria-label="Email"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 transition-all duration-200 text-sm"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37,99,235,0.15)'
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'
                  e.currentTarget.style.color = '#60a5fa'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                }}
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4
              className="font-semibold text-white text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4
              className="font-semibold text-white text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <h4
              className="font-semibold text-white text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact row */}
        <div
          className="py-6 flex flex-wrap gap-6 items-center"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <a
            href="mailto:hello@novantra.com"
            className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-sm group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            hello@novantra.com
          </a>
          <a
            href="https://wa.me/919157433115"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-sm group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-500/15 transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            +91 9157433115
          </a>
          <div className="flex items-center gap-2.5 text-white/60 text-sm">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            India • Remote Worldwide
          </div>
        </div>

        {/* Bottom bar — dynamic year */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs pt-6">
          <span>© {new Date().getFullYear()} Novantra Labs. All rights reserved.</span>
          <span>Built with ❤️ in India</span>
        </div>
      </div>
    </footer>
  )
}
