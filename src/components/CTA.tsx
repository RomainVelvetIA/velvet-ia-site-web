"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ctaRef, { once: false, amount: 0.4 })

  return (
    <section className="py-20 bg-primary/90 dark:bg-primary/80 relative overflow-hidden" ref={ctaRef}>
      {/* Formes décoratives */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary rounded-full opacity-10 transform -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <motion.h2 
            className="section-title mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Prêt à transformer votre entreprise avec l'IA ?
          </motion.h2>
          
          <motion.p 
            className="section-text text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Rejoignez les entreprises innovantes qui utilisent déjà Velvet IA IU pour optimiser leurs processus et créer de nouvelles opportunités.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://cal.com/romain-auroux-6dlf0l/appel-decouverte-velvet-ia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-card text-primary hover:bg-card/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Planifier une démo
            </motion.a>
            
            <motion.a
              href="#faq"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              En savoir plus
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg font-medium">Ils nous font confiance :</p>
            {/* Logos clients fictifs */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-10 bg-card/20 rounded flex items-center justify-center">
                <div className="text-primary-foreground/90 font-semibold">Client {i}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA 