import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* --- 1. IMAGEN DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aboutus-bg.jpg" // Asegúrate de tener esta imagen
          alt="Fondo de telas"
          fill
          className="object-cover"
        />
        {/* Capa oscura para que el texto blanco se lea bien sobre las telas */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* --- 2. EL DEGRADADO DE TRANSICIÓN (La magia) --- */}
      {/* Esto crea un difuminado desde negro (arriba) hacia transparente (abajo) 
          para que se fusione con la sección anterior sin cortes bruscos. */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

      {/* --- 3. CONTENIDO PRINCIPAL --- */}
      <div className="relative z-20 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="text-white space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Quienes <br />
              <span className="text-aibo-red">Somos</span>
            </h2>

            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
              En{" "}
              <strong className="font-semibold text-white">Aibo Textil</strong>{" "}
              somos una empresa dedicada a la comercialización de telas
              deportivas en Guatemala. Ofrecemos materiales de la más alta
              calidad, con innovación tecnológica y sostenibilidad.
            </p>

            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
              Comprometidos en acercar al mercado local el mejor estándar
              internacional, ayudando a marcas y confeccionistas a crear prendas
              de alto rendimiento.
            </p>

         
            <div className="pt-4">
              <Link
                href="/quienes-somos"
                className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wider uppercase rounded-sm"
              >
                Conocer más
              </Link>
            </div>
          </div>

          {/* COLUMNA DERECHA: VIDEO CUADRADO ESTILIZADO */}
          <div className="relative flex justify-center md:justify-end">
            {/* Elemento decorativo detrás del video (un borde desplazado) */}
            <div className="absolute top-4 right-4 w-full h-full border-2 border-aibo-red/50 rounded-2xl -z-10 hidden md:block"></div>

            {/* Contenedor del Video */}
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <video
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/about-video-aibo.mp4" type="video/mp4" />
              </video>

              {/* Brillo sutil sobre el video para darle volumen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
