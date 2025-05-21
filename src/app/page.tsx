"use client";

import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import NavBarDemo from '@/components/NavBarDemo'
import TimelineProcess from '@/components/TimelineProcess'
import { TrustBar } from '@/components/ui/TrustBar'
import CallToActionIA from '@/components/CallToActionIA'
import React, { useRef, lazy, Suspense } from 'react'

// Lazy load les composants non-critiques
const TestimonialsSectionDemo = lazy(() => import('@/components/blocks/TestimonialsSectionDemo').then(mod => ({ default: mod.TestimonialsSectionDemo })))
const IndustriesSectionDemo = lazy(() => import('@/components/blocks/IndustriesSectionDemo').then(mod => ({ default: mod.IndustriesSectionDemo })))
const FeaturesSectionWithCardGradientDemo = lazy(() => import('@/components/blocks/feature-section-with-card-gradient').then(mod => ({ default: mod.FeaturesSectionWithCardGradientDemo })))
const VoiceAgentsSectionDemo = lazy(() => import('@/components/blocks/VoiceAgentsSection'))
const CalendarSection = lazy(() => import('@/components/CalendarSection'))

// Composant de chargement simple
const LoadingFallback = () => <div className="w-full py-12 flex justify-center items-center"><div className="animate-pulse h-12 w-12 rounded-full bg-primary/20"></div></div>

// Comme il s'agit d'un composant client, nous ne pouvons pas définir les métadonnées ici
// export const metadata: Metadata = {
//   title: 'Velvet IA IU | Accueil',
//   description: 'Bienvenue sur Velvet IA IU, votre partenaire en intelligence artificielle innovante.',
// }

export default function Home() {
  const industriesRef = useRef<HTMLElement>(null)
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <NavBarDemo />
      <Hero />
      <Features />
      <CallToActionIA />
      <TrustBar />
      <TimelineProcess endRef={industriesRef} />
      
      <Suspense fallback={<LoadingFallback />}>
        <IndustriesSectionDemo ref={industriesRef} />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <VoiceAgentsSectionDemo />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <FeaturesSectionWithCardGradientDemo />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSectionDemo />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <CalendarSection />
      </Suspense>
      
      <Footer />
    </main>
  )
} 