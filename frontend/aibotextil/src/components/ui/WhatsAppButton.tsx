import Link from "next/link";
import { MessageCircle } from "lucide-react"; // Usamos un icono elegante

const WhatsAppButton = () => {
  // Reemplaza con tu número real
  const phoneNumber = "50230063365"; 
  const message = "Hola, estoy visitando su sitio web y me gustaría recibir asesoría.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      {/* TOOLTIP (Texto que aparece al lado) */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block border border-gray-100">
        ¿Necesitas ayuda?
        {/* Triangulito del tooltip */}
        <span className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white transform rotate-45 border-t border-r border-gray-100"></span>
      </span>

      {/* EL BOTÓN REDONDO */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full shadow-lg border-2 border-white hover:bg-aibo-red hover:-translate-y-1 transition-all duration-300 hover:shadow-red-500/40">
        
        {/* Efecto de "Onda" (Pulse) sutil detrás */}
        <div className="absolute inset-0 rounded-full border border-gray-900 opacity-20 animate-ping group-hover:border-aibo-red"></div>

        {/* Icono */}
        {/* Usamos el SVG oficial de WhatsApp para mejor reconocimiento, 
            o el MessageCircle de Lucide si prefieres minimalismo absoluto.
            Aquí pongo el SVG de WhatsApp pero en BLANCO para que combine. */}
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-7 h-7 md:w-8 md:h-8 text-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
    </Link>
  );
};

export default WhatsAppButton;