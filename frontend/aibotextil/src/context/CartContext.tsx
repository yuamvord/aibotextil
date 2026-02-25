"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Check, X } from "lucide-react"; 

export interface CartItem {
  id: number;
  name: string;
  code: string;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: "",
    type: 'success'
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("aibo_cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("aibo_cart", JSON.stringify(cart));
  }, [cart]);

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setNotification({ show: true, message: msg, type });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  const addToCart = (item: CartItem) => {
    if (!cart.find((i) => i.id === item.id)) {
      setCart([...cart, item]);
      showToast(`"${item.name}" agregada a tu lista`, 'success'); 
    } else {
      showToast("Esta tela ya está en tu lista", 'error'); 
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
    showToast("Tela eliminada de la lista", 'error');
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}

      <div 
        className={`
          fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform
          ${notification.show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}
          ${notification.type === 'success' ? "bg-gray-900 text-white" : "bg-red-600 text-white"}
        `}
      >
        {notification.type === 'success' ? <Check size={20} className="text-green-400" /> : <X size={20} />}
        <div>
          <p className="text-sm font-bold tracking-wide">
            {notification.message}
          </p>
        </div>
      </div>

    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}