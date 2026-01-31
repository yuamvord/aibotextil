
export interface UseCategory {
  id: string;
  label: string;
  
  title: string;
  description: string;
  recommendedList: string[];
  
  mainImage: string;     
  secondaryImage: string;
  compositions: { title: string; subtitle?: string; description: string }[];
  
  engineeringList: string[];
  advantagesList: string[];
}

export const usesDatabase: Record<string, UseCategory> = {
  yoga: {
    id: "yoga",
    label: "Yoga",
    title: "YOGA & WELLNESS",
    description: "Las telas para yoga están diseñadas para responder a los requerimientos biomecánicos de disciplinas que combinan estiramientos profundos, contracciones sostenidas, control postural y contacto constante con la piel. La ingeniería textil se centra en elasticidad multidireccional, suavidad extrema y gestión de humedad.",
    recommendedList: ["Yoga", "Pilates", "Barre", "Stretching", "Hot yoga", "Athleisure"],
    mainImage: "/images/imagesUses/yoga-main.jpg",
    secondaryImage: "/images/imagesUses/yoga-sec.jpg",
    compositions: [
      { title: "POLIÉSTER + ELASTANO", subtitle: "80-85% / 15-20%", description: "Base técnica con alta resistencia mecánica y solidez de color." },
      { title: "NAILON + ELASTANO", subtitle: "70-80% / 20-30%", description: "Opción premium con tacto sedoso y mejor recuperación." },
      { title: "RECICLADO", subtitle: "RPET / Nylon", description: "Alternativas sostenibles con prestaciones técnicas equivalentes." },
      { title: "GRAMAJE", subtitle: "180-260 g/m²", description: "Equilibrio perfecto entre opacidad, soporte y confort." }
    ],
    engineeringList: [
      "Elasticidad en cuatro direcciones (4D stretch).",
      "Gestión avanzada de humedad (wicking).",
      "Secado rápido y control térmico.",
      "Acabados suaves tipo 'peach skin' (piel de durazno)."
    ],
    advantagesList: [
      "Sensación de segunda piel.",
      "Excelente adaptación anatómica.",
      "Estabilidad dimensional tras más de 50 lavados.",
      "Rendimiento deportivo para líneas premium."
    ]
  },

  swimwear: {
    id: "swimwear",
    label: "TRAJE DE BAÑO",
    title: "TRAJE DE BAÑO",
    description: "Desarrolladas para entornos extremos: cloro, sal, radiación UV y fricción. La selección de fibras y acabados es crítica para garantizar retención de forma, estabilidad del color y vida útil prolongada.",
    recommendedList: ["Natación", "Playa", "Surf", "Resort", "Competencia"],
    mainImage: "/images/imagesUses/swim-main.jpg", 
    secondaryImage: "/images/imagesUses/swim-sec.jpg", 
    compositions: [
      { title: "POLIÉSTER + ELASTANO", description: "Máxima resistencia al cloro, estabilidad del color y durabilidad." },
      { title: "NAILON + ELASTANO", description: "Suavidad superior, secado ultra rápido y resistencia al desgarro." },
      { title: "FIBRAS RECICLADAS", description: "Sostenibilidad sin comprometer el rendimiento técnico." },
      { title: "GRAMAJE", subtitle: "170–230 g/m²", description: "Densidad ideal para evitar transparencias." }
    ],
    engineeringList: [
      "Protección solar UPF 50+ integrada en la fibra.",
      "Acabados anticloro (prolongan vida útil 30-40%).",
      "Construcciones de punto compacto.",
      "Elasticidad 4D y recuperación prolongada."
    ],
    advantagesList: [
      "Ajuste anatómico duradero.",
      "Colores intensos incluso bajo sol y cloro.",
      "Mayor vida útil del producto final.",
      "Ideal para líneas deportivas y resort."
    ]
  },

  gym: {
    id: "gym",
    label: "GIMNASIO",
    title: "GIMNASIO",
    description: "Concebidas para entornos de alta exigencia física, combinando resistencia, transpirabilidad, soporte muscular y confort térmico.",
    recommendedList: ["Fitness", "CrossFit", "Pesas", "HIIT", "Indoor Cycling"],
    mainImage: "/images/imagesUses/gym-main.jpg", 
    secondaryImage: "/images/imagesUses/gym-sec.jpg",
    compositions: [
      { title: "POLIÉSTER 100%", description: "Alta resistencia y ligereza con secado rápido." },
      { title: "NAILON + ELASTANO", description: "Suavidad premium, tacto frío y alta compresión." },
      { title: "POLIÉSTER + ELASTANO", description: "Absorción eficiente del sudor y estabilidad estructural." },
      { title: "GRAMAJE", subtitle: "140–220 g/m²", description: "Versatilidad para tops, leggings y camisetas." }
    ],
    engineeringList: [
      "Compresión graduada para soporte muscular.",
      "Paneles de ventilación y mallas técnicas.",
      "Tratamientos anti-pilling y antimicrobianos.",
      "Tecnología apta para cortes láser."
    ],
    advantagesList: [
      "Reducción de fatiga muscular.",
      "Menor acumulación de calor corporal.",
      "Alta resistencia al uso intensivo.",
      "Estética moderna con alto desempeño."
    ]
  },

  cycling: {
    id: "cycling",
    label: "CICLISMO",
    title: "CICLISMO",
    description: "Desarrolladas bajo principios de aerodinámica, ergonomía y durabilidad, buscando maximizar el confort en recorridos prolongados y condiciones variables.",
    recommendedList: ["Ruta", "Montaña (MTB)", "Gravel", "Triatlón", "Outdoor"],
    mainImage: "/images/imagesUses/cycling-main.jpg",
    secondaryImage: "/images/imagesUses/cycling-sec.jpg",
    compositions: [
      { title: "MEZCLAS TÉCNICAS", description: "Poliéster + Elastano y Nailon + Elastano de alto rendimiento." },
      { title: "GRAMAJES ULTRALIGEROS", description: "Para máxima reducción de peso." },
      { title: "PROTECCIÓN TOTAL", description: "Tratamientos DWR (repelente al agua) y UV UPF 50+." }
    ],
    engineeringList: [
      "Paneles de malla de ingeniería para flujo de aire.",
      "Refuerzos estratégicos en zonas de fricción.",
      "Acabados antibacterianos de larga duración.",
      "Alta evacuación de humedad."
    ],
    advantagesList: [
      "Confort prolongado en largas distancias.",
      "Mayor resistencia al desgaste y roce.",
      "Excelente regulación térmica.",
      "Ajuste aerodinámico profesional."
    ]
  },

  teamwear: {
    id: "teamwear",
    label: "JERSEY DEPORTIVO",
    title: "JERSEY DEPORTIVO",
    description: "Diseñadas para deportes de alta intensidad, priorizan ligereza, ventilación, resistencia y capacidad de personalización total.",
    recommendedList: ["Fútbol", "Rugby", "Baloncesto", "Voleibol", "Academias"],
    mainImage: "/images/imagesUses/team-main.jpg",
    secondaryImage: "/images/imagesUses/team-sec.jpg",
    compositions: [
      { title: "100% POLIÉSTER", description: "La base estándar para sublimación." },
      { title: "100% RECICLADO", description: "Opción ecológica para clubes responsables." },
      { title: "POLIÉSTER + ELASTANO", description: "Para prendas de ajuste 'Match Day'." },
      { title: "SUBLIMACIÓN", description: "Telas listas para transferencia de color HD." }
    ],
    engineeringList: [
      "Tejido microperforado para ventilación máxima.",
      "Secado rápido (Quick-Dry).",
      "Tecnología Anti-pilling.",
      "Costuras reforzadas para resistencia al tirón."
    ],
    advantagesList: [
      "Alto confort térmico en juego.",
      "Durabilidad competitiva.",
      "Colores permanentes y vibrantes.",
      "Total personalización de diseño."
    ]
  },

  polo: {
    id: "polo",
    label: "POLO Y PIQUÉ",
    title: "POLO Y PIQUÉ",
    description: "Textiles que combinan imagen profesional y funcionalidad deportiva. La fusión perfecta entre elegancia y tecnología.",
    recommendedList: ["Golf", "Uniformes", "Corporativo", "Casual Premium"],
    mainImage: "/images/imagesUses/polo-main.jpg",
    secondaryImage: "/images/imagesUses/polo-sec.jpg",
    compositions: [
      { title: "POLIÉSTER TÉCNICO", description: "Rendimiento deportivo con look casual." },
      { title: "ALGODÓN-POLIÉSTER", description: "Tacto natural con resistencia mejorada." },
      { title: "MEZCLAS CON ELASTANO", description: "Para mayor confort y libertad de movimiento." }
    ],
    engineeringList: [
      "Estructura piqué transpirable.",
      "Protección UV integrada.",
      "Tecnología antiarrugas y antiolor."
    ],
    advantagesList: [
      "Imagen elegante y profesional.",
      "Frescura prolongada durante el día.",
      "Fácil mantenimiento (Easy Care)."
    ]
  },

  loungewear: {
    id: "loungewear",
    label: "SUDADERAS",
    title: "SUDADERAS",
    description: "Telas enfocadas en retención térmica, suavidad extrema y durabilidad estructural. Ideales para el descanso activo y la moda urbana.",
    recommendedList: ["Athleisure", "Descanso activo", "Post-entrenamiento", "Urbano"],
    mainImage: "/images/imagesUses/lounge-main.jpg",
    secondaryImage: "/images/imagesUses/lounge-sec.jpg",
    compositions: [
      { title: "FRENCH TERRY", subtitle: "100% Algodón", description: "El clásico premium suave." },
      { title: "FLEECE / VELLÓN", description: "Cepillado interno para máxima calidez." },
      { title: "MEZCLAS RECICLADAS", description: "Algodón + Poliéster sostenible." },
      { title: "GRAMAJE ALTO", subtitle: "250–400 g/m²", description: "Cuerpo y estructura superior." }
    ],
    engineeringList: [
      "Tratamiento Anti-pilling de alta calidad.",
      "Aislamiento térmico superior.",
      "Certificaciones OEKO-TEX y GRS disponibles."
    ],
    advantagesList: [
      "Retención de calor eficiente.",
      "Alta suavidad al tacto.",
      "Larga vida útil y resistencia a lavados."
    ]
  }
};