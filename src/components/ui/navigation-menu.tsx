import * as React from 'react'
import { cn } from '../../lib/cn'

export function NavigationMenu({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn('flex items-center gap-4', className)} {...props} />
}


