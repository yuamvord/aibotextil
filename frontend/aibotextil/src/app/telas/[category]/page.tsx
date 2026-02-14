import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation"; // Importar manejo de 404
import { MessageCircle, ArrowLeft } from "lucide-react";
// AJUSTA ESTA RUTA según donde tengas tu archivo fabrics.ts
import { fabricDatabase } from "@/data/fabrics"; 

interface PageProps {
  params: {
    category: string; // Ej: "nylon"
  };
}

export default function CategoryMenuPage({ params }: PageProps) {
  // 1. Normalizar el slug (asegurar minúsculas)
  const categorySlug = params.category.toLowerCase();

  // 2. Buscar la info en tu "fabricDatabase"
  const categoryData = fabricDatabase[categorySlug];

  // 3. Si la categoría no existe en tu archivo fabrics.ts, devolver 404
  if (!categoryData) {
    return notFound();
  }

  return (
    <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6 md:p-12 lg:p-24">
      
      <div className="w-full max-w-[1400px] h-auto md:h-[80vh] min-h-[600px] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* --- IZQUIERDA: IMAGEN DE TELA Y TÍTULO --- */}
        <section className="relative w-full md:w-1/2 h-[400px] md:h-full group">
          
          {/* IMAGEN DE FONDO (Dinámica desde fabricDatabase) */}
          <div className="absolute inset-0">
            <Image
              src={categoryData.heroImage} // Usamos la imagen definida en el TS
              alt={categoryData.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Overlay suave */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* CONTENIDO CENTRADO */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase drop-shadow-lg tracking-tighter mb-8 text-center">
              {categoryData.title}
            </h1>
            
            <a 
              href="https://wa.me/50200000000"
              target="_blank"
              className="flex items-center gap-2 px-8 py-3 bg-white/20 backdrop-blur-md border-2 border-white rounded-full text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              <MessageCircle size={20} className="fill-current" />
              <span className="text-sm md:text-base">Solicita Asesoría</span>
            </a>
          </div>

          {/* Botón Volver (Opcional, buen UX) */}
          <Link href="/" className="absolute top-6 left-6 z-20 text-white hover:text-gray-200 transition-colors">
             <ArrowLeft size={32} />
          </Link>

        </section>

        {/* --- DERECHA: MENÚ DINÁMICO --- */}
        {/* Usamos style inline para el color de fondo dinámico que viene de la DB */}
        <section 
            className="w-full md:w-1/2 h-full flex flex-col justify-center items-center py-12 px-8 md:px-16"
            style={{ backgroundColor: categoryData.color }} 
        >
          
          <div className="w-full max-w-md flex flex-col">
            
            {/* OPCIÓN 1: SIEMPRE "TODAS" */}
            <Link
                href={`/telas/${categorySlug}/todas`}
                className="group w-full py-5 lg:py-6 text-center transition-all duration-300 border-b border-t border-white/40 hover:bg-white/10"
              >
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                  TODAS
                </span>
            </Link>

            {/* OPCIONES DINÁMICAS: Mapeamos los subProducts del archivo TS */}
            {categoryData.subProducts.map((subItem) => (
              <Link
                key={subItem.id}
                // La URL será: /telas/nylon/nylon-spandex (usando el ID del subproducto)
                href={`/telas/${categorySlug}/${subItem.id}`} 
                className="group w-full py-5 lg:py-6 text-center transition-all duration-300 border-b border-white/40 hover:bg-white/10"
              >
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                  {subItem.name}
                </span>
              </Link>
            ))}

          </div>


        </section>

      </div>

    </main>
  );
}