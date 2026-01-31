import Image from "next/image";
import { cn } from "@/lib/utils";
import { 
  Droplets, 
  Zap,     
  Sun,     
  ShieldCheck, 
  ThermometerSnowflake,
  Waves
} from "lucide-react";

const perfTechs = [
  {
    id: "wicking",
    title: "MOISTURE WICKING",
    subtitle: "ABSORCIÓN DE HUMEDAD",
    description: "Transporte de humedad 'sweat management'. Absorbe el sudor de la piel y lo lleva a la superficie exterior de la tela para evaporarse rápidamente.",
    uses: "Ropa deportiva de alto rendimiento, interior funcional.",
    image: "/images/imagesPerformance/tech-wicking.jpg",
    icon: Droplets,
    accent: "bg-blue-600",
  },
  {
    id: "quickdry",
    title: "QUICK DRY",
    subtitle: "SECADO RÁPIDO",
    description: "Tecnología que permite que la tela se seque rápidamente. Las fibras están diseñadas para no retener la humedad, sino dispersarla sobre una superficie amplia.",
    uses: "Camisetas deportivas, ropa de entrenamiento y outdoor.",
    image: "/images/imagesPerformance/tech-quick.jpg",
    icon: Zap,
    accent: "bg-yellow-500",
  },
  {
    id: "uv",
    title: "UPF 50+",
    subtitle: "ANTI-UV",
    description: "Factor de Protección Ultravioleta 50+. Bloquea más del 98% de los rayos UVA y UVB. El tejido actúa como una barrera solar física.",
    uses: "Ropa para correr, ciclismo, natación y actividades al aire libre.",
    image: "/images/imagesPerformance/tech-uv.jpg",
    icon: Sun,
    accent: "bg-orange-500",
  },
  {
    id: "antibacterial",
    title: "ANTI-BACTERIAL",
    subtitle: "HIGIENE TOTAL",
    description: "Tejidos tratados con agentes que inhiben el crecimiento bacteriano. Evita el mal olor en la ropa deportiva incluso tras entrenamientos intensos.",
    uses: "Ropa interior, uniformes, ropa hospitalaria.",
    image: "/images/imagesPerformance/tech-bacterial.jpg",
    icon: ShieldCheck,
    accent: "bg-emerald-500",
  },
  {
    id: "cooling",
    title: "COOLING",
    subtitle: "ENFRIAMIENTO ACTIVO",
    description: "Las fibras dispersan el calor corporal y generan sensación de frescura mediante microcanales o minerales refrigerantes integrados.",
    uses: "Ropa para climas cálidos, running, ciclismo.",
    image: "/images/imagesPerformance/tech-cooling.jpg",
    icon: ThermometerSnowflake,
    accent: "bg-cyan-500",
  },
  {
    id: "waterprof",
    title: "WATERPROF",
    subtitle: "ALTO RENDIMIENTO",
    description: "En Aibo Textil ofrecemos telas técnicas de alto rendimiento con resistencia superior al agua (hasta 20,000 mm de carga hidrostática), costuras selladas y membranas transpirables que permiten evacuar el vapor del sudor sin dejar pasar el agua, garantizando sequedad y confort incluso en condiciones extremas. Nuestras telas brindan protección contra el viento y los rayos UV, alta durabilidad y ligereza, además de flexibilidad y diseño moderno para aplicaciones deportivas, outdoor y urbanas. Incorporamos innovaciones sostenibles con materiales reciclables y tecnologías eco conscientes, cumpliendo estándares internacionales de calidad, para asegurar un rendimiento confiable y responsable.",
    uses: "Ropa deportiva, equipamiento de aventura, moda urbana.",
    image: "/images/imagesPerformance/tech-waterprof.jpg",
    icon: Waves,
    accent: "bg-cyan-500",
  }
];

const PerformanceTechList = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {perfTechs.map((tech, index) => {
        const Icon = tech.icon;
        const isEven = index % 2 === 0;

        return (
          <section key={tech.id} className="relative w-full py-24 px-6 overflow-hidden">
            
            {!isEven && <div className="absolute inset-0 bg-gray-50 skew-y-1 transform origin-top-left -z-10"></div>}

            <div className="container mx-auto max-w-6xl relative z-10">
              <div className={cn(
                "flex flex-col gap-16 items-center",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                
                <div className="flex-1 w-full group">
                  <div className="relative h-[400px] w-full shadow-2xl overflow-hidden">
                    <div className={cn("absolute top-0 right-0 w-full h-full opacity-20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6", tech.accent)}></div>
                    
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    
                    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity mix-blend-overlay", tech.accent)}></div>
                  </div>
                </div>

                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-4 text-white shadow-lg transform -skew-x-12", tech.accent)}>
                      <Icon size={32} strokeWidth={2} className="transform skew-x-12" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic uppercase tracking-tighter">
                      {tech.title}
                    </h2>
                  </div>

                  <div className="border-l-4 border-gray-900 pl-6 py-2">
                    <h3 className="text-xl font-bold text-aibo-red uppercase tracking-widest mb-2">
                      {tech.subtitle}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                      {tech.description}
                    </p>
                  </div>

                  <div className="bg-gray-100 p-5 rounded-sm">
                    <p className="text-xs font-black text-gray-400 uppercase mb-2">
                      Ideal Para:
                    </p>
                    <p className="text-gray-800 font-bold uppercase tracking-wide">
                      {tech.uses}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default PerformanceTechList;