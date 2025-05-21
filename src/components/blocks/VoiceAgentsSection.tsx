"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { PulseBeamsVioletDemo } from "@/components/ui/pulse-beams-violet-demo";
import { motion } from "framer-motion";

interface AgentFeature {
  title: string;
  description: string;
}

interface AgentType {
  title: string;
  subtitle: string;
  features: AgentFeature[];
}

export function VoiceAgentsSection() {
  const agentTypes: Record<"entrants" | "sortants", AgentType> = {
    entrants: {
      title: "Agents vocaux entrants",
      subtitle: "Automatisez la réception des appels",
      features: [
        {
          title: "Accueil téléphonique 24/7",
          description: "Votre agent IA répond à tous les appels sans interruption, même en dehors des heures d'ouverture"
        },
        {
          title: "Qualification des prospects",
          description: "Identifiez les besoins et l'intention du client dès le premier contact"
        },
        {
          title: "Prise de rendez-vous automatisée",
          description: "Synchronisation directe avec votre calendrier pour une gestion efficace des disponibilités"
        },
        {
          title: "Réponses aux questions fréquentes",
          description: "L'agent traite les demandes récurrentes pour libérer votre équipe des tâches répétitives"
        },
        {
          title: "Transfert contextuel vers vos équipes",
          description: "Pour les cas complexes, l'agent transfère l'appel avec un résumé complet de la conversation"
        },
        {
          title: "Suivi des conversations",
          description: "Toutes les interactions sont enregistrées et analysées pour améliorer continuellement le service"
        }
      ]
    },
    sortants: {
      title: "Agents vocaux sortants",
      subtitle: "Automatisez la qualification des leads et les relances clients",
      features: [
        {
          title: "Prospection à grande échelle",
          description: "Contactez des centaines de prospects simultanément pour maximiser votre portée"
        },
        {
          title: "Relance de clients",
          description: "Suivez systématiquement les clients inactifs ou les dossiers en attente"
        },
        {
          title: "Confirmation de rendez-vous",
          description: "Réduisez les absences en confirmant automatiquement les rendez-vous à l'avance"
        },
        {
          title: "Enquêtes de satisfaction",
          description: "Recueillez des retours précieux sur l'expérience client de manière non intrusive"
        },
        {
          title: "Campagnes marketing ciblées",
          description: "Présentez vos offres spéciales ou nouveaux produits aux segments pertinents"
        },
        {
          title: "Analyse des résultats",
          description: "Obtenez des insights détaillés sur la performance de vos campagnes d'appels sortants"
        }
      ]
    }
  };

  // Variants pour les animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="voice-agents" className="w-full pt-0 pb-12 md:pt-4 md:pb-24 lg:pt-4 lg:pb-32 bg-black relative overflow-hidden">
      <PulseBeamsVioletDemo />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="section-title md:text-4xl text-xl lg:text-5xl">Nos agents vocaux IA</h2>
          <p className="max-w-[800px] text-gray-500 text-xs md:text-sm lg:text-base dark:text-gray-400">
            Nos agents vocaux IA avancés répondent à tous vos besoins de communication téléphonique, 
            qu'il s'agisse de recevoir ou d'émettre des appels, avec une qualité et une efficacité inégalées.
          </p>
        </div>

        {/* Deux colonnes avec une ligne verticale au milieu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
          {/* Ligne verticale qui démarque le milieu */}
          <div className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/10 via-purple-500/50 to-purple-500/10"></div>
          
          {/* Colonne gauche - Agents vocaux entrants */}
          <div className="px-4">
            <div className="text-center mb-8">
              <h3 className="section-title text-xl md:text-2xl lg:text-3xl font-sans text-gray-300 bg-clip-text">
                {agentTypes.entrants.title}
              </h3>
              <p className="bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 bg-clip-text text-transparent text-base md:text-lg font-medium font-sans">
                {agentTypes.entrants.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {agentTypes.entrants.features.map((feature, index) => (
                <motion.div
                  key={`entrants-feature-${index}`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className="relative transition-all duration-300 group"
                >
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={50}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-5 rounded-md overflow-hidden z-10 h-[200px] flex flex-col">
                    <p className="text-base font-bold text-white relative z-20 mb-2 font-sans">
                      {feature.title}
                    </p>
                    <p className="text-neutral-400 text-sm font-normal relative z-20 flex-grow font-sans">
                      {feature.description}
                    </p>
                    <div className="absolute top-0 left-0 w-full h-full bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Colonne droite - Agents vocaux sortants */}
          <div className="px-4">
            <div className="text-center mb-8">
              <h3 className="section-title text-xl md:text-2xl lg:text-3xl font-sans text-gray-300 bg-clip-text">
                {agentTypes.sortants.title}
              </h3>
              <p className="bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 bg-clip-text text-transparent text-base md:text-lg font-medium font-sans">
                {agentTypes.sortants.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {agentTypes.sortants.features.map((feature, index) => (
                <motion.div
                  key={`sortants-feature-${index}`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className="relative transition-all duration-300 group"
                >
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={50}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-5 rounded-md overflow-hidden z-10 h-[200px] flex flex-col">
                    <p className="text-base font-bold text-white relative z-20 mb-2 font-sans">
                      {feature.title}
                    </p>
                    <p className="text-neutral-400 text-sm font-normal relative z-20 flex-grow font-sans">
                      {feature.description}
                    </p>
                    <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VoiceAgentsSectionDemo() {
  return (
    <div className="w-full bg-black">
      <VoiceAgentsSection />
    </div>
  );
} 