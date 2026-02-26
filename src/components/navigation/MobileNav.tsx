'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import type { NavItem } from '@/types/content'

interface MobileNavProps {
  navItems: NavItem[]
  phoneDisplay: string
  phoneTel: string
}

function isLinkActive(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/'
  }
  // Mark Services as active when on any service detail page
  if (href === '/services') {
    return pathname === '/services' || pathname.startsWith('/services/')
  }
  return pathname === href
}

export function MobileNav({ navItems, phoneDisplay, phoneTel }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const drawerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Close on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Focus management
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
        'button, a[href]'
      )
      firstFocusable?.focus()
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="p-2 text-white hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in drawer from right */}
      <div
        ref={drawerRef}
        id="mobile-menu"
        className={cn(
          'fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-brand-navy z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Mobile navigation"
        role="navigation"
      >
        {/* Close button */}
        <div className="flex justify-end px-4 py-4 border-b border-white/10">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = isLinkActive(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block py-3 px-6 text-base font-heading font-medium transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-orange',
                      active
                        ? 'text-brand-orange bg-white/5'
                        : 'text-white hover:text-brand-orange hover:bg-white/5'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* CTAs */}
        <div className="px-4 py-6 space-y-3 border-t border-white/10">
          <a
            href={`tel:${phoneTel}`}
            className="block w-full"
            onClick={() => setIsOpen(false)}
          >
            <Button variant="primary" size="lg" className="w-full text-sm sm:text-base">
              Call {phoneDisplay}
            </Button>
          </a>
          <Link
            href="/contact#form"
            className="block w-full"
            onClick={() => setIsOpen(false)}
          >
            <Button variant="secondary" size="lg" className="w-full text-sm sm:text-base">
              Request Inspection
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
