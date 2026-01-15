import Image from "next/image";

const Banner = () => {
  return (
    // CONTENEDOR PRINCIPAL
    // - relative: Para que los elementos hijos absolutos se posicionen respecto a él.
    // - h-[75vh]: Altura del 75% de la pantalla (ajustable).
    // - overflow-hidden: Recorta cualquier parte del video que se salga.
    <section className="relative h-[75vh] w-full overflow-hidden bg-black">
      
      {/* --- CAPA 1: EL VIDEO DE FONDO (Al fondo de todo) --- */}
      <video 
        // absolute inset-0: Estira el video para ocupar todo el contenedor.
        // object-cover: Asegura que el video cubra el área sin deformarse (como un background-size: cover).
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay 
        muted 
        loop
        playsInline // Importante para que funcione en iOS
        poster="/images/video-poster.jpg" // Imagen de carga opcional
      >
        <source src="/videos/video-principal.mp4" type="video/mp4" />
      </video>

      {/* --- CAPA 2: FILTRO OSCURO (Encima del video) --- */}
      {/* bg-black/60: Fondo negro con 60% de opacidad. Puedes cambiarlo a /50 o /70 según el video. */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* --- CAPA 3: CONTENIDO (Logo y Texto, hasta el frente) --- */}
      {/* z-20: Se asegura de estar encima del filtro. Centra todo el contenido flex. */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center space-y-8">
        
        {/* LOGO CON ANIMACIÓN */}
        {/* Agregamos la clase 'animate-logo-entry' que creamos en el CSS */}
        <div className="relative h-40 w-72 md:h-56 md:w-[30rem] animate-logo-entry">
          <Image 
            src="/images/logo-aibo.png"
            alt="Aibo Textil Logo"
            fill
            // drop-shadow-xl: Le da una sombra suave para que resalte más sobre el fondo.
            className="object-contain drop-shadow-xl" 
            priority
          />
        </div>

        {/* SLOGAN CON ANIMACIÓN */}
        {/* Agregamos la clase 'animate-slogan-entry'. Cambié el color a blanco para contraste. */}
        <h2 className="text-xl md:text-3xl font-light italic text-white tracking-wider drop-shadow-md animate-slogan-entry">
          ¡Más que telas, innovación para el deporte!
        </h2>

      </div>

    </section>
  );
};

export default Banner;