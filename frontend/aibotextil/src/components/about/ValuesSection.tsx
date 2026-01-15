import Image from "next/image";
import { cn } from "@/lib/utils"; 

const values = [
  {
    id: 1,
    title: "CALIDAD",
    description: "Garantizamos productos certificados con estándares internacionales, asegurando durabilidad y resistencia en cada metro.",
    delay: "delay-100", 
  },
  {
    id: 2,
    title: "INNOVACIÓN",
    description: "Buscamos constantemente nuevas tecnologías textiles para ofrecer materiales que mejoren el rendimiento deportivo.",
    delay: "delay-200",
  },
  {
    id: 3,
    title: "SOSTENIBILIDAD",
    description: "Compromiso activo con procesos eco-amigables y la incorporación de materiales reciclados en nuestro catálogo.",
    delay: "delay-300",
  },
  {
    id: 4,
    title: "SERVICIO",
    description: "Atención personalizada, asesoría experta y logística eficiente para cumplir con los tiempos de tu producción.",
    delay: "delay-400",
  },
  {
    id: 5,
    title: "INTEGRIDAD",
    description: "Operamos con total transparencia, ética y honestidad en todas nuestras relaciones comerciales.",
    delay: "delay-500",
  },
  {
    id: 6,
    title: "EXCELENCIA",
    description: "La búsqueda continua de la perfección en nuestros productos, procesos y atención al cliente.",
    delay: "delay-600",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
      
      {/* --- CAPA 1: IMAGEN DE FONDO (Al fondo) --- */}
      {/* Quitamos el z-index negativo. Solo 'absolute inset-0' */}
      <div className="absolute inset-0">
        <Image
          src="/images/values-bg.png" 
          alt="Fondo textura tela"
          fill
          className="object-cover grayscale-[10%]"
        />
      </div>

      {/* --- CAPA 2: OVERLAY BLANCO (Encima de la imagen) --- */}
      {/* Bajé la opacidad a 60% (bg-white/60) para probar que se vea la imagen de abajo. 
          Si se ve muy oscura, súbelo a /80 luego. */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>


      {/* --- CAPA 3: CONTENIDO (Encima de todo) --- */}
      {/* 'relative' y 'z-10' aseguran que esto flote sobre las capas absolutas anteriores */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-wider">
            Nuestros Valores
            </h2>
            <div className="w-16 h-1 bg-aibo-red mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value) => (
            <div 
              key={value.id}
              className={cn(
                "group p-4 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up",
                value.delay
              )}
            >
              <h3 className="text-xl md:text-2xl font-black text-gray-800 uppercase mb-4 tracking-tight group-hover:text-aibo-red transition-colors duration-300 flex items-center gap-3">
                <span className="block w-2 h-0 bg-aibo-red transition-all duration-300 group-hover:h-6"></span>
                {value.title}
              </h3>
              
              <p className="text-gray-700 text-lg leading-relaxed font-medium pl-5 border-l-2 border-transparent group-hover:border-gray-200 transition-all duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;