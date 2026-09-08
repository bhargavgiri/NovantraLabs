import type { Config } from 'tailwindcss'

// Tailwind v4 uses CSS-first config via @theme in globals.css
// This file is kept for IDE compatibility
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
}

export default config
