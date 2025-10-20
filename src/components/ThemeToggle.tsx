import { useEffect, useState } from 'react'
import { MoonStar, SunDim } from 'lucide-react'
import { cn } from '../lib/cn'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'rigrow-ui-theme'

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    const initialTheme = stored ?? 'light'
    setTheme(initialTheme)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [mounted, theme])

  const handleToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        'group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-card/80 text-foreground transition-all duration-300 hover:border-border hover:bg-card hover:text-primary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
      aria-label="Toggle theme"
    >
      <SunDim
        className={cn(
          'absolute h-[1.3rem] w-[1.3rem] rotate-0 scale-100 opacity-100 transition-all duration-300',
          theme === 'dark' && 'rotate-90 scale-0 opacity-0',
        )}
      />
      <MoonStar
        className={cn(
          'absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 opacity-0 transition-all duration-300',
          theme === 'dark' && 'rotate-0 scale-100 opacity-100',
        )}
      />
    </button>
  )
}
