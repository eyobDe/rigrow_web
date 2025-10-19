import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Container } from '../components/Container'
import { PrecisionAgriStory } from '../sections/PrecisionAgri'

const stats = [
  { value: '20%', caption: 'Less water wasted across irrigated acres' },
  { value: '35%', caption: 'Average reduction in freshwater use' },
  { value: '20%', caption: 'Energy saved through precise scheduling' },
]

const planningHighlights = [
  {
    id: 'planning-requirement',
    title: 'Irrigation Water Requirement',
    image: '/branding/assets/irrigation-water-requirement.png',
    alt: 'Dashboard view for irrigation water requirement insights',
    description:
      'For each field, crop, and soil condition, 10m daily remote sensing data and analytics provides farm operators with key insight on which day to irrigate, how much water is required along with indications on soil moisture and evapotranspiration levels.',
  },
  {
    id: 'planning-7day',
    title: '7 Days Irrigation Plan',
    image: '/branding/assets/7-days-irrigation-plan.png',
    alt: 'Seven day irrigation planning interface',
    description:
      'The irrigation planner indicates the best day to irrigate for each field, depending on moisture levels, crop stage, and precipitation forecast. The plan is available for each field and can be generated every 24 hours for maximum application accuracy.',
  },
  {
    id: 'planning-schedule',
    title: 'Optimized Application Schedule',
    image: '/branding/assets/optimized-application-schedule.png',
    alt: 'Optimized irrigation schedule dashboard',
    description:
      'Generate optimized irrigation schedules based on the irrigation requirement, minimizing loss and driving water utilization efficiency to over 90%. Optimized schedules are shown to save up to 35% water, and up to 15% energy costs—a key benefit for pump-based systems.',
  },
]

const monitoringHighlights = [
  {
    id: 'monitoring-efficiency',
    title: 'Applied Water Efficiency Monitoring',
    image: '/branding/assets/applied-water-efficiency-monitoring.png',
    alt: 'Applied water efficiency monitoring breakdown',
    description:
      'Daily water application monitoring and efficiency measurement guide more effective water strategies for operators at both field and farm levels. Historical data supports water accounting and regulatory compliance.',
  },
  {
    id: 'monitoring-alerts',
    title: 'Mobile Alerts',
    image: '/branding/assets/mobile-alerts.png',
    alt: 'Mobile alerts interface for irrigation notifications',
    description:
      'Communicate and follow up on field-level water needs with operators through SMS and the mobile application, overcoming communication bottlenecks and ensuring timely, actionable information reaches where it is most needed.',
  },
]

const features = [...planningHighlights, ...monitoringHighlights]

