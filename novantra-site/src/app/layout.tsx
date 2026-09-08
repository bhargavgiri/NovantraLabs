import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import CursorGlow from '@/components/ui/CursorGlow'
import LenisProvider from '@/components/LenisProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://novantra.com'),
  title: 'Novantra Labs — AI-Powered Mobile Apps, Web Development & Automation',
  description:
    'Premium digital innovation studio. We build mobile apps, web platforms, AI solutions, backend systems & business automation for growing businesses worldwide.',
  keywords: [
    'mobile app development',
    'web development',
    'AI solutions',
    'business automation',
    'React Native',
    'Next.js',
    'Flutter',
    'software development India',
    'SaaS development',
    '.NET development',
    'data science',
    'SEO services',
  ],
  alternates: {
    canonical: 'https://novantra.com',
  },
  authors: [{ name: 'Novantra Labs', url: 'https://novantra.com' }],
  creator: 'Novantra Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novantra.com',
    siteName: 'Novantra Labs',
    title: 'Novantra Labs — Build Smarter Digital Products',
    description:
      'Apps, automation & AI solutions that accelerate your business. India-based, globally delivered.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Novantra Labs — AI-Powered Product Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novantra Labs — AI-Powered Digital Products',
    description:
      'Mobile apps, web development, AI & automation for ambitious businesses.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased overflow-x-hidden"
        style={{ backgroundColor: '#0F172A', color: '#F8FAFC', fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Novantra Labs',
              url: 'https://novantra.com',
              logo: 'https://novantra.com/logo.png',
              description:
                'Premium digital innovation studio — mobile apps, AI, web development & automation.',
              email: 'hello@novantra.com',
              telephone: '+91-9157433115',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9157433115',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi'],
              },
              sameAs: [],
            }),
          }}
        />

        <LenisProvider />
        <AnnouncementBar />
        <Navbar />
        <main className="overflow-x-hidden w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CursorGlow />
      </body>
    </html>
  )
}
