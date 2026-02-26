import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { testimonials } from '@/content/testimonials'
import { company } from '@/content/company'
import { PageHero } from '@/components/sections/PageHero'
import { TestimonialGrid } from '@/components/sections/TestimonialGrid'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'Customer Reviews',
  description:
    'See what homeowners in Granbury and surrounding areas say about Granbury Peak Roofing & Restoration.',
  path: '/testimonials',
})

export default function TestimonialsPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        heading="What Our Customers Are Saying"
        subheading="Real reviews from homeowners across Granbury and Hood County."
        variant="page"
        colorScheme="dark"
        backgroundImage="/images/services/roof-replacement.avif"
      />

      {/* 2. All testimonials */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <TestimonialGrid testimonials={testimonials} />
        </div>
      </section>

      {/* 3. CTA */}
      <CTASection
        heading="Join Our Satisfied Customers"
        subheading="Schedule your free inspection today."
        primaryCTA={{ label: 'Request Free Inspection', href: '/contact#form' }}
        secondaryCTA={{ label: company.phoneDisplay, tel: company.phoneTel }}
        variant="navy"
      />
    </>
  )
}
