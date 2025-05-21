"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ComponentType<any>
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export const NavBar = ({ items, className }: NavBarProps) => {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Créer une fonction throttle pour limiter la fréquence d'exécution
    const throttle = (func: Function, delay: number) => {
      let lastCall = 0;
      return (...args: any[]) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
      };
    };

    const handleScroll = throttle(() => {
      // Ajouter un offset pour déclencher le changement un peu avant d'atteindre la section
      // L'offset est plus important sur mobile pour une meilleure expérience utilisateur
      const offset = isMobile ? window.innerHeight * 0.2 : window.innerHeight * 0.4;
      const scrollPosition = window.scrollY + offset;
      
      // Récupérer les références de toutes les sections
      const sectionElements = items
        .map(item => {
          const elementId = item.url.startsWith('#') ? item.url.substring(1) : item.url;
          const element = document.getElementById(elementId);
          if (!element) return null;
          
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = rect.bottom + window.scrollY;
          
          return {
            name: item.name,
            top,
            bottom,
            height: bottom - top
          };
        })
        .filter(Boolean) as Array<{name: string, top: number, bottom: number, height: number}>;
      
      // Si aucune section n'est trouvée, ne rien faire
      if (sectionElements.length === 0) return;
      
      // Déterminer quelle section est actuellement visible
      // Privilégier les sections qui occupent plus d'espace dans la fenêtre
      let currentSection = sectionElements[0];
      let maxVisibleHeight = 0;
      
      for (const section of sectionElements) {
        const visibleTop = Math.max(section.top, window.scrollY);
        const visibleBottom = Math.min(section.bottom, window.scrollY + window.innerHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Si la section est la première ou occupe plus d'espace visible que la précédente
        if (visibleHeight > maxVisibleHeight || (scrollPosition >= section.top && scrollPosition < section.bottom)) {
          maxVisibleHeight = visibleHeight;
          currentSection = section;
        }
      }
      
      // Si nous sommes au début de la page, activer la première section
      if (window.scrollY < 100) {
        setActiveTab(items[0].name);
        return;
      }
      
      // Si nous sommes à la fin de la page, activer la dernière section
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
        setActiveTab(items[items.length - 1].name);
        return;
      }
      
      setActiveTab(currentSection.name);
    }, 100); // Throttle à 100ms pour de meilleures performances
    
    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener("scroll", handleScroll);
    // Exécuter une première fois pour définir l'onglet actif initial
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, isMobile]);

  const handleScrollTo = (url: string, name: string) => {
    setActiveTab(name)
    
    if (url.startsWith('#')) {
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 w-auto max-w-4xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg whitespace-nowrap">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault()
                handleScrollTo(item.url, item.name)
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        
        <Link
          href="https://cal.com/romain-auroux-6dlf0l/appel-decouverte-velvet-ia"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
            "text-foreground/80 hover:text-primary"
          )}
        >
          <span className="hidden md:inline">Prendre rendez-vous</span>
          <span className="md:hidden">RDV</span>
        </Link>
      </div>
    </div>
  )
} 