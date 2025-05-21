import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const meteors = new Array(number || 20).fill(true);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <>
      {meteors.map((el, idx) => {
        // Distribuer les météores uniformément sur toute la largeur
        // Assurer une distribution sur 100% de la largeur
        const segments = 20; // Diviser la largeur en segments
        const segment = idx % segments;
        const leftPosition = (segment / segments) * 100;
        
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-white before:to-transparent",
              className
            )}
            style={{
              top: 0,
              left: `${leftPosition}%`,
              animationDelay: Math.random() * (1.5 - 0.5) + 0.5 + "s",
              animationDuration: Math.floor(Math.random() * (15 - 8) + 8) + "s",
            }}
          ></span>
        );
      })}
    </>
  );
}; 