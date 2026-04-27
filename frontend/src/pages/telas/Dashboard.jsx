/* Imports Tools */
import { BanknoteArrowUp, ReceiptText, Ticket, Users } from "lucide-react";
import { useOutletContext } from "react-router-dom";

/* Import Componentes */

const Dashboard = () => {
  const { menuAberto } = useOutletContext();
  const mesas = 30;
  const mesasOcupadas = 17;
  const pedidosAtivos = 22;
  const ticketMedio = 185.0;
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
      data: "185,00",
      legenda: ticketMedio > 150 ? "Acima da média" : "Abaixo da media",
      primaryColor: "text-violet-600",
      secondaryColor: "bg-violet-100",
    },
    {
      icone: Users,
      name: "Mesas Ocupadas",
      data: `${mesasOcupadas}/${mesas}`,
      legenda: `${Math.round((mesasOcupadas / mesas) * 100)}% de ocupação`,
      primaryColor: "text-blue-600",
      secondaryColor: "bg-blue-100",
    },
  ];

  return (
    <>
      {/* Cards de Informações */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardItens.map((card, index) => (
          <div key={index} className={`bg-white p-5 rounded-xl`}>
            <div className="flex items-start justify-between gap-3 mb-4">
              {/* Ícone do Card */}
              <div
                className={`w-12 h-12 flex items-center justify-center ${card.secondaryColor} rounded-lg`}
              >
                <card.icone className={`w-6 h-6 ${card.primaryColor}`} />
              </div>
              {/* Legenda do Card */}
              <div
                className={`${menuAberto ? `hidden md:block` : "block"} text-sm ${card.primaryColor} ${card.secondaryColor} rounded-lg px-2 py-0.5`}
              >
                <p className="font-semibold">{card.legenda}</p>
              </div>
            </div>
            {/* Conteúdo do Card */}
            <div className="py-3">
              {/* nome do Card */}
              <div>
                <h3 className="font-medium text-[12px]">
                  {card.name.toUpperCase()}
                </h3>
              </div>
              {/* Dado Principal do Card */}
              <div>
                <p className="text-2xl lg:text-3xl">
                  {card.name === "Receita Hoje" ||
                  card.name === "Ticket Médio" ? (
                    <>
                      <span className="text-sm">R$ </span>{" "}
                      <span className="font-medium">{card.data}</span>
                    </>
                  ) : (
                    <span className="font-medium">{card.data}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Graficos */}
      <div>

      </div>
    </>
  );
};

export default Dashboard;
