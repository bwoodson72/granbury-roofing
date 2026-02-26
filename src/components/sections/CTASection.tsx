import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  heading: string
  subheading?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; tel: string }
  variant?: 'navy' | 'orange'
}

export function CTASection({
  heading,
  subheading,
  primaryCTA,
  secondaryCTA,
  variant = 'navy',
}: CTASectionProps) {
  const isNavy = variant === 'navy'

  return (
    <section
      className={cn(
        'relative overflow-hidden py-16 px-4',
        isNavy ? 'bg-brand-navy' : 'bg-brand-orange',
      )}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(255,255,255,0.07)_0%,transparent_70%)]" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-2 text-white/80 text-lg leading-relaxed max-w-xl mx-auto">{subheading}</p>
        )}

        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={primaryCTA.href}>
            <Button
              variant={isNavy ? 'primary' : 'outline'}
              size="lg"
              className={
                !isNavy
                  ? 'border-white text-white hover:bg-white hover:text-brand-orange'
                  : undefined
              }
            >
              {primaryCTA.label}
            </Button>
          </Link>

          {secondaryCTA && (
            <a href={`tel:${secondaryCTA.tel}`}>
              <Button
                variant="outline"
                size="lg"
                className="border-white/60 text-white hover:bg-white hover:text-brand-navy hover:border-white"
              >
                {secondaryCTA.label}
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
