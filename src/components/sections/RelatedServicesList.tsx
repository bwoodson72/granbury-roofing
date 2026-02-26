import type { Service } from '@/types/content'
import { ServiceGrid } from '@/components/sections/ServiceGrid'

interface RelatedServicesListProps {
  slugs: string[]
  currentSlug: string
  allServices: Pick<Service, 'slug' | 'title' | 'shortDescription' | 'featuredImage'>[]
}

export function RelatedServicesList({
  slugs,
  currentSlug,
  allServices,
}: RelatedServicesListProps) {
  const filtered = allServices.filter(
    (service) => slugs.includes(service.slug) && service.slug !== currentSlug,
  )

  if (filtered.length === 0) return null

  return <ServiceGrid services={filtered} />
}
