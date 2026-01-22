import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { fabricDatabase } from "@/data/fabrics";

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const category = fabricDatabase[params.category];
  if (!category) return { title: "Producto no encontrado" };
  return {
    title: `${category.title} - Aibo Textil`,
    description: category.description,
  };
}

export default function DynamicCategoryPage({ params }: PageProps) {
  const categoryData = fabricDatabase[params.category];

  if (!categoryData) {
    notFound();
  }

  const whatsappNumber = "50200000000";
  const whatsappMessage = `Hola, me interesa recibir asesoría sobre las telas de ${categoryData.title}.`;

  return (
    // 1. EL CONTENEDOR PRINCIPAL (FONDO DE LA PÁGINA)
    // Usamos 'bg-gray-50' para que haya contraste con la tarjeta blanca, y 'py-12' para dar aire arriba y abajo.
    <main className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 md:px-8">
      
      {/* 2. LA TARJETA (BOX) */}
      {/* max-w-7xl limita el ancho para que no se estire demasiado en pantallas gigantes */}
      <div className="w-full max-w-6xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* --- LADO IZQUIERDO: IMAGEN --- */}
        <section className="relative w-full md:w-1/2 min-h-[400px] md:min-h-full">
          <div className="absolute inset-0 z-0">
            <Image
              src={categoryData.heroImage}
              alt={categoryData.title}
              fill
              className="object-cover"
              priority
            />
            {/* Sombra sutil interna */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight drop-shadow-md text-center">
              {categoryData.title.replace("Telas ", "")}
            </h1>

            {/* Botón flotante sobre la imagen */}
            <div className="absolute bottom-10 left-0 w-full flex justify-center">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-3 border-2 border-white rounded-full text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20"
              >
                <MessageCircle size={20} className="fill-current" />
                <span>Solicita Asesoría</span>
              </a>
            </div>
          </div>
        </section>


        {/* --- LADO DERECHO: MENÚ DINÁMICO --- */}
        {/* Aquí usamos `style={{ backgroundColor: ... }}` si quieres usar Hexadecimales específicos
            O usamos la clase `categoryData.color` si usas Tailwind (ej: bg-pink-600) */}
        {/* --- LADO DERECHO: MENÚ DINÁMICO --- */}
        <section 
          className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 transition-colors duration-300"
          // AQUÍ ESTÁ LA MAGIA: Usamos style para pintar el fondo exacto
          style={{ backgroundColor: categoryData.color }}
        >
          <div className="w-full max-w-md mx-auto flex flex-col">
            
            {/* OPCIÓN 1: TODAS */}
            <Link 
              href={`/contacto?interes=Catalogo Completo de ${categoryData.title}`}
              className="group w-full py-5 border-b border-white/30 flex items-center justify-center hover:bg-black/10 transition-colors"
            >
              <span className="text-xl md:text-2xl font-black text-white uppercase tracking-widest text-center group-hover:tracking-[0.2em] transition-all duration-300">
                TODAS
              </span>
            </Link>

            {/* OPCIONES DINÁMICAS */}
            {categoryData.subProducts.map((prod) => (
              <Link 
                key={prod.id} 
                href={`/contacto?interes=${prod.name}`}
                className="group w-full py-5 border-b border-white/30 flex items-center justify-center hover:bg-black/10 transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-white uppercase tracking-widest text-center group-hover:scale-105 transition-transform duration-300">
                  {prod.name}
                </span>
              </Link>
            ))}

          </div>
        </section>
      </div>
    </main>
  );
}