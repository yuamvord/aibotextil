import PerformanceHero from "@/components/rendimiento/PerformanceHero";
import PerformanceTechList from "@/components/rendimiento/PerformanceTechList";

export default function RendimientoPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      
      {/* 1. Banner Rojo de Alto Impacto */}
      <PerformanceHero />

      {/* 2. Tecnologías (Estilo Zig-Zag Deportivo) */}
      <PerformanceTechList />

      {/* 3. CTA Agresivo */}
      <section className="py-24 bg-black text-center px-6 relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-[url('/images/pattern-lines.png')] opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl text-white font-black uppercase italic mb-6">
              Lleva tu marca al <span className="text-aibo-red">siguiente nivel</span>
            </h2>
            <p className="text-gray-400 text-xl mb-10">
              Nuestras telas están probadas por atletas de alto rendimiento. 
              ¿Estás listo para innovar?
            </p>
            <a href="/contacto" className="inline-block px-12 py-4 bg-aibo-red text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-red-900/50">
              INICIAR PROYECTO
            </a>
        </div>
      </section>

    </main>
  );
}