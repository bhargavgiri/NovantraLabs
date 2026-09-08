export interface WhyUsReason {
  id: string
  icon: string
  title: string
  description: string
  color: string
}

export const whyUsReasons: WhyUsReason[] = [
  {
    id: 'custom-built',
    icon: '🔧',
    title: 'Custom-Built Solutions',
    description: 'Every product is architected from scratch for your specific use case. No bloated off-the-shelf tools that slow you down.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'performance-first',
    icon: '⚡',
    title: 'Performance-First Development',
    description: 'We obsess over speed, reliability, and efficiency. Your app won\'t just look good — it will run flawlessly under real-world load.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'scalable-arch',
    icon: '📈',
    title: 'Scalable Architecture',
    description: 'Built to grow with you. Our systems handle 10 users or 10 million. Infrastructure adapts as your business scales.',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'premium-uiux',
    icon: '🎨',
    title: 'Premium UI/UX That Converts',
    description: 'Beautiful interfaces that drive action. Our designs are engineered to improve engagement, reduce churn, and boost conversions.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'long-term',
    icon: '🤝',
    title: 'Long-Term Reliability',
    description: 'We don\'t disappear after launch. We\'re your long-term tech partner — maintaining, iterating, and evolving your product.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'business-focused',
    icon: '🎯',
    title: 'Business-Focused Execution',
    description: 'Every technical decision is tied back to your ROI. We build what moves the needle, not just what looks impressive in a demo.',
    color: 'from-rose-500 to-orange-500',
  },
]
