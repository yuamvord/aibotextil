import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Leaf } from "lucide-react";

export const metadata = {
  title: "Certificaciones y Calidad | Aibo Textil",
  description: "Garantizamos la seguridad y sostenibilidad de nuestras telas con certificaciones internacionales OEKO-TEX y GRS.",
};

export default function CertificacionesPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 overflow-hidden relative">
      
      {/* --- FONDO CON TEXTURA TÉCNICA (CSS PURO) --- */}
      {/* Esto crea un patrón de puntos sutil que parece tela deportiva */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }}>
      </div>
      
      {/* Manchas de color de fondo para dar profundidad (Atmósfera) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>


      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-24 pb-12 px-6 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-aibo-red/10 text-aibo-red text-sm font-bold tracking-widest uppercase mb-4">
          Transparencia y Calidad
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tight mb-6">
          Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-aibo-red to-red-900">Certificaciones</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          En Aibo Textil, la calidad no es solo una promesa, es una norma verificada. 
          Trabajamos bajo los estándares internacionales más rigurosos para cuidar de ti y del planeta.
        </p>
      </section>


      {/* --- CERTIFICACIÓN 1: GRS (Global Recycled Standard) --- */}
      <section className="relative z-10 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Tarjeta con efecto "Vidrio" */}
          <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Lado Visual (Imagen) */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] p-12 flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Decoración de fondo */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              {/* Logo con efecto flotante */}
              <div className="relative w-64 h-64 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src="/images/grs.png" // Asegúrate de que la ruta sea correcta
                  alt="Global Recycled Standard"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Lado Contenido (Texto) */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-cyan-600 font-bold uppercase tracking-widest mb-2">
                <RecycleIcon /> Sostenibilidad Verificada
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Global Recycled Standard (GRS)
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Esta certificación garantiza que nuestros textiles reciclados cumplen con requisitos estrictos: desde el origen del material reciclado hasta prácticas sociales y medioambientales responsables en su producción.
              </p>
              
              <ul className="space-y-4">
                <ListItem text="Rastreo completo de materiales reciclados." />
                <ListItem text="Reducción del impacto químico nocivo." />
                <ListItem text="Garantía de condiciones laborales justas." />
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* --- CERTIFICACIÓN 2: OEKO-TEX (Alternado) --- */}
      <section className="relative z-10 py-16 px-6 pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse">
            
            {/* Lado Visual */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-12 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
              
              <div className="relative w-64 h-64 transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                <Image
                  src="/images/oeko-tex.png" // Asegúrate de que la ruta sea correcta
                  alt="OEKO-TEX Standard 100"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Lado Contenido */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest mb-2">
                <ShieldCheck className="w-5 h-5" /> Seguridad Humana
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                OEKO-TEX® Standard 100
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Si una prenda lleva la etiqueta STANDARD 100, puedes tener la certeza de que cada hilo, botón y accesorio ha sido sometido a pruebas de sustancias nocivas. Es seguridad total para tu piel.
              </p>
              
              <ul className="space-y-4">
                <ListItem text="Libre de sustancias químicas perjudiciales." />
                <ListItem text="Seguro para contacto directo con la piel." />
                <ListItem text="Estándares globales unificados anualmente." />
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="relative z-10 bg-gray-900 py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern-lines.png')]"></div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">¿Buscas telas certificadas para tu marca?</h2>
          <p className="text-gray-400 mb-8">
            Eleva el valor de tus productos utilizando materiales que tus clientes amarán y respetarán.
          </p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-aibo-red text-white font-bold uppercase tracking-widest rounded hover:bg-white hover:text-black transition-all duration-300">
            Solicitar Catálogo Certificado
          </Link>
        </div>
      </section>

    </main>
  );
}

// Componentes pequeños para limpiar el código
const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="w-6 h-6 text-aibo-red flex-shrink-0" />
    <span className="text-gray-700 font-medium">{text}</span>
  </li>
);

const RecycleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" height="20" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M7 19a1 1 0 0 1-1-1 1 1 0 0 1 1-1h10a1 1 0 0 1 1 1 1 1 0 0 1-1 1H7Z"/>
    <path d="M7 19a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1H7Z"/>
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"/>
    <path d="M12 8v6"/>
    <path d="M12 3a9 9 0 0 1 9 9"/>
    <path d="M8 12h8"/>
  </svg>
);