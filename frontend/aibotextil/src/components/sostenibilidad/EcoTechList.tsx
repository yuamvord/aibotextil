import Image from "next/image";
import { cn } from "@/lib/utils";
import { Leaf, Recycle, Droplets, Waves } from "lucide-react";

const ecoTechs = [
  {
    id: "bamboo",
    title: "BAMBOO",
    subtitle: "FIBRA NATURAL & BIODEGRADABLE",
    description: "Fibra textil obtenida del bambú. Es suave, ligera, transpirable, antibacteriana natural y biodegradable. Aporta frescura y sostenibilidad.",
    uses: "Ropa deportiva ecofriendly, calcetines, camisetas, ropa íntima.",
    image: "/images/imagesSostenibility/eco-bamboo.png",
    icon: Leaf, 
    color: "bg-green-100 text-green-600", 
  },
  {
    id: "rpet",
    title: "RPET",
    subtitle: "RECICLADO PET",
    description: "Poliéster reciclado proveniente de botellas plásticas (PET). Se transforma el plástico en fibra textil reduciendo residuos y el consumo de petróleo.",
    uses: "Uniformes, ropa deportiva, mochilas, textiles sostenibles.",
    image: "/images/imagesSostenibility/eco-rpet.png",
    icon: Recycle, 
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "sorbtek",
    title: "REPREVE SORBTEK",
    subtitle: "RECICLADO + GESTIÓN DE HUMEDAD",
    description: "Fibra reciclada de la marca Repreve con tecnología Sorbtek. Hecha de botellas recicladas, absorbe y expulsa la humedad 3 veces más rápido que el poliéster normal.",
    uses: "Camisetas deportivas de alto rendimiento, ropa outdoor.",
    image: "/images/imagesSostenibility/eco-sorbtek.png",
    icon: Droplets, 
    color: "bg-teal-50 text-teal-600",
  },
  {
    id: "ocean",
    title: "REPREVE OUR OCEAN",
    subtitle: "RECICLADO DEL OCÉANO",
    description: "Línea de fibras hechas con plásticos recolectados en zonas costeras. Enfocada en reducir la contaminación marina, convirtiendo el plástico en hilo de alto rendimiento.",
    uses: "Textiles deportivos, moda sostenible, ropa outdoor.",
    image: "/images/imagesSostenibility/eco-ocean.png",
    icon: Waves, 
    color: "bg-cyan-50 text-cyan-600",
  },
];

const EcoTechList = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {ecoTechs.map((tech, index) => {
        const Icon = tech.icon;
        const isEven = index % 2 === 0;

        return (
          <section key={tech.id} className="w-full py-20 px-6 border-b border-gray-100 last:border-0">
            <div className="container mx-auto max-w-6xl">
              <div className={cn(
                "flex flex-col gap-12 items-center",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                
                <div className="flex-1 w-full relative group">
                  <div className={cn("absolute top-4 -left-4 w-full h-full rounded-2xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2", tech.color.split(" ")[0])}></div>
                  
                  <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-3 rounded-full", tech.color)}>
                      <Icon size={28} />
                    </div>
                    <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                      Tecnología Sostenible
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-gray-800 uppercase tracking-tight">
                    {tech.title}
                  </h2>
                  
                  <h3 className="text-lg font-bold text-emerald-600 uppercase tracking-wide">
                    {tech.subtitle}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                      Aplicaciones Recomendadas:
                    </p>
                    <p className="text-gray-700 font-medium italic">
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

export default EcoTechList;