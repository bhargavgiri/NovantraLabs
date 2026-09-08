export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
  color: string
}

export interface PortfolioTab {
  id: 'android' | 'ios' | 'web'
  label: string
  count: string
}

export interface StatItem {
  value: number
  suffix: string
  label: string
}

export interface TechItem {
  name: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}
