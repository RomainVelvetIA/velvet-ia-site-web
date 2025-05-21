"use client"

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'left' | 'right'
  duration?: number
  gap?: number
}

export function InfiniteSlider({
  children,
  className,
  direction = 'left',
  duration = 20,
  gap = 16,
  ...props
}: InfiniteSliderProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    addAnimation()
    
    // Réinitialiser l'animation en cas de redimensionnement
    window.addEventListener('resize', addAnimation)
    return () => {
      window.removeEventListener('resize', addAnimation)
    }
  }, [])

  const addAnimation = () => {
    if (!contentRef.current || !scrollerRef.current) return

    const scrollerContent = Array.from(contentRef.current.children)
    if (!scrollerContent.length) return

    // Supprimer les clones précédents pour éviter la duplication
    scrollerContent.forEach((item, index) => {
      if (index >= scrollerContent.length / 2) {
        item.remove()
      }
    })

    // Cloner les éléments pour le défilement infini
    const elementsToClone = Array.from(contentRef.current.children)
    elementsToClone.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (duplicatedItem instanceof HTMLElement) {
        duplicatedItem.setAttribute('aria-hidden', 'true')
      }
      contentRef.current?.appendChild(duplicatedItem)
    })

    // Configurer l'animation avec la vitesse et direction appropriées
    const directionValue = direction === 'left' ? '-' : '+'
    scrollerRef.current.setAttribute(
      'style',
      `--gap: ${gap}px; --duration: ${duration}s; --direction: ${directionValue}`
    )
    
    // Force l'application de l'animation en réinitialisant la classe
    if (contentRef.current) {
      contentRef.current.style.animation = 'none'
      // Force un reflow
      void contentRef.current.offsetWidth
      // Réapplique l'animation
      contentRef.current.style.animation = `scroll ${duration}s linear infinite`
    }
  }

  return (
    <div
      ref={scrollerRef}
      className={cn(
        'scroller relative flex max-w-full overflow-hidden',
        className
      )}
      {...props}
    >
      <div
        ref={contentRef}
        className={cn('flex animate-scroll items-center gap-[var(--gap)] hover:pause-animation', {
          'flex-nowrap': true,
        })}
        style={{ 
          paddingLeft: `${gap}px`, 
          paddingRight: `${gap}px`,
          animation: `scroll ${duration}s linear infinite`
        }}
      >
        {children}
      </div>
    </div>
  )
} 