"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Send, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const { cart, removeFromCart } = useCart();
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Lógica para enviar WhatsApp
  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return alert("Tu lista está vacía");
    if (!formData.nombre) return alert("Por favor escribe tu nombre");

    const phone = "50200000000"; // TU NÚMERO
    
    // Construimos el mensaje de lista
    let itemsText = cart.map((item, index) => {
        return `${index + 1}. *${item.name}* (Código: ${item.code})`;
    }).join("\n");

    const fullMessage = 
`Hola Aibo Textil, quiero cotizar la siguiente lista de telas:

${itemsText}

*Mis Datos:*
👤 Nombre: ${formData.nombre}
🏢 Empresa: ${formData.empresa || "N/A"}
📝 Mensaje: ${formData.mensaje}
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        
        <div className="mb-8 flex items-center gap-4">
            <Link href="/" className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                <ArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900">
                Mi Lista de Cotización
            </h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-400 text-xl mb-6">No has agregado telas todavía.</p>
            <Link href="/" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-blue-700">
                Regresar al inicio
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LISTA DE ITEMS (Izquierda) */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 border border-gray-100">
                  <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 uppercase">{item.name}</h3>
                    <p className="text-sm text-gray-500">Código: {item.code}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* FORMULARIO (Derecha) */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit sticky top-24">
              <h2 className="text-xl font-bold mb-4 uppercase">Datos de Contacto</h2>
              <form onSubmit={handleSendWhatsapp} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tu Nombre</label>
                    <input 
                        required
                        type="text" 
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Ej: Juan Pérez"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Empresa (Opcional)</label>
                    <input 
                        type="text" 
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Ej: Confecciones S.A."
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Comentarios</label>
                    <textarea 
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={3}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="¿Alguna pregunta específica sobre estas telas?"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-4"
                >
                    <Send size={20} />
                    <span>ENVIAR POR WHATSAPP</span>
                </button>
                
              </form>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}