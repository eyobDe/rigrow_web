import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

export function Contact() {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <h2>Contact</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          We would love to learn about your regenerative initiatives. Email us directly or leave a note and
          the Rigrow team will respond within two business days.
        </p>
      </div>
      <Card className="relative max-w-xl overflow-hidden border-border/70 bg-card/95 shadow-[0_24px_60px_-38px_rgba(15,15,15,0.55)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/45 to-transparent"
        />
        <CardHeader className="space-y-2 p-6 pb-2">
          <CardTitle className="text-xl font-semibold">Let's Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 p-6 pt-3">
          <div className="text-sm leading-relaxed text-muted-foreground">
            Email us anytime at{' '}
            <a href="mailto:hello@rigrow.app" className="font-medium text-foreground hover:text-primary">
              hello@rigrow.app
            </a>
            .
          </div>
          <form className="space-y-4">
            <Input
              placeholder="Your email address"
              type="email"
              required
              className="border-border/70 bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-[1.5px] focus-visible:ring-primary"
            />
            <textarea
              placeholder="How can we help?"
              className="min-h-[140px] w-full resize-y rounded-lg border border-border/70 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground shadow-inner focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-primary"
            />
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}


