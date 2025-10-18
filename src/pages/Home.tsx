import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

const stats = [
  { value: '20%', label: 'Improvement in Water Use Efficiency' },
  { value: '35%', label: 'Water Savings' },
  { value: '20%', label: 'Energy Savings' },
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

export function Home() {
  return (
    <div className="space-y-24">
      <section
        id="overview"
        className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-card/90 px-8 py-14 shadow-[0_42px_96px_-48px_rgba(10,24,16,0.58)] backdrop-blur-xl sm:px-12 lg:px-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_110%_at_15%_15%,hsla(155,73%,47%,0.26),transparent_55%),radial-gradient(110%_100%_at_88%_15%,hsla(196,82%,63%,0.22),transparent_72%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-primary/80 backdrop-blur">
              <span className="block h-2 w-2 rounded-full bg-primary" />
              <span>Intelligent irrigation</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-[2.6rem] lg:text-[3rem]">
                Irrigation Water Management Solution
              </h1>
              <p className="text-lg leading-relaxed text-foreground/80">
                Our solution delivers analytics both at field level and farm level, to deliver the right
                amount of water, where and when needed.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                A hybrid remote sensing and sensor-based solution brings the best of both techniques for
                water application planning and monitoring through our advanced IAS (Intelligent Agriculture
                System).
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-12 rounded-full bg-gradient-to-r from-primary via-accent to-primary/80 px-8 text-sm font-semibold tracking-[0.24em] text-primary-foreground shadow-[0_28px_48px_-28px_hsla(153,73%,47%,0.75)] hover:brightness-110"
                asChild
              >
                <a href="#contact">Request a Free Demo</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border border-primary/40 bg-transparent px-8 text-sm font-semibold tracking-[0.24em] text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#solution">Explore Planning</a>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/20 bg-background/60 p-5 text-left shadow-[0_22px_34px_-26px_rgba(12,22,18,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-background/40"
                >
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md pb-12 sm:pb-0">
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/15 shadow-[0_48px_88px_-54px_rgba(12,23,16,0.85)]">
              <img
                src="/branding/assets/header-image-1.jpg"
                alt="Rigrow irrigation analytics dashboard"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 left-1/2 hidden w-40 -translate-x-1/2 overflow-hidden rounded-3xl border border-white/20 shadow-[0_28px_48px_-26px_rgba(12,22,18,0.6)] sm:block">
              <img
                src="/branding/assets/header-image-2.jpg"
                alt="Rigrow mobile irrigation overview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
        <div className="grid gap-6 lg:grid-cols-3">
          {planningHighlights.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="flex h-full flex-col gap-5 rounded-[2.2rem] border border-border/60 bg-card/85 p-8 shadow-[0_36px_64px_-52px_rgba(12,24,18,0.6)] backdrop-blur"
            >
              <div className="overflow-hidden rounded-[1.6rem] border border-border/60 bg-background/60">
                <img src={item.image} alt={item.alt} className="h-48 w-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="monitoring" className="space-y-10">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-foreground sm:text-[2.25rem]">
            Applied Water Efficiency Monitoring & Mobile Alerts
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
            Monitor applied water efficiency, maintain regulatory-ready records, and keep operators
            connected to evolving field needs through proactive notifications.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {monitoringHighlights.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="flex h-full flex-col gap-5 rounded-[2.2rem] border border-border/60 bg-card/85 p-8 shadow-[0_36px_64px_-52px_rgba(12,24,18,0.6)] backdrop-blur"
            >
              <div className="overflow-hidden rounded-[1.6rem] border border-border/60 bg-background/60">
                <img src={item.image} alt={item.alt} className="h-48 w-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cta" className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-background/85 px-8 py-14 shadow-[0_42px_96px_-52px_rgba(10,24,16,0.6)] backdrop-blur sm:px-12 lg:px-16">
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
                <a href="#monitoring">Learn More</a>
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
        className="grid gap-12 rounded-[3rem] border border-border/60 bg-card/90 px-8 py-14 shadow-[0_42px_96px_-48px_rgba(10,24,16,0.58)] backdrop-blur sm:px-12 lg:grid-cols-[1.05fr,0.95fr] lg:px-16"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Ready to get started
          </div>
          <h2 className="text-3xl font-semibold text-foreground sm:text-[2.25rem]">
            Ready to Get Started? Ready to Transform Your Irrigation Strategy with IAS?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Schedule your free demo and see how Rigrow equips your teams with precision irrigation planning,
            monitoring, and alerting. Our specialists will tailor the Intelligent Agriculture System to your
            crops, soil profile, and water delivery infrastructure.
          </p>
          <div className="rounded-2xl border border-border/60 bg-background/70 p-6 text-sm leading-relaxed text-muted-foreground">
            Rigrow - Irrigation Water Management Solution: Advanced IAS for precision irrigation technology
            and sustainable water management.
          </div>
        </div>
        <Card className="relative overflow-hidden border-border/70 bg-card/95 shadow-[0_24px_60px_-38px_rgba(15,15,15,0.55)]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/45 to-transparent"
          />
          <CardHeader className="space-y-2 p-6 pb-2">
            <CardTitle className="text-xl font-semibold text-foreground">Schedule Your Free Demo</CardTitle>
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
                Send Request
              </Button>
            </form>
            <p className="text-xs text-muted-foreground/80">
              We respect your time and data. Your demo request is handled by the Rigrow team—no spam, ever.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
