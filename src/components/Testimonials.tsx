"use client"

import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee'

const testimonials = [
  {
    text: "Depuis que nous utilisons l'assistant vocal de Velvet IA, la prise de rendez-vous pour les visites s'est complètement fluidifiée. On économise en moyenne 1h30 par jour, ce qui nous permet de nous concentrer sur l'essentiel : vendre plus rapidement. L'intégration a été super simple et l'agent est bluffant de naturel.",
    author: {
      name: "Camille B.",
      handle: "Responsable d'agence immobilière",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    industry: "Immobilier",
    icon: "🏡"
  },
  {
    text: "Nous avions souvent du mal à confirmer les rendez-vous avec nos patients. Avec Velvet IA, nos relances sont désormais automatisées et beaucoup plus efficaces. Nous avons constaté un taux de show up en hausse de 15%, ce qui a un impact direct sur notre organisation et nos résultats.",
    author: {
      name: "Dr. Nicolas M.",
      handle: "Directeur d'un centre médical",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    industry: "Santé",
    icon: "🏥"
  },
  {
    text: "Nous étions sceptiques au départ, mais Velvet IA a su nous accompagner avec un processus d'implémentation extrêmement simple. Résultat : en moins d'une semaine, notre secrétariat a gagné plus de 2 heures par jour sur les appels entrants et la gestion des rendez-vous.",
    author: {
      name: "Marie L.",
      handle: "Notaire associée",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    industry: "Notaires",
    icon: "⚖️"
  },
  {
    text: "Velvet IA a été un vrai moteur pour notre concession. Pour un coût maîtrisé, nous avons enregistré +3500€ de chiffre d'affaires supplémentaire rien que sur le mois de février 2025, grâce à une gestion plus réactive de nos leads. Le retour sur investissement est juste excellent.",
    author: {
      name: "Alexandre D.",
      handle: "Directeur commercial, Concession automobile",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    industry: "Concession automobile",
    icon: "🚗"
  },
  {
    text: "Le système d'assistant vocal développé par Velvet IA a révolutionné notre qualification de leads. Nous avons observé une augmentation de 32% de nos taux de conversion en appels de vente. C'est simple : l'agent filtre, qualifie et planifie mieux que n'importe quel humain sur la première interaction.",
    author: {
      name: "Laura F.",
      handle: "CEO d'une agence spécialisée en Meta Ads",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    industry: "Agences de publicité Meta Ads",
    icon: "📣"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/20 dark:bg-card">
      <TestimonialsSection 
        title="Nos agents vocaux ont transformés leur quotidien"
        description=""
        testimonials={testimonials}
        titleClassName="section-title"
      />
    </section>
  )
}

export default Testimonials 