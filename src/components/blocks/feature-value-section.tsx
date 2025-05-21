import { FeatureSteps } from "@/components/ui/feature-steps"

const features = [
  { 
    step: 'Étape 1', 
    title: 'Développement sur mesure d\'un agent vocal',
    content: 'Notre équipe développe un agent vocal intelligent adapté spécifiquement à vos besoins et à votre domaine d\'activité.', 
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Étape 2',
    title: 'Assistance technique offerte 7j/7',
    content: 'Bénéficiez d\'une assistance technique disponible tous les jours de la semaine pour répondre à toutes vos questions et résoudre rapidement vos problèmes.',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Étape 3',
    title: 'Garantie : Automatisation 100% appels en 30 jours',
    content: 'Nous nous engageons à automatiser 100% de vos appels dans un délai de 30 jours, sinon nous vous remboursons intégralement les frais engagés.',
    image: 'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=2070&auto=format&fit=crop'
  },
]

export function FeatureValueSection() {
  return (
      <FeatureSteps 
        features={features}
        title="Notre proposition de valeur"
        autoPlayInterval={5000}
        imageHeight="h-[500px]"
      />
  )
} 