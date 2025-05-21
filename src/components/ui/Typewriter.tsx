import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    // Réinitialise le texte à chaque changement de `text`
    setDisplayedText('');
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        const charToAdd = text.charAt(currentIndex);
        setDisplayedText((prev) => prev + charToAdd);
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default Typewriter; 