"use client";

import React from "react";
import { IndustriesSlider } from "@/components/ui/industries-slider";
import { PulseBeamsVioletDemo } from "@/components/ui/pulse-beams-violet-demo";

const IndustriesSectionDemo = React.forwardRef<HTMLElement>((props, ref) => (
  <section id="industries" className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden" ref={ref}>
    <PulseBeamsVioletDemo />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="section-title md:text-4xl text-xl lg:text-5xl">Nos industries partenaires</h2>
        <p className="max-w-[800px] text-gray-500 text-xs md:text-sm lg:text-base dark:text-gray-400">
          Nos solutions s'implémentent dans la majorité des secteurs d'activités. Vous recevez ou émettez des appels répétitifs quotidiennement ? 
          Vous devez qualifier des leads ? Vous devez planifier des rendez-vous au téléphone ? Vous devez relancer vos bases de données ? 
          Nos solutions sont développées pour répondre à toutes ces problématiques.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <IndustriesSlider />
      </div>
    </div>
  </section>
));

IndustriesSectionDemo.displayName = "IndustriesSectionDemo";

export { IndustriesSectionDemo }; 