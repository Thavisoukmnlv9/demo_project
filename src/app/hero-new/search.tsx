'use client'


import { SearchIcon } from 'lucide-react'
import { cn } from '../lib/utils'
import { Input } from '@/theme/element'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Search({ className, ...props }: SearchProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-8" />
    </div>
  )
}

