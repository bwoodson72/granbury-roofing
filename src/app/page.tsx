import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, ShieldCheck, Award, Hammer } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

import { company } from '@/content/company'
import { services } from '@/content/services'
import { testimonials } from '@/content/testimonials'
import { faqs } from '@/content/faqs'
import { featuredProjects } from '@/content/featured-projects'

import { PageHero } from '@/components/sections/PageHero'
import { TrustBadgeBar } from '@/components/sections/TrustBadgeBar'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { TestimonialGrid } from '@/components/sections/TestimonialGrid'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { FeaturedProjectCard } from '@/components/cards/FeaturedProjectCard'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = buildMetadata({
  title: 'Roofing & Storm Damage Restoration',
  description:
    'Granbury Peak Roofing offers free roof inspections, repair, replacement, and storm damage restoration in Granbury, TX and surrounding areas.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Serving Granbury & Hood County Since 2009"
        heading="Granbury's Trusted Roofing & Storm Damage Experts"
        subheading="Licensed, insured, and locally owned. Free inspections for Granbury, Weatherford, Stephenville, Cleburne & Glen Rose."
        primaryCTA={{ label: 'Schedule Free Roof Inspection', href: '/contact#form' }}
        secondaryCTA={{ label: company.phoneDisplay, tel: company.phoneTel }}
variant="home"
        colorScheme="dark"
        backgroundImage="/images/services/roof-replacement.avif"
      />

      {/* 2. Trust Badge Bar */}
      <TrustBadgeBar badges={company.badges} />

      {/* 3. Services */}
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

      {/* 4. Storm Damage Warning Signs */}
      <section className="py-16 px-4 bg-neutral-offwhite">
        <div className="max-w-4xl mx-auto">
          <SectionHeading heading="Is Your Roof Storm Damaged?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-4xl mx-auto">
            {[
              'Missing or curling shingles',
              'Dents or dings on metal flashing',
              'Granule loss in gutters',
              'Water stains on interior ceilings',
              'Cracked or broken ridge cap',
              'Sagging roof deck areas',
            ].map((sign) => (
              <div key={sign} className="flex items-start gap-3">
                <AlertTriangle
                  className="text-brand-orange flex-shrink-0 mt-0.5"
                  size={20}
                />
                <span>{sign}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact#form">
              <Button variant="primary" size="md">
                Schedule Free Inspection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Process Steps */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <ProcessSteps
            heading="How It Works"
            steps={[
              'Free Roof Inspection',
              'Damage Documentation',
              'Repair or Replacement',
              'Final Walkthrough & Warranty',
            ]}
          />
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-16 px-4 bg-brand-navy">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Why Granbury Homeowners Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck className="text-brand-orange" size={40} />
              <h3 className="font-bold text-lg text-white">Local Expertise</h3>
              <p className="text-white/70">
                Over 15 years serving Hood County. We know Texas weather and how
                it affects your roof.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Award className="text-brand-orange" size={40} />
              <h3 className="font-bold text-lg text-white">Insurance Specialists</h3>
              <p className="text-white/70">
                We work directly with insurance adjusters to make sure you get
                every dollar you&apos;re owed.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Hammer className="text-brand-orange" size={40} />
              <h3 className="font-bold text-lg text-white">Quality Materials</h3>
              <p className="text-white/70">
                GAF-certified installers using manufacturer-backed materials with
                transferable warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Projects */}
      <section className="py-16 px-4 bg-neutral-offwhite">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            heading="Recent Projects"
            subheading="Real work. Real results. Right here in Hood County."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Preview */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeading heading="What Our Customers Say" />
          <div className="mt-10">
            <TestimonialGrid testimonials={testimonials} limit={3} />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-brand-orange hover:underline font-medium"
            >
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ Preview */}
      <section className="py-16 px-4 bg-neutral-offwhite">
        <div className="max-w-3xl mx-auto">
          <SectionHeading heading="Common Questions" />
          <div className="mt-8">
            <FAQAccordion items={faqs.slice(0, 4)} groupByCategory={false} />
          </div>
          <div className="text-center mt-6">
            <Link
              href="/faq"
              className="text-brand-orange hover:underline font-medium"
            >
              See All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <CTASection
        heading="Ready for a Free Roof Inspection?"
        subheading="We serve Granbury and surrounding areas. Most inspections completed same week."
        primaryCTA={{ label: 'Request Inspection', href: '/contact#form' }}
        secondaryCTA={{ label: company.phoneDisplay, tel: company.phoneTel }}
        variant="orange"
      />
    </>
  )
}
