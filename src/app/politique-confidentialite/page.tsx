"use client"

import { Metadata } from 'next'
import NavBarDemo from '@/components/NavBarDemo'
import Footer from '@/components/Footer'

export default function PolitiqueConfidentialite() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <NavBarDemo />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Politique de Confidentialité</h1>
          
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <p className="lead">
              Chez Velvet IA, nous accordons une grande importance à la protection de vos données personnelles. 
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
            </p>
            
            <h2>Collecte des données personnelles</h2>
            <p>
              Nous collectons les données personnelles suivantes :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l'entreprise</li>
              <li>Fonction professionnelle</li>
              <li>Informations de connexion et d'utilisation de notre site</li>
            </ul>
            
            <h2>Finalités du traitement des données</h2>
            <p>
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul>
              <li>Gestion de la relation client</li>
              <li>Réponse à vos demandes de contact ou d'information</li>
              <li>Envoi de communications commerciales (avec votre consentement)</li>
              <li>Amélioration de nos services et de notre site web</li>
              <li>Respect de nos obligations légales</li>
            </ul>
            
            <h2>Base légale du traitement</h2>
            <p>
              Le traitement de vos données personnelles est fondé sur :
            </p>
            <ul>
              <li>Votre consentement</li>
              <li>L'exécution d'un contrat auquel vous êtes partie</li>
              <li>Notre intérêt légitime à développer et promouvoir nos activités</li>
              <li>Le respect de nos obligations légales</li>
            </ul>
            
            <h2>Destinataires des données</h2>
            <p>
              Vos données personnelles sont destinées à notre équipe interne et ne sont pas transmises à des tiers, sauf :
            </p>
            <ul>
              <li>À nos prestataires de services techniques (hébergement, CRM, etc.)</li>
              <li>Si la loi nous y oblige</li>
            </ul>
            
            <h2>Durée de conservation</h2>
            <p>
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, 
              et conformément aux exigences légales et réglementaires.
            </p>
            
            <h2>Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul>
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
              <li>Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé</li>
            </ul>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : romain@velvet-ia.com
            </p>
            
            <h2>Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation. 
              Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur utilisation.
            </p>
            
            <h2>Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
              contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
            
            <h2>Modification de la politique de confidentialité</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications prendront effet dès leur publication sur notre site.
            </p>
            
            <h2>Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse suivante :<br />
              Email : romain@velvet-ia.com
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