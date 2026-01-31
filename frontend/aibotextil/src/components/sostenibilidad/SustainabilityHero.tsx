import Image from "next/image";

const SustainabilityHero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imagesSostenibility/sust-hero.jpg"
          alt="Textiles Sostenibles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-900/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
        <div className="inline-block px-4 py-1 border border-green-400 rounded-full mb-2">
          <span className="text-green-300 text-sm font-bold tracking-widest uppercase">
            Eco-Innovation
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
          Tejiendo un futuro <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">
            más verde
          </span>
        </h1>
        
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
          Fusionamos innovación textil con responsabilidad ambiental. 
          Materiales que cuidan el planeta sin sacrificar el rendimiento.
        </p>
      </div>

    </section>
  );
};

export default SustainabilityHero;