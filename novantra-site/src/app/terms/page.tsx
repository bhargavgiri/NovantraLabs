import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service — Novantra Labs',
  description: 'Terms of Service for Novantra Labs software development services.',
  metadataBase: new URL('https://novantra.com'),
  alternates: { canonical: 'https://novantra.com/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      icon="📋"
      lastUpdated="May 2026"
      highlight={{
        icon: '🤝',
        title: 'Fair terms, honest partnership',
        text: 'Our terms are designed to protect both you and us. We believe in clear expectations, transparent communication, and delivering exactly what we promise.',
      }}
      sections={[
        {
          title: 'Acceptance of Terms',
          content: 'By engaging Novantra Labs for any services, you agree to these Terms of Service. These terms govern all project engagements, consulting agreements, and use of our services.',
        },
        {
          title: 'Our Services',
          content: 'Novantra Labs provides custom software development, including:',
          list: [
            'Mobile app development (Android & iOS)',
            'Web development and web applications',
            'AI/ML solutions and automation',
            'Cloud infrastructure and backend systems',
            'UI/UX design and digital marketing',
            'SEO and data engineering',
          ],
        },
        {
          title: 'Project Agreements',
          content: 'Specific deliverables, timelines, costs, and milestones are defined in individual project agreements signed before work commences. These Terms of Service apply alongside any project-specific agreement.',
        },
        {
          title: 'Payment Terms',
          content: 'Payment schedules are outlined in individual project contracts. We typically require an upfront deposit before work commences. Invoices are due within the timeframe specified in your project agreement. Late payments may incur fees as specified in the project agreement.',
        },
        {
          title: 'Intellectual Property',
          content: 'Upon full payment, clients receive full ownership of all custom code and assets created for their project. Novantra Labs retains the right to reference the project in our portfolio unless a separate NDA agreement specifies otherwise.',
        },
        {
          title: 'Confidentiality',
          content: 'We take client confidentiality seriously. We do not disclose client information to third parties without consent. NDA agreements are available upon request and signed before any sensitive project discussion.',
        },
        {
          title: 'Limitation of Liability',
          content: "Novantra Labs' liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.",
        },
        {
          title: 'Termination',
          content: 'Either party may terminate a project engagement with written notice. Payment is due for all work completed up to the termination date. Deposits are non-refundable unless specified otherwise in the project agreement.',
        },
        {
          title: 'Contact',
          contentNode: (
            <div style={{ color: 'rgba(203,213,225,0.75)', lineHeight: '2' }}>
              <p>
                Questions about these terms? Contact us at{' '}
                <a href="mailto:hello@novantra.com" style={{ color: '#60a5fa' }}>
                  hello@novantra.com
                </a>{' '}
                or WhatsApp{' '}
                <a href="https://wa.me/919157433115" style={{ color: '#60a5fa' }}>
                  +91 9157433115
                </a>
                .
              </p>
            </div>
          ),
        },
      ]}
    />
  )
}
