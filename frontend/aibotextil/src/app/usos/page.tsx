"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usesDatabase } from "@/data/uses";
import { MapPin } from "lucide-react"; 

export default function UsosPage() {
  const [activeTab, setActiveTab] = useState("yoga");
  const data = usesDatabase[activeTab];
  const tabs = Object.values(usesDatabase);

  return (
    <main className="w-full min-h-screen bg-white">

      <section className="relative w-full pt-32 pb-16 px-6 text-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/imagesUses/usos-bg-page.jpg" 
            alt="Fondo Usos"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-xl">
            Catálogo de <span className="text-aibo-red">Usos</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-8 py-2 rounded-full font-bold uppercase tracking-widest transition-all duration-300 border-2
                  ${activeTab === tab.id 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-gray-400 border-gray-600 hover:border-white hover:text-white"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>


      <div key={data.id} className="animate-fade-in-up pb-20">
        
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2">
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-10">
                {data.description}
              </p>

              <div className="w-full h-px bg-red-200 mb-8"></div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-500 text-white p-1 rounded-full text-xs">
                    <MapPin size={12} />
                </span>
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide">
                  Usos recomendados
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {data.recommendedList.map((item) => (
                  <span key={item} className="px-5 py-1 border-2 border-gray-400 text-gray-700 font-bold rounded-full text-sm hover:bg-gray-100 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-[600px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
               <div className="absolute inset-0 shadow-inner z-10 pointer-events-none"></div>
               <Image 
                 src={data.mainImage}
                 alt={data.title}
                 fill
                 className="object-cover"
               />
            </div>

          </div>
        </section>


        <section className="container mx-auto px-6 mb-20">
          <div className="mb-10">
            <span className="inline-block bg-[#4FD1C5] text-white font-bold px-6 py-2 uppercase tracking-wide text-sm shadow-sm">
              Composición y Tecnología Textil
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {data.compositions.map((comp, idx) => (
              <div key={idx} className="border-l-4 border-gray-200 pl-4 hover:border-[#4FD1C5] transition-colors duration-300">
                <h4 className="font-black text-gray-800 uppercase text-lg">{comp.title}</h4>
                {comp.subtitle && (
                   <p className="text-gray-500 font-bold text-sm mb-1">{comp.subtitle}</p>
                )}
                <p className="text-gray-600 text-sm leading-snug">{comp.description}</p>
              </div>
            ))}
          </div>
          
          <div className="w-full h-px bg-red-300 mt-12 opacity-50"></div>
        </section>


        <section className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <Image 
                 src={data.secondaryImage}
                 alt="Detalle Funcional"
                 fill
                 className="object-cover"
               />
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-12 py-6">
              
              <div>
                <span className="inline-block bg-[#5eaaa8] text-white font-bold px-4 py-2 uppercase tracking-wide text-sm mb-6">
                  Ingeniería Funcional
                </span>
                <ul className="space-y-3">
                  {data.engineeringList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="inline-block bg-[#8c8c8c] text-white font-bold px-4 py-2 uppercase tracking-wide text-sm mb-6">
                  Ventajas Clave
                </span>
                <ul className="space-y-3">
                  {data.advantagesList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}