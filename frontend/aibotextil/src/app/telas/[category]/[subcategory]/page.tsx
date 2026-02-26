export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TelaCard from "@/components/telas/TelaCard";
import { Tela } from "@/types/telas";

// --- TUS COLORES ---
const headerColors = [
  "#fa4647",
  "#92cddb",
  "#adabb0",
  "#5da7a6",
  "#ff7677",
  "#94bbce",
];

interface SubcategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

export async function generateMetadata({ params }: SubcategoryPageProps) {
  const cat = params.category.toUpperCase();
  const sub =
    params.subcategory === "todas"
      ? "Catálogo Completo"
      : params.subcategory.toUpperCase().replace("-", " ");

  return { title: `${cat} - ${sub} | Aibo Textil` };
}

export default async function SubcategoryPage({
  params,
}: SubcategoryPageProps) {
  const randomColor = headerColors[Math.floor(Math.random() * headerColors.length)];

  const mainCategory = params.category.toLowerCase();
  const subFilter = params.subcategory.toLowerCase();

  console.log(`🔎 Buscando: Main=${mainCategory} | Sub=${subFilter}`);

  let whereCondition: any = {};

  if (subFilter === "todas") {
    whereCondition = {
      OR: [
        {
          Tela_Categoria: {
            some: { Categorias: { Slug: { contains: mainCategory } } },
          },
        },
        { Nombre_Tela: { contains: mainCategory } },
        { Composicion: { contains: mainCategory } },
      ],
    };
  }
  else {
    const searchTerm =
      subFilter.replace(mainCategory, "").replace("-", "").trim() || subFilter;

    whereCondition = {
      AND: [
        {
          Tela_Categoria: {
            some: {
              Categorias: {
                Slug: { contains: searchTerm },
              },
            },
          },
        },
        {
          OR: [
            { Nombre_Tela: { contains: mainCategory } },
            { Composicion: { contains: mainCategory } },
            {
              Tela_Categoria: {
                some: { Categorias: { Slug: { contains: mainCategory } } },
              },
            },
          ],
        },
      ],
    };
  }

  const { db } = await import("@/lib/db");

  const telasRaw = await db.telas.findMany({
    where: whereCondition,
    orderBy: { Id_Tela: "desc" },
    include: {
      Tela_Categoria: {
        include: { Categorias: true },
      },
    },
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
      categorias: [],
    };
  });

  return (
    <main className="min-h-screen bg-gray-50">
      
      <header 
        className="w-full text-white py-6 px-6 shadow-lg relative z-10 transition-colors duration-500 ease-in-out"
        style={{ backgroundColor: randomColor }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative">
          
          {/* BOTÓN VOLVER (Posicionado Absolutamente a la izquierda en PC) */}
          <Link
            href={`/telas/${params.category}`}
            className="self-start md:self-auto md:absolute md:left-0 flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="hidden md:inline">Volver a </span>
            {params.category}
          </Link>

          {/* TÍTULO (Centrado perfectamente porque ya no hay espaciador a la derecha) */}
          <div className="text-center w-full">
            <span className="block text-xs md:text-sm font-bold opacity-80 uppercase tracking-[0.15em] mb-1 drop-shadow-sm">
              Catálogo / {params.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-widest leading-none drop-shadow-md">
              {subFilter === "todas"
                ? "Colección Completa"
                : subFilter.replace("-", " ")}
            </h1>
          </div>

          
        </div>
      </header>

      <section className="container mx-auto px-6 py-16 md:py-24">
        {telasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {telasFiltradas.map((tela) => (
              <Link
                key={tela.id}
                href={`/telas/${params.category}/${params.subcategory}/${tela.id}`}
                className="group block transition-transform hover:-translate-y-2 duration-300"
              >
                <TelaCard tela={tela} />
              </Link>
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
          </div>
        )}
      </section>
    </main>
  );
}