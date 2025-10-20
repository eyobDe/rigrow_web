import * as React from 'react'
import { cn } from '../../lib/cn'

export function Sheet({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 pointer-events-none opacity-0 transition-opacity duration-300 data-[open=true]:pointer-events-auto data-[open=true]:opacity-100',
        className,
      )}
      {...props}
    />
  )
}


