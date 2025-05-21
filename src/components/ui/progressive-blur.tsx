"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  direction: 'left' | 'right'
  blurIntensity?: number
}

export function ProgressiveBlur({
  className,
  direction = 'left',
  blurIntensity = 1,
  ...props
}: ProgressiveBlurProps) {
  return (
    <div
      className={cn('absolute h-full w-full', className)}
      {...props}
      style={{
        background: direction === 'left'
          ? `linear-gradient(to right, rgba(var(--background-rgb), ${blurIntensity}) 0%, rgba(var(--background-rgb), 0) 100%)`
          : `linear-gradient(to left, rgba(var(--background-rgb), ${blurIntensity}) 0%, rgba(var(--background-rgb), 0) 100%)`,
      }}
    />
  )
} 