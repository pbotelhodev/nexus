/* Import Tools */
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Banknote,
  BookOpen,
  LayoutGrid,
  Package,
  Soup,
  Plus,
  HandPlatter,
  Motorbike,
  Settings,
} from "lucide-react";

import Logo from "../../assets/logo.png";

const Sidebar = ({menuAberto, setMenuAberto}) => {
  
  const [activeItem, setActiveItem] = useState("Dashboard");

  /* Variaveis */

  const sidebarRef = useRef(null);

  const navItems = [
    { name: "Comanda", slug: "comanda", icon: Plus, color: true },
    { name: "Dashboard", slug: "dashboard", icon: LayoutGrid, color: false },
    { name: "Mesas", slug: "mesas", icon: HandPlatter, color: false },
    { name: "Cardápio", slug: "cardapio", icon: BookOpen, color: false },
    { name: "Cozinha", slug: "cozinha", icon: Soup, color: false },
    { name: "Delivery", slug: "delivery", icon: Motorbike, color: false },
    { name: "Estoque", slug: "estoque", icon: Package, color: false },
    { name: "Financeiro", slug: "financeiro", icon: Banknote, color: false },
    { name: "Configurações", slug: "configuracoes", icon: Settings, color: false },
  ];

  /* Effects */
  useEffect(() => {
    const handleClickOutside = (e) => {
      // só roda no mobile
      if (window.innerWidth < 1024) {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
          setMenuAberto(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) setMenuAberto(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) setMenuAberto(false);
      }}
      onClick={() => {
        if (window.innerWidth < 1024) {
          setMenuAberto(true);
        }
      }}
      className={`bg-white flex flex-col z-10 shadow-[2px_0_8px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out min-h-screen overflow-hidden ${
        menuAberto ? "w-50" : "w-18"
      }`}
    >
      {/* Header da Sidebar */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-1 overflow-hidden transition-all duration-300">
          <img
            src={Logo}
            alt="Logo Nexium"
            className="w-6 h-6 shrink-0 transition-all duration-300"
          />

          <span
            className={`text-lg font-bold text-gray-800 tracking-tight whitespace-nowrap overflow-hidden ease-in-out ${
              menuAberto
                ? "opacity-100 max-w-40 translate-x-0"
                : "opacity-0 max-w-0 -translate-x-2"
            }`}
          >
            Nexium
          </span>
        </div>
      </div>

      {/* Menu de Navegação */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isNovoPedido = item.name === "Comanda";
          const isActive = item.name === activeItem;

          return (
            <NavLink
              key={item.name}
              to={`${item.name === "Configurações" ? "/settings" : `/app/${item.slug}`}`}
              onClick={() => {
                setActiveItem(item.name);
              }}
              className={`flex items-center rounded-lg font-medium text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                menuAberto
                  ? "justify-start gap-3 px-3 py-2.5"
                  : "justify-center gap-0 px-0 py-2.5"
              } ${
                isNovoPedido
                  ? "bg-primary hover:bg-hover text-white"
                  : isActive
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={`shrink-0 transition-all duration-300 ${
                  isNovoPedido
                    ? "text-white"
                    : isActive
                      ? "text-primary"
                      : "text-gray-400"
                }`}
              />

              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
                  menuAberto
                    ? "opacity-100 max-w-40 translate-x-0"
                    : "opacity-0 max-w-0 -translate-x-2"
                }`}
              >
                {item.name === "Comanda"
                  ? "Novo Pedido"
                  : item.name === "Dashboard"
                    ? "Visão Geral"
                    : item.name}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
