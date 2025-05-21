import { cn } from "@/lib/utils";
import {
  IconBuildingSkyscraper,
  IconStethoscope,
  IconScale,
  IconCar,
  IconBulb,
  IconBuildingStore
} from "@tabler/icons-react";

export function IndustriesSection() {
  const industries = [
    {
      title: "Immobilier",
      description:
        "Solutions IA pour optimiser la gestion immobilière et améliorer l'expérience client.",
      icon: <IconBuildingSkyscraper className="w-8 h-8" />,
    },
    {
      title: "Santé",
      description:
        "Automatisation des processus administratifs pour permettre aux professionnels de santé de se concentrer sur leurs patients.",
      icon: <IconStethoscope className="w-8 h-8" />,
    },
    {
      title: "Études notariales",
      description:
        "Outils intelligents pour la gestion documentaire et l'analyse juridique avancée.",
      icon: <IconScale className="w-8 h-8" />,
    },
    {
      title: "Concessions automobiles",
      description: 
        "Transformation digitale pour optimiser les ventes et améliorer le service client.",
      icon: <IconCar className="w-8 h-8" />,
    },
    {
      title: "Agences de publicité / Infopreneurs",
      description: 
        "Automatisation du marketing et analyse prédictive pour des campagnes plus efficaces.",
      icon: <IconBulb className="w-8 h-8" />,
    },
    {
      title: "Hôtels et restaurants",
      description:
        "Solutions pour simplifier les réservations et personnaliser l'expérience client.",
      icon: <IconBuildingStore className="w-8 h-8" />,
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 py-10 mx-auto">
        {industries.map((industry, index) => (
          <Industry key={industry.title} {...industry} index={index} />
        ))}
      </div>
    </div>
  );
}

const Industry = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className="flex flex-col border rounded-md shadow-sm p-6 relative group hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 group-hover:h-8 transition-all duration-300 origin-center" />
        <span className="pl-3 inline-block text-neutral-800 dark:text-neutral-100 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 pl-3">
        {description}
      </p>
    </div>
  );
}; 