"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  mainImage: string;
  extraImages: string[];
  title: string;
}

export default function ProductGallery({ mainImage, extraImages, title }: ProductGalleryProps) {
  const allImages = Array.from(new Set([mainImage, ...extraImages])).filter(Boolean);
  
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [isHovered, setIsHovered] = useState(false);

  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  const handleImageError = (imgSrc: string) => {
    console.warn(`Imagen rota ocultada: ${imgSrc}`);
    setBrokenImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(imgSrc);
      return newSet;
    });
  };

  const isMainBroken = brokenImages.has(selectedImage);

  return (
    <div className="flex flex-col gap-4 w-full select-none">
      
      <div 
        className="relative w-full aspect-square md:aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200 cursor-zoom-in group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
            setIsHovered(false);
            setTransformOrigin("center center");
        }}
        onContextMenu={(e) => e.preventDefault()} 
      >
        {!isMainBroken ? (
          <>
            <Image
              src={selectedImage}
              alt={title}
              fill
              draggable={false} 
              className={`object-cover transition-transform duration-200 ease-out select-none pointer-events-none`} 
              style={{ 
                transformOrigin: transformOrigin, 
                transform: isHovered ? "scale(1.5)" : "scale(1)"
              }}
              priority
              onError={() => handleImageError(selectedImage)}
            />
            <div className="absolute inset-0 z-10 bg-transparent"></div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
             <span>Imagen no disponible</span>
          </div>
        )}
        
        {!isHovered && !isMainBroken && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-bold text-gray-700 backdrop-blur-sm shadow-sm">
                    Pasa el mouse para ampliar
                </span>
            </div>
        )}
      </div>

      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {allImages.map((img, idx) => {
            
            if (brokenImages.has(img)) return null;

            return (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                onContextMenu={(e) => e.preventDefault()} 
                className={`
                  relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all
                  ${selectedImage === img ? "border-blue-600 ring-2 ring-blue-100 opacity-100" : "border-transparent opacity-70 hover:opacity-100"}
                `}
              >
                <Image
                  src={img}
                  alt={`Vista ${idx + 1}`}
                  fill
                  draggable={false}
                  className="object-cover select-none pointer-events-none" 
                  onError={() => handleImageError(img)} 
                />
                <div className="absolute inset-0 z-10 bg-transparent cursor-pointer"></div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}