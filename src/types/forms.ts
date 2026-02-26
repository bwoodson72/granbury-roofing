export interface ContactFormValues {
  fullName: string
  phone: string
  email: string
  serviceNeeded: string
  city: string
  message: string
  urgency: 'routine' | 'soon' | 'urgent' | 'emergency'
  consent: boolean
  honeypot?: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}
