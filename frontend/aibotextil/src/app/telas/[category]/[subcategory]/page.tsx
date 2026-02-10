// 1. Agrega esto al inicio del archivo
export const dynamic = 'force-dynamic';
export const revalidate = 0;
// ... resto de tus imports
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TelaCard from "@/components/telas/TelaCard";
import { db } from "@/lib/db";
import { Tela } from "@/types/telas"; 

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

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const mainCategory = params.category; // Ej: "poliester"
  const subFilter = params.subcategory; // Ej: "spandex"

  // --- LÓGICA DE FILTRO "DOBLE VERIFICACIÓN" ---
  let whereCondition: any = {};

  if (subFilter === 'todas') {
    // CASO 1: TODAS (Modo Amplio)
    // Buscamos cualquier tela que tenga relación con la categoría principal
    // YA SEA por etiqueta (slug) O por nombre.
    whereCondition = {
      OR: [
        // 1. Que tenga una categoría que contenga la palabra (ej: slug "nylon-100")
        { Tela_Categoria: { some: { Categorias: { Slug: { contains: mainCategory } } } } },
        // 2. O que el nombre de la tela diga la palabra (ej: "Tela Nylon Taslan")
        { Nombre_Tela: { contains: mainCategory } },
        { Nombre_Corto: { contains: mainCategory } },
        { Composicion: { contains: mainCategory } }
      ]
    };
  } else {
    // CASO 2: SUBCATEGORÍA ESPECÍFICA (Modo Intersección)
    // Aquí aplicamos el CANDADO:
    // Debe tener la etiqueta específica (ej: "spandex")
    // Y ADEMÁS debe pertenecer a la familia principal ("poliester")
    whereCondition = {
      AND: [
        // CONDICIÓN A: Tiene que tener la etiqueta exacta de la subcategoría
        {
          Tela_Categoria: {
            some: {
              Categorias: {
                Slug: { equals: subFilter } 
              }
            }
          }
        },
        // CONDICIÓN B (El filtro de seguridad): 
        // También debe coincidir con la categoría principal (por nombre o etiqueta)
        // Esto evita que salga "Nylon Spandex" cuando buscas "Poliéster Spandex"
        {
          OR: [
            { Tela_Categoria: { some: { Categorias: { Slug: { contains: mainCategory } } } } },
            { Nombre_Tela: { contains: mainCategory } },
            { Nombre_Corto: { contains: mainCategory } },
            { Composicion: { contains: mainCategory } }
          ]
        }
      ]
    };
  }

  // 1. Consulta a la Base de Datos
  const telasRaw = await db.telas.findMany({
    where: whereCondition,
    orderBy: {
      Id_Tela: 'desc'
    },
    include: {
        // Incluimos esto solo para depurar si hiciera falta
        Tela_Categoria: {
            include: { Categorias: true }
        }
    }
  });

  // 2. Transformación de Datos
  const telasFiltradas: Tela[] = telasRaw.map((t: any) => {
    
    // Limpieza de URL
    let cleanImage = "/images/placeholder.jpg"; 
    if (t.Url_Imagen) {
      let tempUrl = t.Url_Imagen.replace(/\\/g, "/");
      tempUrl = tempUrl.replace(/^\\public/, "").replace(/^public/, "").replace(/^\/public/, "");
      if (!tempUrl.startsWith("/")) tempUrl = "/" + tempUrl;
      cleanImage = tempUrl;
    }

    return {
      id: t.Id_Tela,
      nombre: t.Nombre_Corto || t.Nombre_Tela || "Sin Nombre",
      imagenUrl: cleanImage,
      codigo: t.Codigo_Aibo,
      precio: 0,
      categorias: []
    };
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="w-full bg-blue-900 text-white py-6 px-6 shadow-lg relative z-10">
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

      <section className="container mx-auto px-6 py-16 md:py-24">
        {telasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {telasFiltradas.map((tela) => (
              <TelaCard key={tela.id} tela={tela} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 opacity-40">
            <div className="text-6xl mb-4">🧵</div>
            <p className="text-2xl font-black uppercase text-gray-400 mb-2 tracking-widest">No hay resultados</p>
            <p className="text-gray-500 font-medium">
                No se encontraron telas en "{subFilter}" que pertenezcan a "{mainCategory}".
            </p>
          </div>
        )}
      </section>
    </main>
  );
}