import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/types/content'

interface ServiceCardProps {
  service: Pick<Service, 'slug' | 'title' | 'shortDescription' | 'featuredImage'>
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
    >
      {/* Image area */}
      <div className="relative h-48 bg-neutral-lightgray overflow-hidden">
        {service.featuredImage ? (
          <Image
            src={service.featuredImage}
            alt={`${service.title} service`}
            fill
            quality={75}
            sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 768px) calc(50vw - 32px), (max-width: 1024px) calc(33vw - 32px), 380px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-navy to-brand-navy-dark flex items-center justify-center">
            <span className="text-[6rem] font-bold text-white/10 select-none leading-none">
              {service.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-brand-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content section */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-muted-foreground flex-1">{service.shortDescription}</p>
        <span className="flex items-center gap-1.5 text-brand-orange font-medium">
          Learn More
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
