/* eslint-disable react-hooks/set-state-in-effect */
/* Imports tools */
import { Plus, Pen } from "lucide-react";
import { useEffect, useState } from "react";

/* Import components */
import Filtro from "../../components/FoodService/ui/Filtro";
import Loading from "../../components/FoodService/ui/Loading";

const Cardapio = () => {
  /* States */
  const [filterActive, setFilterActive] = useState(1);
  const [editarCardapio, setEditarCardapio] = useState(false);
  const [modalNovoProduto, setModalNovoProduto] = useState(false);
  const [toggleAtivo, setToggleAtivo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [produtos, setProdutos] = useState([]);

  /* Funções */
  const handleToggle = (nome) => {
    setToggleAtivo((prev) =>
      prev.includes(nome)
        ? prev.filter((item) => item !== nome)
        : [...prev, nome],
    );
  };

  /* Effects */

  // Apenas lê do localStorage
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const produtosSalvos = localStorage.getItem("produtos");
      setLoading(false)
      if (produtosSalvos) {
        setProdutos(JSON.parse(produtosSalvos));
      }
    }, 300);
  }, []);

  // Recalcula toggles quando produtos mudam
  useEffect(() => {
    setToggleAtivo(produtos.filter((e) => e.active).map((e) => e.nome));
  }, [produtos]);

  /* Variáveis */
  const categoriasPadrao = [
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
    <div>
      <div className="p-5 flex flex-col lg:flex-row justify-between">
        <Filtro
          filtros={categoriasPadrao}
          funcaoFiltro={setFilterActive}
          filtroAtual={filterActive}
        />

        <div
          onClick={() => setModalNovoProduto(!modalNovoProduto)}
          className="flex font-bold text-sm items-center justify-center py-2 px-4 gap-2 rounded-full bg-primary text-white cursor-pointer"
        >
          <Plus className="w-5 h-5" /> Adicionar{" "}
          <span className="hidden md:block">novo produto</span>
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {produtosFilter?.map((e) => {
          const isLigado = toggleAtivo.includes(e.nome);

          return (
            <div key={e.nome}>
              <div className="overflow-hidden rounded-t-2xl max-h-40 flex items-center justify-center">
                <img
                  src={e.imagem}
                  className="w-full h-full object-cover"
                  alt={e.nome}
                />
              </div>

              <div className="bg-white p-3 h-35 flex flex-col justify-between rounded-b-2xl">
                <div>
                  <div className="flex justify-between gap-1 h-10">
                    <div className="font-bold text-sm">{e.nome}</div>
                    <div className="font-bold text-sm">
                      R${e.preco.toFixed(2)}
                    </div>
                  </div>

                  <div className="font-medium text-xs">{e.legenda}</div>
                </div>

                <div className="flex justify-between border-t border-gray-100 pt-2">
                  <button
                    onClick={() => handleToggle(e.nome)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      isLigado ? "bg-[#1aa350]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white ${
                        isLigado ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>

                  <div
                    onClick={() => setEditarCardapio(!editarCardapio)}
                    className="flex text-[10px] font-bold uppercase cursor-pointer gap-1 items-center hover:bg-[#16a34a] p-2 rounded-full hover:text-white transition duration-300"
                  >
                    <Pen className="w-3 h-3" />
                    Editar
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {modalNovoProduto && <div>Teste</div>}
      {editarCardapio && <div></div>}
      {loading && <Loading />}
    </div>
  );
};

export default Cardapio;
