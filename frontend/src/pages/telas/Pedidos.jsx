/* Tools */
import { useEffect, useState } from "react";
import { ConciergeBell, ReceiptText, Send } from "lucide-react";

/* Components */
import Filtro from "../../components/FoodService/ui/Filtro";
import Loading from "../../components/FoodService/ui/Loading";

const Comanda = () => {
  const [filterActive, setFilterActive] = useState(1);
  const [produtos, setProdutos] = useState([]);
  const [itensNota, setitensNota] = useState([]);
  const [loading, setLoading] = useState(false);
  const [couvert, setCouvert] = useState(false);
  const [garcom, setGarcom] = useState(false);

  /* Funções */
/* Insere o item a comanda */
  const handleNovoItem = (item) => {
    /* Mapeia primeiro pra saber se o item ja foi inserido */
    const novoItem = {
      nome: item.nome,
      preco: item.preco,
      quantidade: 1,
      nota: "",
    };

    setitensNota((itensAtuais) => {
      return [...itensAtuais, novoItem];
    });
  };
  /* aumenta o item na comanda */
  const handleAddunidade = (item) => {

  }


  /* Effects */

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    setTimeout(() => {
      const produtosSalvos = localStorage.getItem("produtos");

      setLoading(false);

      if (produtosSalvos) {
        setProdutos(JSON.parse(produtosSalvos));
      }
    }, 300);
  }, []);

  /* Variaveis */
  
  const subTotal = itensNota.reduce((acc, prod) => {
    return acc + prod.preco * prod.quantidade;
  }, 0);

  const couvertTax = 10;
  const garcomTax = subTotal * 0.1;
  const precoFinal =
    subTotal + (garcom ? garcomTax : 0) + (couvert ? couvertTax : 0);

  const filtros = [
    { nome: "Tudo", id: 1 },
    { nome: "Bebidas", id: 2 },
    { nome: "Entradas", id: 3 },
    { nome: "Pratos", id: 4 },
    { nome: "Porções", id: 5 },
    { nome: "Sobremesas", id: 6 },
    { nome: "Combos", id: 7 },
  ];

  const produtosFilter =
    filterActive === 1
      ? produtos
      : filterActive === 2
        ? produtos.filter((e) => e.categoria === "Bebidas")
        : filterActive === 3
          ? produtos.filter((e) => e.categoria === "Entradas")
          : filterActive === 4
            ? produtos.filter((e) => e.categoria === "Pratos")
            : filterActive === 5
              ? produtos.filter((e) => e.categoria === "Porções")
              : filterActive === 6
                ? produtos.filter((e) => e.categoria === "Sobremesas")
                : filterActive === 7
                  ? produtos.filter((e) => e.categoria === "Combos")
                  : [];

  return (
    <div className="min-h-dvh overflow-y-auto p-5 lg:h-dvh lg:overflow-hidden">
      <div className="grid min-h-0 grid-cols-1 gap-5 lg:h-full lg:grid-cols-5">
        {/* Left */}
        <div className="flex h-[calc(100dvh-2.5rem)] min-h-0 flex-col lg:col-span-3 lg:h-full">
          {/* Filtros */}
          <div className="shrink-0">
            <Filtro
              filtros={filtros}
              funcaoFiltro={setFilterActive}
              filtroAtual={filterActive}
            />
          </div>

          {/* Produtos */}
          <div className="min-h-0 flex-1 overflow-hidden py-5">
            <div className="grid h-full min-h-0 grid-cols-1 gap-5 overflow-y-auto md:grid-cols-2 lg:grid-cols-3">
              {produtosFilter?.map((e, index) => {
                return (
                  <div
                    onClick={() => handleNovoItem(e)}
                    key={`${e.nome}-${index}`}
                    className="flex h-65 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    {/* Imagem */}
                    <div className="h-37.5 shrink-0 overflow-hidden">
                      <img
                        src={e.imagem}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                        alt={e.nome}
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-1 flex-col p-3">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-bold leading-tight text-slate-900">
                          {e.nome}
                        </p>

                        <p className="shrink-0 text-sm font-bold text-slate-900">
                          R$ {e.preco.toFixed(2)}
                        </p>
                      </div>

                      <p className="mt-auto pt-2 text-xs font-medium leading-snug text-slate-500">
                        {e.legenda}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-2 flex h-[calc(100dvh-2.5rem)] min-h-0 flex-col rounded-2xl border border-slate-200 bg-white lg:h-full">
          {/* Header */}
          <div className="flex shrink-0 items-center gap-3 rounded-t-2xl bg-slate-100 px-5 py-3">
            <div className="flex items-center rounded-full bg-white p-3 text-black">
              <ConciergeBell size={20} />
            </div>

            <p className="text-xl font-bold">Comanda</p>
          </div>

          {/* Produtos da comanda */}
          <div className="min-h-0 flex-1 overflow-y-auto p-5">
            <div className="flex flex-col gap-4">
              {itensNota.map((e, index) => (
                <div
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  key={index}
                >
                  <div className="flex justify-between gap-3 text-sm font-bold">
                    <div>{e.nome}</div>
                    <div className="shrink-0">R$ {e.preco.toFixed(2)}</div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button className="hidden text-xs font-semibold text-green-700 md:block">
                      + Adicionar observação
                    </button>

                    <button className="block text-xs font-semibold text-green-700 md:hidden">
                      + Obs.
                    </button>

                    <div className="flex items-center gap-4 rounded-lg bg-slate-200 px-2 py-1">
                      <button className="text-lg font-semibold text-green-700">
                        -
                      </button>

                      <div className="text-sm font-semibold">
                        {e.quantidade}
                      </div>

                      <button className="text-lg font-semibold text-green-700">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valores + Botões */}
          <div className="shrink-0 border-t border-slate-200 px-5 py-5">
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                {/* 10% do garçom */}
                <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={garcom}
                      onChange={() => setGarcom(!garcom)}
                      className="size-4 accent-green-600"
                    />

                    <p className="text-xs text-slate-500 font-semibold">
                      10% do garçom
                    </p>
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    R$ {garcomTax.toFixed(2)}
                  </p>
                </div>

                {/* Couvert */}
                <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center gap-2">
                    <input
                      checked={couvert}
                      onChange={() => setCouvert(!couvert)}
                      type="checkbox"
                      className="size-4 accent-green-600"
                    />

                    <p className="text-xs text-slate-500 font-semibold">
                      Couvert
                    </p>
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    R$ {couvertTax.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between text-sm font-medium">
                <div>Subtotal</div>
                <div>R$ {subTotal.toFixed(2)}</div>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <div>Total</div>
                <div className="text-xl font-extrabold text-green-700">
                  R$ {precoFinal.toFixed(2)}
                </div>
              </div>

              {/* Botões */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-3 py-3 text-sm font-bold text-white transition hover:bg-green-700">
                  <Send size={18} />
                  Inserir na mesa
                </button>

                <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-200 px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-300">
                  <ReceiptText size={18} />
                  Fechar pedido
                </button>
              </div>
            </div>
          </div>
        </div>

        {loading && <Loading />}
      </div>
    </div>
  );
};

export default Comanda;
