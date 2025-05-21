"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItemProps {
  question: string
  answer: string
  value: string
}

const faqItems: FAQItemProps[] = [
  {
    question: "Comment fonctionnent les agents vocaux de Velvet IA ?",
    answer: "Nos agents vocaux IA sont développés sur-mesure pour chaque entreprise. Ils utilisent les technologies d'IA les plus avancées pour automatiser vos appels entrants (réception) et sortants (qualification de leads). Ils s'intègrent facilement à vos outils existants comme CRM, calendriers ou Ads Manager pour une expérience fluide et efficace.",
    value: "item-1"
  },
  {
    question: "Quel est le modèle de facturation de Velvet IA ?",
    answer: "Notre modèle de facturation est simple et transparent : un frais initial de développement abordable (basé sur le volume d'appels et la complexité de votre projet), puis une facturation à la minute d'utilisation. Pas d'engagement contractuel, pas de frais cachés. Vous bénéficiez également de 100 minutes d'appels gratuites pour démarrer et d'un prototype d'essai 24h gratuit.",
    value: "item-2"
  },
  {
    question: "Quelle garantie offrez-vous sur les performances ?",
    answer: "Nous offrons une garantie exceptionnelle : 90% d'appels automatisés sous 30 jours ou remboursement intégral du frais de développement. Cette garantie témoigne de notre confiance dans la qualité et l'efficacité de nos solutions IA sur-mesure.",
    value: "item-3"
  },
  {
    question: "Combien de temps faut-il pour développer un agent vocal ?",
    answer: "Le délai moyen de livraison est de 2 semaines. Notre processus comprend un appel découverte initial, un audit approfondi avec démonstration, une phase de développement et de tests, puis l'implémentation finale. Pendant toute cette période, vous avez accès à un prototype pour tester et valider la solution.",
    value: "item-4"
  },
  {
    question: "Comment vos agents vocaux IA se comparent-ils aux humains ?",
    answer: "Nos agents vocaux IA offrent une disponibilité 24/7, sans fatigue ni variation de qualité. Contrairement aux humains, ils peuvent gérer des volumes importants d'appels simultanément, suivent systématiquement vos scripts et processus, et collectent des données précises sur chaque interaction. Les clients apprécient leur efficacité et leur cohérence, tout en bénéficiant d'interactions naturelles et personnalisées.",
    value: "item-5"
  },
  {
    question: "Mes données sont-elles sécurisées avec Velvet IA ?",
    answer: "Absolument. Nous respectons strictement les règles RGPD et assurons un hébergement sécurisé de vos données en Europe. La confidentialité et la sécurité des données de nos clients sont des priorités absolues pour Velvet IA.",
    value: "item-6"
  }
]

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section id="faq" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">Questions fréquentes</h2>
          <p className="section-text text-xl max-w-3xl mx-auto">
            Découvrez comment Velvet IA peut transformer votre gestion d'appels et automatiser vos tâches chronophages.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem value={item.value} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-lg py-4 hover:no-underline hover:text-blue-600 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="section-text pb-4 pt-1">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="section-text mb-6">Une autre question ? Besoin d'une démo personnalisée ?</p>
          <a 
            href="https://cal.com/romain-auroux-6dlf0l/appel-decouverte-velvet-ia" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Réservez un appel découverte
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 