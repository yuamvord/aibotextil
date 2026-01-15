"use client"; // <--- IMPORTANTE: Ahora necesitamos "use client" porque usaremos hooks

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Usamos tu utilidad para mezclar clases limpiamente

const TechnologiesSection = () => {
  // 1. EL SENSOR: Estado para saber si ya es visible
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Creamos el observador (el "ojo" del navegador)
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento entra en pantalla (es true)
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: Desconectamos el observador para que no se repita la animación al subir y bajar
          // Si quieres que se repita cada vez, borra la línea de abajo (observer.disconnect)
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.4, // La animación inicia cuando el 40% del elemento es visible
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
      ref={sectionRef} // <--- Conectamos el sensor a la sección
      className="relative w-full h-[80vh] md:h-[90vh] bg-black overflow-hidden"
    >
      
      {/* --- GRID DE 3 IMÁGENES DE FONDO --- */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 h-full">
        
        {/* COLUMNA 1: SOSTENIBILIDAD */}
        <div className="relative h-full w-full group overflow-hidden">
          <Image
            src="/images/tech-woman.png"
            alt="Tecnología Sostenible"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
          
          <div className="absolute bottom-10 left-0 w-full flex justify-center z-30 px-4">
             <Link href="/sostenibilidad" className="flex items-center gap-2 text-white font-bold tracking-widest uppercase hover:text-aibo-red transition-colors group">
                Sostenibilidad
                <div className="bg-aibo-red rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
             </Link>
          </div>
        </div>

        {/* COLUMNA 2: DECORATIVA */}
        <div className="relative h-full w-full hidden md:block overflow-hidden">
          <Image
            src="/images/tech-runner.png"
            alt="Runner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* COLUMNA 3: RENDIMIENTO */}
        <div className="relative h-full w-full group overflow-hidden">
          <Image
            src="/images/tech-man.png"
            alt="Rendimiento Deportivo"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>

          <div className="absolute bottom-10 left-0 w-full flex justify-center z-30 px-4">
             <Link href="/rendimiento" className="flex items-center gap-2 text-white font-bold tracking-widest uppercase hover:text-aibo-red transition-colors group">
                Rendimiento Deportivo
                <div className="bg-aibo-red rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
             </Link>
          </div>
        </div>

      </div>

      {/* --- CAJA CENTRAL "TECNOLOGÍAS" CON BORDES ANIMADOS --- */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="relative px-8 py-6 md:px-16 md:py-8">
            
            {/* TEXTO GRANDE */}
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
              Tecnologías
            </h2>

            {/* --- BORDES QUE REACCIONAN AL SCROLL --- */}
            {/* Usamos la función 'cn' para aplicar la clase 'animate-border-x' SOLO si 'isVisible' es true */}
            
            {/* Borde Superior */}
            <div className={cn(
              "absolute top-0 left-0 h-1 md:h-2 bg-white",
              isVisible ? "w-0 animate-border-x" : "w-0" // Si es visible anima, si no, se queda en 0
            )}></div>
            
            {/* Borde Inferior */}
            <div className={cn(
              "absolute bottom-0 left-0 h-1 md:h-2 bg-white",
              isVisible ? "w-0 animate-border-x" : "w-0"
            )}></div>

            {/* Borde Izquierdo */}
            <div className={cn(
              "absolute top-0 left-0 w-1 md:w-2 bg-white",
              isVisible ? "h-0 animate-border-y" : "h-0"
            )}></div>

            {/* Borde Derecho */}
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