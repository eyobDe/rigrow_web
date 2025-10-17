import { Link } from 'react-router-dom'
import { Container } from './Container'
import { Button } from './ui/button'
import { Input } from './ui/input'

const footerNavigation = [
  {
    title: 'Company',
    links: [
      { label: 'About Rigro', to: '/about' },
      { label: 'Our impact', to: '/about#impact' },
      { label: 'Careers', to: '#careers' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Grower experience', to: '#grower-experience' },
      { label: 'Carbon financing', to: '#carbon-financing' },
      { label: 'Insights & AI', to: '#insights' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Brand kit', to: '#brand-kit' },
      { label: 'Investor deck', to: '#investor' },
      { label: 'Press center', to: '#press' },
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
              className="flex items-center gap-4 text-foreground transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <img
                src="/branding/rigro-logo.svg"
                alt="Rigro full logo"
                className="h-12 w-auto"
              />
              <span className="text-lg font-semibold tracking-[0.28em] text-[#39783e] dark:text-primary">
                Rigro
              </span>
            </Link>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Rigro equips regenerative agritech teams with a unified operating system—bridging field
              intelligence, carbon finance, and partner storytelling for measurable climate wins.
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
              Newsletter
            </div>
            <h3 className="mt-6 text-[1.7rem] font-semibold tracking-tight text-foreground">
              Stay close to the field.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Monthly product updates, grower spotlights, and regenerative playbooks straight to your inbox.
            </p>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input
                type="email"
                required
                placeholder="you@organization.com"
                className="h-12 rounded-full border-border/60 bg-background/90 px-5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-primary"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-full bg-gradient-to-r from-primary via-accent to-primary/85 px-8 text-sm font-semibold tracking-[0.22em] text-primary-foreground shadow-[0_24px_44px_-28px_hsla(153,73%,47%,0.7)] hover:brightness-110"
              >
                Join
              </Button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground/80">
              We respect your inbox. Unsubscribe any time.
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
                    {link.to.startsWith('#') ? (
                      <a
                        href={link.to}
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Rigro. A Quanomic Project.</span>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-foreground">
            <a className="transition-colors hover:text-primary" href="mailto:hello@rigro.app">
              Email
            </a>
            <a className="transition-colors hover:text-primary" href="#linkedin">
              LinkedIn
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
