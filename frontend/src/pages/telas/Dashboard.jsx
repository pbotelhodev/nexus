/* Imports Tools */
import {
  BadgeDollarSign,
  BanknoteArrowUp,
  Receipt,
  ReceiptText,
  Ticket,
  Users,
} from "lucide-react";


/* Import Componentes */

const AppLayout = () => {
  const cardItens = [
    {
      icone: BanknoteArrowUp,
      nome: "Receita Hoje",
      legenda: "+12.5%",
      data: "R$ 12.500,00",
      primaryColor: "emerald-500",
      secondaryColor: "emerald-100",
    },
    {
      icone: ReceiptText,
      nome: "Pedidos Ativos",
      legenda: "Pico agora",
      data: "40 pedidos",
      primaryColor: "ambar-500",
      secondaryColor: "ambar-100",
    },
    {
      icone: Ticket,
      nome: "Ticket Médio",
      legenda: "Acima da Média",
      data: "R$ 185,00",
      primaryColor: "purple-500",
      secondaryColor: "purple-100",
    },
    {
      icone: Users,
      nome: "Mesas Ocupadas",
      legenda: "82% de ocupação",
      data: "27 mesas",
      primaryColor: "blue-500",
      secondaryColor: "blue-100",
    },
  ];

  return (
    <>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardItens.map((card, index) => (
          <div key={index} className={`bg-white p-3 rounded-xl`}>
            <div className="flex items-center justify-between gap-3 mb-2">
              <div
                className={`w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg`}
              >
                <card.icone className="w-9 h-9 "/>
              </div>
              <div className="text-center">
                <p>{card.legenda}</p>
              </div>
            </div>
            <div>
              <h3>{card.nome.toUpperCase()}</h3>
              <p className="text-xl">{card.data}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppLayout;
