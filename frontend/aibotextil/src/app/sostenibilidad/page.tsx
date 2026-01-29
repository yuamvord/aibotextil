import SustainabilityHero from "@/components/sostenibilidad/SustainabilityHero";
import EcoTechList from "@/components/sostenibilidad/EcoTechList";
import SustainabilityVideo from "@/components/sostenibilidad/SustainabilityVideo";

export default function SostenibilidadPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      
      {/* 1. Hero / Banner Eco */}
      <SustainabilityHero />

      {/* 2. Lista de Tecnologías del PDF */}
      <EcoTechList />

      <SustainabilityVideo />
      {/* 3. CTA Final (Llamada a la acción) */}
      <section className="py-20 bg-emerald-900 text-center px-6">
        <h2 className="text-3xl text-white font-bold mb-4">
          ¿Quieres desarrollar una colección Eco-Friendly?
        </h2>
        <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
          Únete al cambio. Contamos con certificaciones internacionales que validan el origen de nuestros materiales.
        </p>
        <a href="/contacto" className="inline-block px-8 py-3 bg-white text-emerald-900 font-bold rounded-sm hover:bg-emerald-100 transition-colors">
          SOLICITAR MUESTRARIO
        </a>
      </section>

    </main>
  );
}