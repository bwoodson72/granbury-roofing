import type { Testimonial } from '@/types/content'
import { StarRating } from '@/components/ui/StarRating'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden flex flex-col">
      <div className="h-[3px] w-full bg-brand-orange flex-shrink-0" />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <StarRating rating={testimonial.rating} />
        <blockquote className="italic text-neutral-charcoal flex-1 text-[0.95rem] leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
        <div className="border-t border-border pt-4">
          <p className="font-bold text-brand-navy text-sm">{testimonial.name}</p>
          <p className="text-muted-foreground text-xs">
            {testimonial.city} · {testimonial.serviceType}
          </p>
          <p className="text-muted-foreground text-xs mt-1">{testimonial.dateLabel}</p>
        </div>
      </div>
    </div>
  )
}
