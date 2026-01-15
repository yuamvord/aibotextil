import Banner from "@/components/home/Banner";
import AboutSection from "@/components/home/AboutSection";
import ProductCategories from "@/components/home/ProductCategories";
import TechnologiesSection from "@/components/home/TechnologiesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      
      {/* Aquí cargamos el Banner que acabamos de crear */}
      <Banner />
      <AboutSection />
      <ProductCategories />
      <TechnologiesSection />

      {/* Aquí irán las siguientes secciones (Productos, Blog, etc.) */}

    </main>
  );
}