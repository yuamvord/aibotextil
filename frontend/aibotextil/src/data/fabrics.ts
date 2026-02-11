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
  heroImage: string;
  color: string;
  subProducts: SubProduct[];
}

export const fabricDatabase: Record<string, FabricCategory> = {
  nylon: {
    id: "nylon",
    title: "Telas Nylon",
    heroImage: "/images/imagesProducts/D01.jpg",
    color: "#fa4647", 
    subProducts: [
      // CAMBIO CLAVE: id coincide con el Slug de la DB (fila 7)
      { id: "nylon-100", name: "Nylon 100%", description: "Nylon 100%", features: ["Compresión"] },
      // id coincide con Slug (fila 3)
      { id: "spandex", name: "Nylon + Spandex", description: "Elasticidad premium.", features: ["Compresión"] },
      // id coincide con Slug (fila 4)
      { id: "jacquard", name: "Nylon Jacquard", description: "Texturas y diseños.", features: ["Texturizado"] },
      // id coincide con Slug (fila 6)
      { id: "tecnologia", name: "Nylon Tecnología", description: "Tratamientos avanzados.", features: ["Tech"] },
      // CAMBIO CLAVE: id coincide con Slug "reciclable" (fila 5)
      { id: "reciclable", name: "Nylon Reciclado", description: "Sostenibilidad.", features: ["Eco-Friendly"] },
    ]
  },
  poliester: {
    id: "poliester",
    title: "Telas Poliester",
    heroImage: "/images/imagesProducts/poliester.jpg",
    color: "#79bfcf", 
    subProducts: [
      // CAMBIO CLAVE: id coincide con el Slug de la DB (fila 1)
      { id: "poliester-100", name: "Poliester 100%", description: "Básico fundamental.", features: ["Sublimable"] },
      { id: "spandex", name: "Poliester + Spandex", description: "Ajuste cómodo.", features: ["Elástico"] },
      { id: "jacquard", name: "Poliester Jacquard", description: "Diseños intrincados.", features: ["Diseño"] },
      { id: "tecnologia", name: "Poliester Tecnología", description: "Diseños tecnológicos.", features: ["Diseño"] },
      // CAMBIO CLAVE: id es "reciclable" según tu DB
      { id: "reciclable", name: "Poliester Reciclado", description: "RPET.", features: ["Sostenible"] },
    ]
  },
  spandex: {
    id: "spandex",
    title: "Spandex",
    heroImage: "/images/imagesProducts/spandex.jpg",
    color: "#adabb0", 
    subProducts: [
      // Aquí buscamos telas que tengan la categoría Nylon dentro de la vista Spandex
      { id: "nylon", name: "Nylon Spandex", description: "Mezcla premium.", features: ["Estiramiento"] },
      { id: "poliester", name: "Poliester Spandex", description: "Económica.", features: ["Versátil"] },
      { id: "jacquard", name: "Jacquard Spandex", description: "Jacquard.", features: ["Jacquard"] },
      { id: "reciclable", name: "Reciclable Spandex", description: "reciclable", features: ["reciclable"] },
    ]
  },
  jacquard: {
    id: "jacquard",
    title: "Jacquard",
    heroImage: "/images/imagesProducts/jacquard.jpg",
    color: "#5da7a6", 
    subProducts: [
      { id: "nylon", name: "Nylon Jacquard", description: "Textura suave.", features: ["Premium"] },
      { id: "poliester", name: "Poliester Jacquard", description: "Máxima ventilación.", features: ["Ventilado"] },
    ]
  },
  tecnologia: {
    id: "tecnologia", // Ojo: en tu DB el slug es "tecnologia" (sin tilde), en el código anterior tenias 'tecnologia' ok.
    title: "Tecnología",
    heroImage: "/images/imagesProducts/tecnologia.jpg",
    color: "#2d7580", 
    subProducts: [
      { id: "nylon", name: "Nylon Tech", description: "Textura suave.", features: ["Premium"] },
      { id: "poliester", name: "Poliester Tech", description: "Máxima ventilación.", features: ["Ventilado"] },
    ]
  }
};