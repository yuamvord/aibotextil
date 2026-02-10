// src/types/telas.ts

// Esta es la estructura exacta que tu SQL Server deberá devolver más adelante.
// Soporta la relación N:M porque 'categorias' es un array.
export interface Tela {
  id: string | number; // ID único en tu DB
  nombre: string;      // Nombre comercial (ej: "Verde Olivo Mate")
  imagenUrl: string;   // Ruta de la foto
  // Array de slugs de categorías a las que pertenece esta tela.
  // Ej: Una tela puede ser ['nylon', 'jacquard', 'premium'] al mismo tiempo.
  categorias: string[]; 
}