import { NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validation/contact-form"

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 }
    )
  }

  const result = contactFormSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation error",
        issues: result.error.issues,
      },
      { status: 400 }
    )
  }

  const data = result.data

  // Silent honeypot discard
  if (data.honeypot && data.honeypot.length > 0) {
    return NextResponse.json({ success: true, message: "Thanks! We'll be in touch within one business day." })
  }

  // Simulated failure for testing
  if (data.message.includes("fail-test")) {
    return NextResponse.json(
      { success: false, message: "Server error. Please try again or call us directly." },
      { status: 500 }
    )
  }

  return NextResponse.json({
    success: true,
    message: "Thanks! We'll be in touch within one business day.",
  })
}
