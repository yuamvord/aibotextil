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
      <section className="relative py-24 px-6 text-center overflow-hidden bg-black">
        {/* --- 1. VIDEO DE FONDO --- */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40" // opacity-40 oscurece el video para que el texto resalte
        >
          <source src="/videos/cta-bg.mp4" type="video/mp4" />
          {/* Si el video falla, podrías poner una imagen de respaldo aquí */}
        </video>

        {/* --- 2. OVERLAY (Capa oscura opcional) --- */}
        {/* Esto ayuda si el video es muy claro o tiene mucho movimiento */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* --- 3. PATRÓN DECORATIVO (Opcional, si quieres mantener la textura encima del video) --- */}
        <div className="absolute inset-0 bg-[url('/images/pattern-lines.png')] opacity-10 z-0 mix-blend-overlay"></div>

        {/* --- 4. CONTENIDO (Texto y Botón) --- */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-white font-black uppercase italic mb-6 drop-shadow-lg">
            Lleva tu marca al{" "}
            <span className="text-aibo-red">siguiente nivel</span>
          </h2>
          <p className="text-gray-200 text-xl mb-10 drop-shadow-md font-light">
            Nuestras telas están probadas por atletas de alto rendimiento.
            ¿Estás listo para innovar?
          </p>
          <a
            href="/contacto"
            className="inline-block px-12 py-4 bg-aibo-red text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-red-900/50"
          >
            INICIAR PROYECTO
          </a>
        </div>
      </section>
    </main>
  );
}
