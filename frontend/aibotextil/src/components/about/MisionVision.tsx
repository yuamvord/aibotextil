import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 flex items-center justify-center min-h-[80vh]">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imagesAboutUs/about-showroom.jpg" 
          alt="Showroom Aibo Textil"
          fill
          className="object-cover"
        />
       
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          
          <div className="group border-2 border-white rounded-[2rem] p-8 md:p-12 text-center text-white backdrop-blur-sm bg-white/5 hover:bg-black/40 transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide drop-shadow-md">
              Misión
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-light opacity-90">
              Proveer al mercado guatemalteco de telas deportivas premium con innovación 
              tecnológica, sostenibilidad y calidad superior, impulsando a diseñadores, 
              maquilas y marcas locales a competir a nivel global, fomentando un consumo 
              responsable y consciente.
            </p>
          </div>

          <div className="group border-2 border-white rounded-[2rem] p-8 md:p-12 text-center text-white backdrop-blur-sm bg-white/5 hover:bg-black/40 transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide drop-shadow-md">
              Visión
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-light opacity-90">
              Ser la empresa líder en Guatemala en la comercialización de telas deportivas 
              de alta gama. Siendo reconocida por el compromiso con la innovación, el medio 
              ambiente y el impulso al desarrollo de la industria textil local.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default MissionVision;