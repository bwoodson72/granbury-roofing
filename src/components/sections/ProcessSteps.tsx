import { Fragment } from 'react'
import { SectionHeading } from '@/components/sections/SectionHeading'

interface ProcessStepsProps {
  steps: string[]
  heading?: string
}

export function ProcessSteps({ steps, heading }: ProcessStepsProps) {
  return (
    <div>
      {heading && (
        <div className="mb-10">
          <SectionHeading heading={heading} />
        </div>
      )}

      {/* Desktop: horizontal row with connecting lines */}
      <div className="hidden md:flex items-start">
        {steps.map((step, i) => (
          <Fragment key={i}>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg">
                {i + 1}
              </div>
              <p className="mt-3 text-center text-sm px-4 text-neutral-charcoal">
                {step}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="h-px w-8 bg-border flex-shrink-0 mt-5" />
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {i + 1}
            </div>
            <p className="pt-2 text-neutral-charcoal">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
