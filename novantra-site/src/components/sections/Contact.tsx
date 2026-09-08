'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SectionLabel from '@/components/ui/SectionLabel'
import { Loader2 } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  message: z.string().min(20, 'Please tell us a bit more (20+ characters)'),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          from_name: data.name,
          email: data.email,
          company: data.company || 'Not provided',
          message: data.message,
          subject: `New Project Inquiry from ${data.name} — Novantra Labs`,
          redirect: false,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
        reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      const subject = encodeURIComponent(`Project Inquiry from ${data.name}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\n\nMessage:\n${data.message}`
      )
      window.open(
        `mailto:hello@novantra.com?subject=${subject}&body=${body}`,
        '_blank'
      )
      setSubmitted(true)
      reset()
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact Novantra Labs"
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute left-0 bottom-0 w-1/2 h-1/2 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.07, background: 'radial-gradient(ellipse, rgba(6,182,212,0.5) 0%, transparent 70%)' }}
      />

      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-label mb-4">GET IN TOUCH</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            Ready to Build{' '}
            <span className="gradient-text">Something Great?</span>
          </h2>
          <p
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Let&apos;s talk about your project. We respond fast — no sales fluff, just honest engineering advice.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] items-start" style={{ gap: '40px' }}>

          {/* ── Left: Contact info ── */}
          <div className="flex flex-col" style={{ gap: '12px' }}>
            {[
              {
                icon: '✉️',
                label: 'EMAIL',
                value: 'hello@novantra.com',
                href: 'mailto:hello@novantra.com',
              },
              {
                icon: '💬',
                label: 'WHATSAPP',
                value: '+91 9157433115',
                href: 'https://wa.me/919157433115',
              },
              {
                icon: '📍',
                label: 'LOCATION',
                value: 'India — Remote Worldwide',
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/3 transition-all group"
                style={{ padding: '20px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: 'rgba(37,99,235,0.15)' }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: 'rgba(148,163,184,0.6)', fontFamily: 'var(--font-inter)' }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white font-medium text-sm transition-colors break-all block"
                      style={{ fontFamily: 'var(--font-inter)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#93c5fd')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* We respond fast */}
            <div
              className="flex items-start gap-3 rounded-xl"
              style={{
                padding: '16px',
                marginTop: '4px',
                background: 'rgba(245,158,11,0.05)',
                border: '1px solid rgba(245,158,11,0.20)',
              }}
            >
              <span className="text-amber-400 text-base flex-shrink-0 mt-0.5">⚡</span>
              <div className="min-w-0 flex-1">
                <p className="text-amber-300 font-semibold text-sm mb-1">We respond fast</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Under 4 hours during business hours. For urgent projects,{' '}
                  <a
                    href="https://wa.me/919157433115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline underline-offset-2"
                  >
                    WhatsApp us directly →
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="rounded-2xl"
            style={{ padding: '40px 36px',
              background: '#0d1b33',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <h3
                    className="text-xl font-bold text-white mb-8"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    Send us a message
                  </h3>

                  {/* Name */}
                  <FormField id="contact-name" label="YOUR NAME *" error={errors.name?.message}>
                    <input
                      id="contact-name"
                      {...register('name')}
                      placeholder="John Smith"
                      autoComplete="name"
                      className="w-full rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: errors.name ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.10)',
                        fontFamily: 'var(--font-inter)',
                        padding: '13px 16px',
                        minHeight: '48px',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37,99,235,0.10)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = errors.name ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.10)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </FormField>

                  {/* Email */}
                  <FormField id="contact-email" label="EMAIL ADDRESS *" error={errors.email?.message}>
                    <input
                      id="contact-email"
                      type="email"
                      {...register('email')}
                      placeholder="john@company.com"
                      autoComplete="email"
                      className="w-full rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: errors.email ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.10)',
                        fontFamily: 'var(--font-inter)',
                        padding: '13px 16px',
                        minHeight: '48px',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37,99,235,0.10)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.10)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </FormField>

                  {/* Company */}
                  <FormField id="contact-company" label="COMPANY (OPTIONAL)">
                    <input
                      id="contact-company"
                      {...register('company')}
                      placeholder="Your Company"
                      autoComplete="organization"
                      className="w-full rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        fontFamily: 'var(--font-inter)',
                        padding: '13px 16px',
                        minHeight: '48px',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37,99,235,0.10)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </FormField>

                  {/* Message */}
                  <FormField
                    id="contact-message"
                    label="TELL US ABOUT YOUR PROJECT *"
                    error={errors.message?.message}
                  >
                    <textarea
                      id="contact-message"
                      {...register('message')}
                      placeholder="Describe what you want to build..."
                      className="w-full rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: errors.message ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.10)',
                        fontFamily: 'var(--font-inter)',
                        padding: '14px 16px',
                        minHeight: '160px',
                        lineHeight: 1.7,
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37,99,235,0.10)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = errors.message ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.10)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </FormField>

                  <div className="flex justify-start" style={{ marginTop: '8px' }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-semibold text-white text-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(to right, #2563eb, #06b6d4)',
                      padding: '14px 40px',
                      borderRadius: '10px',
                      minHeight: '48px',
                      boxShadow: '0 0 24px rgba(37,99,235,0.35)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.boxShadow = '0 0 40px rgba(37,99,235,0.55)' } }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(37,99,235,0.35)' }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        htmlFor={id}
        className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-red-400 text-xs mt-1.5"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="text-center py-12 space-y-4"
    >
      <div className="flex justify-center mb-4">
        <svg className="w-20 h-20" viewBox="0 0 52 52">
          <circle
            className="checkmark-circle"
            cx="26" cy="26" r="25"
            fill="none" stroke="#22c55e" strokeWidth="2"
          />
          <path
            className="checkmark-path"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
            fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"
          />
        </svg>
      </div>
      <h3 className="font-bold text-xl text-white" style={{ fontFamily: 'var(--font-poppins)' }}>
        Message Sent!
      </h3>
      <p className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
        We&apos;ll reply within 24 hours. Check your inbox.
      </p>
      <button
        onClick={onReset}
        className="text-sm hover:underline underline-offset-4 mt-4"
        style={{ color: '#06B6D4', fontFamily: 'var(--font-inter)' }}
      >
        Send another message
      </button>
    </motion.div>
  )
}
