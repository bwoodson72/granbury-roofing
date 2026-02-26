import * as z from "zod"

export const contactFormSchema = z.object({
  fullName: z.string().min(2, { error: "Name must be at least 2 characters" }),
  phone: z.string().regex(/^[\d\s\-\(\)\+]{10,}$/, { error: "Enter a valid phone number" }),
  email: z.email({ error: "Enter a valid email address" }),
  serviceNeeded: z.string().min(1, { error: "Please select a service" }),
  city: z.string().min(1, { error: "Please enter your city" }),
  message: z.string().min(10, { error: "Please describe your situation (minimum 10 characters)" }),
  urgency: z.enum(['routine', 'soon', 'urgent', 'emergency'], {
    error: "Please select how soon you need service",
  }),
  consent: z.boolean().refine((val) => val === true, {
    error: "You must agree to be contacted",
  }),
  honeypot: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
