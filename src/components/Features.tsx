"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Box, Calendar, PieChart, BarChart3, Target } from "lucide-react"
import { cn } from "@/lib/utils"

import { GlowingEffect } from "@/components/ui/glowing-effect"

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={sectionRef}
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title mb-4"
            variants={itemVariants}
          >
            Nos services sur-mesure
          </motion.h2>
          <motion.p 
            className="section-text text-xl max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Automatisez les tâches chronophages et améliorez votre relation client avec des solutions IA abordables et efficaces
          </motion.p>
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4" />}
            title="Agents vocaux IA sur-mesure"
            description="Développés spécifiquement pour votre entreprise, nos agents vocaux automatisent vos appels entrants et sortants en répondant à vos besoins concrets."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Calendar className="h-4 w-4" />}
            title="Intégrations complètes"
            description="Connectez facilement nos agents à vos CRM, calendriers, Ads Manager et autres outils métier pour une expérience fluide."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<BarChart3 className="h-4 w-4" />}
            title="Dashboard de suivi personnalisé"
            description="Accédez à un tableau de bord personnalisé pour suivre les performances de vos agents et analyser les conversations en temps réel."
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<PieChart className="h-4 w-4" />}
            title="Facturation à l'usage"
            description="Après un frais initial de développement abordable, payez uniquement à la minute d'utilisation, sans engagement ni frais cachés."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Target className="h-4 w-4" />}
            title="Automatisation de la prise de rendez-vous"
            description="Nos assistants vocaux AI sont capables de planifier, modifier ou annuler des rendez-vous automatiquement sans intervention humaine."
          />
        </ul>
      </div>
    </section>
  )
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="section-text">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Features 