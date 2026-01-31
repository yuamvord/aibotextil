import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imagesHome/aboutus-bg.jpg" 
          alt="Fondo de telas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>


      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

      <div className="relative z-20 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Quienes <br />
              <span className="text-aibo-red">Somos</span>
            </h2>

            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
              En{" "}
              <strong className="font-semibold text-white">Aibo Textil</strong>{" "}
              somos una empresa guatemalteca especializada en la comercialización de telas deportivas de alta calidad. Ofrecemos materiales como nailon, poliéster y spandex, integrando innovación tecnológica y sostenibilidad para acercar al mercado local los más altos estándares internacionales.
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

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute top-4 right-4 w-full h-full border-2 border-aibo-red/50 rounded-2xl -z-10 hidden md:block"></div>

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

              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
