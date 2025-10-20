import { Link } from 'react-router-dom'
import { Container } from './Container'

const footerNavigation = [
  {
    title: 'Products',
    links: [
      { label: 'iCAD Software', href: 'https://icad-canalnet.quanomics.com/' },
      { label: 'CanalNET Software', href: 'https://icad-canalnet.quanomics.com/' },
      { label: 'Rigrow Irrigation Advisory Services', href: 'https://icad-canalnet.quanomics.com/' },
      { label: 'nobo Platform', href: 'https://icad-canalnet.quanomics.com/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: 'https://talent.quanomics.com/' },
      { label: 'Press & Media', href: '#' },
      { label: 'Partners', href: '#' },
    ],
  },
]

const contactDetails = [
  { label: 'Email', value: 'support@quanomics.com', sub: 'General inquiries', href: 'mailto:support@quanomics.com' },
  { label: 'HQ', value: 'Addis Ababa, ETHIOPIA', sub: 'Headquarters', href: '#' },
]

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-background/75 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsla(153,73%,47%,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,hsla(196,82%,63%,0.14),transparent_60%)]" />
      <Container className="relative grid gap-16 py-16">
        {/* Top grid: Brand + columns */}
        <div className="grid gap-12 md:grid-cols-[1.2fr,0.9fr,0.9fr,1fr] md:items-start">
          {/* Brand block (iCAD x CanalNET + Rigrow info) */}
          <div className="space-y-6">
            <Link
              to="/"
              className="inline-flex items-center text-foreground transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <img
                src="/branding/Full Logo/Colored/colored logo.png"
                alt="Rigrow logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Rigrow
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>Rigrow delivers precision irrigation planning intelligence tuned to each crop, field, and climate.</p>
              <p>Built by Quanomics to help growers conserve water, reduce costs, and boost farm resilience.</p>
            </div>
          </div>

          {/* Products */}
          {footerNavigation.map((group) => (
            <div key={group.title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">Contact</p>
            <div className="grid gap-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group rounded-2xl border border-border/60 bg-background/70 p-4 text-sm shadow-[0_22px_36px_-30px_rgba(12,23,18,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-background/90"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                    {item.label}
                  </p>
                  <p className="mt-1 text-base font-medium text-foreground group-hover:text-primary">
                    {item.value}
                  </p>
                  {item.sub && (
                    <p className="mt-1 text-xs text-muted-foreground">{item.sub}</p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2025 Quanomic Software. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-foreground">
            <a className="transition-colors hover:text-primary" href="#privacy">Privacy Policy</a>
            <a className="transition-colors hover:text-primary" href="#terms">Terms of Service</a>
            <a className="transition-colors hover:text-primary" href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
