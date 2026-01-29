import Banner from "@/components/home/Banner";
import AboutSection from "@/components/home/AboutSection";
import ProductCategories from "@/components/home/ProductCategories";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import Certifications from "@/components/home/Certifications";
import UsesSection from "@/components/home/UsesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      
      {/* Aquí cargamos el Banner que acabamos de crear */}
      <Banner />
      <AboutSection />
      <ProductCategories />
      <TechnologiesSection />
      <UsesSection />
      <Certifications />
      {/* Aquí irán las siguientes secciones (Productos, Blog, etc.) */}

    </main>
  );
}