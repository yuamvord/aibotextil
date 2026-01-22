import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

// Componente personalizado para el icono de TikTok (Estilo Lucide)
const Tiktok = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-gray-300 font-light">
      {/* --- SECCIÓN PRINCIPAL (GRID) --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COLUMNA 1: MARCA Y DESCRIPCIÓN */}
          <div className="space-y-6">
            {/* Logo en versión blanco/negativo si tienes, si no el normal */}
            <div className="relative w-40 h-20">
              {/* Nota: Idealmente usa una versión del logo con letras blancas para fondo oscuro.
                   Si no tienes, CSS filter brightness puede ayudar o simplemente usa el normal. */}
              <Image
                src="/images/logo-aibo.png"
                alt="Aibo Textil"
                fill
                className="object-contain brightness-0 invert" // ESTO VUELVE EL LOGO BLANCO AUTOMÁTICAMENTE
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Innovación textil para el alto rendimiento. Comprometidos con la
              calidad y la sostenibilidad en cada fibra.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Redes Sociales con Hover Rojo */}
              <Link
                href="#"
                className="hover:text-aibo-red transition-colors duration-300"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-aibo-red transition-colors duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-aibo-red transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-aibo-red transition-colors duration-300"
              >
                <Tiktok size={20} />
              </Link>
            </div>
          </div>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">
              Empresa
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-aibo-red hover:pl-1 transition-all duration-300 block"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/quienes-somos"
                  className="hover:text-aibo-red hover:pl-1 transition-all duration-300 block"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/tecnologias"
                  className="hover:text-aibo-red hover:pl-1 transition-all duration-300 block"
                >
                  Tecnologías
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-aibo-red hover:pl-1 transition-all duration-300 block"
                >
                  Blog & Noticias
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: PRODUCTOS */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">
              Catálogo
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/productos/nylon"
                  className="hover:text-aibo-red hover:pl-1 transition-all duration-300 block"
                >
                  Telas Nylon
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/poliester"
                  className="hover:text-aibo-red hover:pl-1 transition-all duration-300 block"
                >
                  Poliéster
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/spandex"
                  className="hover:text-aibo-red hover:pl-1 transition-all duration-300 block"
                >
                  Spandex
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/jacquard"
                  className="hover:text-aibo-red hover:pl-1 transition-all duration-300 block"
                >
                  Jacquard
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-aibo-red mt-1 shrink-0" />
                <span>
                  Caes KM 15.5 Oficina 5F-1
                  <br />
                  CC PLAZA ZONA 7 SANTA CATARINA PINULA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-aibo-red shrink-0" />
                <span>+502 6646-8427</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-aibo-red shrink-0" />
                <a
                  href="mailto:aibotextil@hotmail.com"
                  className="hover:text-white transition-colors"
                >
                  aibotextil@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- BARRA INFERIOR (COPYRIGHT) --- */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            &copy; {currentYear} Aibo Textil. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="hover:text-white transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="hover:text-white transition-colors"
            >
              Términos y Condiciones
            </Link>
            <Link
              href="/"
              className="hover:text-white transition-colors text-base"
            >
              <em>Mateo 19:26</em>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
