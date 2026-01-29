"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usesDatabase } from "@/data/uses";
import { Layers, ChevronRight } from "lucide-react";

export default function UsosPage() {
  // Estado para controlar qué deporte se está viendo. 
  // Empieza mostrando "yoga".
  const [activeTab, setActiveTab] = useState("yoga");
  
  // Obtenemos los datos del deporte activo
  const data = usesDatabase[activeTab];

  // Convertimos la base de datos en un array para poder hacer el menú
  const tabs = Object.values(usesDatabase);

  return (
    <main className="w-full min-h-screen bg-white">

      {/* --- 1. ENCABEZADO GLOBAL (Fijo) --- */}
     {/* --- 1. ENCABEZADO GLOBAL (Fijo) --- */}
      <section className="relative w-full pt-32 pb-20 px-6 text-center overflow-hidden bg-black">
        
        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/usos-bg-page.jpg" // <--- ¡Asegúrate de guardar una imagen aquí!
            alt="Fondo Usos"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Overlay oscuro para que el texto resalte */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* CONTENIDO (Texto y Tabs) - Con z-10 para estar encima de la foto */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-xl">
            Catálogo de <span className="text-aibo-red">Usos</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            Telas pensadas para cada disciplina, diseñadas para brindar confort, rendimiento y calidad real
          </p>

        </div>
      </section>

      {/* --- 2. CONTENIDO DINÁMICO (Cambia según el Tab) --- */}
      {/* Usamos una 'key' con el ID para forzar una pequeña animación al cambiar */}
      <div key={data.id} className="animate-fade-in-up">
        
        {/* HERO DEL DEPORTE ESPECÍFICO */}
        <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0">
            {/* Si no tienes la imagen exacta, no romperá la página, mostrará fondo gris */}
            <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent`}></div>
            {/* Overlay de color según el tema del deporte */}
            <div className={`absolute inset-0 bg-gradient-to-r ${data.gradient} mix-blend-overlay opacity-60`}></div>
          </div>

          <div className="relative z-10 text-center px-6">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
              {data.subtitle}
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter drop-shadow-lg">
              {data.title}
            </h2>
          </div>
        </section>


        {/* INTRODUCCIÓN TÉCNICA (Dos Columnas) */}
        <section className="py-20 px-6 container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Columna Texto */}
            <div className="w-full lg:w-1/2">
              <h3 className={`text-3xl font-black uppercase mb-6 flex items-center gap-3 ${data.themeColor}`}>
                <span className="w-12 h-2 bg-current rounded-full"></span>
                {data.introTitle}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify font-medium">
                {data.introText}
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 uppercase text-sm mb-4 tracking-widest">
                  Aplicaciones Recomendadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.recommendedList.map((item) => (
                    <span key={item} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 font-bold shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Columna Gráfica / Detalles (Simulada con Datos) */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
               <div className={`p-8 rounded-2xl text-white bg-gradient-to-br ${data.gradient} shadow-2xl`}>
                 <h4 className="text-xl font-bold uppercase mb-2 opacity-90">Gramaje Estándar</h4>
                 <p className="text-4xl font-black tracking-tight">{data.grammage}</p>
                 <p className="text-sm opacity-70 mt-2">Equilibrio perfecto entre cobertura y peso.</p>
               </div>
               
               {/* Tarjeta de Ingeniería Visual */}
               <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-gray-300">
                  <p className="text-gray-400 text-sm uppercase font-bold tracking-widest mb-2">Ingeniería Textil</p>
                  <p className={`text-2xl font-black uppercase ${data.themeColor}`}>
                     {data.description}
                  </p>
               </div>
            </div>

          </div>
        </section>


        {/* COMPOSICIÓN (Tarjetas) */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-black text-gray-900 uppercase mb-12 text-center">
              Composición de Fibras
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.compositions.map((comp, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-gray-200 hover:border-aibo-red transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-aibo-red group-hover:text-white transition-colors">
                      <Layers size={24} />
                    </div>
                    {comp.tag && (
                      <span className="px-2 py-1 bg-black text-white text-xs font-bold uppercase rounded">
                        {comp.tag}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 uppercase mb-1">{comp.title}</h4>
                  <p className={`text-sm font-bold mb-4 ${data.themeColor}`}>{comp.percentage}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CARACTERÍSTICAS (Lista con Iconos) */}
        <section className="py-20 container mx-auto px-6">
          <h3 className="text-3xl font-black text-gray-900 uppercase mb-12 text-center">
            Ventajas Competitivas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {data.features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 ${data.themeColor}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase mb-1">{feat.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

    </main>
  );
}