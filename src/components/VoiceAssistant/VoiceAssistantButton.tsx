"use client";

import { motion } from "framer-motion";

interface CallButtonProps {
  className?: string;
  phoneNumber?: string;
}

const CallButton: React.FC<CallButtonProps> = ({ 
  className = "",
  phoneNumber = "+33123456789" // Numéro de téléphone par défaut
}) => {
  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCall}
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-colors ${className}`}
      aria-label="Appeler"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-white"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </motion.button>
  );
};

export default CallButton; 