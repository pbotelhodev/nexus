import { useState } from "react";
import { Plus, CalendarCheck, Clock, BoomBox } from "lucide-react";

/* Import tools */

/* Import COmponents */
const Mesa = () => {
  const [filterSelect, setFilterSelect] = useState(1);

  const mesas = [ 
    {
      numero: "01",
      status: "Ocupada",
      valor: 182.5,
      atendente: "Cleiton P.",
      tempo: "2:45",
    },  
    { numero: "02", status: "Livre", valor: 0 },
    { numero: "03", status: "Reservada", valor: 0 },

    {
      numero: "04",
      status: "Aguardando a conta",
      valor: 96.3,
      atendente: "P. Junior",
      tempo: "1:30",
    },
    {
      numero: "05",
      status: "Fechamento",
      valor: 210.0,
      atendente: "Mazim M.",
      tempo: "3:10",
    },

    { numero: "06", status: "Livre", valor: 0 },

    {
      numero: "07",
      status: "Livre",
      valor: 0,
      atendente: "Jairo C.",
      tempo: "0:00",
    },
    { numero: "08", status: "Reservada", valor: 0 },

    {
      numero: "09",
      status: "Aguardando a conta",
      valor: 134.7,
      atendente: "Cleiton P.",
      tempo: "2:05",
    },
    { numero: "10", status: "Livre", valor: 0 },

    {
      numero: "11",
      status: "Ocupada",
      valor: 88.4,
      atendente: "P. Junior",
      tempo: "1:15",
    },
    {
      numero: "12",
      status: "Fechamento",
      valor: 156.2,
      atendente: "Mazim M.",
      tempo: "2:50",
    },

    { numero: "13", status: "Reservada", valor: 0 },
    { numero: "14", status: "Livre", valor: 0 },

    {
      numero: "15",
      status: "Ocupada",
      valor: 72.0,
      atendente: "Jairo C.",
      tempo: "1:05",
    },

    {
      numero: "16",
      status: "Aguardando a conta",
      valor: 199.9,
      atendente: "Cleiton P.",
      tempo: "3:25",
    },

    { numero: "17", status: "Livre", valor: 0 },

    {
      numero: "18",
      status: "Ocupada",
      valor: 43.6,
      atendente: "P. Junior",
      tempo: "0:40",
    },

    { numero: "19", status: "Reservada", valor: 0 },

    {
      numero: "20",
      status: "Fechamento",
      valor: 120.5,
      atendente: "Mazim M.",
      tempo: "2:00",
    },

    { numero: "21", status: "Livre", valor: 0 },

    {
      numero: "22",
      status: "Ocupada",
      valor: 67.3,
      atendente: "Jairo C.",
      tempo: "1:10",
    },

    {
      numero: "23",
      status: "Ocupada",
      valor: 145.8,
      atendente: "Cleiton P.",
      tempo: "2:35",
    },

    { numero: "24", status: "Reservada", valor: 0 },

    {
      numero: "25",
      status: "Aguardando a conta",
      valor: 98.1,
      atendente: "P. Junior",
      tempo: "1:45",
    },

    { numero: "26", status: "Livre", valor: 0 },

    {
      numero: "27",
      status: "Ocupada",
      valor: 176.4,
      atendente: "Mazim M.",
      tempo: "3:00",
    },

    {
      numero: "28",
      status: "Fechamento",
      valor: 59.2,
      atendente: "Jairo C.",
      tempo: "0:50",
    },

    { numero: "29", status: "Reservada", valor: 0 },

    { numero: "30", status: "Livre", valor: 0 },
  ];
  const filtros = [
    {
      nome: `Todas as mesas(${mesas.length})`,
      id: 1,
    },
    {
      nome: `Livres(${mesas.filter((e) => e.status == "Livre").length})`,
      id: 2,
    },
    {
      nome: `Ocupadas(${mesas.filter((e) => e.status == "Ocupada").length})`,
      id: 3,
    },
    {
      nome: `Reservadas(${mesas.filter((e) => e.status == "Reservada").length})`,
      id: 4,
    },
    {
      nome: `Aguardando a conta(${mesas.filter((e) => e.status == "Aguardando a conta").length})`,
      id: 5,
    },
    {
      nome: `Fechamento(${mesas.filter((e) => e.status == "Fechamento").length})`,
      id: 6,
    },
  ];

  const produtosFilter =
    filterSelect === 1
      ? mesas
      : filterSelect === 2
        ? mesas.filter((e) => e.status == "Livre")
        : filterSelect === 3
          ? mesas.filter((e) => e.status == "Ocupada")
          : filterSelect === 4
            ? mesas.filter((e) => e.status == "Reservada")
            : filterSelect === 5
              ? mesas.filter((e) => e.status == "Aguardando a conta")
              : filterSelect === 6
                ? mesas.filter((e) => e.status == "Fechamento")
                : null;

  /* Variaveis */
  const renderLivre = (item) => (
    <div key={item.numero} className="p-5 min-h-70 border-3 rounded-xl border-slate-200 border-dotted  flex flex-col justify-center items-center">
      {/* icone */}
      <div className="p-3 bg-slate-200 rounded-full">
        <Plus className="w-8 h-8" />
      </div>

      {/* Dados */}
      <div className="flex flex-col items-center text-sm font-bold mt-2">
        <p>Mesa {item.numero}</p>
        <p className="mt-1 text-xs font-medium">Livre pra ocupação</p>
      </div>
    </div>
  );
  const renderReservado = (item, bgPrimary, textPrimary) => (
    <div key={item.numero} className="p-5 min-h-70 rounded-xl border-3 border-slate-200 border-dotted bg-slate-100 flex flex-col justify-between">
      {/* Superior */}
      <div className="items-center flex">
        <div
          className={`p-3 w-11 h-11 flex justify-center items-center ${
            item.status === "Reservada" ? "text-black" : "text-white"
          } ${bgPrimary} font-bold rounded-xl`}
        >
          {item.numero}
        </div>

        <div
          className={`ml-3 flex uppercase items-center gap-2 font-extrabold text-[10px] ${textPrimary}`}
        >
          <div className={`w-2 h-2 rounded ${bgPrimary}`} />
          {item.status}
        </div>
      </div>
      {/* Central */}
      <div className="flex gap-2 flex-col items-center justify-center">
        <CalendarCheck className="text-slate-400" />{" "}
        <p className="font-semibold text-xs text-slate-400">
          Reservado p/ <span className="font-extrabold">Pedro</span>
        </p>
      </div>
      {/* Inferior */}
      <div
        className={`w-full p-3 text-xs font-bold rounded-2xl flex justify-center items-center mt-5 text-gray-800 ${bgPrimary}`}
      >
        Check-in
      </div>
    </div>
  );
  return (
    <div>
      {/* ========== Filtros ========== */}
      <div className="p-5 ">
        {filtros.map((filtro, index) => (
          <button
            onClick={() => setFilterSelect(filtro.id)}
            key={index}
            className={`py-3 mr-3 cursor-pointer px-5 text-sm rounded-3xl font-semibold ${filterSelect == filtro.id ? "bg-green-500 text-white" : "bg-white"}`}
          >
            {filtro.nome}
          </button>
        ))}
      </div>
      {/* ========== Cards Mesa ========== */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {produtosFilter.map((item) => {
          const textPrimary =
            item.status == "Livre"
              ? "text-slate-500"
              : item.status == "Ocupada"
                ? "text-green-500"
                : item.status == "Reservada"
                  ? "text-black"
                  : item.status == "Fechamento"
                    ? "text-red-500"
                    : "text-amber-500";
          const bgPrimary =
            item.status == "Livre"
              ? "bg-slate-500"
              : item.status == "Ocupada"
                ? "bg-green-500"
                : item.status == "Reservada"
                  ? "bg-blue-300"
                  : item.status == "Fechamento"
                    ? "bg-red-500"
                    : "bg-amber-500";

          return item.status === "Livre" ? (
            renderLivre(item)
          ) : item.status === "Reservada" ? (
            renderReservado(item, bgPrimary, textPrimary)
          ) : (
            <div
              key={item.numero}
              className="p-5 rounded-xl border-2 border-slate-100 bg-white"
            >
              {/* ========== Número e Status ========== */}
              <div className="items-center flex ">
                {/* Número */}
                <div
                  className={`p-3 w-11 h-11 flex justify-center items-center ${item.status == "Reservada" ? "text-black " : "text-white"} ${bgPrimary} font-bold rounded-xl`}
                >
                  {item.numero}
                </div>
                {/* Status */}
                <div
                  className={`ml-3 flex uppercase items-center gap-2 font-extrabold text-[10px] ${textPrimary}`}
                >
                  <div className={`w-2 h-2 rounded ${bgPrimary}`} />
                  {item.status}
                </div>
              </div>
              {/* ========== Atendente ========== */}
              <div className="w-full p-3 mt-5 rounded-2xl bg-[#f8f9fa]">
                <p className="uppercase text-[10px] text-slate-400 font-extrabold">
                  Atendente
                </p>
                <div className="text-xs font-extrabold">{item.atendente}</div>
              </div>
              {/* ========== Tempo e Consumo ========== */}
              <div className="flex justify-between mt-5">
                {/* Tempo */}
                <div className="flex-5 border-r border-gray-100">
                  <div
                    className={`flex items-center gap-1 font-extrabold text-[9px] uppercase ${textPrimary}`}
                  >
                    <Clock
                      className={`w-3 h-3 font-extrabold ${textPrimary}`}
                    />
                    Tempo
                  </div>
                  <div className={`font-bold text-[12px] ${textPrimary}`}>
                    {item.tempo}
                  </div>
                </div>

                {/* Valor */}
                <div className="flex-5  flex flex-col items-end">
                  <div
                    className={`flex items-center gap-1 font-extrabold text-[9px] uppercase text-black`}
                  >
                    Consumo
                  </div>
                  <div className={`font-bold text-[12px] text-black`}>
                    R$ {item.valor.toFixed(2)}
                  </div>
                </div>
              </div>
              {/* ========== Botão de Ação ========== */}
              <div
                className={`w-full p-3 text-xs font-bold rounded-2xl flex justify-center items-center mt-5 border-2  text-white ${bgPrimary}`}
              >
                {item.status === "Aguardando a conta"
                  ? "Emitir Conta"
                  : item.status == "Fechamento"
                    ? "Confirmar Fechamento"
                    : "Ver Detalhes"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mesa;
