import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: 1 | 2 | 3 | 4 | 5
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <span
      role="img"
      className="flex items-center gap-0.5"
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating ? 'fill-brand-orange text-brand-orange' : 'text-neutral-lightgray'
          }
        />
      ))}
    </span>
  )
}
