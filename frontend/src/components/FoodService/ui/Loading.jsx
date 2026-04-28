import { useState, useEffect } from "react";
import {
  Soup,
  ShoppingBag,
  Wrench,
  Stethoscope,
  Scissors,
  Laptop,
  Truck,
} from "lucide-react";

const iconesSegmentos = [
  { icone: Soup, cor: "text-orange-500" },
  { icone: ShoppingBag, cor: "text-blue-500" },
  { icone: Wrench, cor: "text-slate-600" },
  { icone: Stethoscope, cor: "text-teal-500" },
  { icone: Scissors, cor: "text-purple-500" },
  { icone: Laptop, cor: "text-indigo-500" },
  { icone: Truck, cor: "text-emerald-500" },
];

const frasesCarregamento = [
  "Um momento...",
  "Conectando ao servidor...",
  "Sincronizando dados...",
  "Carregando módulos...",
  "Autenticando acesso...",
  "Buscando informações...",
  "Montando o painel...",
  "Verificando permissões...",
  "Atualizando interface...",
  "Finalizando...",
];

export default function LoaderNexium() {
  const [indiceIcone, setIndiceIcone] = useState(0);
  const [indiceFrase, setIndiceFrase] = useState(0);

  useEffect(() => {
    const intervaloIcones = setInterval(() => {
      setIndiceIcone((prev) =>
        prev === iconesSegmentos.length - 1 ? 0 : prev + 1,
      );
    }, 1000);

    return () => clearInterval(intervaloIcones);
  }, []);

  useEffect(() => {
    const intervaloFrases = setInterval(() => {
      setIndiceFrase((prev) =>
        prev === frasesCarregamento.length - 1 ? 0 : prev + 1,
      );
    }, 4190);

    return () => clearInterval(intervaloFrases);
  }, []);

  const IconeAtual = iconesSegmentos[indiceIcone].icone;
  const CorAtual = iconesSegmentos[indiceIcone].cor;
  const FraseAtual = frasesCarregamento[indiceFrase];

  return (
    <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm gap-6">
      <div className="relative flex items-center justify-center w-20 h-20">
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
        <div className="absolute inset-0 rounded-full border-[3px] border-gray-200 border-t-primary animate-spin" />

        <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md overflow-hidden">
          <IconeAtual
            key={`icone-${indiceIcone}`}
            className={`w-6 h-6 animate-pulse transition-colors duration-500 ${CorAtual}`}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span
          key={`frase-${indiceFrase}`}
          className="text-gray-800 font-medium text-sm tracking-wide transition-all animate-pulse"
        >
          {FraseAtual}
        </span>

        <div className="flex gap-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
