"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'
import { Home, Lightbulb, ArrowRight, Briefcase, HelpCircle } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', url: '#hero', icon: Home },
    { name: 'Fonctionnalités', url: '#features', icon: Lightbulb },
    { name: 'Processus', url: '#process', icon: ArrowRight },
    { name: 'Industries', url: '#industries', icon: Briefcase }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-40 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 dark:bg-card/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Velvet IA IU</span>
          </Link>
        </motion.div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
      
      {/* Utilisation du nouveau NavBar */}
      <NavBar items={navItems} className="sm:top-10" />
    </header>
  )
}

export default Header 