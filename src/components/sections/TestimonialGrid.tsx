import type { Testimonial } from '@/types/content'
import { TestimonialCard } from '@/components/cards/TestimonialCard'

interface TestimonialGridProps {
  testimonials: Testimonial[]
  limit?: number
}

export function TestimonialGrid({ testimonials, limit }: TestimonialGridProps) {
  const displayed = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayed.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  )
}
