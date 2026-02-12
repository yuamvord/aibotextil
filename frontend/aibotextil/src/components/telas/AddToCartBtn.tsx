"use client";

import { ShoppingCart } from "lucide-react";
import { useCart, CartItem } from "@/context/CartContext";

export default function AddToCartBtn({ item }: { item: CartItem }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(item)}
      className="flex-1 flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
    >
      <ShoppingCart size={24} />
      <span className="uppercase tracking-widest">Agregar a lista</span>
    </button>
  );
}