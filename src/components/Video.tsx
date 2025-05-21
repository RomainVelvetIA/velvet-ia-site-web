"use client"

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(videoRef, { once: false, amount: 0.3 })

  const videoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
    // Idéalement, on déclencherait ici la lecture de la vidéo
  }

  return (
    <section id="video" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={videoRef}
          className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black aspect-video relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={videoVariants}
        >
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
              >
                <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                  <motion.button 
                    onClick={handleVideoPlay}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.loom.com/embed/c81e699d44a74452880795d5897efddd?sid=9e8552e4-2985-4811-9e77-a49b3fcbf2f5"
                title="Velvet IA IU Démo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Video 