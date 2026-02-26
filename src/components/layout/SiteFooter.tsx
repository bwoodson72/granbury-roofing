import Link from 'next/link'
import { navItems } from '@/content/site-nav'
import { company } from '@/content/company'

export default function SiteFooter() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      {/* Main grid */}
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Brand */}
          <div>
            <p className="font-heading font-bold text-xl mb-2">{company.name}</p>
            <p className="font-body text-white/70 text-sm mb-4">{company.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {company.badges.slice(0, 3).map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 text-white text-xs font-body px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact</h3>
            <div className="space-y-2 text-sm font-body">
              <p>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {company.phoneDisplay}
                </a>
              </p>
              <p className="text-white/70">{company.email}</p>
              <p className="text-white/70">{company.hours}</p>
              <p className="text-brand-orange">{company.emergencyNote}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-sm font-body text-white/60">
          <span>Serving: {company.serviceAreas.join(', ')}</span>
          <span>
            © {new Date().getFullYear()} Granbury Peak Roofing &amp; Restoration
          </span>
        </div>
      </div>
    </footer>
  )
}
