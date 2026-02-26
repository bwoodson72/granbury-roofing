'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navItems } from '@/content/site-nav'
import { company } from '@/content/company'
import { CallNowButton } from '@/components/ui/CallNowButton'
import { MobileNav } from '@/components/navigation/MobileNav'

export default function SiteHeaderBase() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isScrolled && (
        <div
          className="absolute inset-0 pointer-events-none shadow-md"
          aria-hidden="true"
        />
      )}
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between gap-2">
        {/* Brand */}
        <Link
          href="/"
          className="text-white font-heading font-bold text-base sm:text-lg md:text-xl min-w-0 truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
        >
          {company.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-heading font-medium px-3 py-2 rounded transition-colors text-white/80 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <CallNowButton
            phoneTel={company.phoneTel}
            phoneDisplay={company.phoneDisplay}
            size="sm"
            variant="header"
          />
        </div>

        {/* Mobile nav trigger */}
        <div className="md:hidden shrink-0">
          <MobileNav
            navItems={navItems}
            phoneDisplay={company.phoneDisplay}
            phoneTel={company.phoneTel}
          />
        </div>
      </div>
    </>
  )
}
