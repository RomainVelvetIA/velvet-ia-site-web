"use client";

import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const CallToActionIA = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Meteors 
          number={50} 
          className="opacity-100"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 relative"
            variants={itemVariants}
          >
            Nous garantissons votre succès
          </motion.h2>
          <motion.p 
            className="section-text text-xl max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Nos clients bénéficient d'une garantie de satisfaction de 30 jours pour tester notre assistant vocal. Si vous n'êtes pas satisfait, nous remboursons intégralement les frais de développement.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionIA; 