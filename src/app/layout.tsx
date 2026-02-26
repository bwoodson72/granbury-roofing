import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Granbury Peak Roofing & Restoration",
    template: "%s | Granbury Peak Roofing & Restoration",
  },
  description:
    "Expert roofing, storm damage restoration, and exterior services in Granbury, TX and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/services/roof-replacement.avif"
          type="image/avif"
        />
      </head>
      <body className="antialiased bg-background text-foreground font-body">
        <SiteHeader />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
