import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { AlignJustify, X } from 'lucide-react'
import { Button } from '../components/ui/button'
import { NavigationMenu } from '../components/ui/navigation-menu'
import { Sheet } from '../components/ui/sheet'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { cn } from '../lib/cn'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function AppShell() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={cn(
          'sticky top-0 z-50 border-b border-transparent bg-background/95 transition-[background,border,box-shadow]',
          scrolled &&
            'border-border/70 bg-background/98 shadow-[0_12px_32px_rgba(15,15,15,0.08)] backdrop-blur-sm',
        )}
      >
        <Container className="flex h-[4.5rem] items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary">
            <img
              src="/branding/rigro-logo.svg"
              alt="Rigro logo"
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu className="gap-10">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'group relative px-1 text-[0.95rem] font-medium tracking-[0.08em] text-muted-foreground transition-all duration-200',
                      'after:absolute after:-bottom-3 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-primary after:opacity-0 after:transition-all after:duration-300 after:content-[\'\']',
                      isActive
                        ? 'text-foreground after:w-full after:opacity-100'
                        : 'hover:text-foreground hover:after:w-full hover:after:opacity-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </NavigationMenu>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full border border-border/60 bg-card/80 text-foreground hover:border-border hover:bg-card"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <AlignJustify className="h-5 w-5" />
          </Button>
        </Container>
        <Sheet data-open={mobileOpen ? 'true' : 'false'} role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-background shadow-lg">
            <div className="flex items-center justify-between border-b border-border/80 px-6 py-4">
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
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md px-3 py-2 text-base font-medium transition-all duration-200',
                      isActive
                        ? 'bg-secondary/70 text-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </Sheet>
      </header>
      <main className="flex-1">
        <Container className="py-16">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
