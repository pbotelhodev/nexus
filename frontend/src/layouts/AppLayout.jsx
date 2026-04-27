/* Imports */
import { useState } from "react";
import { Outlet } from "react-router-dom";

/* Imports dos componentes */
import Sidebar from "../components/FoodService/Sidebar";
import Header from "../components/FoodService/Header";

const AppLayout = () => {
    /* States */
    const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-800">
      {/* SIDEBAR (Barra Lateral) */}
      <Sidebar menuAberto={menuAberto} setMenuAberto={setMenuAberto} />

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER SUPERIOR */}
        <Header />

        {/* CONTEÚDO DA PÁGINA*/}
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;