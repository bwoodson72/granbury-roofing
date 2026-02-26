import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  heading: string
  subheading?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  heading,
  subheading,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const isCenter = align === 'center'

  return (
    <div className={cn(alignClass)}>
      <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">{heading}</h2>
      <div className={cn('mt-3 h-[3px] w-12 rounded-full bg-brand-orange', isCenter ? 'mx-auto' : 'ml-0')} />
      {subheading && (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subheading}</p>
      )}
    </div>
  )
}
