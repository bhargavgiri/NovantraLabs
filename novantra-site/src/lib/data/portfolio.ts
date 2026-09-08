export interface AndroidApp {
  name: string
  category: string
  description: string
  downloads: string
  tech: string[]
  playStoreUrl: string
  gradient: string
  letter: string
  featured?: boolean
}

export interface IosApp {
  name: string
  category: string
  description: string
  tech: string[]
  appStoreUrl: string
  gradient: string
  letter: string
}

export interface WebProject {
  name: string
  category: string
  description: string
  tech: string[]
  liveUrl: string
  gradient: string
  letter: string
}

export const androidApps: AndroidApp[] = [
  {
    name: 'File Manager & Explorer',
    category: 'Utility',
    description: 'Powerful file manager with smart organization, cloud integration, and intuitive interface.',
    downloads: '10K+',
    tech: ['Android', 'Java', 'Kotlin'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.files.filemanager.folder.fileexplorer.managefile',
    gradient: 'from-blue-500 to-cyan-600',
    letter: 'F',
  },
  {
    name: 'AI Phone Cleaner',
    category: 'Productivity',
    description: 'AI-powered storage optimizer and phone cleaner. 100K+ downloads on Play Store.',
    downloads: '100K+',
    tech: ['Android', 'Kotlin', 'ML Kit'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=ai.storage.cleaner.phonecleaner.junkfiles.appmanager',
    gradient: 'from-green-500 to-teal-600',
    letter: 'A',
    featured: true,
  },
  {
    name: 'Savanna Fibre',
    category: 'Business',
    description: 'Enterprise business operations platform for the fibre industry.',
    downloads: '10K+',
    tech: ['React Native', 'Node.js', 'Firebase'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.savannafibre',
    gradient: 'from-orange-500 to-red-600',
    letter: 'S',
  },
  {
    name: 'NMS Connect',
    category: 'Enterprise',
    description: 'Network management system for enterprise teams, real-time monitoring and alerts.',
    downloads: '1K+',
    tech: ['Android', 'Kotlin', 'REST API'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.blaucomm.nms',
    gradient: 'from-purple-500 to-indigo-600',
    letter: 'N',
  },
  {
    name: 'Quietly — Call Manager',
    category: 'Lifestyle',
    description: 'Smart call management app that automatically silences calls at the right time.',
    downloads: 'New',
    tech: ['Android', 'Kotlin'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=callmanager.quietly.app',
    gradient: 'from-slate-500 to-gray-700',
    letter: 'Q',
  },
  {
    name: 'Queeqs Pets',
    category: 'Lifestyle',
    description: 'Pet care and community platform connecting pet owners with vets and fellow pet lovers.',
    downloads: 'New',
    tech: ['React Native', 'Firebase'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.queeqs.pets',
    gradient: 'from-pink-500 to-rose-600',
    letter: 'P',
  },
  {
    name: 'NMS Nurse Call',
    category: 'Healthcare',
    description: 'Tablet-based nurse call management system for hospitals and care facilities.',
    downloads: 'Enterprise',
    tech: ['Android', 'Kotlin', 'WebSocket'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nursecall.nmstablet',
    gradient: 'from-red-500 to-pink-600',
    letter: 'N',
  },
  {
    name: 'AI Productivity Suite',
    category: 'Productivity',
    description: 'All-in-one AI-powered productivity app: tasks, notes, and smart reminders.',
    downloads: '5K+',
    tech: ['React Native', 'OpenAI API'],
    playStoreUrl: '#',
    gradient: 'from-violet-500 to-purple-600',
    letter: 'A',
  },
  {
    name: 'SmartBill Pro',
    category: 'Finance',
    description: 'Invoice and billing management for SMEs. GST-compliant, auto-reminders.',
    downloads: '8K+',
    tech: ['Flutter', 'Firebase'],
    playStoreUrl: '#',
    gradient: 'from-emerald-500 to-green-600',
    letter: 'B',
  },
]

export const iosApps: IosApp[] = [
  {
    name: 'FitPulse AI',
    category: 'Health & Fitness',
    description: 'AI-powered health tracker with personalized workout plans and nutrition insights.',
    tech: ['Swift', 'HealthKit', 'CoreML'],
    appStoreUrl: '#',
    gradient: 'from-red-500 to-orange-600',
    letter: 'F',
  },
  {
    name: 'TravelMate',
    category: 'Travel',
    description: 'Smart AI travel planner with itinerary builder, budget tracker, and local guides.',
    tech: ['Swift', 'MapKit', 'OpenAI'],
    appStoreUrl: '#',
    gradient: 'from-blue-500 to-teal-600',
    letter: 'T',
  },
  {
    name: 'HomePro Services',
    category: 'Marketplace',
    description: 'On-demand home services platform connecting homeowners with verified professionals.',
    tech: ['Swift', 'Firebase', 'Stripe'],
    appStoreUrl: '#',
    gradient: 'from-indigo-500 to-purple-600',
    letter: 'H',
  },
  {
    name: 'FinanceIQ',
    category: 'Finance',
    description: 'Personal finance and budgeting app with AI spending insights and goal tracking.',
    tech: ['Swift', 'Plaid API', 'SwiftUI'],
    appStoreUrl: '#',
    gradient: 'from-green-500 to-emerald-600',
    letter: 'F',
  },
]

export const webProjects: WebProject[] = [
  {
    name: 'Novadash',
    category: 'SaaS Dashboard',
    description: 'Enterprise-grade analytics dashboard with real-time data visualization and team reporting.',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
    liveUrl: '#',
    gradient: 'from-blue-500 to-indigo-600',
    letter: 'N',
  },
  {
    name: 'CloudCMS',
    category: 'Enterprise CMS',
    description: 'Headless CMS built for enterprise teams. Multi-tenant, API-first, blazing fast.',
    tech: ['Next.js', 'GraphQL', 'AWS S3', 'Redis'],
    liveUrl: '#',
    gradient: 'from-slate-500 to-blue-600',
    letter: 'C',
  },
  {
    name: 'AutomateHQ',
    category: 'Automation Platform',
    description: 'No-code/low-code business process automation platform. Visual workflow builder.',
    tech: ['React', 'Node.js', 'RabbitMQ', 'Docker'],
    liveUrl: '#',
    gradient: 'from-orange-500 to-yellow-600',
    letter: 'A',
  },
  {
    name: 'MarketPulse',
    category: 'Market Intelligence',
    description: 'Real-time market intelligence and competitor monitoring tool for growth teams.',
    tech: ['Next.js', 'Python', 'FastAPI', 'ML'],
    liveUrl: '#',
    gradient: 'from-green-500 to-teal-600',
    letter: 'M',
  },
]
