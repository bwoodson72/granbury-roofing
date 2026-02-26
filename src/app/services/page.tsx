import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { company } from '@/content/company'
import { services } from '@/content/services'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'Roofing Services',
  description:
    'Expert roofing services including inspections, repair, replacement, and gutter installation. Serving Granbury and Hood County, TX.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        heading="Roofing Services in Granbury & Surrounding Areas"
        subheading="From inspections to full replacements — we handle every roofing need."
        primaryCTA={{ label: 'Get a Free Inspection', href: '/contact#form' }}
        variant="page"
        colorScheme="dark"
        backgroundImage="/images/services/roof-inspection.avif"
      />

      {/* Services Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            heading="Our Roofing Services"
            subheading="Expert solutions for every roofing need in the Granbury area."
          />
          <div className="mt-10">
            <ServiceGrid
              services={services.map((s) => ({
                slug: s.slug,
                title: s.title,
                shortDescription: s.shortDescription,
                featuredImage: s.featuredImage,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-neutral-offwhite">
        <div className="max-w-4xl mx-auto">
          <ProcessSteps
            heading="Our Process"
            steps={[
              'Free Roof Inspection',
              'Damage Documentation',
              'Repair or Replacement',
              'Final Walkthrough & Warranty',
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Not Sure What You Need?"
        subheading="Schedule a free inspection and we'll assess your roof at no charge."
        primaryCTA={{ label: 'Schedule Free Inspection', href: '/contact#form' }}
        secondaryCTA={{ label: company.phoneDisplay, tel: company.phoneTel }}
        variant="navy"
      />
    </>
  )
}
