"use client"; 

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const SustainabilityVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-10">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
            Nuestra Huella
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Innovación en Movimiento
          </h2>
        </div>

        <div className="relative w-full aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50">
          
          {!isPlaying ? (
            <div className="absolute inset-0 group cursor-pointer" onClick={() => setIsPlaying(true)}>
              
              <Image
                src="/images/imagesSostenibility/sostenibilidad-video-cover.jpg" 
                alt="Video de Sostenibilidad"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full border border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <Play className="w-8 h-8 text-emerald-600 ml-1 fill-current" />
                  </div>
                  
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
              </div>

              <div className="absolute bottom-8 left-0 w-full text-center">
                <span className="text-white font-bold uppercase tracking-widest text-sm drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Ver Video
                </span>
              </div>

            </div>
          ) : (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src="/videos/sostenibilidad.mp4" 
            >
              Tu navegador no soporta videos HTML5.
            </video>
          )}

        </div>

      </div>
    </section>
  );
};

export default SustainabilityVideo; 