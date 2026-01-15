import Link from "next/link";
import { ArrowLeft, HardHat, Timer } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon = ({ 
  title, 
  description = "Estamos trabajando duro para traerte algo increíble. ¡Vuelve pronto!" 
}: ComingSoonProps) => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      
      {/* Icono animado o decorativo */}
      <div className="mb-8 p-6 bg-white rounded-full shadow-xl animate-bounce">
        <Timer size={64} className="text-aibo-red" />
      </div>

      {/* Título Grande */}
      <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tight mb-4">
        {title}
      </h1>
      
      {/* Etiqueta de "Próximamente" */}
      <div className="inline-block bg-aibo-red text-white text-sm font-bold px-4 py-1 rounded-full mb-6 tracking-widest uppercase">
        Próximamente
      </div>

      {/* Descripción */}
      <p className="text-lg text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
        {description}
      </p>

      {/* Botón de Regreso */}
      <Link 
        href="/"
        className="group flex items-center gap-2 px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-aibo-red transition-all duration-300 shadow-lg hover:shadow-red-500/30"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Volver al Inicio
      </Link>

    </div>
  );
};

export default ComingSoon;