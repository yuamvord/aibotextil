import type { Metadata } from "next";
// import localFont... (lo que tengas aquí)
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer"; // <--- 1. IMPORTAR

export const metadata: Metadata = {
  title: "Aibo Textil - Innovación para el deporte",
  description: "Más que telas, innovación para el deporte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white flex flex-col min-h-screen"> 
        {/* Nota: agregué 'flex flex-col min-h-screen' al body para asegurar 
            que el footer siempre se vaya al fondo aunque haya poco contenido */}
        
        <Navbar />

        {/* El contenido principal crece para empujar el footer */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* 2. AQUI VA EL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}