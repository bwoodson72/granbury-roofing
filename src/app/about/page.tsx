import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { ShieldCheck, Award, MapPin } from 'lucide-react'
import { company } from '@/content/company'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { FeatureList } from '@/components/sections/FeatureList'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description:
    'Locally owned and operated roofing company serving Granbury, TX since 2009. Licensed, insured, and committed to honest work.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        heading="Locally Owned. Locally Trusted."
        subheading="Serving Granbury and Hood County since 2009."
        variant="page"
        colorScheme="dark"
        backgroundImage="/images/services/roof-repair.avif"
      />

      {/* 2. Company Story */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeading heading="Our Story" align="left" />
          <div className="mt-6">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Granbury Peak Roofing & Restoration was founded in 2009 by a
              Granbury family who watched their neighbors struggle in the
              aftermath of a severe April hailstorm. Most homeowners had no idea
              the extent of the damage hidden under their shingles — and many
              were taken advantage of by out-of-town contractors who showed up
              after the storm and disappeared just as fast. We started this
              company with a simple promise: give every Granbury homeowner an
              honest assessment and stand behind the work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              For the first several years, nearly all of our work came through
              word of mouth. A neighbor would call after seeing a crew next door.
              A real estate agent would refer a client who needed a pre-sale
              inspection. We have never chased volume at the expense of quality.
              That means we tell homeowners when a repair is all they need, even
              if a full replacement would mean a bigger check for us. That
              reputation — built one honest job at a time — is what has kept us
              busy through every storm season since.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Today, Granbury Peak carries full GAF certification, an A+ BBB
              rating, and a crew of experienced installers and restoration
              specialists who have worked in Hood County long enough to understand
              exactly how Texas weather — from summer heat cycles to spring
              hailstorms — shortens roof life. We are licensed, insured, and
              veteran-owned. Every project gets the same attention whether it is
              a single failed flashing or a full storm restoration.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Values */}
      <section className="py-16 px-4 bg-neutral-offwhite">
        <div className="max-w-5xl mx-auto">
          <SectionHeading heading="What We Stand By" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-sm border border-border">
              <ShieldCheck className="text-brand-orange mb-4" size={36} />
              <h3 className="font-bold text-brand-navy text-lg mb-2">
                Honest Assessments
              </h3>
              <p className="text-muted-foreground">
                We tell you what your roof actually needs, not what costs the
                most.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-sm border border-border">
              <Award className="text-brand-orange mb-4" size={36} />
              <h3 className="font-bold text-brand-navy text-lg mb-2">
                Quality Materials
              </h3>
              <p className="text-muted-foreground">
                GAF-certified products with manufacturer-backed warranties on
                every installation.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-sm border border-border">
              <MapPin className="text-brand-orange mb-4" size={36} />
              <h3 className="font-bold text-brand-navy text-lg mb-2">
                Local Accountability
              </h3>
              <p className="text-muted-foreground">
                We live here too. Our reputation depends on every job we do in
                this community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Summary */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeading heading="The Team Behind the Work" align="left" />
          <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-8">
            Our team of certified installers and restoration specialists brings
            decades of combined experience to every job in Hood County. We invest
            in ongoing training because roofing materials, building codes, and
            insurance documentation standards change — and our customers deserve
            a crew that stays current.
          </p>
          <FeatureList
            items={[
              'GAF Factory Certified installers with ongoing training',
              'OSHA-compliant safety protocols on every job site',
              'Background-checked professionals — we respect your home',
            ]}
            icon="check"
          />
        </div>
      </section>

      {/* 5. Service Areas */}
      <section className="py-16 px-4 bg-neutral-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading heading="We Serve Hood County & Beyond" />
          <p className="text-lg text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
            Granbury Peak Roofing responds to inspection requests throughout Hood
            County and surrounding areas. Most inspections are scheduled within
            2–3 business days.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {company.serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-brand-navy text-white px-4 py-2 rounded-full font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        heading="Get a Free Inspection from a Local Expert"
        primaryCTA={{ label: 'Schedule Inspection', href: '/contact#form' }}
        secondaryCTA={{ label: company.phoneDisplay, tel: company.phoneTel }}
        variant="navy"
      />
    </>
  )
}
