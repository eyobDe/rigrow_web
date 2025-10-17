import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const values = [
  {
    title: 'Holistic Intelligence',
    description:
      'We blend agronomic data, market insights, and climate indicators to guide every strategic decision.',
  },
  {
    title: 'Operational Clarity',
    description:
      'Unified workflows align growers, partners, and investors with transparent progress reporting.',
  },
  {
    title: 'Sustainable Growth',
    description:
      'Regenerative-first practices ensure value compounds for the planet, producers, and communities.',
  },
]

export function About() {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2>About Rigro</h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          Rigro is a Quanomic initiative focused on accelerating regenerative agriculture through digital
          platforms that respect brand, data, and field realities. We build connective tissue between
          insight and action so teams can steward growth responsibly.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <Card
            key={value.title}
            className="relative h-full overflow-hidden border-border/70 bg-card/95 shadow-[0_20px_52px_-38px_rgba(15,15,15,0.6)] transition-shadow hover:shadow-[0_34px_68px_-40px_rgba(15,15,15,0.65)]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/45 to-transparent"
            />
            <CardHeader className="space-y-2 p-6 pb-1.5">
              <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-3 text-sm leading-relaxed text-muted-foreground">
              {value.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


