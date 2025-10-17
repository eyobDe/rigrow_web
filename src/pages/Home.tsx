import { Button } from '../components/ui/button'

export function Home() {
  return (
    <section className="space-y-12">
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-foreground px-10 py-16 text-primary-foreground shadow-[0_28px_68px_-36px_rgba(15,15,15,0.9)] sm:px-14 sm:py-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-primary/80"
        />
        <div className="pointer-events-none absolute -right-24 top-8 h-56 w-56 rounded-full border border-primary/30 opacity-30 blur-3xl" />
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary-foreground/60">
            Growth, Elevated
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-primary-foreground lg:text-[2.8rem]">
            Rigro helps agritech teams scale regenerative growth.
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Launch confident experiences with a brand-forward design system, responsive marketing site
            shell, and ready-to-ship product foundations.
          </p>
          <Button size="lg">Explore the Platform</Button>
        </div>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Purpose-built for regenerative ventures
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Rigro pairs agronomic expertise with digital acceleration. From farmer onboarding to investor
            reporting, we align your teams around a single source of growth truth.
          </p>
        </article>
        <article className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/95 p-6 shadow-[0_18px_48px_-34px_rgba(15,15,15,0.5)]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
          <h3 className="text-lg font-semibold text-foreground">Brand Integrity Included</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Tailored components respect the Rigro brand tokens across surfaces. Extend the look and feel
            with confidence as you roll out new campaigns.
          </p>
        </article>
      </div>
    </section>
  )
}


