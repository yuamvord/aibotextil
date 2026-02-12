import type { Metadata } from "next";
// import localFont... 
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer"; 
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CartProvider } from "@/context/CartContext"; 

export const metadata: Metadata = {
  title: "Aibo Textil - Innovación para el deporte",
  description: "Más que telas, innovación para el deporte.",
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="es">
      <body className="antialiased bg-white flex flex-col min-h-screen"> 
        
        {/* EL PROVIDER DEBE ABRAZAR A TODOS LOS COMPONENTES VISIBLES */}
        <CartProvider>
            
            {/* 1. Navbar dentro para que pueda leer el carrito */}
            <Navbar />
            
            {/* 2. El contenido principal (children) solo una vez dentro del main */}
            <main className="flex-grow">
              {children}
            </main>
            
            <WhatsAppButton />
            
            {/* 3. Footer */}
            <Footer />

        </CartProvider>
        
      </body>
    </html>
  );
}