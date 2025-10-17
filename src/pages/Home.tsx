import { BellRing, LineChart, PiggyBank, Radar, Sprout } from 'lucide-react'
import { Button } from '../components/ui/button'

const metrics = [
  { label: 'Key programs live', value: '6+' },
  { label: 'Mobile-ready', value: '100%' },
  { label: 'Smart notifications', value: '24/7' },
]

const featureHighlights = [
  {
    icon: Radar,
    title: 'Purpose-built for regenerative ventures',
    copy:
      'Rigro aligns agronomists, operators, and investors around a shared intelligence layer so climate-positive programs stay on track.',
  },
  {
    icon: BellRing,
    title: 'Precision ops out of the box',
    copy:
      'Automated alerts, geospatial overlays, and financing milestones keep your teams proactive instead of reactive.',
  },
  {
    icon: PiggyBank,
    title: 'Brand-integrity guardrails',
    copy:
      'Design tokens and storytelling modules conform to the Rigro mark, letting you scale campaigns without diluting trust.',
  },
]

export function Home() {
  return (
    <section className="space-y-16">
      <div className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-card/90 px-8 py-14 shadow-[0_42px_96px_-48px_rgba(10,24,16,0.58)] backdrop-blur-xl sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_110%_at_15%_15%,hsla(155,73%,47%,0.26),transparent_55%),radial-gradient(110%_100%_at_88%_15%,hsla(196,82%,63%,0.22),transparent_72%)]" />
        <div className="relative grid gap-14 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-primary/80 backdrop-blur">
              <span className="block h-2 w-2 rounded-full bg-primary" />
              <span>Agricultural intelligence</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-[2.6rem] lg:text-[3rem]">
                Smart farming made simple for Rigro ecosystems.
              </h1>
              <p className="text-lg leading-relaxed text-foreground/75">
                Orchestrate soil data, carbon financing, and grower engagement in one modern workspace.
                Inspired by frontline agronomists, polished for investors and partners.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-12 rounded-full bg-gradient-to-r from-primary via-accent to-primary/80 px-8 text-sm font-semibold tracking-[0.24em] text-primary-foreground shadow-[0_28px_48px_-28px_hsla(153,73%,47%,0.75)] hover:brightness-110"
              >
                Explore the platform
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border border-primary/40 bg-transparent px-8 text-sm font-semibold tracking-[0.24em] text-primary hover:bg-primary/10"
              >
                See capabilities
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/20 bg-background/60 p-5 text-left shadow-[0_22px_34px_-26px_rgba(12,22,18,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-background/40"
                >
                  <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/15 bg-gradient-to-br from-secondary/60 via-background/70 to-secondary/20 p-6 shadow-[0_48px_88px_-54px_rgba(12,23,16,0.85)] backdrop-blur-xl dark:border-white/8 dark:from-secondary/20 dark:via-background/35 dark:to-secondary/10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(155,73%,47%,0.22),transparent_58%)]" />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="space-y-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary backdrop-blur-sm">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-2xl font-semibold text-foreground">Regenerative growth cockpit</p>
                    <p className="text-sm leading-relaxed text-foreground/70">
                      Synchronise real-time crop health, carbon credit readiness, and financial flows in a
                      single command center tailored to Rigro&apos;s growers.
                    </p>
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-muted-foreground/80 backdrop-blur-md dark:border-white/10 dark:bg-background/40">
                    <span className="font-medium text-foreground/80">Live crop cycles</span>
                    <span className="text-primary">+18%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-muted-foreground/80 backdrop-blur-md dark:border-white/10 dark:bg-background/40">
                    <span className="font-medium text-foreground/80">Credit-ready acres</span>
                    <span className="text-primary">24</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 right-0 w-44 rounded-2xl border border-primary/35 bg-card/90 p-4 text-sm shadow-lg shadow-primary/10 backdrop-blur-xl dark:border-primary/25 dark:bg-card/60">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <LineChart className="h-5 w-5" />
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em]">Insights</span>
              </div>
              <p className="text-sm font-medium text-foreground">Predictive yield window</p>
              <p className="text-xs text-muted-foreground">7-day outlook locked</p>
            </div>
            <div className="absolute -bottom-14 left-0 w-44 rounded-2xl border border-primary/30 bg-card/90 p-4 text-sm shadow-lg shadow-primary/10 backdrop-blur-xl dark:border-primary/25 dark:bg-card/60">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <PiggyBank className="h-5 w-5" />
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em]">Finance</span>
              </div>
              <p className="text-sm font-medium text-foreground">Carbon revenue unlocked</p>
              <p className="text-xs text-muted-foreground">$480k projection</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
        <article className="space-y-6 rounded-[2.5rem] border border-border/60 bg-card/85 p-10 shadow-[0_36px_64px_-52px_rgba(12,24,18,0.6)] backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground/80">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span>Why Rigro</span>
          </div>
          <h2 className="text-2xl font-semibold text-foreground">
            Purpose-built for regenerative ventures
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Rigro pairs agronomic expertise with digital acceleration. From farmer onboarding to investor
            reporting, we align your teams around a single source of growth truth and create space for bold
            storytelling along the way.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background/70 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Brand integrity
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tailored components respect Rigro brand tokens across every surface so you can extend the
                look and feel with confidence.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/70 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Delivery velocity
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Pre-built layouts and UI primitives speed up experiment launches and product pilots while
                keeping quality uncompromised.
              </p>
            </div>
          </div>
        </article>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
          {featureHighlights.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="flex h-full flex-col justify-between gap-3 rounded-[2rem] border border-border/60 bg-card/80 p-7 shadow-[0_32px_56px_-48px_rgba(12,23,17,0.55)] backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
