import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react"; // Icono para el botón de WhatsApp
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

  // Número de teléfono para el enlace de WhatsApp (cámbialo por el real)
  const whatsappNumber = "50200000000";
  const whatsappMessage = `Hola, me interesa recibir asesoría sobre las telas de ${categoryData.title}.`;

  return (
    // Usamos 'h-screen' para que ocupe TODA la pantalla sin scroll (estilo portada)
    // En móvil (flex-col) se apilan, en escritorio (md:flex-row) se dividen 50/50
    <main className="flex flex-col md:flex-row w-full min-h-screen">
      
      {/* --- LADO IZQUIERDO: IMAGEN Y TÍTULO --- */}
      <section className="relative w-full md:w-1/2 h-[50vh] md:h-screen bg-gray-900">
        
        {/* Imagen de Fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={categoryData.heroImage}
            alt={categoryData.title}
            fill
            className="object-cover"
            priority
          />
          {/* Capa oscura muy sutil para asegurar que el texto blanco se lea */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Contenido Sobrepuesto (Centrado) */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
          
          {/* Nombre de la Tela (En medio, grande y fuerte como la imagen) */}
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight drop-shadow-lg text-center">
            {categoryData.title.replace("Telas ", "")} {/* Pequeño truco para limpiar el nombre si dice "Telas Nylon" */}
          </h1>

          {/* Botón "Solicita Asesoría" (Abajo, estilo píldora transparente) */}
          {/* Lo posicionamos absolutamente abajo para que quede como en tu diseño */}
          <div className="absolute bottom-12 left-0 w-full flex justify-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-2 border-2 border-white rounded-full text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              <MessageCircle size={20} className="fill-current" />
              <span>Solicita Asesoría</span>
            </a>
          </div>

        </div>
      </section>


      {/* --- LADO DERECHO: MENÚ ROJO --- */}
      <section className="w-full md:w-1/2 h-auto md:h-screen bg-[#F04E3E] flex flex-col justify-center px-8 md:px-16 py-12">
        
        {/* Lista de Tipos de Tela */}
        <div className="w-full max-w-lg mx-auto flex flex-col">
          
          {categoryData.subProducts.map((prod) => (
            <Link 
              key={prod.id} 
              href={`/contacto?interes=${prod.name}`} // Al dar click lleva al contacto o a un detalle
              className="group w-full py-6 border-b border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <span className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest text-center group-hover:scale-105 transition-transform duration-300">
                {prod.name}
              </span>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}