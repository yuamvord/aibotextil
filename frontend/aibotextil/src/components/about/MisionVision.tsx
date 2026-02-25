const MissionVision = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[url('/images/imagesAboutUs/about-showroom.jpg')] bg-cover bg-center bg-no-repeat"
    >
      
      {/* Capa oscura: La ocultamos en celular (hidden) porque ya es gris, y la mostramos en PC (md:block) */}
      <div className="absolute inset-0 hidden md:block bg-black/50"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full px-4 py-20 md:px-12 md:py-32 flex flex-col justify-center min-h-[100svh] md:min-h-screen">
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            
            {/* Misión */}
            <div className="group border-2 border-white/40 md:border-white/80 rounded-[2rem] p-8 md:p-12 text-center text-white backdrop-blur-md bg-white/5 hover:bg-black/20 md:hover:bg-black/40 transition-all duration-500 h-full flex flex-col justify-center shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-wide drop-shadow-md">
                Misión
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-light opacity-90">
                Proveer al mercado guatemalteco de telas deportivas premium con innovación 
                tecnológica, sostenibilidad y calidad superior, impulsando a diseñadores, 
                maquilas y marcas locales a competir a nivel global, fomentando un consumo 
                responsable y consciente.
              </p>
            </div>

            {/* Visión */}
            <div className="group border-2 border-white/40 md:border-white/80 rounded-[2rem] p-8 md:p-12 text-center text-white backdrop-blur-md bg-white/5 hover:bg-black/20 md:hover:bg-black/40 transition-all duration-500 h-full flex flex-col justify-center shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-wide drop-shadow-md">
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

      </div>

    </section>
  );
};

export default MissionVision;