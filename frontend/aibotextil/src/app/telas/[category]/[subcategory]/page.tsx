export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TelaCard from "@/components/telas/TelaCard";
import { Tela } from "@/types/telas"; 

interface SubcategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

export async function generateMetadata({ params }: SubcategoryPageProps) {
  const cat = params.category.toUpperCase();
  const sub =
    params.subcategory === 'todas'
      ? 'Catálogo Completo'
      : params.subcategory.toUpperCase().replace('-', ' ');

  return { title: `${cat} - ${sub} | Aibo Textil` };
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  // Normalizamos a minúsculas para evitar errores de mayúsculas
  const mainCategory = params.category.toLowerCase(); 
  const subFilter = params.subcategory.toLowerCase();

  // DEBUG: Esto aparecerá en los logs de Vercel (Function logs)
  console.log(`🔎 Buscando: Main=${mainCategory} | Sub=${subFilter}`);

  let whereCondition: any = {};

  // CASO 1: Ver TODAS las telas de la categoría principal (ej: Nylon)
  if (subFilter === 'todas') {
    whereCondition = {
      OR: [
        { Tela_Categoria: { some: { Categorias: { Slug: { contains: mainCategory } } } } },
        { Nombre_Tela: { contains: mainCategory } },
        { Composicion: { contains: mainCategory } }
      ]
    };
  } 
  // CASO 2: Ver una SUBCATEGORÍA específica (ej: Spandex)
  else {
    // Truco: Si el subfiltro contiene al principal (ej: "nylon-spandex"),
    // buscamos solo la parte "diferente" ("spandex") para tener más suerte en la DB.
    const searchTerm = subFilter.replace(mainCategory, '').replace('-', '').trim() || subFilter;

    whereCondition = {
      AND: [
        {
          // 1. Debe tener la subcategoría (ej: Spandex)
          Tela_Categoria: {
            some: {
              Categorias: { 
                 // Usamos 'contains' para que "spandex" encuentre "nylon-spandex" o "poly-spandex"
                 Slug: { contains: searchTerm } 
              }
            }
          }
        },
        {
          // 2. Y ADEMÁS debe pertenecer a la familia principal (ej: Nylon)
          // Esto evita que salgan telas de Poliéster Spandex cuando estás en Nylon
          OR: [
            { Nombre_Tela: { contains: mainCategory } },
            { Composicion: { contains: mainCategory } },
            { Tela_Categoria: { some: { Categorias: { Slug: { contains: mainCategory } } } } }
          ]
        }
      ]
    };
  }

  const { db } = await import('@/lib/db');

  const telasRaw = await db.telas.findMany({
    where: whereCondition,
    orderBy: { Id_Tela: 'desc' },
    include: {
      Tela_Categoria: {
        include: { Categorias: true }
      }
    }
  });

  const telasFiltradas: Tela[] = telasRaw.map((t: any) => {
    let cleanImage = "/images/placeholder.jpg"; 

    if (t.Url_Imagen) {
      let tempUrl = t.Url_Imagen.replace(/\\/g, "/");
      tempUrl = tempUrl
        .replace(/^\\public/, "")
        .replace(/^public/, "")
        .replace(/^\/public/, "");

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
            href={`/telas/${params.category}`} // Usamos params directo para mantener link limpio
            className="md:absolute md:left-0 flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="hidden md:inline">Volver a </span>{params.category}
          </Link>

          <div className="text-center flex-1">
            <span className="block text-xs md:text-sm font-bold opacity-70 uppercase tracking-[0.15em] mb-1">
              Catálogo / {params.category}
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
            <p className="text-2xl font-black uppercase text-gray-400 mb-2 tracking-widest">
              No hay resultados
            </p>
            <p className="text-gray-500 font-medium">
              No encontramos telas "{subFilter}" dentro de "{mainCategory}".
            </p>
            {/* DEBUG VISUAL: Solo para ti, bórralo luego si quieres */}
            <p className="text-xs text-red-400 mt-4">
               Debug: Busqué Slug que contenga "{subFilter.replace(mainCategory, '').replace('-', '').trim() || subFilter}"
            </p>
          </div>
        )}
      </section>
    </main>
  );
}