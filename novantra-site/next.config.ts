import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Strip console.log in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Turbopack config (Next.js 16 default bundler)
  // Three.js loads client-side via dynamic imports so no special config needed
  turbopack: {},
}

export default nextConfig
