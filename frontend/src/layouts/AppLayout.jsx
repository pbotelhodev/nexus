import React from "react";
import {

  Settings,
  Plus,
} from "lucide-react";

import Sidebar from "../components/FoodService/Sidebar";

export default function App() {
 

  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-800">
      {/* SIDEBAR (Barra Lateral) */}
      <Sidebar/>

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER SUPERIOR */}
        <header className="h-[72px] bg-white flex items-center justify-end px-8 border-b border-gray-100 z-0">
          <div className="flex items-center gap-6">
            {/* Ícone de Configurações */}
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Settings size={20} />
            </button>

            {/* Divisor Visual */}
            <div className="h-8 w-px bg-gray-200"></div>

            {/* Perfil do Usuário */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800 group-hover:text-black transition-colors">
                  Pedro Botelho
                </p>
                <p className="text-[11px] text-gray-400 font-medium">Gerente</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-gray-200 transition-all">
                {/* Avatar simulado */}
                <img
                  src="https://ui-avatars.com/api/?name=Pedro+Botelho&background=1e293b&color=ffffff&bold=true"
                  alt="Avatar de Pedro Botelho"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO DA PÁGINA (Cinza claro, vazio como na imagem) */}
        <main className="flex-1 bg-[#f8f9fa] p-6 overflow-auto">
          {/* O conteúdo dinâmico das telas entra aqui */}
        </main>
      </div>
    </div>
  );
}
