import type { Service } from '@/types/content'
import { ServiceCard } from '@/components/cards/ServiceCard'

interface ServiceGridProps {
  services: Pick<Service, 'slug' | 'title' | 'shortDescription' | 'featuredImage'>[]
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:[&>*]:col-span-2 lg:[&>*:nth-child(4)]:col-start-2 lg:[&>*:nth-child(5)]:col-start-4">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  )
}
