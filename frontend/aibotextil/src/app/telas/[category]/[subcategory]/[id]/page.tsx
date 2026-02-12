import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShoppingCart,
  MessageCircle,
  Ruler,
  Scale,
  Layers,
  Tag,
  ArrowLeft,
} from "lucide-react";
import { db } from "@/lib/db";
import ProductGallery from "@/components/telas/ProductGallery";
import AddToCartBtn from "@/components/telas/AddToCartBtn"; // <--- Importar

interface ProductPageProps {
  params: {
    category: string;
    subcategory: string;
    id: string;
  };
}

// Función auxiliar para limpiar URLs de imágenes (quita 'public', backslashes, etc.)
function cleanImageUrl(url: string | null) {
  if (!url) return "/images/placeholder.jpg";
  let temp = url.replace(/\\/g, "/");
  temp = temp
    .replace(/^\\public/, "")
    .replace(/^public/, "")
    .replace(/^\/public/, "");
  if (!temp.startsWith("/")) temp = "/" + temp;
  return temp;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const telaId = parseInt(params.id);

  if (isNaN(telaId)) return notFound();

  // 1. Buscamos la tela Y sus imágenes relacionadas
  const tela = await db.telas.findUnique({
    where: { Id_Tela: telaId },
    include: {
      tela_imagenes: {
        orderBy: { Orden: "asc" }, // Ordenamos las fotos extra si tienen orden
      },
      Tela_Categoria: {
        include: { Categorias: true },
      },
    },
  });

  if (!tela) return notFound();

  // 2. Preparamos las imágenes para la galería
  const mainImage = cleanImageUrl(tela.Url_Imagen);
  const galleryImages = tela.tela_imagenes.map((img) =>
    cleanImageUrl(img.Imagen_Url),
  );

  // 3. Generamos el link de WhatsApp
  const phone = "50200000000"; // PON TU NÚMERO AQUÍ
  const message = `Hola Aibo Textil, me interesa cotizar la tela: *${tela.Nombre_Corto}* (Código: ${tela.Codigo_Aibo}).`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* HEADER SIMPLE */}
      <div className="bg-gray-50 border-b py-4 px-6 mb-8">
        <div className="container mx-auto flex items-center gap-2 text-sm text-gray-500 uppercase font-medium">
          <Link
            href={`/telas/${params.category}`}
            className="hover:text-blue-600 transition-colors"
          >
            {params.category}
          </Link>
          <span>/</span>
          <Link
            href={`/telas/${params.category}/${params.subcategory}`}
            className="hover:text-blue-600 transition-colors"
          >
            {params.subcategory}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{tela.Nombre_Corto}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* --- COLUMNA IZQUIERDA: GALERÍA --- */}
          <div>
            <ProductGallery
              mainImage={mainImage}
              extraImages={galleryImages}
              title={tela.Nombre_Corto || "Tela"}
            />
          </div>

          {/* --- COLUMNA DERECHA: INFORMACIÓN --- */}
          <div className="flex flex-col justify-start pt-2">
            {/* TÍTULO Y CÓDIGO */}
            <div className="mb-8 border-b pb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                {tela.Codigo_Aibo || "Sin Código"}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-2">
                {tela.Nombre_Corto}
              </h1>
              <p className="text-gray-500 text-lg">{tela.Nombre_Tela}</p>
            </div>

            {/* ESPECIFICACIONES (GRID DE DATOS) */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Scale size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Peso / Gramaje
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  {tela.Peso || "N/A"}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Ruler size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Ancho
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  {tela.Ancho || "N/A"}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 col-span-2">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Layers size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Composición
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  {tela.Composicion || "N/A"}
                </p>
              </div>
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              {/* BOTÓN COTIZAR (WHATSAPP) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                <span className="uppercase tracking-widest">
                  Cotizar en WhatsApp
                </span>
              </a>

              {/* BOTÓN CARRITO (VISUAL POR AHORA) */}
              <AddToCartBtn
                item={{
                  id: tela.Id_Tela,
                  name: tela.Nombre_Corto || "Tela",
                  code: tela.Codigo_Aibo || "S/C",
                  image: mainImage,
                }}
              />
            </div>

            <p className="text-xs text-gray-400 mt-6 text-center">
              * Los colores pueden variar ligeramente dependiendo de la
              pantalla.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
