export default function ContactoPage() {
  return (
    <div className="w-full min-h-screen bg-white pt-28 px-6">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-aibo-dark mb-2">Contáctanos</h1>
        <p className="text-gray-500 mb-8">Estamos listos para asesorarte en tu próximo proyecto textil.</p>
        
        <form className="space-y-6 border p-8 rounded-xl shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-aibo-red" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Número de Teléfono</label>
            <input type="tel" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-aibo-red" placeholder="Tu número teléfonico" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
            <input type="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-aibo-red" placeholder="tucorreo@empresa.com" />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
             <textarea className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-aibo-red" placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <button className="w-full bg-aibo-dark text-white font-bold py-4 rounded-md hover:bg-aibo-red transition-colors">
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </div>
  );
}