"use client";

import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";

export default function FabricCalculator() {
  const [gsm, setGsm] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const calculateYield = () => {
    const g = parseFloat(gsm); // GSM
    const w_cm = parseFloat(width); // Ancho en CM

    if (g && w_cm) {
      // FÓRMULA: 
      // 1. Convertimos ancho de cm a metros (ej: 153cm -> 1.53m)
      const w_m = w_cm / 100;
      
      // 2. Aplicamos la fórmula: 1093.6 / (GSM * Ancho_Metros)
      const yieldResult = 1093.6 / (g * w_m);
      
      setResult(yieldResult.toFixed(2));
    }
  };

  const clear = () => {
    setGsm("");
    setWidth("");
    setResult(null);
  };

  return (
    <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg border border-blue-800">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="text-blue-300" size={24} />
        <h2 className="text-xl font-bold uppercase tracking-wide">
          Calculadora de Rendimiento
        </h2>
      </div>

      <p className="text-sm text-blue-200 mb-4">
        Calcula cuántas yardas obtienes por cada kilogramo de tela.
      </p>

      <div className="space-y-3">
        {/* INPUT GSM */}
        <div>
          <label className="block text-xs font-bold uppercase mb-1 text-blue-200">
            Peso (GSM)
          </label>
          <input
            type="number"
            value={gsm}
            onChange={(e) => setGsm(e.target.value)}
            placeholder="Ej: 140"
            className="w-full p-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* INPUT ANCHO */}
        <div>
          <label className="block text-xs font-bold uppercase mb-1 text-blue-200">
            Ancho (cm)
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Ej: 153"
            className="w-full p-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* RESULTADO */}
        {result !== null && (
          <div className="mt-4 p-3 bg-white/10 rounded-lg text-center border border-white/20 animate-in fade-in slide-in-from-bottom-2">
            <span className="block text-xs uppercase text-blue-200 mb-1">Resultado Estimado</span>
            <span className="text-3xl font-black text-white">{result}</span>
            <span className="text-sm font-medium text-blue-200 ml-1">yd / kg</span>
          </div>
        )}

        {/* BOTONES */}
        <div className="flex gap-2 pt-2">
            {result === null ? (
                <button
                    onClick={calculateYield}
                    className="w-full bg-white text-blue-900 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors uppercase text-sm tracking-wider"
                >
                    Calcular
                </button>
            ) : (
                <button
                    onClick={clear}
                    className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors uppercase text-sm tracking-wider flex items-center justify-center gap-2"
                >
                    <RefreshCw size={16} /> Calcular otra vez
                </button>
            )}
        </div>
      </div>
    </div>
  );
}