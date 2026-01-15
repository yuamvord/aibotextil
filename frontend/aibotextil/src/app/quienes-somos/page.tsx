import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MisionVision";
import ValuesSection from "@/components/about/ValuesSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";

export default function QuienesSomosPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* 1. El Banner de Introducción (Idea nueva) */}
      <AboutHero />

      {/* 2. Tu sección de Misión y Visión (Diseño fiel) */}
      <MissionVision />

      <ValuesSection />

      <PrinciplesSection />
      {/* Aquí podemos agregar más secciones luego (ej: El Equipo, Historia, Valores) */}

    </div>
  );
}