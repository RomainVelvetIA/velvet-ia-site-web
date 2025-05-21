"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CalendlySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section id="calendly" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">Planifiez une démo personnalisée</h2>
          <p className="section-text text-xl">
            Réservez un créneau avec l'un de nos experts pour découvrir comment Velvet IA IU peut répondre à vos besoins spécifiques.
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-50 rounded-2xl p-6 md:p-8 shadow-md max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Pourquoi nous rencontrer ?</h3>
              <ul className="space-y-4">
                {[
                  "Découvrez nos solutions d'IA adaptées à votre secteur",
                  "Obtenez une analyse personnalisée de vos besoins",
                  "Discutez avec nos experts techniques",
                  "Explorez les cas d'usage concrets pour votre entreprise"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="section-text">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="font-medium mb-2">Nos disponibilités :</h4>
                <p className="section-text">Lundi - Vendredi, 9h - 18h</p>
                <p className="section-text">Durée approximative : 30 minutes</p>
              </div>
            </div>

            <div className="md:w-1/2 bg-white rounded-xl p-4 shadow-sm">
              {/* Ici, vous intégreriez Calendly */}
              <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Intégration Calendly</h3>
                  <p className="section-text mb-4">Widget de réservation ici</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Réserver maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CalendlySection 