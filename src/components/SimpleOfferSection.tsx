"use client"

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const offerItems = [
  {
    id: "item-1",
    title: "Développement d'un assistant vocal sur mesure",
    description: "Notre équipe conçoit un assistant vocal adapté à vos besoins spécifiques."
  },
  {
    id: "item-2",
    title: "Essai gratuit d'un prototype",
    description: "Testez notre solution sans engagement avec un prototype fonctionnel."
  },
  {
    id: "item-3",
    title: "Assistance technique 7j/7",
    description: "Notre équipe de support est disponible tous les jours."
  }
]

export default function SimpleOfferSection() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-lg border border-purple-400/30 bg-gradient-to-r from-purple-900/10 to-purple-400/10 mb-6 inline-block"
          >
            <p className="text-sm font-medium text-gray-200">
              RÉSERVEZ VOTRE AUDIT GRATUIT MAINTENANT - PLACES LIMITÉES !
            </p>
            <p className="text-xs text-gray-300 mt-1">
              Nous n'acceptons que 5 nouveaux collaborateurs chaque mois
            </p>
          </motion.div>
          
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mb-2">
            L'offre Velvet IA
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {offerItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="px-4 py-3 text-base font-semibold bg-gradient-to-r from-gray-800 to-gray-900">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                    {item.title}
                  </span>
                </div>
                <div className="px-4 py-3 bg-gradient-to-b from-gray-900/5 to-transparent flex-grow">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 