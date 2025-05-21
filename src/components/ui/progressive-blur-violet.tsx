"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressiveBlurVioletProps extends React.HTMLAttributes<HTMLDivElement> {
  direction: 'left' | 'right'
  blurIntensity?: number
}

export function ProgressiveBlurViolet({
  className,
  direction = 'left',
  blurIntensity = 1,
  ...props
}: ProgressiveBlurVioletProps) {
  return (
    <div
      className={cn('absolute h-full w-full', className)}
      {...props}
      style={{
        background: direction === 'left'
          ? `linear-gradient(to right, rgba(129, 73, 190, ${blurIntensity * 0.3}) 0%, rgba(129, 73, 190, 0) 100%)`
          : `linear-gradient(to left, rgba(129, 73, 190, ${blurIntensity * 0.3}) 0%, rgba(129, 73, 190, 0) 100%)`,
      }}
    />
  )
} 