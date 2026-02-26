import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Phone, Clock, MapPin } from 'lucide-react'
import { company } from '@/content/company'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { CallNowButton } from '@/components/ui/CallNowButton'
import dynamic from 'next/dynamic'
const ContactForm = dynamic(
  () => import('@/components/forms/ContactForm')
)

export const metadata: Metadata = buildMetadata({
  title: 'Contact & Free Inspection',
  description:
    'Schedule your free roof inspection in Granbury, TX. Granbury Peak Roofing responds within one business day.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        heading="Request Your Free Roof Inspection"
        subheading="We respond within one business day. Emergency calls answered 24/7."
        variant="page"
        colorScheme="dark"
        backgroundImage="/images/services/storm-damage.avif"
      />

      {/* 2. Contact info */}
      <section className="py-12 px-4 bg-neutral-offwhite">
        <h2 className="sr-only">Contact Information</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="flex flex-col items-center text-center gap-2">
            <Phone className="w-8 h-8 text-brand-orange" />
            <h3 className="font-bold text-brand-navy">Call or Text</h3>
            <a
              href={`tel:${company.phoneTel}`}
              aria-label={`Call us at ${company.phoneDisplay}`}
              className="text-brand-orange hover:underline text-lg font-medium"
            >
              {company.phoneDisplay}
            </a>
          </div>
          {/* Hours */}
          <div className="flex flex-col items-center text-center gap-2">
            <Clock className="w-8 h-8 text-brand-orange" />
            <h3 className="font-bold text-brand-navy">Hours</h3>
            <p>{company.hours}</p>
            <p className="text-brand-orange-hover text-sm font-medium">{company.emergencyNote}</p>
          </div>
          {/* Service Areas */}
          <div className="flex flex-col items-center text-center gap-2">
            <MapPin className="w-8 h-8 text-brand-orange" />
            <h3 className="font-bold text-brand-navy">Service Areas</h3>
            <p>{company.serviceAreas.join(', ')}</p>
          </div>
        </div>
      </section>

      {/* 3. Form */}
      <section id="form" className="py-16 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            heading="Tell Us About Your Roof"
            subheading="We'll respond within one business day."
          />
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 4. Emergency strip */}
      <section className="bg-brand-orange text-white py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl font-bold">Storm damage? We respond 24/7.</p>
          <CallNowButton
            phoneTel={company.phoneTel}
            phoneDisplay={company.phoneDisplay}
            variant="header"
          />
        </div>
      </section>
    </>
  )
}
