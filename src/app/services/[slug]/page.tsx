import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/content/services'
import { faqs } from '@/content/faqs'
import { company } from '@/content/company'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { FeatureList } from '@/components/sections/FeatureList'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import dynamic from 'next/dynamic'
const FAQAccordion = dynamic(
  () => import('@/components/sections/FAQAccordion').then(m => ({ default: m.FAQAccordion }))
)
import { RelatedServicesList } from '@/components/sections/RelatedServicesList'
import { CTASection } from '@/components/sections/CTASection'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.seoTitle} | Granbury Peak Roofing`,
    description: service.seoDescription,
    openGraph: {
      title: `${service.seoTitle} | Granbury Peak Roofing`,
      description: service.seoDescription,
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const serviceFaqs = faqs.filter((faq) => service.faqIds.includes(faq.id))

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        heading={service.heroHeadline}
        subheading={service.heroSubtext}
        primaryCTA={{ label: 'Schedule Free Inspection', href: '/contact#form' }}
        variant="page"
        colorScheme="dark"
        backgroundImage={service.featuredImage}
      />

      {/* 2. Service Overview */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeading heading={service.title} align="left" />
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* 3. Common Problems */}
      <section className="py-16 px-4 bg-neutral-offwhite">
        <div className="max-w-4xl mx-auto">
          <FeatureList
            items={service.commonProblems}
            heading="Common Signs You Need This Service"
            icon="shield"
          />
        </div>
      </section>

      {/* 4. What's Included */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <FeatureList
            items={service.includedWork}
            heading="What's Included"
            icon="check"
          />
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="py-16 px-4 bg-neutral-offwhite">
        <div className="max-w-4xl mx-auto">
          <FeatureList
            items={service.benefits}
            heading="Benefits"
            icon="star"
          />
        </div>
      </section>

      {/* 6. Process Steps */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <ProcessSteps steps={service.processSteps} heading="Our Process" />
        </div>
      </section>

      {/* 7. FAQs (conditional) */}
      {serviceFaqs.length > 0 && (
        <section className="py-16 px-4 bg-neutral-offwhite">
          <div className="max-w-3xl mx-auto">
            <SectionHeading heading="Frequently Asked Questions" />
            <div className="mt-8">
              <FAQAccordion items={serviceFaqs} groupByCategory={false} />
            </div>
          </div>
        </section>
      )}

      {/* 8. Related Services (conditional) */}
      {service.relatedServiceSlugs.length > 0 && (
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <SectionHeading heading="Related Services" />
            <div className="mt-10">
              <RelatedServicesList
                slugs={service.relatedServiceSlugs}
                currentSlug={service.slug}
                allServices={services}
              />
            </div>
          </div>
        </section>
      )}

      {/* 9. CTA */}
      <CTASection
        heading={`Ready to Schedule Your ${service.title}?`}
        primaryCTA={{ label: 'Get a Free Inspection', href: '/contact#form' }}
        secondaryCTA={{ label: company.phoneDisplay, tel: company.phoneTel }}
        variant="navy"
      />
    </>
  )
}
