// src/data/uses.ts
import { Move, Droplets, Feather, ShieldCheck, Activity, Wind, Layers, Zap } from "lucide-react";

// Interfaces para TypeScript (opcional pero recomendado)
export interface UseCategory {
  id: string;
  label: string; // Nombre corto para el botón del menú
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  introTitle: string;
  introText: string;
  recommendedList: string[];
  grammage: string;
  compositions: { title: string; percentage: string; description: string; tag?: string }[];
  features: { title: string; description: string; icon: any }[]; // Usamos 'any' para simplificar los iconos por ahora
  themeColor: string; // Color de texto
  gradient: string; // Color de fondo degradado
}

export const usesDatabase: Record<string, UseCategory> = {
  yoga: {
    id: "yoga",
    label: "Yoga",
    title: "YOGA & WELLNESS",
    subtitle: "Conexión y Elasticidad",
    heroImage: "/images/usos/yoga-hero.jpg",
    description: "Ingeniería diseñada para estiramientos profundos y control postural.",
    introTitle: "Biomecánica del Movimiento",
    introText: "Las telas para yoga responden a estiramientos profundos y contracciones sostenidas. La ingeniería se centra en elasticidad multidireccional, suavidad extrema y gestión de humedad.",
    recommendedList: ["Yoga", "Pilates", "Barre", "Stretching", "Hot Yoga", "Athleisure"],
    grammage: "180-260 g/m²",
    compositions: [
      { title: "Poliéster + Elastano", percentage: "80-85% / 15-20%", description: "Resistencia mecánica y solidez de color." },
      { title: "Nylon + Elastano", percentage: "70-80% / 20-30%", description: "Tacto sedoso 'Peach Skin' y recuperación premium.", tag: "Premium" },
      { title: "Reciclado", percentage: "rPET / Nylon", description: "Sostenibilidad con mismo rendimiento.", tag: "Eco" }
    ],
    features: [
      { title: "4D Stretch", description: "Elasticidad total.", icon: Move },
      { title: "Soft Touch", description: "Sensación segunda piel.", icon: Feather },
      { title: "Wicking", description: "Control de humedad.", icon: Droplets }
    ],
    themeColor: "text-purple-600",
    gradient: "from-purple-900 to-pink-900"
  }
};