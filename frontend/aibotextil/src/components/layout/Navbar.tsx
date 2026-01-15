"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// Estructura de enlaces ACTUALIZADA con submenús en TECNOLOGÍAS y TELAS
const navLinks = [
  { name: "INICIO", href: "/" },
  { name: "QUIENES SOMOS", href: "/quienes-somos" },
  { 
    name: "PRODUCTOS", 
    href: "/productos" 
    // Nota: Si "PRODUCTOS" y "TELAS" son lo mismo, podrías borrar uno de los dos.
    // Dejaré ambos por si Productos es el catálogo general y Telas el acceso rápido.
  },
  { 
    name: "TECNOLOGÍAS", 
    href: "/tecnologias", 
    submenu: [
      { name: "Sostenibilidad", href: "/tecnologias/sostenibilidad" },
      { name: "Rendimiento Deportivo", href: "/tecnologias/rendimiento" }
    ]
  },
  { name: "BLOG", href: "/blog" },
  { 
    name: "TELAS", 
    href: "/telas",
    submenu: [
      { name: "Nylon", href: "/telas/nylon" },
      { name: "Poliéster", href: "/telas/poliester" },
      { name: "Spandex", href: "/telas/spandex" },
      { name: "Jacquard", href: "/telas/jacquard" },
    ]
  },
  { name: "CONTACTO", href: "/contacto" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-aibo-red text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* 1. LOGO MÓVIL */}
          <div className="flex-shrink-0 font-bold text-2xl tracking-wider lg:hidden">
             AIBO TEXTIL
          </div>

          {/* 2. MENÚ DE ESCRITORIO */}
          <nav className="hidden md:flex w-full justify-center space-x-6 xl:space-x-10">
            {navLinks.map((link) => {
              // CASO A: SI TIENE SUBMENÚ (Dropdown)
              if (link.submenu) {
                return (
                  <div key={link.name} className="relative group z-50">
                    {/* Botón principal */}
                    <button className="flex items-center gap-1 py-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-gray-100 group-hover:text-gray-200 focus:outline-none">
                      {link.name}
                      <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* El Menú Desplegable */}
                    <div className="absolute left-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white rounded-md shadow-xl py-2 overflow-hidden border-t-4 border-red-800">
                        {link.submenu.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="block px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-aibo-red transition-colors border-b border-gray-100 last:border-0"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // CASO B: ENLACE NORMAL
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative py-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-gray-100"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </nav>

          {/* 3. BOTÓN HAMBURGUESA (Móvil) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:bg-red-600 rounded-md transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MENÚ DESPLEGABLE MÓVIL (Contenido) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-aibo-red border-t border-red-400 max-h-[80vh] overflow-y-auto shadow-inner">
          <div className="space-y-1 px-4 pb-8 pt-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  // Opción con submenú en móvil
                  <div className="space-y-1 mt-2 mb-2">
                    <div className="px-3 py-2 text-base font-black uppercase tracking-widest text-red-100 border-b border-red-400/30">
                      {link.name}
                    </div>
                    <div className="ml-4 border-l-2 border-red-300/50 pl-2 space-y-1">
                        {link.submenu.map((subLink) => (
                        <Link
                            key={subLink.name}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-red-600 transition-colors"
                        >
                            {subLink.name}
                        </Link>
                        ))}
                    </div>
                  </div>
                ) : (
                  // Opción normal en móvil
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-red-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;