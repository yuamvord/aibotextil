import Image from "next/image";
import Link from "next/link";

const certs = [
  {
    name: "OEKO-TEX Standard 100",
    image: "/images/oeko-tex.png", // Asegúrate de que el nombre coincida
    width: 290, // Ajuste visual para que se vean del mismo tamaño
    height: 290,
    link: "/certificaciones",
  },
  {
    name: "Global Recycled Standard",
    image: "/images/grs.png",
    width: 290, 
    height: 290,
    link: "/certificaciones",
  },
];

const Certifications = () => {
  return (
    <section className="w-full py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        
        {/* Título de la Sección */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
          Calidad Certificada Internacionalmente
        </h3>

        {/* Grid de Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-500">
          {certs.map((cert) => (
            <Link 
              key={cert.name} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-all duration-300 transform hover:scale-105"
            >
              {/* Truco de Diseño: 
                 Usamos 'grayscale' (blanco y negro) por defecto para que no choque con el rojo de tu marca.
                 Al pasar el mouse (hover), recupera su color original (Verde/Teal).
              */}
              <div className="relative h-24 w-48 md:h-32 md:w-64">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Texto pequeño de refuerzo */}
        <p className="mt-10 text-sm text-gray-400 max-w-2xl mx-auto font-light">
          Nuestros productos cuentan con la certificación OEKO-TEX®, la cual garantiza que los textiles son seguros para el usuario al estar en contacto directo con la piel. Este sello respalda nuestro compromiso con la salud de las personas y el cuidado del medio ambiente
        </p>

      </div>
    </section>
  );
};

export default Certifications;