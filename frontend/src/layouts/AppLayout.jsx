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
    <div className="flex min-h-screen bg-[#f8f9fa] text-gray-800">
      {/* SIDEBAR (Barra Lateral) */}
      <Sidebar menuAberto={menuAberto} setMenuAberto={setMenuAberto} />

      {/* ÁREA PRINCIPAL */}
      <div className="flex flex-col flex-1 min-h-0 min-w-0 sticky top-0">

        {/* CONTEÚDO DA PÁGINA*/}
        <Outlet context={{ menuAberto }} />
      </div>
    </div>
  );
};

export default AppLayout;
