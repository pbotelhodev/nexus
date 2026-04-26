import { Banknote, BookOpen, LayoutGrid, Package, Sofa, Soup } from "lucide-react";

import Logo from "../../assets/logo.png"; // Imagem do logo


const Sidebar = () => {
    
    const navItems = [
    { name: "Visão Geral", icon: LayoutGrid, active: true },
    { name: "Mesas", icon: Sofa, active: false },
    { name: "Cardápio", icon: BookOpen, active: false },
    { name: "Cozinha", icon: Soup, active: false },
    { name: "Estoque", icon: Package, active: false },
    { name: "Financeiro", icon: Banknote, active: false },
  ];

    return (
      <aside className="w-65 bg-white flex flex-col z-10 shadow-[2px_0_8px_rgba(0,0,0,0.02)]">
        {/* Header da Sidebar (Logo) */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-1">
            {/* Representação visual do logo via CSS */}
            <img src={Logo} alt="" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-800 tracking-tight">
              Nexius
            </span>
          </div>
        </div>

        {/* Botão de Ação Principal */}
        <div className="px-6 mb-6">
          <button className="w-full bg-[#1aa350] hover:bg-[#168b44] text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
            <Plus size={18} strokeWidth={2.5} />
            Novo Pedido
          </button>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                item.active
                  ? "text-gray-800 bg-gray-50"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <item.icon
                size={20}
                strokeWidth={item.active ? 2.5 : 2}
                className={item.active ? "text-gray-800" : "text-gray-400"}
              />
              {item.name}
            </a>
          ))}
        </nav>
      </aside>
    );
}
 export default Sidebar;