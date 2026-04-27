import { useState } from "react";

/* Import tools */

/* Import COmponents */
const AppLayout = () => {
  const [filterSelect, setFilterSelect] = useState(1);

  const mesas = [

  ]

  const filtros = [
    { nome: `Todas as mesas(${mesas.length})`, id: 1 },
    { nome: `Livres(${mesas.filter((e) => e.status == "livre").length})`, id: 2 },
    { nome: `Ocupadas(${mesas.filter((e) => e.status == "ocupada").length})`, id: 3 },
    { nome: `Reservadas(${mesas.filter((e) => e.status == "reservada").length})`, id: 4 },
  ];
  return (  
    <div>
      {/* ========== Filtros ========== */}
      <div className="p-5 gap-3 flex">
        {filtros.map((filtro, index) => (
          <button onClick={() => setFilterSelect(filtro.id)} key={index} className={`py-3 cursor-pointer px-5 text-sm rounded-3xl font-semibold ${filterSelect == filtro.id ? "bg-green-500 text-white" : "bg-white"}`}>{filtro.nome}</button>
        ))}
      </div>
      {/* ========== Cards Mesa ========== */}
      <div className="p-5">Aqui vai o card de mesas</div>
    </div>
  );
};

export default AppLayout;
