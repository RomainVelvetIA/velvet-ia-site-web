"use client"

import { motion } from 'framer-motion'
import { PulseBeamsVioletDemo } from "@/components/ui/pulse-beams-violet-demo"
import Typewriter from "@/components/ui/Typewriter"

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center bg-black">
      {/* Fond noir avec effet de faisceau lumineux */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <div className="w-1/2 h-1/2">
            <PulseBeamsVioletDemo />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center gap-4 relative z-20">
          <motion.h1 
            className="md:text-5xl text-2xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 w-4/5 mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Libérez vos équipes grâce à l'IA vocale sur-mesure
          </motion.h1>
          <motion.p 
            className="text-neutral-300 text-xl text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Velvet IA développe des agents vocaux intelligents qui automatisent vos appels entrants et sortants, sans engagement et avec garantie de performances
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6"
          >
            <Typewriter
              text="Découvrez nos agents vocaux sur mesure"
              speed={80}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 w-3/4 mx-auto leading-tight"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Effet de dégradé en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-5"></div>
    </section>
  )
}

export default Hero 