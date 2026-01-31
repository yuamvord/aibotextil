import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react"; 

const UsesSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black flex items-center justify-center">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imagesHome/usos-bg.jpg" 
          alt="Deportes y Usos"
          fill
          className="object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        
        <div className="inline-block mb-10">
          <div className="border-2 border-white px-10 py-2 transform -skew-x-12"> 
            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-widest transform skew-x-12">
              USOS
            </h2>
          </div>
        </div>

        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-12 font-light drop-shadow-md">
          El recomendado de cada tipo de tela según la disciplina deportiva o aplicación, 
          integrando composición de fibras, estructuras textiles, tecnologías funcionales, 
          ventajas competitivas y aplicaciones comerciales. Cada categoría ha sido desarrollada 
          para orientar tanto a marcas, diseñadores y compradores, como a consumidores finales 
          que buscan entender el valor real de un textil de alto desempeño.
        </p>

        <Link 
          href="/usos" 
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