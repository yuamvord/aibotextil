import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 flex items-center justify-center min-h-[80vh]">
      
      {/* 1. FONDO (La foto del Showroom) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-showroom.jpg" // La foto de tu diseño (tienda con telas)
          alt="Showroom Aibo Textil"
          fill
          className="object-cover"
        />
        {/* Capa blanca suave (o negra suave) para atenuar la foto y que se lea el texto */}
        {/* En tu diseño parece que la foto tiene su color natural, 
            pero recomiendo una capa oscura muy sutil para contraste */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. CONTENEDOR DE LAS TARJETAS */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          
          {/* --- TARJETA MISIÓN --- */}
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

          {/* --- TARJETA VISIÓN --- */}
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