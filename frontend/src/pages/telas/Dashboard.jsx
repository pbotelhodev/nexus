/* Imports Tools */
import { BanknoteArrowUp, ReceiptText, Ticket, Users } from "lucide-react";

/* Import Componentes */

const Dashboard = () => {

  const mesas = 30
  const cardItens = [
    {
      icone: BanknoteArrowUp,
      name: "Receita Hoje",
      legenda: "+12.5%",
      data: "4.280,50",
      primaryColor: "text-green-600",
      secondaryColor: "bg-green-100",
    },
    {
      icone: ReceiptText,
      name: "Pedidos Ativos",
      legenda: "Pico agora",
      data: "42",
      primaryColor: "text-orange-600",
      secondaryColor: "bg-orange-100",
    },
    {
      icone: Ticket,
      name: "Ticket Médio",
      legenda: "Acima da Média",
      data: "185,00",
      primaryColor: "text-violet-600",
      secondaryColor: "bg-violet-100",
    },
    {
      icone: Users,
      name: "Mesas Ocupadas",
      legenda: "82% de ocupação",
      data: `27/${mesas}`,
      primaryColor: "text-blue-600",
      secondaryColor: "bg-blue-100",
    },
  ];

  return (
    <>
      {/* Cards de Informações */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardItens.map((card, index) => (
          <div key={index} className={`bg-white p-3 rounded-xl`}>
            <div className="flex items-start justify-between gap-3 mb-2">
              {/* Ícone do Card */}
              <div
                className={`w-12 h-12 flex items-center justify-center ${card.secondaryColor} rounded-lg`}
              >
                <card.icone className={`w-6 h-6 ${card.primaryColor}`} />
              </div>
              {/* Legenda do Card */}
              <div
                className={`text-sm ${card.primaryColor} ${card.secondaryColor} font-medium rounded-full px-2 py-0.5`}
              >
                <p>{card.legenda}</p>
              </div>
            </div>
            {/* Conteúdo do Card */}
            <div className="py-3 rounded-lg">
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
    </>
  );
};

export default Dashboard;
