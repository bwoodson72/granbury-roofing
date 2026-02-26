import { CheckCircle2, Shield, Star } from 'lucide-react'
import { SectionHeading } from '@/components/sections/SectionHeading'

interface FeatureListProps {
  items: string[]
  heading?: string
  icon?: 'check' | 'shield' | 'star'
}

const iconMap = {
  check: CheckCircle2,
  shield: Shield,
  star: Star,
}

export function FeatureList({ items, heading, icon = 'check' }: FeatureListProps) {
  const Icon = iconMap[icon]

  return (
    <div>
      {heading && (
        <div className="mb-6">
          <SectionHeading heading={heading} align="left" />
        </div>
      )}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Icon className="text-brand-orange flex-shrink-0 mt-0.5" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
