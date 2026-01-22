import { Zap, Droplets, Sun, Recycle, Layers, Feather, Grid } from "lucide-react";

export interface SubProduct {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export interface FabricCategory {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  color: string; // <--- AQUÍ ES DONDE CONTROLAS EL COLOR DEL FONDO DERECHO
  subProducts: SubProduct[];
}

export const fabricDatabase: Record<string, FabricCategory> = {
  nylon: {
    id: "nylon",
    title: "Telas Nylon",
    description: "Resistencia superior y tacto suave.",
    heroImage: "/images/nylon.png",
    color: "#fa4647", 
    subProducts: [
      { id: "nylon-spandex", name: "Nylon + Spandex", description: "Elasticidad premium.", features: ["Compresión"] },
      { id: "nylon-jacquard", name: "Nylon Jacquard", description: "Texturas y diseños.", features: ["Texturizado"] },
      { id: "nylon-tech", name: "Nylon Tecnología", description: "Tratamientos avanzados.", features: ["Tech"] },
      { id: "nylon-reciclado", name: "Nylon Reciclado", description: "Sostenibilidad.", features: ["Eco-Friendly"] },
    ]
  },
  poliester: {
    id: "poliester",
    title: "Telas Poliéster",
    description: "Versatilidad y rendimiento.",
    heroImage: "/images/poliester.png",
    color: "#79bfcf", // Azul fuerte para diferenciar
    subProducts: [
      { id: "poly-100", name: "Poliéster 100%", description: "Básico fundamental.", features: ["Sublimable"] },
      { id: "poly-pique", name: "Piqué Poliéster", description: "Tejido con textura.", features: ["Transpirable"] },
      { id: "poly-interlock", name: "Interlock", description: "Tejido doble cara.", features: ["Suave"] },
      { id: "poly-spandex", name: "Poliéster + Spandex", description: "Ajuste cómodo.", features: ["Elástico"] },
      { id: "poly-jacquard", name: "Poliéster Jacquard", description: "Diseños intrincados.", features: ["Diseño"] },
      { id: "poly-reciclado", name: "Poliéster Reciclado", description: "RPET.", features: ["Sostenible"] },
    ]
  },
  spandex: {
    id: "spandex",
    title: "Spandex",
    description: "Elasticidad vital.",
    heroImage: "/images/spandex.png",
    color: "#adabb0", // Cyan para Spandex
    subProducts: [
      { id: "nylon-spandex-mix", name: "Nylon Spandex", description: "Mezcla premium.", features: ["Estiramiento"] },
      { id: "poly-spandex-mix", name: "Poliéster Spandex", description: "Económica.", features: ["Versátil"] },
    ]
  },
  jacquard: {
    id: "jacquard",
    title: "Jacquard",
    description: "Ingeniería visible.",
    heroImage: "/images/jacquard.png",
    color: "#5da7a6", 
    subProducts: [
      { id: "jacquard-nylon", name: "Nylon Jacquard", description: "Textura suave.", features: ["Premium"] },
      { id: "jacquard-poly", name: "Poliéster Jacquard", description: "Máxima ventilación.", features: ["Ventilado"] },
    ]
  },
  tecnologia: {
    id: "tecnologia",
    title: "Tecnología",
    description: "Tecnología avanzada",
    heroImage: "/images/tecnoTela.png",
    color: "#2d7580", 
    subProducts: [
      { id: "jacquard-nylon", name: "Nylon Jacquard", description: "Textura suave.", features: ["Premium"] },
      { id: "jacquard-poly", name: "Poliéster Jacquard", description: "Máxima ventilación.", features: ["Ventilado"] },
    ]
  }
};