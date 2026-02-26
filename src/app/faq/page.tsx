import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { faqs } from '@/content/faqs'
import { company } from '@/content/company'
import { PageHero } from '@/components/sections/PageHero'
import dynamic from 'next/dynamic'
const FAQAccordion = dynamic(
  () => import('@/components/sections/FAQAccordion').then(m => ({ default: m.FAQAccordion }))
)
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'FAQ',
  description:
    'Answers to common questions about roofing inspections, repairs, insurance claims, and more from Granbury Peak Roofing.',
  path: '/faq',
})

export default function FAQPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        heading="Frequently Asked Questions"
        subheading="Answers to the questions we hear most from Granbury homeowners."
        variant="page"
        colorScheme="dark"
        backgroundImage="/images/services/gutter-installation.avif"
      />

      {/* 2. Full FAQ grouped by category */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} groupByCategory={true} />
        </div>
      </section>

      {/* 3. CTA */}
      <CTASection
        heading="Still Have Questions?"
        subheading="Call us or schedule a free inspection — we're happy to help."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: company.phoneDisplay, tel: company.phoneTel }}
        variant="navy"
      />
    </>
  )
}
