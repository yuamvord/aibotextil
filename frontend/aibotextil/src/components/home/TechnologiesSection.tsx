"use client"; 

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; 

const TechnologiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.4, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[80vh] md:h-[90vh] bg-black overflow-hidden"
    >
      
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 h-full">
        
        <div className="relative h-full w-full group overflow-hidden">
          <Image
            src="/images/imagesHome/tech-woman.png"
            alt="Tecnología Sostenible"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
          
          <div className="absolute bottom-10 left-0 w-full flex justify-center z-30 px-4">
             <Link href="/sostenibilidad" className="flex items-center gap-2 text-white font-bold tracking-widest uppercase hover:text-aibo-red transition-colors group text-xl ">
                Sostenibilidad
                <div className="bg-aibo-red rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
             </Link>
          </div>
        </div>

        <div className="relative h-full w-full hidden md:block overflow-hidden">
          <Image
            src="/images/imagesHome/tech-runner.jpg"
            alt="Runner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>


        <div className="relative h-full w-full group overflow-hidden">
          <Image
            src="/images/imagesHome/tech-man.png"
            alt="Rendimiento Deportivo"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>

          <div className="absolute bottom-10 left-0 w-full flex justify-center z-30 px-4">
             <Link href="/rendimiento" className="flex items-center gap-2 text-white font-bold tracking-widest uppercase hover:text-aibo-red transition-colors group text-xl">
                Rendimiento Deportivo
                <div className="bg-aibo-red rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
             </Link>
          </div>
        </div>

      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="relative px-8 py-6 md:px-16 md:py-8">
            
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
              Tecnologías
            </h2>

            
            <div className={cn(
              "absolute top-0 left-0 h-1 md:h-2 bg-white",
              isVisible ? "w-0 animate-border-x" : "w-0" 
            )}></div>
            
            <div className={cn(
              "absolute bottom-0 left-0 h-1 md:h-2 bg-white",
              isVisible ? "w-0 animate-border-x" : "w-0"
            )}></div>

            <div className={cn(
              "absolute top-0 left-0 w-1 md:w-2 bg-white",
              isVisible ? "h-0 animate-border-y" : "h-0"
            )}></div>

            <div className={cn(
              "absolute top-0 right-0 w-1 md:w-2 bg-white",
              isVisible ? "h-0 animate-border-y" : "h-0"
            )}></div>

        </div>
      </div>

    </section>
  );
};

export default TechnologiesSection;