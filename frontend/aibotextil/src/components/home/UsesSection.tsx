import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react"; // Flechas dobles para el "Ver Más"

const UsesSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black flex items-center justify-center">
      
      {/* --- 1. FONDO (Imagen de siluetas) --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/usos-bg.jpg" // Asegúrate de guardar tu imagen con este nombre
          alt="Deportes y Usos"
          fill
          className="object-cover opacity-60" // Bajamos opacidad para que se lea el texto
        />
        {/* Gradiente para oscurecer el centro y que el texto resalte más */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* --- 2. CONTENIDO --- */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        
        {/* CAJA DEL TÍTULO "USOS" */}
        <div className="inline-block mb-10">
          <div className="border-2 border-white px-10 py-2 transform -skew-x-12"> {/* El skew le da la inclinación deportiva */}
            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-widest transform skew-x-12">
              USOS
            </h2>
          </div>
        </div>

        {/* PÁRRAFO DESCRIPTIVO */}
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-12 font-light drop-shadow-md">
          El recomendado de cada tipo de tela según la disciplina deportiva o aplicación, 
          integrando composición de fibras, estructuras textiles, tecnologías funcionales, 
          ventajas competitivas y aplicaciones comerciales. Cada categoría ha sido desarrollada 
          para orientar tanto a marcas, diseñadores y compradores, como a consumidores finales 
          que buscan entender el valor real de un textil de alto desempeño.
        </p>

        {/* BOTÓN VER MÁS */}
        <Link 
          href="/usos" // O la ruta a donde quieras que lleve (ej: /blog o /productos)
          className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-aibo-red transition-colors duration-300 group"
        >
          VER MÁS
          <ChevronsRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

      </div>
    </section>
  );
};

export default UsesSection;