import * as React from 'react'
import { cn } from '../../lib/cn'

export function Sheet({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('fixed inset-0 z-50 hidden data-[open=true]:block', className)} {...props} />
}


