import Image from "next/image";
import Link from "next/link";

// Datos de las categorías (Escalable: agrega más aquí y aparecerán solas)
const categories = [
  {
    id: 1,
    title: "NYLON",
    image: "/images/cat-nylon.png",
    link: "/telas/nylon",
    color: "bg-pink-500", // Fallback color si falla la imagen
  },
  {
    id: 2,
    title: "POLIÉSTER",
    image: "/images/cat-poliester.png",
    link: "/telas/poliester",
    color: "bg-gray-400",
  },
  {
    id: 3,
    title: "SPANDEX",
    image: "/images/cat-spandex.png",
    link: "/telas/spandex",
    color: "bg-cyan-500",
  },
  {
    id: 4,
    title: "JACQUARD",
    image: "/images/cat-jacquard.png",
    link: "/telas/jacquard",
    color: "bg-red-600",
  },
];

const ProductCategories = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden">
      
      {/* --- FONDO CON EFECTO DE TEXTURA BLANCA --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/bg-texture-white.png" // Tu textura de tela blanca
          alt="Textura de fondo"
          fill
          className="object-cover"
        />
      </div>
      {/* Capa blanca semitransparente para suavizar la textura (Overlay) */}
      <div className="absolute inset-0 bg-white/90 -z-10"></div>


      {/* --- CONTENIDO --- */}
      <div className="container mx-auto max-w-6xl">
        
        {/* Título de sección (Opcional, pero recomendado para SEO) */}
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight uppercase">
             Nuestros <span className="text-aibo-red">Materiales</span>
           </h2>
           <div className="w-24 h-1 bg-aibo-red mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.link}
              className="group relative h-64 md:h-80 w-full overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              
              {/* 1. IMAGEN DE LA TARJETA (Con efecto Zoom al pasar mouse) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 2. OVERLAY OSCURO (Para que se lea el texto) */}
              {/* Al hacer hover, se oscurece un poco más para resaltar el botón */}
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50"></div>

              {/* 3. CAJA CENTRAL Y TEXTO */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                
                {/* Caja con borde (Diseño de tu imagen) */}
                <div className="border-2 border-white px-8 py-3 mb-4 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase drop-shadow-md">
                    {cat.title}
                  </h3>
                </div>

                {/* Texto "Ver Más" (Aparece o se ilumina al hacer hover) */}
                <span className="text-sm font-medium tracking-wider uppercase opacity-80 group-hover:opacity-100 group-hover:text-aibo-red transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Ver Más &rarr;
                </span>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;