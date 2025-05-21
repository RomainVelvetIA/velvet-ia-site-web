import React from "react";
import { Metadata } from 'next';
import NavBarDemo from "@/components/NavBarDemo";
import Footer from "@/components/Footer";
import { FeaturesSectionWithCardGradientDemo } from "@/components/blocks/feature-section-with-card-gradient";

export const metadata: Metadata = {
  title: 'Velvet IA IU | Fonctionnalités',
  description: 'Découvrez les fonctionnalités avancées de Velvet IA IU, votre partenaire en intelligence artificielle.',
}

export default function FeaturesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <NavBarDemo />
      <div className="mt-24">
        <FeaturesSectionWithCardGradientDemo />
      </div>
      <Footer />
    </main>
  );
} 