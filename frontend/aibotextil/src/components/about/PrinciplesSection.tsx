import { 
  Scale, 
  LayoutGrid, 
  Handshake, 
  RefreshCw, 
  Globe 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Datos basados en tu imagen de referencia
const principles = [
  {
    id: 1,
    text: "Equilibrar rendimiento y respeto ambiental",
    icon: Scale,
    color: "bg-teal-600", // Color del círculo principal
    shadow: "bg-teal-800/20", // Color de la sombra (opcional) o usamos gris fijo
    delay: "delay-100",
  },
  {
    id: 2,
    text: "Fomentar la competitividad de la industria textil Guatemalteca",
    icon: LayoutGrid, // Representa el tejido/estructura
    color: "bg-aibo-red",
    delay: "delay-200",
  },
  {
    id: 3,
    text: "Establecer relaciones comerciales sólidas y confiables",
    icon: Handshake,
    color: "bg-gray-500",
    delay: "delay-300",
  },
  {
    id: 4,
    text: "Promover mejora continua en procesos, calidad y servicio",
    icon: RefreshCw,
    color: "bg-sky-400",
    delay: "delay-400",
  },
  {
    id: 5,
    text: "Inspirar a marcas locales con materiales de nivel mundial",
    icon: Globe,
    color: "bg-pink-400",
    delay: "delay-500",
  },
];

const PrinciplesSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl text-center">
        
        {/* --- TÍTULO --- */}
        <div className="inline-block mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white bg-aibo-red px-8 py-2 shadow-md transform -skew-x-6">
            <span className="block transform skew-x-6 uppercase tracking-wide">
              Principios
            </span>
          </h2>
        </div>

        {/* --- FILA DE ICONOS (Flex en PC, Grid en Móvil) --- */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-8 lg:gap-12">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className={cn(
                  "group flex flex-col items-center w-40 md:w-48 animate-fade-in-up", 
                  item.delay
                )}
              >
                {/* CONTENEDOR DE LOS CÍRCULOS (Relativo para posicionar capas) */}
                <div className="relative w-28 h-28 mb-8 cursor-pointer">
                  
                  {/* 1. LA SOMBRA GRIS (Círculo de atrás) */}
                  {/* Se queda quieta o se mueve menos, creando profundidad */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-200 transform translate-x-[-15%] translate-y-[10%] transition-transform duration-300 group-hover:translate-x-[-20%] group-hover:translate-y-[15%]"></div>

                  {/* 2. EL CÍRCULO DE COLOR (Círculo principal) */}
                  <div className={cn(
                    "absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105",
                    item.color
                  )}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                </div>

                {/* TEXTO DESCRIPTIVO */}
                <p className="text-sm md:text-base text-gray-600 font-medium leading-snug px-2">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* --- SLOGAN FINAL --- */}
        <div className="mt-20 animate-fade-in-up delay-600">
          <p className="text-xl md:text-2xl text-gray-400 font-light italic">
            ¡Innovación, calidad y sostenibilidad en <span className="text-aibo-red font-normal">cada fibra</span>!
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrinciplesSection;