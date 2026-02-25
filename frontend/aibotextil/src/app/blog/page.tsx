"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronRight, BookOpen, TrendingUp, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// --- 1. BASE DE DATOS DEL BLOG Y NOTICIAS ---
// Aquí puedes agregar, editar o quitar artículos fácilmente.
const articles = [
  {
    id: "poliester",
    type: "blog",
    title: "El Poliéster",
    subtitle: "La historia detrás de una de las fibras más poderosas del mundo",
    date: "24 Feb 2026",
    readTime: "3 min",
    image: "/images/imagesProducts/poliester.jpg", 
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>Hace algunos años, cuando las marcas buscaban crear prendas más resistentes, más accesibles y con mejor desempeño, necesitaban algo que fuera más allá de lo tradicional.</p>
        <p>Necesitaban una fibra que aguantara el ritmo del día a día. Que resistiera entrenamientos intensos. Que no se deformara después de varias lavadas. Que fuera versátil.</p>
        <p className="font-bold text-gray-900 text-xl py-2">Así es como el poliéster se convirtió en protagonista.</p>
        <p>Hoy, más de la mitad de la ropa que se produce en el mundo tiene algo en común: utiliza poliéster en su composición. ¿La razón? <strong>Funciona.</strong></p>
        <ul className="list-disc pl-5 space-y-2 bg-gray-50 p-6 rounded-lg">
          <li><strong>Funciona en ropa deportiva</strong> porque es ligero y se seca rápido.</li>
          <li><strong>Funciona en uniformes</strong> porque mantiene su forma y color.</li>
          <li><strong>Funciona en moda</strong> porque se puede mezclar con algodón o elastano para lograr comodidad y estructura al mismo tiempo.</li>
        </ul>
        <p>Y lo más interesante: <strong>sigue evolucionando.</strong></p>
        <p>Actualmente, el poliéster también puede producirse a partir de botellas plásticas recicladas, transformando residuos en nuevas oportunidades textiles. Eso demuestra que una fibra sintética también puede adaptarse a los nuevos retos de sostenibilidad e innovación.</p>
        <p>Desde moda accesible hasta textiles de alto rendimiento, el poliéster continúa siendo una base fundamental en la industria global.</p>
      </div>
    )
  },
  {
    id: "spandex",
    type: "blog",
    title: "Spandex (Elastano)",
    subtitle: "La Ciencia de la Elasticidad en la Industria Textil",
    date: "20 Feb 2026",
    readTime: "4 min",
    image: "/images/imagesProducts/spandex.jpg", 
    content: (
      <div className="space-y-5 text-gray-600 leading-relaxed">
        <p>En la evolución de los textiles modernos, el spandex —también conocido como elastano— representa uno de los avances más importantes en términos de ajuste, confort y funcionalidad.</p>
        <p>Su incorporación transformó la manera en que las prendas se adaptan al cuerpo, permitiendo mayor movilidad sin sacrificar estructura. Hoy es un componente esencial en el desarrollo de ropa deportiva, trajes de baño, prendas de compresión y moda funcional.</p>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-6">¿Qué es el Spandex?</h3>
        <p>El spandex es una fibra sintética compuesta por poliuretano segmentado, diseñada específicamente para proporcionar elasticidad superior con alta recuperación.</p>
        <p>A diferencia de otras fibras cuyo objetivo principal es aportar resistencia o estabilidad, el spandex cumple una función mecánica clara: permitir que el tejido se estire de manera controlada y regrese a su forma original sin deformarse. Puede elongarse entre 500% y 700% y recuperar prácticamente su longitud inicial, incluso después de múltiples ciclos de uso.</p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6">Principales Propiedades Técnicas</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-aibo-red">1. Elasticidad Controlada</h4>
            <p>El spandex permite la construcción de tejidos con elasticidad en dos o cuatro direcciones (2-way o 4-way stretch), facilitando un ajuste anatómico preciso, libertad de movimiento y conservación de la forma.</p>
          </div>
          <div>
            <h4 className="font-bold text-aibo-red">2. Recuperación Dimensional</h4>
            <p>Reduce la deformación permanente o “efecto bolsa” en prendas ajustadas. Esta propiedad es especialmente relevante en leggings y ropa de compresión.</p>
          </div>
          <div>
            <h4 className="font-bold text-aibo-red">3. Confort y Soporte</h4>
            <p>Genera soporte muscular moderado, mejor adaptación ergonómica y reducción de fricción cuando se combina con nylon o poliéster.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-6">Spandex como Decisión Estratégica</h3>
        <p>En Aibo Textil comprendemos que cada fibra cumple una función específica. El spandex no es solo un complemento; es una herramienta técnica que permite crear prendas más funcionales, más cómodas y mejor adaptadas al movimiento.</p>
      </div>
    )
  },
  {
    id: "nylon",
    type: "blog",
    title: "Nylon",
    subtitle: "Resistencia y Precisión en la Ingeniería Textil",
    date: "15 Feb 2026",
    readTime: "3 min",
    image: "/images/imagesProducts/D01.jpg",
    content: (
      <div className="space-y-5 text-gray-600 leading-relaxed">
        <p>En la industria textil de alto desempeño, el nylon —también conocido como poliamida— se ha consolidado como una de las fibras más resistentes y versátiles del mercado. Su combinación de fortaleza, ligereza y estabilidad lo convierte en una base estratégica para prendas técnicas y aplicaciones exigentes.</p>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-6">¿Qué es el Nylon?</h3>
        <p>Desarrollado en la década de 1930 como alternativa a la seda, el nylon es una fibra sintética con una estructura molecular que le permite ofrecer alta resistencia a la tracción, excelente resistencia a la abrasión, ligereza estructural y elasticidad natural moderada.</p>

        <h3 className="text-2xl font-bold text-gray-900 mt-6">Ventajas Técnicas del Nylon</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-900">
            <strong className="block text-gray-900">1. Alta Resistencia</strong>
            Soporta fricción, tensión y movimiento repetitivo sin perder integridad.
          </li>
          <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-900">
            <strong className="block text-gray-900">2. Ligereza y Confort</strong>
            Permite prendas funcionales sin peso excesivo.
          </li>
          <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-900">
            <strong className="block text-gray-900">3. Secado Rápido</strong>
            Es hidrofóbico, no retiene grandes cantidades de agua, facilitando el secado.
          </li>
          <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-900">
            <strong className="block text-gray-900">4. Retención de Color</strong>
            Tiene buena afinidad con los tintes, logrando colores intensos y mayor estabilidad.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-6">Una Fibra Estratégica</h3>
        <p>El nylon no es solo una fibra sintética, es una solución de ingeniería que combina resistencia, ligereza y versatilidad.</p>
        <p className="font-bold text-lg text-aibo-red">En Aibo Textil sabemos que el desempeño de una prenda comienza en la correcta selección del tejido. Y cuando el proyecto exige durabilidad con precisión técnica, el nylon responde.</p>
      </div>
    )
  },
  {
    id: "tendencia-2026",
    type: "noticia",
    title: "Tendencias Globales en Ropa Deportiva 2026",
    subtitle: "Lo que las marcas líderes están buscando este año",
    date: "28 Feb 2026",
    readTime: "5 min",
    image: "/images/imagesAboutUs/about-showroom.jpg", // Cambia por tu imagen
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>El mercado deportivo está cambiando rápidamente. La sostenibilidad ya no es una opción, sino una exigencia del consumidor final...</p>
      </div>
    )
  }
];

