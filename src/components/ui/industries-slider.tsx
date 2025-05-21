"use client";

import React from "react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import {
  IconBuildingSkyscraper,
  IconStethoscope,
  IconScale,
  IconCar,
  IconBulb,
  IconBuildingStore,
  IconBriefcase,
  IconUsers,
  IconHeadset,
  IconBuildingBank
} from "@tabler/icons-react";

// Définition des industries avec leurs icônes et descriptions
const industries = [
  {
    id: "immobilier",
    title: "Immobilier",
    description: "Prise de rendez-vous pour des visites et relances des bases de données",
    icon: IconBuildingSkyscraper,
  },
  {
    id: "sante",
    title: "Santé",
    description: "Prise de rendez-vous, modifications des rendez-vous, rappels des visites",
    icon: IconStethoscope,
  },
  {
    id: "juridique",
    title: "Juridique",
    description: "Qualification de leads et planification des consultations",
    icon: IconScale,
  },
  {
    id: "automobile",
    title: "Automobile",
    description: "Prise de rendez-vous pour des essais et suivi des clients",
    icon: IconCar,
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Qualification des prospects et relance des clients potentiels",
    icon: IconBulb,
  },
  {
    id: "hotellerie",
    title: "Hôtellerie",
    description: "Gestion des réservations et personnalisation des séjours",
    icon: IconBuildingStore,
  },
  {
    id: "assurance",
    title: "Assurance",
    description: "Qualification des leads et prises de rendez-vous pour des devis",
    icon: IconBriefcase,
  },
  {
    id: "rh",
    title: "Ressources Humaines",
    description: "Pré-qualification des candidats et organisation des entretiens",
    icon: IconUsers,
  },
  {
    id: "telecom",
    title: "Télécommunications",
    description: "Support client et résolution des demandes techniques",
    icon: IconHeadset,
  },
  {
    id: "finance",
    title: "Finance",
    description: "Planification des rendez-vous de conseil et suivi client",
    icon: IconBuildingBank,
  },
];

export function IndustriesSlider() {
  return (
    <div className="relative w-full h-auto overflow-hidden mt-8">
      <div className="animate-marquee-container flex w-full overflow-hidden">
        <div 
          className="flex animate-marquee flex-nowrap gap-6 md:gap-8 hover:pause-animation" 
          style={{ 
            animationDuration: "120s",
            willChange: "transform",
            minWidth: "100%"
          }}
        >
          {[...Array(3)].map((_, setIndex) => (
            industries.map(({ id, title, description, icon: Icon }) => (
              <IndustryCard 
                key={`${setIndex}-${id}`}
                title={title}
                description={description}
                icon={<Icon className="w-6 h-6" />}
              />
            ))
          ))}
        </div>
      </div>
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 h-full w-[150px] z-10"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 right-0 h-full w-[150px] z-10"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const IndustryCard = ({ title, description, icon }: IndustryCardProps) => {
  return (
    <div className="flex flex-col bg-black text-white rounded-lg p-4 max-w-[280px] min-w-[280px] h-[130px] transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-3">
        <div className="flex items-center justify-center bg-gray-800 rounded-md p-2.5 text-blue-400">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">{title}</h3>
          <p className="text-xs text-gray-300 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}; 