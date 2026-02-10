import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { db } from '@/lib/db';


interface PageProps {
  params: {
    category: string; // Ej: "nylon"
  };
}

export default function CategoryMenuPage({ params }: PageProps) {
  const mainCategorySlug = params.category;
  const mainCategoryTitle = mainCategorySlug.toUpperCase(); // NYLON

  // Opciones del menú
  const menuOptions = [
    { label: "TODAS", subSlug: "todas" },
    { label: `${mainCategoryTitle} 100%`, subSlug: `${mainCategorySlug}-100` },
    { label: `${mainCategoryTitle} + SPANDEX`, subSlug: "spandex" },
    { label: `${mainCategoryTitle} JACQUARD`, subSlug: "jacquard" },
    { label: `${mainCategoryTitle} TECNOLOGÍA`, subSlug: "tecnologia" },
    { label: `${mainCategoryTitle} RECICLADO`, subSlug: "reciclado" },
  ];

  return (

    <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6 md:p-12 lg:p-24">
    
      <div className="w-full max-w-[1400px] h-auto md:h-[80vh] min-h-[600px] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* --- IZQUIERDA: IMAGEN DE TELA Y TÍTULO --- */}
        <section className="relative w-full md:w-1/2 h-[400px] md:h-full">
          
          {/* IMAGEN DE FONDO */}
          <div className="absolute inset-0">
            <Image
              src={`/images/imagesProducts/${mainCategorySlug}.jpg`} // Tu textura clara
              alt={mainCategoryTitle}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay muy suave por si la imagen es muy blanca */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
          
          {/* CONTENIDO CENTRADO (NYLON + BOTÓN) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
            
            {/* TÍTULO GIGANTE */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase drop-shadow-md tracking-tighter mb-8">
              {mainCategoryTitle}
            </h1>
            
            {/* BOTÓN (Estilo Píldora Gris/Transparente) */}
            <a 
              href="https://wa.me/50200000000"
              target="_blank"
              className="flex items-center gap-2 px-8 py-3 bg-gray-600/40 backdrop-blur-sm border-2 border-white rounded-full text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              <MessageCircle size={20} className="fill-current" />
              <span className="text-sm md:text-base">Solicita Asesoría</span>
            </a>
          </div>
        </section>

        {/* --- DERECHA: MENÚ ROJO --- */}
        <section className="w-full md:w-1/2 h-full bg-[#FF4040] flex flex-col justify-center items-center py-12 px-8 md:px-16">
          
          <div className="w-full max-w-md flex flex-col">
            {menuOptions.map((opt, index) => (
              <Link
                key={opt.subSlug}
                href={`/telas/${mainCategorySlug}/${opt.subSlug}`}
                className={`
                  group w-full py-5 lg:py-6 text-center transition-all duration-300 
                  border-b border-white/40 hover:bg-white/10
                  ${index === 0 ? "border-t border-white/40" : ""}
                `}
              >
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                  {opt.label}
                </span>
              </Link>
            ))}
          </div>

        </section>

      </div>

    </main>
  );
}