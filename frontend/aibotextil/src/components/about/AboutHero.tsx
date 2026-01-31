import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imagesAboutUs/banner_quienes_somos.jpg" 
          alt="Detalle textil"
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-4">
        <span className="text-aibo-red font-bold tracking-[0.2em] uppercase text-sm md:text-base animate-fade-in-up">
          Nuestra Esencia
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
          Innovación detrás de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            cada victoria
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto pt-4">
          Más que proveedores, somos aliados estratégicos en la evolución de la industria textil deportiva en Guatemala.
        </p>
        <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto pt-4">
          
        </p>
      </div>

    </section>
  );
};

export default AboutHero;