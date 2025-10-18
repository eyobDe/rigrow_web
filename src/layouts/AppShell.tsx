import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AlignJustify, X } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Sheet } from '../components/ui/sheet'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { cn } from '../lib/cn'
import { ThemeToggle } from '../components/ThemeToggle'

const navigation = [
  { label: 'Home', href: '#overview' },
  { label: 'Solution', href: '#solution' },
  { label: 'Contact', href: '#contact' },
]

export function AppShell() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setMobileOpen(false)

    const targetId = href.replace('#', '')
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const section = document.getElementById(targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={cn(
          'relative sticky top-0 z-50 border-b border-transparent bg-background/70 backdrop-blur-xl transition-all duration-500',
          scrolled &&
            'border-border/60 bg-background/85 shadow-[0_18px_42px_-28px_rgba(12,23,16,0.6)]',
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
        <Container className="flex h-[4.75rem] items-center justify-between gap-6">
          <Link
            to="/"
            className="inline-flex items-center transition-transform duration-300 hover:translate-y-[-2px]"
          >
            <img
              src="/branding/Full Logo/Colored/colored logo.png"
              alt="Rigro logo"
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden flex-1 items-center justify-end gap-9 md:flex">
            <nav className="flex gap-9">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleAnchorNavigation(event, item.href)}
                  className="group relative px-1 text-[0.95rem] font-medium tracking-[0.08em] text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-primary opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100"
                  />
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="h-10 rounded-full bg-gradient-to-br from-primary via-accent to-primary/90 px-5 text-[0.85rem] font-semibold tracking-[0.18em] text-primary-foreground shadow-[0_18px_34px_-20px_hsla(153_73%_47%_/_0.65)] transition-transform duration-300 hover:scale-[1.02] hover:brightness-105"
                asChild
              >
                <a href="#contact" onClick={(event) => handleAnchorNavigation(event, '#contact')}>
                  Get started
                </a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-border/60 bg-card/80 text-foreground hover:border-border hover:bg-card"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <AlignJustify className="h-5 w-5" />
            </Button>
          </div>
        </Container>
        <Sheet data-open={mobileOpen ? 'true' : 'false'} role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm dark:bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
            <div className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-background/95 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Menu
                </span>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-1 flex-col gap-2 px-6 py-6">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-base font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary/60 hover:text-foreground"
                  onClick={(event) => handleAnchorNavigation(event, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-border/60 px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Theme
              </p>
              <ThemeToggle />
            </div>
          </div>
        </Sheet>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
