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

  const [modalObs, setModalObs] = useState(false);
  const [itemObsIndex, setItemObsIndex] = useState(null);
  const [textoObs, setTextoObs] = useState("");

  /* Funções */

  /* Insere o item na comanda */
  const handleNovoItem = (item) => {
    const itemExist = itensNota.some((e) => e.nome === item.nome);

    if (itemExist) {
      setitensNota((itensAtuais) => {
        return itensAtuais.map((e) => {
          if (item.nome === e.nome) {
            return {
              ...e,
              quantidade: e.quantidade + 1,
            };
          }

          return e;
        });
      });
    } else {
      const novoItem = {
        nome: item.nome,
        preco: item.preco,
        quantidade: 1,
        nota: "",
      };

      setitensNota((itensAtuais) => {
        return [...itensAtuais, novoItem];
      });
    }
  };

  /* Aumenta o item na comanda */
  const handleAddItem = (indexitem) => {
    setitensNota((itensNota) => {
      return itensNota.map((item, index) => {
        if (index === indexitem) {
          return { ...item, quantidade: item.quantidade + 1 };
        }

        return item;
      });
    });
  };

  /* Diminui o item na comanda */
  const handleRemoveItem = (indexitem) => {
    setitensNota((itensNota) => {
      return itensNota
        .map((item, index) => {
          if (index === indexitem) {
            return { ...item, quantidade: item.quantidade - 1 };
          }

          return item;
        })
        .filter((e) => e.quantidade > 0);
    });
  };

  /* Abre modal de observação */
  const abrirModalObs = (indexItem, notaAtual) => {
    setItemObsIndex(indexItem);
    setTextoObs(notaAtual || "");
    setModalObs(true);
  };

  /* Fecha modal de observação */
  const fecharModalObs = () => {
    setModalObs(false);
    setItemObsIndex(null);
    setTextoObs("");
  };

  /* Salva observação no item */
  const salvarObs = () => {
    setitensNota((itensAtuais) => {
      return itensAtuais.map((item, index) => {
        if (index === itemObsIndex) {
          return {
            ...item,
            nota: textoObs,
          };
        }

        return item;
      });
    });

    fecharModalObs();
  };

  /* Effects */

  useEffect(() => {
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
                    className="flex h-65 cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
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
            {itensNota.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-center">
                <p className="text-sm font-bold text-slate-500">
                  Nenhum item adicionado
                </p>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  Clique em um produto do cardápio para inserir na comanda.
                </p>
              </div>
            ) : (
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

                    {e.nota && (
                      <div className="rounded-lg bg-yellow-50 px-3 py-2 text-xs font-medium text-yellow-700">
                        Obs: {e.nota}
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => abrirModalObs(index, e.nota)}
                        className="hidden text-xs font-semibold text-green-700 md:block"
                      >
                        {e.nota
                          ? "Editar observação"
                          : "+ Adicionar observação"}
                      </button>

                      <button
                        onClick={() => abrirModalObs(index, e.nota)}
                        className="block text-xs font-semibold text-green-700 md:hidden"
                      >
                        {e.nota ? "Editar obs." : "+ Obs."}
                      </button>

                      <div className="flex items-center gap-4 rounded-lg bg-slate-200 px-2 py-1">
                        <button
                          onClick={() => handleRemoveItem(index)}
                          className="text-lg font-semibold text-green-700"
                        >
                          -
                        </button>

                        <div className="text-sm font-semibold">
                          {e.quantidade}
                        </div>

                        <button
                          onClick={() => handleAddItem(index)}
                          className="text-lg font-semibold text-green-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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

                    <p className="text-xs font-semibold text-slate-500">
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

                    <p className="text-xs font-semibold text-slate-500">
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

        {modalObs && (
          <div className="fixed inset-0 z-999 ml-18 flex items-center justify-center bg-black/40 p-5 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-slate-900">
                  Observação do item
                </h2>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Adicione uma instrução para a cozinha ou atendimento.
                </p>
              </div>

              <textarea
                value={textoObs}
                onChange={(e) => setTextoObs(e.target.value)}
                placeholder="Ex: sem cebola, ponto da carne, molho separado..."
                className="h-32 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700 outline-none transition focus:border-green-600 focus:bg-white"
              />

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  onClick={fecharModalObs}
                  className="rounded-xl bg-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-300"
                >
                  Cancelar
                </button>

                <button
                  onClick={salvarObs}
                  className="rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                >
                  Salvar observação
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comanda;
