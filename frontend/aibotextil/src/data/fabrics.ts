// src/data/fabrics.ts
import { Zap, Droplets, Sun, Recycle, Layers, Feather, Grid } from "lucide-react";

// Definimos la estructura de una Tela para que TypeScript nos ayude
export interface SubProduct {
  id: string;
  name: string;
  description: string;
  features: string[]; // Ej: ["Secado Rápido", "Elástico"]
}

export interface FabricCategory {
  id: string; // El "slug" que va en la URL (ej: nylon, poliester)
  title: string;
  description: string;
  heroImage: string; // La imagen grande del banner
  color: string; // Un color tema para esa categoría
  subProducts: SubProduct[]; // La lista del PDF (Nylon Spandex, Jacquard, etc.)
}

// AQUÍ AGREGAS O QUITAS TELAS FÁCILMENTE
export const fabricDatabase: Record<string, FabricCategory> = {
  nylon: {
    id: "nylon",
    title: "Telas Nylon",
    description: "Resistencia superior y tacto suave. La elección perfecta para prendas de alta compresión y durabilidad.",
    heroImage: "/images/cat-nylon.png", // Asegúrate de tener esta imagen
    color: "bg-pink-600",
    subProducts: [
      { id: "nylon-spandex", name: "Nylon + Spandex", description: "Elasticidad premium con recuperación perfecta.", features: ["Compresión", "Suave"] },
      { id: "nylon-jacquard", name: "Nylon Jacquard", description: "Texturas y diseños tejidos directamente en la fibra.", features: ["Texturizado", "Diseño"] },
      { id: "nylon-tech", name: "Nylon Tecnología", description: "Tratamientos avanzados de wicking y anti-bacterial.", features: ["Tech", "Performance"] },
      { id: "nylon-reciclado", name: "Nylon Reciclado", description: "Sostenibilidad sin perder resistencia.", features: ["Eco-Friendly", "Reciclado"] },
    ]
  },
  poliester: {
    id: "poliester",
    title: "Telas Poliéster",
    description: "Versatilidad y rendimiento. La tela más usada en el mundo deportivo por su capacidad de secado.",
    heroImage: "/images/cat-poliester.png",
    color: "bg-gray-600",
    subProducts: [
      { id: "poly-100", name: "Poliéster 100%", description: "Básico fundamental para sublimación.", features: ["Sublimable", "Duradero"] },
      { id: "poly-pique", name: "Piqué Poliéster", description: "Tejido con textura clásica deportiva.", features: ["Transpirable", "Clásico"] },
      { id: "poly-interlock", name: "Interlock", description: "Tejido doble cara, suave y resistente.", features: ["Denso", "Suave"] },
      { id: "poly-spandex", name: "Poliéster + Spandex", description: "Ajuste cómodo con libertad de movimiento.", features: ["Elástico", "Cómodo"] },
      { id: "poly-jacquard", name: "Poliéster Jacquard", description: "Diseños intrincados y transpirabilidad.", features: ["Diseño", "Aireado"] },
      { id: "poly-reciclado", name: "Poliéster Reciclado", description: "Fabricado a partir de botellas PET (RPET).", features: ["Sostenible", "Certificado"] },
    ]
  },
  spandex: {
    id: "spandex",
    title: "Spandex / Elastano",
    description: "El alma de la ropa deportiva. Elasticidad vital para el ajuste y confort.",
    heroImage: "/images/cat-spandex.png",
    color: "bg-cyan-600",
    subProducts: [
      { id: "nylon-spandex-mix", name: "Nylon Spandex", description: "La mezcla premium para leggings.", features: ["Alto Estiramiento"] },
      { id: "poly-spandex-mix", name: "Poliéster Spandex", description: "Elasticidad económica y funcional.", features: ["Versátil"] },
    ]
  },
  jacquard: {
    id: "jacquard",
    title: "Tejidos Jacquard",
    description: "Ingeniería visible. Patrones y texturas que mejoran la ventilación y el estilo.",
    heroImage: "/images/cat-jacquard.png",
    color: "bg-red-600",
    subProducts: [
      { id: "jacquard-nylon", name: "Nylon Jacquard", description: "Textura suave con patrones de camuflaje o geométricos.", features: ["Premium"] },
      { id: "jacquard-poly", name: "Poliéster Jacquard", description: "Máxima ventilación para camisetas de juego.", features: ["Ventilado"] },
    ]
  },
};