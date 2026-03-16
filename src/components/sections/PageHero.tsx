import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

type SecondaryCTA = { label: string; href: string } | { label: string; tel: string }

function hasTel(cta: SecondaryCTA): cta is { label: string; tel: string } {
  return 'tel' in cta
}

interface PageHeroProps {
  heading: string
  subheading?: string
  eyebrow?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: SecondaryCTA
  trustBullets?: string[]
  variant?: 'home' | 'page'
  colorScheme?: 'dark' | 'light'
  backgroundImage?: string
}

export function PageHero({
  heading,
  subheading,
  eyebrow,
  primaryCTA,
  secondaryCTA,
  trustBullets,
  variant = 'page',
  colorScheme = 'dark',
  backgroundImage,
}: PageHeroProps) {
  const isDark = colorScheme === 'dark'
  const isHome = variant === 'home'

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        // Vertical padding based on variant
        isHome ? 'pt-24 pb-32 md:pt-24 md:pb-36 min-h-[480px]' : 'pt-20 pb-28 md:pt-20 md:pb-28 min-h-[320px]',
        // Diagonal bottom clip
        isHome ? '[clip-path:polygon(0_0,100%_0,100%_100%,0_95%)]' : '[clip-path:polygon(0_0,100%_0,100%_100%,0_92%)]',
        'mb-[-2px]',
        // Color scheme
        isDark ? 'bg-brand-navy text-white' : 'bg-neutral-offwhite text-neutral-charcoal',
      )}
    >
      {/* Background depth layer */}
      {isDark && (
        <>
          {/* Dynamic photo background — only renders when backgroundImage is provided */}
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt=""
              fill
              loading="eager"
              priority
              fetchPriority="high"
              quality={60}
              className="object-cover object-center"
              sizes="100vw"
              aria-hidden="true"
            />
          )}

          {/* Overlay layer — adapts based on whether a photo is present */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {backgroundImage ? (
              <>
                {/* Photo mode: heavy overlay to keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                <div className="absolute inset-0 bg-brand-navy/40" />
              </>
            ) : (
              <>
                {/* Solid mode: subtle depth layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-black/20" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
              </>
            )}
          </div>
        </>
      )}

      {/* Subtle top accent border */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-orange to-transparent',
          backgroundImage ? 'opacity-90' : 'opacity-70',
        )}
        aria-hidden="true"
      />

      {/* Content container */}
      <div
        className={cn(
          'relative mx-auto px-6 sm:px-4',
          isHome ? 'text-center max-w-4xl' : 'text-left sm:text-center max-w-4xl',
        )}
      >
        {eyebrow && (
          <div className="inline-block mb-3 md:mb-4">
            <p className={cn(
              'text-brand-orange font-semibold text-[11px] md:text-xs uppercase tracking-widest',
              'px-3 py-1.5 rounded-full text-center leading-snug max-w-[260px] sm:max-w-none',
              'bg-brand-orange/10 border border-brand-orange/20',
            )}>
              {eyebrow}
            </p>
          </div>
        )}

        <h1
          className={cn(
            'font-bold leading-tight tracking-tight',
            isHome
              ? 'text-3xl sm:text-4xl md:text-5xl lg:text-[4rem]'
              : 'text-3xl sm:text-4xl md:text-5xl',
            isHome ? 'max-w-4xl mx-auto' : 'max-w-3xl mx-auto'
          )}
        >
          {heading}
        </h1>

        {subheading && (
          <p
            className={cn(
              'mx-auto',
              isHome
                ? 'mt-5 md:mt-6 text-lg md:text-xl max-w-2xl'
                : 'mt-3 md:mt-4 text-sm md:text-base max-w-2xl',
              isDark ? (isHome ? 'text-white/75' : 'text-white/70') : 'text-neutral-charcoal/80',
            )}
          >
            {subheading}
          </p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <div className={cn(
            'flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center',
            isHome ? 'mt-7 md:mt-8' : 'mt-5 md:mt-6'
          )}>
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button
                  variant="primary"
                  size={isHome ? 'lg' : 'md'}
                >
                  {primaryCTA.label}
                </Button>
              </Link>
            )}

            {secondaryCTA && (
              hasTel(secondaryCTA) ? (
                <a href={`tel:${secondaryCTA.tel}`}>
                  <Button
                    variant="outline"
                    size={isHome ? 'lg' : 'md'}
                    className={
                      isDark
                        ? 'border-white/60 text-white hover:bg-white hover:text-brand-navy hover:border-white'
                        : undefined
                    }
                  >
                    {secondaryCTA.label}
                  </Button>
                </a>
              ) : (
                <Link href={secondaryCTA.href}>
                  <Button
                    variant="outline"
                    size={isHome ? 'lg' : 'md'}
                    className={
                      isDark
                        ? 'border-white/60 text-white hover:bg-white hover:text-brand-navy hover:border-white'
                        : undefined
                    }
                  >
                    {secondaryCTA.label}
                  </Button>
                </Link>
              )
            )}
          </div>
        )}

        {trustBullets && trustBullets.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 md:mt-8">
            {trustBullets.map((bullet) => (
              <span
                key={bullet}
                className={cn(
                  'flex items-center gap-1.5 text-sm',
                  isDark ? 'text-white/80' : 'text-neutral-charcoal',
                )}
              >
                <CheckCircle2 className="text-brand-orange flex-shrink-0" size={16} />
                {bullet}
              </span>
            ))}
          </div>
        )}
      </div>

    </section>
  )
}
