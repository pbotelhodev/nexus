/* Imports Tools */
import {
  BanknoteArrowUp,
  ClipboardClock,
  ClipboardPenLine,
  PackageCheck,
  Receipt,
  ReceiptText,
  Ticket,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { useOutletContext } from "react-router-dom";

/* Import Componentes */

const Dashboard = () => {
  const { menuAberto } = useOutletContext();

  /* Infos para dinamica dos carns ========== Trocar pelos dados reais */
  const mesas = 30;
  const mesasOcupadas = 17;
  const pedidosAtivos = 42;
  const ticketMedio = 80;
  const receitaHoje = 4280.5;

  const cardItens = [
    {
      icone: BanknoteArrowUp,
      name: "Receita Hoje",
      data: "4.280,50",
      legenda: ` + ${(((receitaHoje - 3805) / 3805) * 100).toFixed(1)}%`,
      primaryColor: "text-green-600",
      secondaryColor: "bg-green-100",
    },
    {
      icone: ReceiptText,
      name: "Pedidos Ativos",
      data: pedidosAtivos,
      legenda:
        pedidosAtivos < 10
          ? "Baixa demanda"
          : pedidosAtivos < 20
            ? "Média demanda"
            : "Alta demanda",
      primaryColor: "text-orange-600",
      secondaryColor: "bg-orange-100",
    },
    {
      icone: Ticket,
      name: "Ticket Médio",
      data: "84,20",
      legenda: ticketMedio > 100 ? "Acima da média" : "Abaixo da media",
      primaryColor: "text-violet-600",
      secondaryColor: "bg-violet-100",
    },
    {
      icone: Users,
      name: "Mesas Ocupadas",
      data: `${mesasOcupadas} / ${mesas}`,
      legenda: `${Math.round((mesasOcupadas / mesas) * 100)}% de ocupação`,
      primaryColor: "text-blue-600",
      secondaryColor: "bg-blue-100",
    },
  ];

  const pedidosCard = [
    {
      mesa: "Mesa 08",
      icone: Receipt,
      acao: "Fechamemento de conta",
      valor: "R$ 210,00",
    },
    {
      mesa: "Delivery",
      icone: PackageCheck,
      acao: "Pedido entregue",
      valor: "R$ 88,50",
    },
    {
      mesa: "Mesa 21",
      icone: ClipboardPenLine,
      acao: "Novo pedido: 2x Chopp",
      valor: "R$ 24,00",
    },
    {
      mesa: "Mesa 28",
      icone: ClipboardClock,
      acao: "Solicitação da conta",
      valor: "R$ 128,90",
    },
    {
      mesa: "Mesa 01",
      icone: UtensilsCrossed,
      acao: "Abriu a mesa",
      valor: "",
    },
    {
      mesa: "Mesa 21",
      icone: ClipboardPenLine,
      acao: "Novo pedido: 2x Chopp",
      valor: "R$ 24,00",
    },
    {
      mesa: "Mesa 28",
      icone: ClipboardClock,
      acao: "Solicitação da conta",
      valor: "R$ 128,90",
    },
    {
      mesa: "Mesa 01",
      icone: UtensilsCrossed,
      acao: "Abriu a mesa",
      valor: "",
    },
  ];

  /* Trocar pelo DB da mesas */
  const mesasCard = [
    { numero: 1, status: "ocupada", valor: 182.5 },
    { numero: 2, status: "livre", valor: 0 },
    { numero: 3, status: "reservada", valor: 0 },
    { numero: 4, status: "ocupada", valor: 96.3 },
    { numero: 5, status: "ocupada", valor: 210.0 },
    { numero: 6, status: "livre", valor: 0 },
    { numero: 7, status: "ocupada", valor: 54.9 },
    { numero: 8, status: "reservada", valor: 0 },
    { numero: 9, status: "ocupada", valor: 134.7 },
    { numero: 10, status: "livre", valor: 0 },

    { numero: 11, status: "ocupada", valor: 88.4 },
    { numero: 12, status: "ocupada", valor: 156.2 },
    { numero: 13, status: "reservada", valor: 0 },
    { numero: 14, status: "livre", valor: 0 },
    { numero: 15, status: "ocupada", valor: 72.0 },
    { numero: 16, status: "ocupada", valor: 199.9 },
    { numero: 17, status: "livre", valor: 0 },
    { numero: 18, status: "ocupada", valor: 43.6 },
    { numero: 19, status: "reservada", valor: 0 },
    { numero: 20, status: "ocupada", valor: 120.5 },

    { numero: 21, status: "livre", valor: 0 },
    { numero: 22, status: "ocupada", valor: 67.3 },
    { numero: 23, status: "ocupada", valor: 145.8 },
    { numero: 24, status: "reservada", valor: 0 },
    { numero: 25, status: "ocupada", valor: 98.1 },
    { numero: 26, status: "livre", valor: 0 },
    { numero: 27, status: "ocupada", valor: 176.4 },
    { numero: 28, status: "ocupada", valor: 59.2 },
    { numero: 29, status: "reservada", valor: 0 },
    { numero: 30, status: "livre", valor: 0 },

    { numero: 31, status: "livre", valor: 0 },
    { numero: 32, status: "ocupada", valor: 67.3 },
    { numero: 33, status: "ocupada", valor: 145.8 },
    { numero: 34, status: "reservada", valor: 0 },
    { numero: 35, status: "ocupada", valor: 98.1 },
    { numero: 36, status: "livre", valor: 0 },
    { numero: 37, status: "ocupada", valor: 176.4 },
    { numero: 38, status: "ocupada", valor: 59.2 },
    { numero: 39, status: "reservada", valor: 0 },
    { numero: 40, status: "reservada", valor: 0 },

    { numero: 41, status: "livre", valor: 0 },
    { numero: 42, status: "ocupada", valor: 67.3 },
    { numero: 43, status: "ocupada", valor: 145.8 },
    { numero: 44, status: "reservada", valor: 0 },
    { numero: 45, status: "ocupada", valor: 98.1 },
    { numero: 46, status: "livre", valor: 0 },
    { numero: 47, status: "ocupada", valor: 176.4 },
    { numero: 48, status: "ocupada", valor: 59.2 },
    { numero: 49, status: "reservada", valor: 0 },
    { numero: 50, status: "reservada", valor: 0 },
  ];

  return (
    <>
      {/*  ==========  ========== Cards de Informações ==========  ==========  */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardItens.map((card, index) => (
          <div key={index} className={`bg-white p-5 rounded-xl`}>
            {/* ========== Superior do card ==========  */}
            <div className="flex items-start justify-between gap-3 mb-4">
              {/* ========== Ícone do Card ========== */}
              <div
                className={`w-12 h-12 flex items-center justify-center ${card.secondaryColor} rounded-lg`}
              >
                <card.icone className={`w-6 h-6 ${card.primaryColor}`} />
              </div>
              {/* ========== Legenda do Card ========== */}
              <div
                className={`${menuAberto ? `hidden md:block` : "block"} text-xs ${card.primaryColor} ${card.secondaryColor} rounded-lg px-2 py-0.5`}
              >
                <p className="font-bold">{card.legenda}</p>
              </div>
            </div>
            {/* Conteúdo do Card */}
            <div className="mt-5">
              {/* ========== nome do Card  ========== */}
              <div>
                <h3 className="font-extrabold text-[12px] mb-2">
                  {card.name.toUpperCase()}
                </h3>
              </div>
              {/* ========== Dado Principal do Card ========== */}
              <div>
                <p className="text-2xl lg:text-3xl">
                  {card.name === "Receita Hoje" ||
                  card.name === "Ticket Médio" ? (
                    <>
                      <span className="text-sm mr-1">R$ </span>{" "}
                      <span className="font-bold">{card.data}</span>
                    </>
                  ) : (
                    <span className="font-bold">{card.data}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*  ==========   ========== Graficos ==========  ==========  */}
      <div className="pr-5 pl-5 pb-5 grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* Mapa de mesas */}
        <div className="bg-white p-5 rounded-xl flex flex-1 flex-col min-h-0 h-[calc(100vh-230px)] ">
          {/* Titulo & Sub-titulo */}
          <div className="">
            {/* nome do Card */}
            <div>
              <p className="text-2xl font-bold">Mapa de mesas</p>
            </div>
            {/* Dado Principal do Card */}
            <div>
              <p className="text-sm mb-2">Salão Principal e Demais Áreas</p>
            </div>
          </div>
          {/*  ==========  Legenda  ========== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-3">
            <div className="text-green-500 flex items-center gap-1 font-bold text-xs">
              <div className="bg-green-500 rounded w-2 h-2" />
              LIVRE{" "}
              <span>
                ({mesasCard.filter((e) => e.status === "livre").length})
              </span>
            </div>
            <div className="text-red-500 flex items-center gap-1 font-bold text-xs">
              <div className="bg-red-500 rounded w-2 h-2" />
              OCUPADA{" "}
              <span>
                ({mesasCard.filter((e) => e.status === "ocupada").length})
              </span>
            </div>
            <div className="text-amber-500 flex items-center gap-1 font-bold text-xs">
              <div className="bg-amber-500 rounded w-2 h-2" />
              RESERVADA{" "}
              <span>
                ({mesasCard.filter((e) => e.status === "reservada").length})
              </span>
            </div>
          </div>

          {/* ========== Cards das mesas ========== */}
          <div className="flex-1 rounded-2xl min-h-0 overflow-y-auto grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mt-6">
            {mesasCard.map((mesa, index) => (
              <div
                key={index}
                className={`rounded-xl m-1 flex flex-col justify-around ${mesa.status == "livre" ? "bg-green-100 border-2 border-green-200" : mesa.status == "ocupada" ? "bg-red-100 border-2 border-red-200 " : "bg-amber-100 border-2 border-amber-200"}`}
              >
                {/* Número da mesa */}
                <div
                  className={`flex justify-center font-bold text-lg ${mesa.status == "reservada" ? "text-amber-600" : mesa.status == "ocupada" ? "text-red-600" : "text-green-600"}`}
                >
                  {mesa.numero}
                </div>

                {/* Valor da comanda */}
                <div
                  className={`flex justify-center font-semibold text-xs ${mesa.status == "reservada" ? "text-amber-600" : mesa.status == "ocupada" ? "text-red-600" : "text-green-600"}`}
                >
                  {mesa.status == "reservada"
                    ? "RES."
                    : mesa.status == "livre"
                      ? "LIVRE"
                      : `R$ ${mesa.valor.toFixed(2)}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== ========== Pedidos Recentes ==========  ==========  */}
        <div className="bg-white p-5 rounded-xl flex flex-col h-[calc(100vh-230px)] min-h-0">
          {/* Titulo */}
          <div>
            <p className="text-2xl font-bold">Atualizações Recentes</p>
          </div>
          {/* cards dos pedidos */}
          <div className="flex-1 min-h-0 overflow-y-auto mt-3 rounded-2xl">
            {pedidosCard.map((card, index) => (
              <div className="flex items-center my-3" key={index}>
                {/* ========== Icone ==========  */}
                <div className="p-3 bg-blue-100 text-blue-500 rounded-full">
                  <card.icone />
                </div>
                {/* ========== Dados ==========  */}
                <div className="flex flex-col flex-6 px-4">
                  {/* Mesa */}
                  <div className="font-semibold">{card.mesa}</div>
                  {/* Ação */}
                  <div className="text-xs">{card.acao}</div>
                </div>
                {/* ========== Valor ==========  */}
                <div className="text-xs flex-2 lg:text-md font-bold">{card.valor}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
