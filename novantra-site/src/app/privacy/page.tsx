import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy — Novantra Labs',
  description: 'Privacy Policy for Novantra Labs. Learn how we collect, use, and protect your personal information.',
  metadataBase: new URL('https://novantra.com'),
  alternates: { canonical: 'https://novantra.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      icon="🔐"
      lastUpdated="May 2026"
      highlight={{
        icon: '🛡️',
        title: 'Your privacy matters to us',
        text: 'We collect only what we need, never sell your data, and protect everything with industry-standard security. This policy explains exactly how.',
      }}
      sections={[
        {
          title: 'Information We Collect',
          content: 'We collect information you voluntarily provide to us, including your name, email address, company name, and project details when you contact us. We may also collect usage data automatically, such as IP address, browser type, pages visited, and time spent on our site.',
        },
        {
          title: 'How We Use Your Information',
          content: 'We use your information to respond to inquiries, provide our services, improve our website experience, send relevant communications you have opted into, and comply with legal obligations.',
          list: [
            'Respond to your project inquiries and messages',
            'Provide, operate, and improve our services',
            'Send service-related communications (no spam)',
            'Comply with applicable legal obligations',
          ],
        },
        {
          title: 'Data We Never Share',
          content: 'We do not sell, rent, or share your personal information with third parties for marketing purposes. Period.',
          list: [
            'We do not sell your data to advertisers',
            'We do not share your details with unrelated third parties',
            'We do not use your information for profiling or targeting',
          ],
        },
        {
          title: 'Data Security',
          content: 'We implement industry-standard security measures to protect your personal information. All data transmissions are encrypted via SSL/TLS. Access to personal data is restricted to authorized personnel only.',
        },
        {
          title: 'Cookies',
          content: 'Our website may use essential cookies to enhance your browsing experience. We do not use tracking cookies or third-party advertising cookies. You can control cookie settings through your browser preferences.',
        },
        {
          title: 'Third-Party Services',
          content: 'We may use third-party services such as form submission tools and analytics. These services have their own privacy policies governing their use of data.',
        },
        {
          title: 'Your Rights',
          content: 'You have the right to access, correct, or delete your personal data at any time. To exercise these rights or for privacy-related questions, contact us at hello@novantra.com.',
        },
        {
          title: 'Contact Us',
          contentNode: (
            <div style={{ color: 'rgba(203,213,225,0.75)', lineHeight: '2' }}>
              <p>Novantra Labs</p>
              <p>
                Email:{' '}
                <a href="mailto:hello@novantra.com" style={{ color: '#60a5fa' }}>
                  hello@novantra.com
                </a>
              </p>
              <p>WhatsApp: +91 9157433115</p>
              <p>Location: India • Remote Worldwide</p>
            </div>
          ),
        },
      ]}
    />
  )
}
