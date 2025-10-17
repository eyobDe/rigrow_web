import { Container } from './Container'

export function Footer() {
  return (
    <footer className="relative border-t border-border/70 bg-card/95">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-primary/60 to-transparent md:inset-x-12"
      />
      <Container className="flex flex-col gap-6 py-12 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground/80">
            Rigro
          </p>
          <span className="text-base font-medium text-foreground">&copy; 2025 Rigro. A Quanomic Project.</span>
        </div>
        <div className="flex items-center gap-8">
          <a
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            href="mailto:hello@rigro.app"
          >
            Email
          </a>
          <a
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            href="#linkedin"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  )
}
