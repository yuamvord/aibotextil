import Image from "next/image";
import { cn } from "@/lib/utils"; 

const values = [
  {
    id: 1,
    title: "CALIDAD",
    description: "Garantizamos productos certificados con estándares internacionales, asegurando durabilidad y resistencia en cada metro.",
    delay: "delay-100", 
    // Azul: Confianza y seguridad
    hoverColor: "group-hover:text-[#fa4647]",
    barColor: "group-hover:bg-[#fa4647]"
  },
  {
    id: 2,
    title: "INNOVACIÓN",
    description: "Buscamos constantemente nuevas tecnologías textiles para ofrecer materiales que mejoren el rendimiento deportivo.",
    delay: "delay-200",
    // Morado: Creatividad y tecnología
    hoverColor: "group-hover:text-[#92cddb]",
    barColor: "group-hover:bg-[#92cddb]"
  },
  {
    id: 3,
    title: "SOSTENIBILIDAD",
    description: "Compromiso activo con procesos eco-amigables y la incorporación de materiales reciclados en nuestro catálogo.",
    delay: "delay-300",
    // Verde: Naturaleza y ecología
    hoverColor: "group-hover:text-[#adabb0]",
    barColor: "group-hover:bg-[#adabb0]"
  },
  {
    id: 4,
    title: "SERVICIO",
    description: "Atención personalizada, asesoría experta y logística eficiente para cumplir con los tiempos de tu producción.",
    delay: "delay-400",
    // Naranja: Energía y amabilidad
    hoverColor: "group-hover:text-[#5da7a6]",
    barColor: "group-hover:bg-[#5da7a6]"
  },
  {
    id: 5,
    title: "INTEGRIDAD",
    description: "Operamos con total transparencia, ética y honestidad en todas nuestras relaciones comerciales.",
    delay: "delay-500",
    // Indigo: Solidez y seriedad
    hoverColor: "group-hover:text-[#ff7677]",
    barColor: "group-hover:bg-[#ff7677]"
  },
  {
    id: 6,
    title: "EXCELENCIA",
    description: "La búsqueda continua de la perfección en nuestros productos, procesos y atención al cliente.",
    delay: "delay-600",
    // Rojo Aibo (o Rosa fuerte): Pasión y fuerza
    hoverColor: "group-hover:text-[#94bbce]",
    barColor: "group-hover:bg-[#94bbce]"
  },
];

const ValuesSection = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
      
      {/* --- CAPA 1: IMAGEN DE FONDO --- */}
      <div className="absolute inset-0">
        <Image
          src="/images/values-bg.png" 
          alt="Fondo textura tela"
          fill
          className="object-cover grayscale-[10%]"
        />
      </div>

      {/* --- CAPA 2: OVERLAY BLANCO --- */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>

      {/* --- CAPA 3: CONTENIDO --- */}
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
                "group p-4 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up cursor-default",
                value.delay
              )}
            >
              {/* TÍTULO con color dinámico */}
              <h3 className={cn(
                "text-xl md:text-2xl font-black text-gray-800 uppercase mb-4 tracking-tight transition-colors duration-300 flex items-center gap-3",
                value.hoverColor // <--- Aquí se aplica el color de texto único
              )}>
                
                {/* BARRA LATERAL con color dinámico */}
                <span className={cn(
                    "block w-2 h-0 transition-all duration-300 group-hover:h-6 bg-gray-400", // Color base gris
                    value.barColor // <--- Aquí se aplica el color de fondo único al hacer hover
                )}></span>
                
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