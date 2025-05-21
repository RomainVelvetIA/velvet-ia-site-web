"use client"

import { Metadata } from 'next'
import NavBarDemo from '@/components/NavBarDemo'
import Footer from '@/components/Footer'

export default function MentionsLegales() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <NavBarDemo />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Mentions Légales</h1>
          
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <h2>Informations sur l'entreprise</h2>
            <p>
              Velvet IA<br />
              Adresse : 123 Avenue de l'Innovation, 75000 Paris<br />
              Email : romain@velvet-ia.com<br />
              SIRET : 12345678900012<br />
              Capital social : 10 000 €
            </p>
            
            <h2>Directeur de la publication</h2>
            <p>
              Romain Auroux<br />
              Email : romain@velvet-ia.com
            </p>
            
            <h2>Hébergement du site</h2>
            <p>
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>
            
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant le site Velvet IA (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) sont la propriété exclusive de Velvet IA ou font l'objet d'une autorisation d'utilisation.
            </p>
            <p>
              Ces éléments sont protégés par les lois relatives à la propriété intellectuelle et notamment le droit d'auteur. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie des éléments du site, sans l'accord écrit préalable de Velvet IA, est strictement interdite et constituerait un acte de contrefaçon sanctionné par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            
            <h2>Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d'autres sites Internet. Velvet IA ne peut être tenu responsable du contenu de ces sites externes ou de tout dommage résultant de l'utilisation de ces sites.
            </p>
            
            <h2>Modification des mentions légales</h2>
            <p>
              Velvet IA se réserve le droit de modifier les présentes mentions légales à tout moment. L'utilisateur est invité à les consulter régulièrement.
            </p>
            
            <h2>Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            
            <p className="mt-8 text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 