export interface Service {
  id: string
  icon: string
  title: string
  description: string
  color: string
  tag?: string
  tagColor?: string
}

export const services: Service[] = [
  {
    id: 'mobile-apps',
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform Android & iOS apps users love. React Native and Flutter — delivered fast, built to scale.',
    color: 'from-blue-500 to-cyan-500',
    tag: 'Most Popular',
    tagColor: 'blue',
  },
  {
    id: 'web-development',
    icon: '🌐',
    title: 'Web Development',
    description: 'High-performance web apps and platforms that convert visitors into paying customers. Next.js powered.',
    color: 'from-purple-500 to-pink-500',
    tag: 'High Demand',
    tagColor: 'cyan',
  },
  {
    id: 'ai-solutions',
    icon: '🤖',
    title: 'AI & ML Solutions',
    description: 'Intelligent automation, ML pipelines, chatbots, and predictive models that make your product smarter.',
    color: 'from-cyan-500 to-teal-500',
    tag: 'Trending 🔥',
    tagColor: 'purple',
  },
  {
    id: 'dotnet-development',
    icon: '🔧',
    title: '.NET Development',
    description: 'Enterprise-grade .NET applications, APIs, and microservices. Scalable, secure, production-ready.',
    color: 'from-indigo-500 to-blue-600',
    tag: 'Enterprise',
    tagColor: 'gray',
  },
  {
    id: 'backend-development',
    icon: '⚡',
    title: 'Backend Development',
    description: 'Robust Node.js, Python, and .NET backends. RESTful APIs, GraphQL, microservices, and cloud-native systems.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'automation',
    icon: '🔄',
    title: 'Business Automation',
    description: 'Eliminate manual work end-to-end. We automate repetitive processes with measurable ROI.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    id: 'cloud-backend',
    icon: '☁️',
    title: 'Cloud & Backend Infrastructure',
    description: 'Reliable, scalable cloud systems on AWS, GCP, or Azure. Built for real-world load from day one.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'uiux-design',
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Conversion-engineered interfaces that look premium and drive measurable engagement and revenue.',
    color: 'from-rose-500 to-purple-600',
  },
  {
    id: 'web-scraping',
    icon: '🕷️',
    title: 'Web Scraping & Data Engineering',
    description: 'Custom scrapers, data pipelines, and ETL workflows that turn the web into structured business intelligence.',
    color: 'from-slate-500 to-gray-600',
    tag: 'New',
    tagColor: 'green',
  },
  {
    id: 'data-science',
    icon: '📊',
    title: 'Data Science & Analytics',
    description: 'Turn your data into decisions. Dashboards, predictive models, and business intelligence that drives growth.',
    color: 'from-violet-500 to-purple-600',
    tag: 'New',
    tagColor: 'green',
  },
  {
    id: 'seo',
    icon: '🔍',
    title: 'SEO & Technical SEO',
    description: 'Rank higher, get found. Technical audits, on-page optimization, Core Web Vitals — built-in from day one.',
    color: 'from-amber-500 to-orange-600',
    tag: 'New',
    tagColor: 'green',
  },
  {
    id: 'digital-marketing',
    icon: '📣',
    title: 'Digital Marketing & Product Ads',
    description: 'Google Ads, Meta campaigns, and performance marketing. ROI-focused campaigns that bring quality leads.',
    color: 'from-pink-500 to-rose-600',
    tag: 'New',
    tagColor: 'green',
  },
]
