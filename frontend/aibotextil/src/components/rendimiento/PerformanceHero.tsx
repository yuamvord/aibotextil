import Image from "next/image";

const PerformanceHero = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center overflow-hidden bg-black">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imagesPerformance/hero-runner.png" 
          alt="Rendimiento Deportivo"
          fill
          className="object-cover opacity-60" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aibo-red/90 via-aibo-red/40 to-transparent mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 animate-fade-in-up">
        <div className="max-w-3xl">
          <p className="text-white font-bold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
            <span className="w-8 h-1 bg-white"></span>
            Tecnología Avanzada
          </p>
          
          <h1 className="text-5xl md:text-8xl font-black text-white italic uppercase leading-none transform -skew-x-6">
            TELAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              DEPORTIVAS
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-200 font-light max-w-xl">
            Ingeniería textil diseñada para potenciar cada movimiento, resistir el esfuerzo y proteger al atleta en condiciones extremas.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-aibo-red/20 skew-x-12 blur-3xl"></div>

    </section>
  );
};

export default PerformanceHero;