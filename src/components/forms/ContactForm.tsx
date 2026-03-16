'use client'

import { useState } from 'react'
import { useForm, type FieldErrors } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validation/contact-form'
import type { ContactFormResponse } from '@/types/forms'
import { company } from '@/content/company'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface FieldErrorProps {
  name: keyof ContactFormData
  errors: FieldErrors<ContactFormData>
}

function FieldError({ name, errors }: FieldErrorProps) {
  if (!errors[name]) return null
  return (
    <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
      <AlertCircle size={12} />
      {errors[name]?.message as string}
    </p>
  )
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { honeypot: '' },
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result: ContactFormResponse = await response.json()
      if (result.success) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message)
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again or call us directly.')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-14 px-6 bg-emerald-50 rounded-2xl border border-emerald-200">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-emerald-800 mb-2">Request Received!</h3>
        <p className="text-emerald-700">
          We&apos;ll be in touch within one business day. For emergencies, call us directly.
        </p>
        <a
          href={`tel:${company.phoneTel}`}
          className="mt-4 inline-block text-brand-orange font-medium hover:underline"
        >
          Need immediate help? Call us now
        </a>
      </div>
    )
  }

  const inputBase =
    'w-full border rounded-lg px-4 py-3 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange bg-background placeholder:text-muted-foreground/60'
  const inputNormal = 'border-input'
  const inputError = 'border-destructive focus:ring-destructive/50'
  const field = (name: keyof ContactFormData) =>
    cn(inputBase, errors[name] ? inputError : inputNormal)

  const labelClass = 'block text-sm font-semibold text-foreground mb-1.5'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, traps bots */}
      <input
        {...register('honeypot')}
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
      />

      {/* Full Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            className={field('fullName')}
            placeholder="Jane Smith"
          />
          <FieldError name="fullName" errors={errors} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-brand-orange">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={field('phone')}
            placeholder="(817) 555-0000"
          />
          <FieldError name="phone" errors={errors} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-brand-orange">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={field('email')}
          placeholder="jane@example.com"
        />
        <FieldError name="email" errors={errors} />
      </div>

      {/* Service Needed + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="serviceNeeded" className={labelClass}>
            Service Needed <span className="text-brand-orange">*</span>
          </label>
          <select
            id="serviceNeeded"
            aria-label="Service needed"
            {...register('serviceNeeded')}
            className={cn(field('serviceNeeded'), 'cursor-pointer')}
          >
            <option value="">Select a service…</option>
            <option value="Roof Inspections">Roof Inspections</option>
            <option value="Roof Repair">Roof Repair</option>
            <option value="Roof Replacement">Roof Replacement</option>
            <option value="Hail & Storm Damage Restoration">Hail &amp; Storm Damage Restoration</option>
            <option value="Gutter Installation & Replacement">Gutter Installation &amp; Replacement</option>
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
          <FieldError name="serviceNeeded" errors={errors} />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City <span className="text-brand-orange">*</span>
          </label>
          <input
            id="city"
            type="text"
            {...register('city')}
            className={field('city')}
            placeholder="Granbury"
          />
          <FieldError name="city" errors={errors} />
        </div>
      </div>

      {/* Urgency */}
      <div>
        <label htmlFor="urgency" className={labelClass}>
          How Soon Do You Need Service? <span className="text-brand-orange">*</span>
        </label>
        <select
          id="urgency"
          aria-label="How soon do you need service"
          {...register('urgency')}
          className={cn(field('urgency'), 'cursor-pointer')}
        >
          <option value="">Select urgency…</option>
          <option value="routine">Routine – Within a few weeks</option>
          <option value="soon">Soon – Within a week</option>
          <option value="urgent">Urgent – Within 1–2 days</option>
          <option value="emergency">Emergency – Today</option>
        </select>
        <FieldError name="urgency" errors={errors} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Describe Your Situation <span className="text-brand-orange">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className={cn(field('message'), 'resize-none')}
          placeholder="Tell us about your roof issue, when it started, any visible damage…"
        />
        <FieldError name="message" errors={errors} />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register('consent')}
          className="mt-1 h-4 w-4 accent-brand-orange"
        />
        <label htmlFor="consent" className="text-sm text-neutral-charcoal">
          I agree to be contacted about my roofing needs.{' '}
          <span className="text-brand-orange">*</span>
        </label>
      </div>
      <FieldError name="consent" errors={errors} />

      {/* API error banner */}
      {submitStatus === 'error' && (
        <div className="flex items-start gap-3 rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3">
          <AlertCircle className="text-destructive shrink-0 mt-0.5" size={16} />
          <p className="text-sm text-destructive">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            <span>Sending…</span>
          </>
        ) : (
          'Request Free Inspection'
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We respond within one business day. No spam, no pressure.
      </p>
    </form>
  )
}
