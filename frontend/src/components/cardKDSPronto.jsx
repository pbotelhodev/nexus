import { Clock, TriangleAlert, Check } from "lucide-react";

const CardKDSPronto = ({ pedidos, status, icon: Icon }) => {
  const pedidosFiltrados = pedidos.filter((e) => e.status == status);
  const cores =
    status === "pendente"
      ? "bg-red-200 text-red-950"
      : status === "em preparo"
        ? "bg-orange-200 text-orange-950"
        : status == "pronto / saída"
          ? "bg-yellow-200 text-yellow-950"
          : "bg-green-200 text-green-950";

  const preparo = status == "em preparo";

  return (
    <div className="flex flex-col h-[94dvh] gap-5">
      <div className="sm:block border-t-2 border-dashed lg:hidden "></div>
      {/* Header */}
      <div className="flex items-center gap-2 p-2">
        <Icon />
        <p className="uppercase font-bold text-sm">{status}</p>

        <div className={`${cores} rounded-lg text-xs font-extrabold py-1 px-3`}>
          {pedidosFiltrados.length}
        </div>
      </div>

      {/* Lista com scroll */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 ">
        {pedidosFiltrados.map((e) => (
          <div className="p-5 bg-white rounded-2xl flex flex-col gap-3 border border-slate-200">
            <div className="flex justify-between">
              <div className="flex justify-between w-full">
                <div
                  className={`font-semibold  text-xs ${cores} flex items-center px-2 py-1 rounded-lg`}
                >
                  {e.origem}
                </div>
                <div
                  className={`font-semibold text-xs ${preparo && e.tempo[0] >= 2 ? "bg-red-500 text-white" : null} flex gap-1 items-center px-2 py-1 rounded-lg`}
                >
                  {preparo && e.tempo[0] >= 2 ? (
                    <TriangleAlert size={15} />
                  ) : null}
                  {preparo
                    ? e.tempo[0] < 2
                      ? "Em preparo"
                      : "Atrasado"
                    : null}
                </div>
                <div
                  className={`font-bold w-6 h-6 text-green-500 rounded-full flex items-center p-1  `}
                >
                  {e.status === "pronto / saída" ? (
                    <Clock size={15} />
                  ) : (
                    <Check />
                  )}
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold">
              Pedido <span className="font-extrabold">#{e.id}</span>
            </div>
            <div className=" flex justify-between border-t-2 border-dotted border-slate-200 py-2 items-center">
              <p className="text-xs font-semibold">
                {e.status == "pronto / saída"
                  ? "Pronto à 3 min."
                  : "Coletado à 2 min."}
              </p>
              <button
                className={`text-sm font-semibold ${e.status == "pronto / saída" ? "bg-green-500" : null} text-white p-2 rounded-lg`}
              >
                {e.status == "pronto / saída" ? "Coletado" : null}
              </button>
            </div>
          </div>
        ))}
      </div>
      {status === "coletados" && (
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Resumo
            </p>

            <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">
              Online
            </div>
          </div>

          {/* Linha principal */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold">
                Pratos
              </p>
              <p className="text-3xl font-extrabold text-green-700 leading-none">
                142
              </p>
            </div>

            <div className="text-right">
              <p className="text-[10px] uppercase text-slate-400 font-bold">
                Eficiência
              </p>
              <p className="text-lg font-bold text-slate-800">98.2%</p>
            </div>
          </div>

          {/* Linha secundária */}
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold">
                Tempo médio
              </p>
              <p className="font-bold text-slate-800">14m 20s</p>
            </div>

            <div className="text-right">
              <p className="text-[10px] uppercase text-slate-400 font-bold">
                Satisfação
              </p>
              <p className="font-bold text-slate-800">4.9/5.0</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardKDSPronto;