export function Home() {
  return (
    <div className="flex flex-col">
      <section
        id="overview"
        className="relative isolate flex min-h-[calc(100dvh-4.75rem)] flex-col overflow-hidden text-white"
      >
        <img
          src="/branding/assets/header-image-1.jpg"
          alt="Rigrow irrigation analytics dashboard"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,7,4,0.78)_0%,rgba(16,35,22,0.62)_38%,rgba(25,56,34,0.48)_68%,rgba(33,70,39,0.46)_100%)]" />
        <div className="relative z-10 flex flex-1 flex-col justify-between">
          <div className="mx-auto w-full max-w-6xl px-6 pt-[clamp(1.5rem,4vw,2.75rem)] sm:px-12 lg:px-20">
            <div className="max-w-2xl space-y-3">
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-[2.8rem] lg:text-[3.25rem]">
                Irrigation Water Management Solution
              </h1>
              <p className="text-lg leading-relaxed text-white/85">
                Deliver the right amount of water exactly where and when your fields need it with Rigrow's
                Intelligent Agriculture System. Plan, monitor, and respond in real time with blended sensor and remote-sensing insights built for growers and irrigation teams.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-10 rounded-full bg-primary px-6 text-sm font-semibold tracking-[0.22em] text-primary-foreground shadow-[0_24px_48px_-24px_rgba(127,96,51,0.8)] transition hover:brightness-110"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-6xl px-6 pb-0 sm:px-12 sm:pb-1 lg:px-20 mb-6 sm:mb-8">
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.caption}
                  className="rounded-xl border border-white/25 bg-white/15 px-3 py-3 shadow-[0_20px_40px_-24px_rgba(12,18,15,0.75)] backdrop-blur-xl"
                >
                  <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/80">{stat.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <button
              onClick={() => {
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl transition hover:bg-white/20"
              aria-label="Scroll down"
            >
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Container className="flex flex-col gap-24 py-20">
        <PrecisionAgriStory />
        <section id="solution" className="space-y-12">
          <div className="space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Advanced IAS
            </div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-[2.25rem]">
              Advanced Irrigation Planning, Monitoring and Analytics
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
              Comprehensive irrigation intelligence powered by remote sensing and real-time analytics keeps
              every field and farm aligned with precise water requirements.
            </p>
          </div>
          <div className="space-y-10">
            {features.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                className={
                  'group grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12 ' +
                  (index % 2 === 0 ? '' : '')
                }
              >
                <div
                  className={
                    (index % 2 === 0 ? 'lg:order-2 ' : '') +
                    'relative overflow-hidden shadow-[0_20px_40px_-20px_rgba(12,24,18,0.4)] bg-gradient-to-br from-slate-50 via-white to-slate-100/80'
                  }
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full aspect-[16/9] lg:aspect-[7/4] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-200/20 pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />
                </div>
                <div
                  className={
                    (index % 2 === 0 ? 'lg:order-1 ' : '') +
                    'space-y-4'
                  }
                >
                  <h3 className="text-2xl font-semibold text-foreground sm:text-[1.6rem]">{item.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* monitoring section merged into solution with alternating layout */}

        <section
          id="cta"
          className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-background/85 px-8 py-14 shadow-[0_42px_96px_-52px_rgba(10,24,16,0.6)] backdrop-blur sm:px-12 lg:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsla(196,82%,63%,0.18),transparent_60%),radial-gradient(circle_at_bottom_left,hsla(155,73%,47%,0.22),transparent_58%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                Take Action
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-foreground sm:text-[2.25rem]">
                  Ready to Optimize Your Irrigation Strategy?
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Join hundreds of farms already saving water and reducing costs with our advanced IAS
                  technology. Generate optimized schedules, monitor efficiency, and activate alerts that keep
                  your teams aligned in real time.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="h-12 flex-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary/80 px-8 text-sm font-semibold tracking-[0.24em] text-primary-foreground shadow-[0_28px_48px_-28px_hsla(153,73%,47%,0.75)] hover:brightness-110"
                  asChild
                >
                  <a href="#contact">Start Free Trial</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 flex-1 rounded-full border border-primary/40 bg-transparent px-8 text-sm font-semibold tracking-[0.24em] text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#solution">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="relative rounded-[2.4rem] border border-border/60 bg-card/85 p-8 shadow-[0_48px_88px_-52px_rgba(12,23,16,0.7)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-foreground">IAS Outcomes</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>Daily irrigation intelligence tailored to field, crop, and soil conditions.</li>
                <li>7-day precision plans refreshed every 24 hours for confident scheduling.</li>
                <li>Optimized application schedules driving over 90% water utilization efficiency.</li>
                <li>Applied water efficiency monitoring and historical reporting for compliance.</li>
                <li>Mobile alerts that keep farm operators connected to evolving water needs.</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-12 px-8 py-14 sm:px-12 lg:grid-cols-[1.05fr,0.95fr] lg:px-16"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Partnership
            </div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-[2.25rem]">
              Ready to Partner with Rigrow? Transform Your Irrigation Strategy with IAS
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Partner with Rigrow to implement precision irrigation planning, monitoring, and alerting solutions. 
              Our specialists will work with you to tailor the Intelligent Agriculture System to your
              crops, soil profile, and water delivery infrastructure.
            </p>
            <div className="rounded-2xl border border-border/60 bg-background/70 p-6 text-sm leading-relaxed text-muted-foreground">
              Rigrow - Irrigation Water Management Solution: Advanced IAS for precision irrigation technology
              and sustainable water management partnerships.
            </div>
          </div>
          <Card className="relative overflow-hidden border-border/70 bg-card/95 shadow-[0_24px_60px_-38px_rgba(15,15,15,0.55)]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/45 to-transparent"
            />
            <CardHeader className="space-y-2 p-6 pb-2">
              <CardTitle className="text-xl font-semibold text-foreground">Start Your Partnership</CardTitle>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Tell us about your irrigation goals and our team will reach out within one business day.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 p-6 pt-3">
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault()
                }}
              >
              <Input
                placeholder="Your name"
                required
                className="border-border/70 bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-[1.5px] focus-visible:ring-primary"
              />
              <Input
                placeholder="Work email"
                type="email"
                required
                className="border-border/70 bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-[1.5px] focus-visible:ring-primary"
              />
              <Input
                placeholder="Organisation"
                className="border-border/70 bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-[1.5px] focus-visible:ring-primary"
              />
              <textarea
                placeholder="Current irrigation challenges or goals"
                className="min-h-[140px] w-full resize-y rounded-xl border border-border/70 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground shadow-inner focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-primary"
              />
              <Button type="submit" className="w-full rounded-full">
                Start Partnership
              </Button>
            </form>
            <p className="text-xs text-muted-foreground/80">
              We respect your time and data. Your partnership request is handled by the Rigrow team—no spam, ever.
            </p>
          </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  )
}
