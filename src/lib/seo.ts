import type { Metadata } from 'next'

export const BASE_URL = 'https://granburypeakroofing.com'

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const fullTitle = `${title} | Granbury Peak Roofing`
  const url = `${BASE_URL}${path}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Granbury Peak Roofing & Restoration',
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  }
}
