import { Link } from 'react-router-dom'
import { Container } from './Container'
import { Button } from './ui/button'

const footerNavigation = [
  {
    title: 'Solution',
    links: [
      { label: 'Overview', href: '#overview' },
      { label: 'Irrigation Planning', href: '#solution' },
      { label: 'Monitoring & Alerts', href: '#monitoring' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Water Efficiency Insights', href: '#monitoring' },
      { label: 'Optimization Schedules', href: '#solution' },
      { label: 'Request Demo', href: '#contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Schedule Demo', href: '#contact' },
      { label: 'Start Free Trial', href: '#contact' },
      { label: 'Contact Team', href: '#contact' },
    ],
  },
]

const contactDetails = [
  { label: 'Email', value: 'hello@rigro.app', href: 'mailto:hello@rigro.app' },
  { label: 'HQ', value: 'Lagos & Nairobi', href: '#map' },
  { label: 'Phone', value: '+234 000 0000', href: 'tel:+2340000000' },
]

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-background/75 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsla(153,73%,47%,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,hsla(196,82%,63%,0.14),transparent_60%)]" />
      <Container className="relative grid gap-16 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div className="space-y-7">
            <Link
              to="/"
              className="inline-flex items-center text-foreground transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <img
                src="/branding/Full Logo/Colored/colored logo.png"
                alt="Rigro logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Rigrow - Irrigation Water Management Solution. Advanced IAS (Intelligent Agriculture System)
              for precision irrigation technology and sustainable water management.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              A hybrid remote sensing and sensor-based approach delivers the right amount of water, where and
              when needed, empowering operators with actionable intelligence for every field.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group rounded-2xl border border-border/60 bg-background/70 p-4 text-sm shadow-[0_22px_36px_-30px_rgba(12,23,18,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-background/90"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-medium text-foreground group-hover:text-primary">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-border/60 bg-background/75 p-10 shadow-[0_42px_72px_-46px_rgba(12,24,18,0.6)] backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Take Action
            </div>
            <h3 className="mt-6 text-[1.7rem] font-semibold tracking-tight text-foreground">
              Ready to Optimize Your Irrigation Strategy?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Join hundreds of farms already saving water and reducing costs with our advanced IAS
              technology. Generate optimized schedules, monitor applied water efficiency, and communicate
              field-level needs in real time.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="h-12 flex-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary/85 px-8 text-sm font-semibold tracking-[0.22em] text-primary-foreground shadow-[0_24px_44px_-28px_hsla(153,73%,47%,0.7)] hover:brightness-110"
                asChild
              >
                <a href="#contact">Start Free Trial</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 flex-1 rounded-full border-border/70 px-8 text-sm font-semibold tracking-[0.22em] text-foreground hover:bg-primary/10"
                asChild
              >
                <a href="#monitoring">Learn More</a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground/80">
              Ready to Transform Your Irrigation Strategy with IAS? Schedule your free demo today.
            </p>
          </div>
        </div>

        <div className="grid gap-8 border-t border-border/60 pt-8 md:grid-cols-3">
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
        </div>

        <div className="flex flex-col gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Rigrow. Advanced IAS for precision irrigation.</span>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-foreground">
            <a className="transition-colors hover:text-primary" href="mailto:hello@rigro.app">
              Email
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              Schedule Demo
            </a>
            <a className="transition-colors hover:text-primary" href="#privacy">
              Privacy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
