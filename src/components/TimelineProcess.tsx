import Image from "next/image";
import React, { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import { User, ClipboardCheck, FileSearch, Target, Code, TrendingUp, BarChart4, Heart, TrendingDown, Star, PhoneCall, Clock, Zap, Headphones, Search, MessageSquare, Users, Brain, Settings, Mic, Link, RefreshCcw, Rocket } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion, useInView } from "framer-motion";

// Composant Card local minimal (shadcn style)
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`relative rounded-2xl border border-border bg-background p-6 shadow-sm overflow-hidden ${className ?? ''}`}>{children}</div>
);

// Composant avec bordure dégradée
const GradientBorderCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`relative rounded-2xl p-[2px] overflow-hidden ${className ?? ''} group transition-all duration-300`}>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative rounded-[14px] bg-black p-6 z-10 h-full backdrop-blur-sm text-white">
      {children}
    </div>
  </div>
);

// Composant FadeInView pour animer les éléments au scroll
const FadeInView: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = "" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface TimelineProcessProps {
  endRef?: React.RefObject<HTMLElement>;
}

const TimelineProcess: React.FC<TimelineProcessProps> = ({ endRef }) => {
  const data = [
    {
      title: "Compréhension & stratégie",
      content: (
        <div>
          <FadeInView>
            <p className="text-white font-semibold text-base mb-6 w-full">
              Tout commence par un audit rapide et gratuit de votre organisation actuelle : Qui sont vos clients, comment vous les gérez, quels problèmes rencontrent vos équipes, qu'est-ce que vous cherchez à obtenir avec l'IA, quels systèmes vous utilisez, etc.
              On identifie avec vous les points de friction et les opportunités d'implémentation des agents vocaux afin de vous aider à prendre la meilleure décision.
            </p>
          </FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FadeInView delay={1}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center h-[120px] group">
                  <Search className="w-10 h-10 text-primary mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold text-center text-sm text-foreground group-hover:text-primary transition-colors duration-300">Exploration</span>
                  <span className="text-xs text-muted-foreground text-center">Audit de vos processus</span>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={2}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center h-[120px] group">
                  <MessageSquare className="w-10 h-10 text-primary mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold text-center text-sm text-foreground group-hover:text-primary transition-colors duration-300">Analyse</span>
                  <span className="text-xs text-muted-foreground text-center">De vos besoins</span>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={3}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center h-[120px] group">
                  <Users className="w-10 h-10 text-primary mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold text-center text-sm text-foreground group-hover:text-primary transition-colors duration-300">Collaboration</span>
                  <span className="text-xs text-muted-foreground text-center">Travail d'équipe</span>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={4}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center h-[120px] group">
                  <Target className="w-10 h-10 text-primary mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold text-center text-sm text-foreground group-hover:text-primary transition-colors duration-300">Alignement</span>
                  <span className="text-xs text-muted-foreground text-center">Stratégie sur-mesure</span>
                </div>
              </GradientBorderCard>
            </FadeInView>
          </div>
        </div>
      ),
    },
    {
      title: "Création & personnalisation",
      content: (
        <div>
          <FadeInView>
            <p className="text-white font-semibold text-base mb-6 w-full">
              Votre agent vocal est entièrement conçu selon vos objectifs : ton de voix, script, questions de qualification, outils connectés, etc.
              On vous propose une version personnalisée qui parle comme un humain, s'intègre à vos outils, et suit un parcours d'appel optimisé pour convertir.
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FadeInView delay={1}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center min-h-[160px] group">
                  <Brain className="w-10 h-10 text-primary mb-3 group-hover:text-blue-400 transition-all duration-300" />
                  <h3 className="font-semibold text-center text-base text-foreground mb-1 group-hover:text-blue-300 transform transition-all duration-300">Intelligence</h3>
                  <p className="text-xs text-muted-foreground text-center group-hover:opacity-90">
                    Technologie IA avancée adaptée à votre secteur
                  </p>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={2}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center min-h-[160px] group">
                  <Settings className="w-10 h-10 text-primary mb-3 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-45" />
                  <h3 className="font-semibold text-center text-base text-foreground mb-1 group-hover:text-blue-300 transform transition-all duration-300">Personnalisation</h3>
                  <p className="text-xs text-muted-foreground text-center group-hover:opacity-90">
                    Configuration technique adaptée à vos besoins spécifiques
                  </p>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={3}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center min-h-[160px] group">
                  <Mic className="w-10 h-10 text-primary mb-3 group-hover:text-blue-400 transition-all duration-300" />
                  <h3 className="font-semibold text-center text-base text-foreground mb-1 group-hover:text-blue-300 transform transition-all duration-300">Voix naturelle</h3>
                  <p className="text-xs text-muted-foreground text-center group-hover:opacity-90">
                    Une voix humaine qui représente parfaitement votre marque
                  </p>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={4}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center min-h-[160px] group">
                  <Link className="w-10 h-10 text-primary mb-3 group-hover:text-blue-400 transition-all duration-300" />
                  <h3 className="font-semibold text-center text-base text-foreground mb-1 group-hover:text-blue-300 transform transition-all duration-300">Intégrations</h3>
                  <p className="text-xs text-muted-foreground text-center group-hover:opacity-90">
                    Connexion avec vos outils CRM et marketing existants
                  </p>
                </div>
              </GradientBorderCard>
            </FadeInView>
          </div>
        </div>
      ),
    },
    {
      title: "Lancement & optimisation continue",
      content: (
        <div>
          <FadeInView>
            <p className="text-white font-semibold text-base mb-6 w-full">
              Une fois le développement finalisé, les phases de testing effectuées, et l'agent vocal validé par toute votre équipe, nous l'implémentons dans votre système. Vous aurez accès à un espace client personnalisé afin de suivre toutes les performances et les conversations en détail. Notre équipe reste disponible 24h/24 pour tout changement, intervention ou amélioration à effectuer sur votre agent vocal. Notre but est de vous apporter la solution la plus complète possible.
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FadeInView delay={1}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center min-h-[140px] group">
                  <PhoneCall className="w-8 h-8 text-primary mb-2 transition-all duration-500 group-hover:animate-pulse" />
                  <span className="font-semibold text-center text-sm text-foreground transition-all duration-300 group-hover:font-bold">Appels automatisés</span>
                  <span className="text-xs text-muted-foreground text-center transition-all duration-300 group-hover:opacity-80">Gestion 24/7 du téléphone</span>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={2}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center min-h-[140px] group">
                  <BarChart4 className="w-8 h-8 text-primary mb-2 transition-all duration-500 group-hover:animate-pulse" />
                  <span className="font-semibold text-center text-sm text-foreground transition-all duration-300 group-hover:font-bold">Performances</span>
                  <span className="text-xs text-muted-foreground text-center transition-all duration-300 group-hover:opacity-80">Suivi en temps réel</span>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={3}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center min-h-[140px] group">
                  <RefreshCcw className="w-8 h-8 text-primary mb-2 transition-all duration-500 group-hover:animate-pulse" />
                  <span className="font-semibold text-center text-sm text-foreground transition-all duration-300 group-hover:font-bold">Itérations</span>
                  <span className="text-xs text-muted-foreground text-center transition-all duration-300 group-hover:opacity-80">Amélioration continue</span>
                </div>
              </GradientBorderCard>
            </FadeInView>
            <FadeInView delay={4}>
              <GradientBorderCard>
                <div className="flex flex-col items-center justify-center min-h-[140px] group">
                  <Rocket className="w-8 h-8 text-primary mb-2 transition-all duration-500 group-hover:animate-pulse" />
                  <span className="font-semibold text-center text-sm text-foreground transition-all duration-300 group-hover:font-bold">Lancement</span>
                  <span className="text-xs text-muted-foreground text-center transition-all duration-300 group-hover:opacity-80">Opérationnel rapidement</span>
                </div>
              </GradientBorderCard>
            </FadeInView>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="process" className="min-h-screen w-full bg-black">
      <div className="w-full">
        <FadeInView>
          <div className="max-w-7xl mx-auto pt-16 px-4">
            <h2 className="section-title text-center mb-2 text-2xl md:text-3xl lg:text-4xl">Notre processus simplifié</h2>
            <p className="text-center mx-auto text-white font-semibold text-base mb-12 w-full">
              Chez Velvet IA, nous avons conçu le processus le plus fluide pour nos clients. C'est simple, notre équipe d'experts s'occupe d'absolument tout pour vous. De la consultation initiale à l'implémentation, vous n'avez qu'à vous connecter et laisser faire l'IA !
            </p>
          </div>
        </FadeInView>
        <Timeline data={data} endRef={endRef} />
      </div>
    </div>
  );
};

export default TimelineProcess; 