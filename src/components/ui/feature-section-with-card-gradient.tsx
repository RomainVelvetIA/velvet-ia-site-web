import React from "react";
import { useId } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FeaturesSectionWithCardGradient() {
  return (
    <div className="py-16 lg:py-28">
      <div className="relative w-full max-w-2xl mx-auto mb-16 -mt-24 group overflow-hidden">
        <div className="absolute inset-0 rounded-full bg-black/20 animate-pulse [animation-duration:3s]"></div>
        <Button 
          variant="secondary" 
          className="w-full relative py-3 px-6 text-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 bg-white/80 dark:bg-black/80 backdrop-blur-sm text-sm font-medium hover:bg-white dark:hover:bg-black/90 transition-all duration-300 z-10"
        >
          Nous n'acceptons volontairement que 5 clients par mois
        </Button>
        <GlowingEffect 
          spread={60} 
          glow={true} 
          disabled={false} 
          proximity={128} 
          inactiveZone={0.01} 
          borderWidth={2}
          className="rounded-full"
        />
      </div>
      <h2 className="md:text-4xl text-2xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16">
        L'offre Velvet IA
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative transition-transform duration-300 hover:scale-[1.02] group p-1"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={5}
            />
            <div className="relative bg-black p-6 rounded-none overflow-hidden z-10 h-[320px] flex flex-col">
              <Grid size={20} />
              <p className="text-base font-bold text-white relative z-20">
                {feature.title}
              </p>
              <p className="text-gray-300 mt-4 text-base font-normal relative z-20 flex-grow">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Développement d'un assistant vocal IA sur mesure",
    description:
      "Nous développons de A à Z un assistant vocal qui correspond à vos besoins spécifiques",
  },
  {
    title: "Accès à un espace client personnalisé",
    description:
      "Nous vous donnons accès à un tableau de bord client personnalisé, vous permettant de suivre en direct les performances et conversations de votre assistant.",
  },
  {
    title: "Utilisation des modèles IA les plus poussés",
    description:
      "Nos solutions utilisent les meilleurs modèles IA accessibles assurant une solution toujours plus performante",
  },
  {
    title: "Intégration à vos outils et votre système",
    description:
      "Nous solutions s'intègrent dans votre système avec fluidité et sécurité.",
  },
  {
    title: "Essai gratuit d'un prototype + 100 minutes d'appels offertes",
    description:
      "Nous vous proposons d'essayer pendant 24h un prototype avant de passer dans la phase de développement.",
  },
  {
    title: "Assistance technique offerte 7j / 7 à vie",
    description:
      "Nous intervenons à tout moment si vous avez besoin de modifier ou changer des paramètres sur votre agent vocal.",
  },
  {
    title: "Garantie de 30 jours dans le cas où vous changez d'avis",
    description:
      "Nous vous laissons la liberté d'utiliser pendant 30 jours notre agent vocal. Si pour n'importe quelle raison vous décidez de ne pas l'implémenter, nous vous remboursons la totalité du frais de développement.",
  },
  {
    title: "Conformité RGPD et protection des données",
    description:
      "Toutes les données clients sont protégées et conformes aux dernières règlementations RGPD.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
} 