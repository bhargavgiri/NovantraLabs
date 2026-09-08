import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'NDA Policy — Novantra Labs',
  description: 'Non-Disclosure Agreement Policy for Novantra Labs. Your ideas and projects are safe with us.',
  metadataBase: new URL('https://novantra.com'),
  alternates: { canonical: 'https://novantra.com/nda' },
}

export default function NdaPage() {
  return (
    <LegalPage
      title="NDA Policy"
      icon="🔒"
      lastUpdated="May 2026"
      highlight={{
        icon: '🛡️',
        title: 'Your ideas are safe with us',
        text: 'Novantra Labs treats every project inquiry, idea, and technical detail shared with us as strictly confidential. We are happy to sign a formal NDA before any detailed project discussion — no questions asked.',
      }}
      sections={[
        {
          title: 'Our Commitment to Confidentiality',
          content: 'Novantra Labs is committed to protecting the confidential information of all clients and prospects. Any business idea, technical specification, proprietary process, or sensitive data shared with us is treated as strictly confidential — even before signing a formal NDA.',
        },
        {
          title: 'Standard NDA Availability',
          content: 'We are willing to sign a Non-Disclosure Agreement (NDA) before any detailed project discussion. Our standard NDA covers mutual non-disclosure of proprietary information, project details, business strategies, and technical specifications.',
        },
        {
          title: 'What Is Covered',
          content: 'The following information types are automatically treated as confidential:',
          list: [
            'Business ideas, concepts, and strategies',
            'Technical architectures and source code',
            'Customer data and business metrics',
            'Financial information and projections',
            'Product roadmaps and feature plans',
            'Any information marked as confidential by the client',
          ],
        },
        {
          title: 'Our Team',
          content: 'All Novantra Labs team members who work on a project are bound by confidentiality obligations. We do not share client information across projects or with any unauthorized parties. Access to project details is restricted on a need-to-know basis.',
        },
        {
          title: 'Requesting a Formal NDA',
          contentNode: (
            <div style={{ color: 'rgba(203,213,225,0.75)', lineHeight: '2' }}>
              <p>
                To request a formal NDA before your project discussion, contact us at{' '}
                <a href="mailto:hello@novantra.com" style={{ color: '#60a5fa' }}>
                  hello@novantra.com
                </a>{' '}
                or WhatsApp us at{' '}
                <a href="https://wa.me/919157433115" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>
                  +91 9157433115
                </a>
                . We respond within 4 business hours.
              </p>
            </div>
          ),
        },
        {
          title: 'Duration',
          content: 'Confidentiality obligations remain in effect for 3 years from the date of disclosure, or as otherwise specified in a signed NDA agreement. Post-project confidentiality is maintained indefinitely for sensitive client data.',
        },
        {
          title: 'No Questions Asked',
          content: 'You do not need to justify or explain why you want an NDA. We respect that protecting your ideas is fundamental. Simply reach out and we will arrange signing within 24 hours.',
        },
      ]}
    />
  )
}
