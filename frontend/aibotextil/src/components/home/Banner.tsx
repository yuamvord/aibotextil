import Image from "next/image";

const Banner = () => {
  return (
   
    <section className="relative h-[75vh] w-full overflow-hidden bg-black">
      
      <video 
       
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay 
        muted 
        loop
        playsInline 
        poster="/images/video-poster.jpg" 
      >
        <source src="/videos/video-principal.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center space-y-8">
        
        <div className="relative h-40 w-72 md:h-56 md:w-[30rem] animate-logo-entry">
          <Image 
            src="/images/imagesLogos/logo-aibo.png"
            alt="Aibo Textil Logo"
            fill
            className="object-contain drop-shadow-xl" 
            priority
          />
        </div>

        <h2 className="text-xl md:text-3xl font-light italic text-white tracking-wider drop-shadow-md animate-slogan-entry">
          ¡Más que telas, innovación para el deporte!
        </h2>

      </div>

    </section>
  );
};

export default Banner;