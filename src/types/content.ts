export interface CompanyProfile {
  name: string
  tagline: string
  phoneDisplay: string
  phoneTel: string
  email: string
  hours: string
  emergencyNote: string
  serviceAreas: string[]
  badges: string[]
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  heroHeadline: string
  heroSubtext: string
  overview: string
  commonProblems: string[]
  includedWork: string[]
  benefits: string[]
  processSteps: string[]
  faqIds: string[]
  relatedServiceSlugs: string[]
  featuredImage: string
  seoTitle: string
  seoDescription: string
}

export interface Testimonial {
  id: string
  name: string
  city: string
  rating: 1 | 2 | 3 | 4 | 5
  quote: string
  serviceType: string
  dateLabel: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'repair' | 'replacement' | 'insurance' | 'gutters' | 'emergency'
}

export interface FeaturedProject {
  id: string
  title: string
  location: string
  serviceType: string
  summary: string
  outcome: string
}

export interface NavItem {
  label: string
  href: string
}
