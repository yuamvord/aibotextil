"use client";

import { useState } from "react";

export default function ContactoPage() {
  // 1. Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: ""
  });

  // 2. Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Función que se ejecuta al presionar "ENVIAR MENSAJE"
  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue

    // Tu número de WhatsApp (Código de país + número, sin el símbolo + ni espacios)
    const phone = "50230063365"; 

    // Mensaje formateado con negritas de WhatsApp (*)
    const fullMessage = 
`Hola Aibo Textil, me gustaría obtener más información.

*Mis datos de contacto:*
👤 Nombre: ${formData.nombre}
📱 Teléfono: ${formData.telefono}
📧 Correo: ${formData.correo}
💬 Mensaje: ${formData.mensaje}`;

    // Abrimos la URL de WhatsApp en una nueva pestaña
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-white pt-28 px-6">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-aibo-dark mb-2">Contáctanos</h1>
        <p className="text-gray-500 mb-8">Estamos listos para asesorarte en tu próximo proyecto textil.</p>
        
        {/* Agregamos el onSubmit al formulario */}
        <form onSubmit={handleSendWhatsapp} className="space-y-6 border p-8 rounded-xl shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input 
              type="text" 
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-aibo-red" 
              placeholder="Tu nombre" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Número de Teléfono</label>
            <input 
              type="tel" 
              name="telefono"
              required
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-aibo-red" 
              placeholder="Tu número teléfonico" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
            <input 
              type="email" 
              name="correo"
              required
              value={formData.correo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-aibo-red" 
              placeholder="tucorreo@empresa.com" 
            />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
             <textarea 
               name="mensaje"
               required
               value={formData.mensaje}
               onChange={handleChange}
               className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-aibo-red" 
               placeholder="¿En qué podemos ayudarte?"
             ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-aibo-dark text-white font-bold py-4 rounded-md hover:bg-aibo-red transition-colors"
          >
            ENVIAR POR WHATSAPP
          </button>
        </form>
      </div>
    </div>
  );
}