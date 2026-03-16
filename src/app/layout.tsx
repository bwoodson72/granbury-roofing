import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { BASE_URL } from "@/lib/seo";
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
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Granbury Peak Roofing & Restoration",
    template: "%s | Granbury Peak Roofing & Restoration",
  },
  description:
    "Expert roofing, storm damage restoration, and exterior services in Granbury, TX and surrounding areas.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
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