export default function BlogNewsPage() {
  const [activeTab, setActiveTab] = useState<"blog" | "noticia">("blog");
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  // Filtramos los artículos dependiendo de la pestaña activa
  const filteredArticles = articles.filter(article => article.type === activeTab);

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-28">
      
      {/* HEADER DE LA SECCIÓN */}
      <div className="container mx-auto max-w-6xl px-4 md:px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
          Aibo <span className="text-aibo-red">Insights</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Conocimiento técnico, innovación textil y las últimas tendencias del mercado deportivo, todo en un solo lugar.
        </p>
      </div>

      {/* TABS (BOTONES DE NAVEGACIÓN) */}
      <div className="flex justify-center mb-12 px-4">
        <div className="inline-flex bg-gray-200 rounded-full p-1 w-full max-w-md">
          <button
            onClick={() => setActiveTab("blog")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300",
              activeTab === "blog" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            )}
          >
            <BookOpen size={18} />
            Nuestro Blog
          </button>
          <button
            onClick={() => setActiveTab("noticia")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300",
              activeTab === "noticia" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            )}
          >
            <TrendingUp size={18} />
            Tendencias
          </button>
        </div>
      </div>

      {/* GRID DE ARTÍCULOS */}
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 text-gray-400 font-medium">
            Pronto publicaremos nuevo contenido en esta sección.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 uppercase tracking-widest">
                    {article.type === "blog" ? "Textil" : "Mercado"}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2 group-hover:text-aibo-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 line-clamp-3 mb-6 flex-1">
                    {article.subtitle}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-gray-900 uppercase tracking-widest group-hover:text-aibo-red transition-colors mt-auto">
                    Leer Artículo <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* MODAL DE LECTURA (Se abre al hacer clic en una tarjeta) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
          
          {/* Botón invisible para cerrar haciendo clic afuera */}
          <div className="absolute inset-0" onClick={() => setSelectedArticle(null)}></div>

          {/* Panel Lateral del Artículo */}
          <div className="relative w-full max-w-3xl bg-white h-full overflow-y-auto shadow-2xl animate-fade-in-left">
            
            <button 
              onClick={() => setSelectedArticle(null)}
              className="sticky top-4 left-4 md:absolute md:top-6 md:left-6 z-10 bg-white/80 backdrop-blur-md p-3 rounded-full text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
            >
              <X size={24} />
            </button>

            <div className="relative h-[30vh] md:h-[40vh] w-full">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 text-white">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">
                  <span>{selectedArticle.type === "blog" ? "Conocimiento Textil" : "Tendencia de Mercado"}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            <div className="p-6 md:p-12">
              <h3 className="text-xl md:text-2xl font-medium text-gray-400 mb-8 border-b pb-6">
                {selectedArticle.subtitle}
              </h3>
              
              {/* Aquí se renderiza el contenido (HTML/JSX) del artículo */}
              <div className="prose prose-lg prose-red max-w-none">
                {selectedArticle.content}
              </div>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}