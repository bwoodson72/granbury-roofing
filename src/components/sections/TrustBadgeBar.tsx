import { Shield } from 'lucide-react'

interface TrustBadgeBarProps {
  badges: string[]
}

export function TrustBadgeBar({ badges }: TrustBadgeBarProps) {
  return (
    <div className="bg-neutral-lightgray py-4 px-4">
      <div className="flex flex-wrap justify-center gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="bg-brand-navy text-white text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-1.5"
          >
            <Shield size={14} />
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}
