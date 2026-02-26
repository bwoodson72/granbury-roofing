import type { FeaturedProject } from '@/types/content'

interface FeaturedProjectCardProps {
  project: FeaturedProject
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden flex flex-col">
      <div className="h-[3px] w-full bg-brand-orange flex-shrink-0" />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="bg-brand-navy/8 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full truncate max-w-[160px]">
            {project.location}
          </span>
          <span className="bg-brand-orange/10 text-brand-orange text-xs font-semibold px-3 py-1 rounded-full truncate max-w-[160px]">
            {project.serviceType}
          </span>
        </div>
        <h3 className="font-bold text-brand-navy text-xl leading-snug">{project.title}</h3>
        <p className="text-neutral-charcoal text-sm leading-relaxed flex-1">{project.summary}</p>
        <div className="border-t border-border pt-4">
          <p className="text-brand-orange font-semibold text-sm">{project.outcome}</p>
        </div>
      </div>
    </div>
  )
}
