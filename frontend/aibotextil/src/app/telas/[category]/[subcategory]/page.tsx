import Link from "next/link";
import Image from "next/image"; // Faltaba importar Image para el "Empty State"
import { ArrowLeft } from "lucide-react";
import TelaCard from "@/components/telas/TelaCard";
import { Tela } from "@/types/telas";

// Datos dummy
const DB_SIMULADA: Tela[] = [
  { id: 1, nombre: "Nylon Mate Oliva", imagenUrl: "/images/telas/ejemplo1.jpg", categorias: ["nylon", "nylon-100"] },
  { id: 2, nombre: "Nylon Jacquard Geo", imagenUrl: "/images/telas/ejemplo2.jpg", categorias: ["nylon", "jacquard"] },
  { id: 3, nombre: "Nylon Spandex Sport", imagenUrl: "/images/telas/ejemplo3.jpg", categorias: ["nylon", "spandex"] },
  { id: 4, nombre: "Nylon Tech Azul", imagenUrl: "/images/telas/ejemplo4.jpg", categorias: ["nylon", "tecnologia"] },
  { id: 5, nombre: "Poly Base Blanca", imagenUrl: "/images/telas/ejemplo5.jpg", categorias: ["poliester", "poliester-100"] },
];

// Cambiamos el nombre de la interfaz para evitar conflictos
interface SubcategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

export async function generateMetadata({ params }: SubcategoryPageProps) {
  const cat = params.category.toUpperCase();
  const sub = params.subcategory === 'todas' ? 'Catálogo Completo' : params.subcategory.toUpperCase().replace('-', ' ');
  return { title: `${cat} - ${sub} | Aibo Textil` };
}

// Agregamos ': React.JSX.Element' explícitamente al retorno
export default function SubcategoryPage({ params }: SubcategoryPageProps): React.JSX.Element {
  const mainCategory = params.category; 
  const subFilter = params.subcategory; 

  // Lógica de filtrado
  let telasFiltradas: Tela[] = [];

  if (subFilter === 'todas') {
    telasFiltradas = DB_SIMULADA.filter(t => t.categorias.includes(mainCategory));
  } else {
    telasFiltradas = DB_SIMULADA.filter(t => 
      t.categorias.includes(mainCategory) && t.categorias.includes(subFilter)
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <header className="w-full bg-aibo-red text-white py-6 px-6 shadow-lg relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative">
          
          <Link 
            href={`/telas/${mainCategory}`} 
            className="md:absolute md:left-0 flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="hidden md:inline">Volver a </span>{mainCategory}
          </Link>
          
          <div className="text-center flex-1">
            <span className="block text-xs md:text-sm font-bold opacity-70 uppercase tracking-[0.15em] mb-1">
              Catálogo / {mainCategory}
            </span>
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-widest leading-none">
              {subFilter === 'todas' ? 'Colección Completa' : subFilter.replace('-', ' ')}
            </h1>
          </div>
          <div className="w-32 hidden md:block"></div>
        </div>
      </header>


      {/* GRILLA */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        {telasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {telasFiltradas.map((tela) => (
              /* AQUI OCURRIA EL ERROR: Asegúrate de que TelaCard esté bien importado */
              <TelaCard key={tela.id} tela={tela} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 opacity-40">
            {/* Si no tienes la imagen del logo, comenta esta línea */}
            <Image src="/images/imagesLogos/logo-aibo.png" alt="Aibo" width={100} height={50} className="grayscale mb-6 opacity-50" />
            <p className="text-2xl font-black uppercase text-gray-400 mb-2 tracking-widest">No hay resultados</p>
            <p className="text-gray-500 font-medium">No encontramos telas en la categoría "{subFilter}".</p>
          </div>
        )}
      </section>

    </main>
  );
}