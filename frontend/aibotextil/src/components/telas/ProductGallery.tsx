"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  mainImage: string;
  extraImages: string[];
  title: string;
}

export default function ProductGallery({ mainImage, extraImages, title }: ProductGalleryProps) {
  // Unimos todas las imágenes posibles
  const allImages = Array.from(new Set([mainImage, ...extraImages])).filter(Boolean);
  
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  // Estados para el zoom
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [isHovered, setIsHovered] = useState(false);

  // ESTADO NUEVO: Lista negra de imágenes rotas
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  // Lógica del Zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  // Función para manejar errores de carga
  const handleImageError = (imgSrc: string) => {
    console.warn(`Imagen rota ocultada: ${imgSrc}`);
    setBrokenImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(imgSrc);
      return newSet;
    });
  };

  // Si la imagen seleccionada principal está rota, mostramos un placeholder o nada
  const isMainBroken = brokenImages.has(selectedImage);

  return (
    <div className="flex flex-col gap-4 w-full select-none">
      
      {/* --- IMAGEN GRANDE CON ZOOM --- */}
      <div 
        className="relative w-full aspect-square md:aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200 cursor-zoom-in group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
            setIsHovered(false);
            setTransformOrigin("center center");
        }}
      >
        {!isMainBroken ? (
          <Image
            src={selectedImage}
            alt={title}
            fill
            className={`object-cover transition-transform duration-200 ease-out`}
            style={{ 
              transformOrigin: transformOrigin, 
              transform: isHovered ? "scale(1.07)" : "scale(1)"
            }}
            priority
            onError={() => handleImageError(selectedImage)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
             <span>Imagen no disponible</span>
          </div>
        )}
        
        {/* Indicador de Zoom (solo si la imagen sirve) */}
        {!isHovered && !isMainBroken && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-gray-700 backdrop-blur-sm">
                    Pasa el mouse para ampliar
                </span>
            </div>
        )}
      </div>

      {/* --- CARRUSEL DE MINIATURAS --- */}
      {/* Filtramos visualmente las imágenes que ya sabemos que están rotas */}
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {allImages.map((img, idx) => {
            
            // Si la imagen está en la lista negra, NO renderizamos el botón
            if (brokenImages.has(img)) return null;

            return (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`
                  relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all
                  ${selectedImage === img ? "border-blue-600 ring-2 ring-blue-100 opacity-100" : "border-transparent opacity-70 hover:opacity-100"}
                `}
              >
                <Image
                  src={img}
                  alt={`Vista ${idx + 1}`}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(img)} // ¡Aquí detectamos si falla!
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}