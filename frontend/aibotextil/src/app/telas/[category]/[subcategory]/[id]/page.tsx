import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Scale, Ruler, Layers, ArrowLeft, Home, Printer, FileText } from "lucide-react";
import { db } from "@/lib/db";
import ProductGallery from "@/components/telas/ProductGallery";
import AddToCartBtn from "@/components/telas/AddToCartBtn";

interface ProductPageProps {
  params: {
    category: string;
    subcategory: string;
    id: string;
  };
}

function cleanImageUrl(url: string | null) {
  if (!url) return "/images/placeholder.jpg";
  let temp = url.replace(/\\/g, "/");
  temp = temp.replace(/^\\public/, "").replace(/^public/, "").replace(/^\/public/, "");
  if (!temp.startsWith("/")) temp = "/" + temp;
  return temp;
}

const formatText = (text: string) => text.replace(/-/g, " ").toUpperCase();

export default async function ProductPage({ params }: ProductPageProps) {
  const telaId = parseInt(params.id);

  if (isNaN(telaId)) return notFound();

  const tela = await db.telas.findUnique({
    where: { Id_Tela: telaId },
    include: {
      tela_imagenes: { orderBy: { Orden: 'asc' } },
      Tela_Categoria: { include: { Categorias: true } },
      
      Telas_Desc: {
        include: {
          Descripcion: true 
        }
      } 
    }
  });

  if (!tela) return notFound();

  const mainImage = cleanImageUrl(tela.Url_Imagen);
  const galleryImages = tela.tela_imagenes.map((img: any) => cleanImageUrl(img.Imagen_Url));

  const descripciones: string[] = [];

  if (tela.Telas_Desc && tela.Telas_Desc.length > 0) {
     tela.Telas_Desc.forEach((puente: any) => {
        if (puente.Descripcion && puente.Descripcion.Tag) {
           descripciones.push(puente.Descripcion.Tag);
        }
     });
  }

  if (descripciones.length === 0) {
      descripciones.push("Sin descripción detallada.");
  }

  const sublimadoRaw = (tela as any).Sublimado || "No especificado";
  const esSublimable = !sublimadoRaw.toLowerCase().includes("no sublimable");

  const phone = "50230063365"; 
  const message = `Hola Aibo Textil, me interesa cotizar la tela: *${tela.Nombre_Corto}* (Código: ${tela.Codigo_Aibo}).`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen bg-white pb-20">
      
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            <Link 
                href={`/telas/${params.category}/${params.subcategory}`}
                className="group flex items-center gap-3 text-gray-600 hover:text-blue-900 transition-colors"
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all shadow-sm">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Volver a</span>
                    <span className="text-sm md:text-base font-black uppercase tracking-wide leading-none">
                        {formatText(params.subcategory)}
                    </span>
                </div>
            </Link>

            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <Link href="/telas" className="hover:text-blue-600 flex items-center gap-1">
                    <Home size={12} /> Catálogo
                </Link>
                <span>/</span>
                <Link href={`/telas/${params.category}`} className="hover:text-blue-600">
                    {formatText(params.category)}
                </Link>
                <span>/</span>
                <span className="text-gray-800 bg-gray-100 px-2 py-1 rounded">
                    {tela.Codigo_Aibo || "Vista"}
                </span>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* GALERÍA */}
          <div>
             <ProductGallery 
                mainImage={mainImage} 
                extraImages={galleryImages} 
                title={tela.Nombre_Corto || "Tela"}
             />
          </div>

          <div className="flex flex-col pt-2">
            
            <div className="mb-6 border-b border-gray-100 pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {tela.Codigo_Aibo || "S/C"}
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {formatText(params.category)}
                    </span>
                </div>
                
                <h1 className="text-1xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-3">
                    {tela.Nombre_Tela}
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Scale size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">Peso</span>
                    </div>
                    <p className="text-xl font-bold text-gray-800">{tela.Peso || "N/A"}</p>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Ruler size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">Ancho</span>
                    </div>
                    <p className="text-xl font-bold text-gray-800">{tela.Ancho || "N/A"}</p>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Layers size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">Composición</span>
                    </div>
                    <p className="text-base font-bold text-gray-800 leading-tight">{tela.Composicion || "N/A"}</p>
                </div>

                <div className={`p-5 rounded-xl border transition-colors flex flex-col justify-center
                    ${esSublimable ? 'bg-blue-100 border-[#92cddb] hover:border-[#92cddb]' : 'bg-gray-100 border-gray-200'}
                `}>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Printer size={18} className={esSublimable ? "text-gray-700" : "text-gray-400"} />
                        <span className={`text-xs font-bold uppercase tracking-wider ${esSublimable ? "text-gray-800/60" : "text-gray-500"}`}>
                            Sublimación
                        </span>
                    </div>
                    <p className={`text-xl font-bold ${esSublimable ? "text-blue-700" : "text-gray-500"}`}>
                        {sublimadoRaw}
                    </p>
                </div>
            </div>

            <div className="mb-10 p-5 bg-gray-50 rounded-xl border border-gray-100">
                {descripciones.map((desc, index) => (
                    <div key={index} className="flex gap-3 mb-3 last:mb-0">
                        <FileText className="shrink-0 text-blue-400 mt-1" size={20} />
                        <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    <MessageCircle size={24} />
                    <span className="uppercase tracking-widest text-sm md:text-base">Cotizar WhatsApp</span>
                </a>

                <AddToCartBtn 
                  item={{
                    id: tela.Id_Tela,
                    name: tela.Nombre_Tela || "Tela",
                    code: tela.Codigo_Aibo || "S/C",
                    image: mainImage
                  }} 
                />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}