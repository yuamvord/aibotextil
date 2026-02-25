import Image from "next/image";
import { Tela } from "@/types/telas";

interface TelaCardProps {
  tela: Tela;
}

export default function TelaCard({ tela }: TelaCardProps): React.JSX.Element {
  return (
    <div className="flex flex-col items-center group animate-fade-in-up cursor-pointer">
      
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md mb-5 bg-gray-100">
        <Image
          src={tela.imagenUrl}
          alt={tela.nombre}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
      </div>

      <div className="w-full px-4">
        <span className="block w-full py-2 px-4 border-2 border-aibo-red text-aibo-red font-bold uppercase text-sm text-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-aibo-red group-hover:text-white group-hover:shadow-md group-hover:-translate-y-1">
          {tela.nombre}
        </span>
      </div>
    </div>
  );
}