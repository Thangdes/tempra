export const APP_CONFIG = {
  name: 'Tempra',
  tagline: 'AI Calendar Assistant',
  description: 'Get your time back with AI. The #1 AI calendar app for individuals, teams, and organizations.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  support: {
    email: 'support@tempra.com',
    salesEmail: 'sales@tempra.com',
  },
} as const;

export const BRAND_COLORS = {
  primary: '#7c3aed',
  primaryLight: '#f3e8ff',
  secondary: '#10b981',
  secondaryDark: '#059669',
  accent: '#3b82f6',
  background: '#ffffff',
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    tertiary: '#9ca3af',
  },
} as const;

export const NAVIGATION_LINKS = [
  { label: 'Product', href: '#', hasDropdown: true },
  { label: 'Teams', href: '#', hasDropdown: true },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'Pricing', href: '/pricing', hasDropdown: false },
  { label: 'Enterprise', href: '/enterprise', hasDropdown: false },
] as const;

export const EXTERNAL_LINKS = {
  signup: 'https://app.tempra.ai/signup',
  login: 'https://app.tempra.ai/login',
  contactSales: '/contact-sales',
  documentation: '/docs',
  support: '/support',
} as const;

export const INTEGRATIONS = {
  googleCalendar: {
    name: 'Google Calendar',
    icon: 'G',
    color: '#4285F4',
  },
  outlook: {
    name: 'Outlook',
    icon: 'O',
    color: '#0078D4',
  },
  slack: {
    name: 'Slack',
    icon: 'S',
    color: '#4A154B',
  },
  zoom: {
    name: 'Zoom',
    icon: 'Z',
    color: '#2D8CFF',
  },
} as const;

export const FEATURES = {
  hero: {
    title: 'Get your time\nback with AI.',
    subtitle: '#1 AI calendar app for',
    links: [
      { text: 'individuals', href: '/individuals' },
      { text: 'teams', href: '/teams' },
      { text: 'organizations', href: '/organizations' },
    ],
    cta: {
      text: 'Get started – free forever!',
      href: EXTERNAL_LINKS.signup,
    },
    benefits: [
      "Yes, it's 100% free! Here's how it works",
      "We don't train AI on your data",
    ],
  },
} as const;

export const SEO_KEYWORDS = [
  'AI calendar',
  'scheduling',
  'productivity',
  'time management',
  'Google Calendar',
  'Outlook',
  'calendar automation',
  'smart scheduling',
] as const;
