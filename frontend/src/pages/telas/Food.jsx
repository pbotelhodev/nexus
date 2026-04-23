import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  LayoutDashboard,
  LayoutGrid,
  ClipboardList,
  ChefHat,
  Bike,
  Package,
  LineChart,
  Settings,
  Search,
  Plus,
  Menu,
  X,
  Banknote,
  ShoppingCart,
  TrendingUp,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  Utensils,
  Trash2,
  Receipt,
  Printer,
  Pencil,
} from "lucide-react";

import Logo from "../../assets/logo.png";

const STORAGE_KEYS = {
  MESAS: "nexium_erp_mesas",
  HISTORICO: "nexium_erp_historico_geral",
  QTD_MESAS: "nexium_erp_qtd_mesas",
  COMANDAS_FECHADAS: "nexium_erp_comandas_fechadas",
  CARDAPIO: "nexium_erp_cardapio",
  TIPOS_PRODUTO: "nexium_erp_tipos_produto",
};

const CARDAPIO_INICIAL = [
  {
    id: 1,
    nome: "Hambúrguer Artesanal",
    preco: 35,
    categoria: "Lanches",
    quantidade: 30,
    ingredientes:
      "Pão brioche, hambúrguer artesanal, queijo, alface e molho da casa",
    ativo: true,
  },
  {
    id: 2,
    nome: "Risoto Mignon",
    preco: 55,
    categoria: "Pratos",
    quantidade: 20,
    ingredientes:
      "Arroz arbóreo, cubos de mignon, queijo parmesão, vinho branco e temperos",
    ativo: true,
  },
  {
    id: 3,
    nome: "Batata Rústica",
    preco: 20,
    categoria: "Porções",
    quantidade: 25,
    ingredientes: "Batata, azeite, sal e pimenta",
    ativo: true,
  },
  {
    id: 4,
    nome: "Coca-cola 2L",
    preco: 8,
    categoria: "Bebidas",
    quantidade: 50,
    ingredientes: "Coca-cola",
    ativo: true,
  },
  {
    id: 5,
    nome: "Cerveja Brahma 600ml",
    preco: 15,
    categoria: "Bebidas",
    quantidade: 40,
    ingredientes: "Cerveja Brahma 600ml",
    ativo: true,
  },
  {
    id: 6,
    nome: "Suco Natural de Manga",
    preco: 12,
    categoria: "Bebidas",
    quantidade: 18,
    ingredientes: "Suco de manga natural",
    ativo: true,
  },
  {
    id: 7,
    nome: "Água",
    preco: 5,
    categoria: "Bebidas",
    quantidade: 80,
    ingredientes: "Água mineral",
    ativo: true,
  },
  {
    id: 8,
    nome: "Pudim",
    preco: 14,
    categoria: "Sobremesas",
    quantidade: 15,
    ingredientes: "Pudim de leite condensado",
    ativo: true,
  },
];

const TIPOS_INICIAIS = [
  "Bebidas",
  "Porções",
  "Pratos",
  "Lanches",
  "Sobremesas",
];

const GARCONS_FIXOS = ["Carlos", "Fernanda", "João", "Marina", "Paulo"];

const criarMesa = (numero) => ({
  id: numero,
  numero,
  status: "livre",
  abertaEm: null,
  cliente: null,
  pessoas: 0,
  garcom: null,
  observacoes: "",
  pedidos: [],
});

const criarMesasIniciais = (qtd) =>
  Array.from({ length: qtd }).map((_, i) => criarMesa(i + 1));

const readJSON = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeJSON = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // noop
  }
};

function ModalNotinhaMesa({
  mesaSelecionada,
  setMesaSelecionada,
  calcularTempo,
  formatCurrency,
  editandoMesa,
  setEditandoMesa,
  atualizarDadosMesa,
  alterarQuantidadeItemMesa,
  removerItemDaMesa,
  abrirNovoItemMesa,
  solicitarConta,
  abrirFechamentoMesa,
  garcons,
}) {
  if (!mesaSelecionada) return null;

  const totalMesa = mesaSelecionada.pedidos.reduce(
    (acc, item) => acc + item.qtd * item.valor,
    0,
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-lg max-h-[85vh] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Notinha da Mesa {mesaSelecionada.numero}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Tempo de abertura:{" "}
              {calcularTempo(mesaSelecionada.abertaEm) || "—"}
            </p>
          </div>
          <button
            onClick={() => setMesaSelecionada(null)}
            className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4 overflow-hidden flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-500">
                Cliente anfitrião
              </label>
              <input
                value={editandoMesa.cliente}
                onChange={(e) =>
                  setEditandoMesa((prev) => ({
                    ...prev,
                    cliente: e.target.value,
                  }))
                }
                placeholder="Nome do cliente"
                className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">
                Garçom responsável
              </label>
              <select
                value={editandoMesa.garcom}
                onChange={(e) =>
                  setEditandoMesa((prev) => ({
                    ...prev,
                    garcom: e.target.value,
                  }))
                }
                className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:border-emerald-500"
              >
                <option value="">Selecione o garçom</option>
                {garcons.map((garcom) => (
                  <option key={garcom} value={garcom}>
                    {garcom}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() =>
                atualizarDadosMesa(mesaSelecionada.id, editandoMesa)
              }
              className="px-4 py-2 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50"
            >
              Salvar dados da mesa
            </button>
          </div>

          {mesaSelecionada.pedidos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-slate-500 text-sm font-medium">
              Nenhum item lançado nessa mesa ainda.
            </div>
          ) : (
            <div className="max-h-60 overflow-y-auto pr-2 space-y-3">
              {mesaSelecionada.pedidos.map((item) => (
                <div
                  key={item.produtoId}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <div>
                    <p className="font-bold text-slate-900">{item.nome}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.qtd}x {formatCurrency(item.valor)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        alterarQuantidadeItemMesa(
                          mesaSelecionada.id,
                          item.produtoId,
                          -1,
                        )
                      }
                      className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold text-slate-700 min-w-5 text-center">
                      {item.qtd}
                    </span>
                    <button
                      onClick={() =>
                        alterarQuantidadeItemMesa(
                          mesaSelecionada.id,
                          item.produtoId,
                          1,
                        )
                      }
                      className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        removerItemDaMesa(mesaSelecionada.id, item.produtoId)
                      }
                      className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-red-500 font-bold"
                    >
                      <Trash2 className="w-4 h-4 mx-auto" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-4 flex items-center justify-between">
            <span className="font-bold text-emerald-800">Total da mesa</span>
            <span className="text-xl font-bold text-emerald-700">
              {formatCurrency(totalMesa)}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button
              onClick={() => abrirNovoItemMesa(mesaSelecionada)}
              className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50"
            >
              + Novo item
            </button>
            <button
              onClick={() => solicitarConta(mesaSelecionada)}
              className="px-4 py-3 rounded-2xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600"
            >
              Pedir conta
            </button>
            <button
              onClick={() => abrirFechamentoMesa(mesaSelecionada)}
              className="px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
            >
              Fechar mesa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardRestaurante() {
  const qtdInicial = Number(localStorage.getItem(STORAGE_KEYS.QTD_MESAS) || 24);

  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* Mesas */
  const [qtdMesas, setQtdMesas] = useState(qtdInicial);
  const [mesasList, setMesasList] = useState([]);
  const [historicoGeral, setHistoricoGeral] = useState(() =>
    readJSON(STORAGE_KEYS.HISTORICO, []),
  );
  const [mesaSelecionada, setMesaSelecionada] = useState(null);
  const [mesaAtualPedido, setMesaAtualPedido] = useState(null);
  const [pedidoAtualMesa, setPedidoAtualMesa] = useState([]);
  const [cobraTaxaServico, setCobraTaxaServico] = useState(true);
  const [mesaFechamento, setMesaFechamento] = useState(null);
  const [showFechamentoMesaModal, setShowFechamentoMesaModal] = useState(false);
  const [editandoMesa, setEditandoMesa] = useState({ cliente: "", garcom: "" });
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  /* PDV */
  const [pdvDestino, setPdvDestino] = useState("balcao");
  const [pedidoBalcao, setPedidoBalcao] = useState([]);
  const [showFechamentoBalcaoModal, setShowFechamentoBalcaoModal] =
    useState(false);
  const [buscaProduto, setBuscaProduto] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  /* Cardápio */
  const [cardapioProdutos, setCardapioProdutos] = useState(() =>
    readJSON(STORAGE_KEYS.CARDAPIO, CARDAPIO_INICIAL),
  );
  const [tiposProduto, setTiposProduto] = useState(() =>
    readJSON(STORAGE_KEYS.TIPOS_PRODUTO, TIPOS_INICIAIS),
  );
  const [showProdutoModal, setShowProdutoModal] = useState(false);
  const [novoTipoProduto, setNovoTipoProduto] = useState("");
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    categoria: "",
    quantidade: "",
    ingredientes: "",
    ativo: true,
  });
  const [modoEdicaoProduto, setModoEdicaoProduto] = useState(false);
  const [produtoEditandoId, setProdutoEditandoId] = useState(null);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(value || 0));

  const formatDateTime = (iso) => {
    if (!iso) return "—";
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(iso));
  };

  /* Effects */
  useEffect(() => {
    writeJSON(STORAGE_KEYS.CARDAPIO, cardapioProdutos);
  }, [cardapioProdutos]);
  useEffect(() => {
    writeJSON(STORAGE_KEYS.TIPOS_PRODUTO, tiposProduto);
  }, [tiposProduto]);

  useEffect(() => {
    const mesasSalvas = readJSON(STORAGE_KEYS.MESAS, null);
    if (mesasSalvas && Array.isArray(mesasSalvas) && mesasSalvas.length) {
      setMesasList(mesasSalvas);
    } else {
      const iniciais = criarMesasIniciais(qtdInicial);
      setMesasList(iniciais);
      writeJSON(STORAGE_KEYS.MESAS, iniciais);
    }
  }, [qtdInicial]);

  useEffect(() => {
    if (!mesasList.length) return;
    writeJSON(STORAGE_KEYS.MESAS, mesasList);
  }, [mesasList]);

  useEffect(() => {
    writeJSON(STORAGE_KEYS.HISTORICO, historicoGeral);
  }, [historicoGeral]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.QTD_MESAS, String(qtdMesas));
    setMesasList((prev) => {
      const novoMapa = Array.from({ length: qtdMesas }).map((_, i) => {
        const existente = prev.find((mesa) => mesa.numero === i + 1);
        return existente || criarMesa(i + 1);
      });
      return novoMapa;
    });
  }, [qtdMesas]);

  const calcularTempo = useCallback(
    (data) => {
      if (!data) return null;
      const diff = currentTime - new Date(data).getTime();
      const minutos = Math.floor(diff / 60000);
      const horas = Math.floor(minutos / 60);
      return `${horas}h ${minutos % 60}min`;
    },
    [currentTime],
  );

  const atualizarMesa = (mesaId, updater) => {
    setMesasList((prev) =>
      prev.map((mesa) => (mesa.id === mesaId ? updater(mesa) : mesa)),
    );
  };

  const abrirMesa = (mesaId) => {
    atualizarMesa(mesaId, (mesa) => ({
      ...mesa,
      status: "ocupada",
      abertaEm: mesa.abertaEm || new Date().toISOString(),
      cliente: mesa.cliente || `Mesa ${mesa.numero}`,
      pessoas: mesa.pessoas || 1,
      pedidos: mesa.pedidos || [],
    }));
  };

  const adicionarItensNaMesa = (mesaId, itensNovos) => {
    atualizarMesa(mesaId, (mesa) => {
      const abertoEm = mesa.abertaEm || new Date().toISOString();
      let pedidosAtualizados = [...mesa.pedidos];
      itensNovos.forEach((novoItem) => {
        const idx = pedidosAtualizados.findIndex(
          (item) => item.produtoId === novoItem.produtoId,
        );
        if (idx >= 0) {
          pedidosAtualizados[idx] = {
            ...pedidosAtualizados[idx],
            qtd: pedidosAtualizados[idx].qtd + novoItem.qtd,
          };
        } else {
          pedidosAtualizados.push(novoItem);
        }
      });
      return {
        ...mesa,
        status: "ocupada",
        abertaEm: abertoEm,
        cliente: mesa.cliente || `Mesa ${mesa.numero}`,
        pessoas: mesa.pessoas || 1,
        pedidos: pedidosAtualizados,
      };
    });
  };

  const alterarStatusMesa = (mesaId, novoStatus) => {
    atualizarMesa(mesaId, (mesa) => ({ ...mesa, status: novoStatus }));
  };

  const solicitarConta = (mesa) => {
    alterarStatusMesa(mesa.id, "esperando");
    setMesaSelecionada((prev) =>
      prev ? { ...prev, status: "esperando" } : prev,
    );
  };

  const abrirNovoItemMesa = (mesa) => {
    setMesaAtualPedido(mesa);
    setPdvDestino(String(mesa.id));
    setPedidoAtualMesa([]);
    setMesaSelecionada(null);
    setActiveTab("pedidos");
  };

  const abrirEdicaoMesa = (mesa) => {
    setEditandoMesa({ cliente: mesa.cliente || "", garcom: mesa.garcom || "" });
  };

  const atualizarDadosMesa = (mesaId, dados) => {
    atualizarMesa(mesaId, (mesa) => ({ ...mesa, ...dados }));
    setMesaSelecionada((prev) =>
      prev && prev.id === mesaId ? { ...prev, ...dados } : prev,
    );
  };

  const removerItemDaMesa = (mesaId, produtoId) => {
    atualizarMesa(mesaId, (mesa) => ({
      ...mesa,
      pedidos: mesa.pedidos.filter((item) => item.produtoId !== produtoId),
    }));
    setMesaSelecionada((prev) =>
      prev && prev.id === mesaId
        ? {
            ...prev,
            pedidos: prev.pedidos.filter(
              (item) => item.produtoId !== produtoId,
            ),
          }
        : prev,
    );
  };

  const alterarQuantidadeItemMesa = (mesaId, produtoId, delta) => {
    atualizarMesa(mesaId, (mesa) => ({
      ...mesa,
      pedidos: mesa.pedidos.map((item) =>
        item.produtoId === produtoId
          ? { ...item, qtd: Math.max(1, item.qtd + delta) }
          : item,
      ),
    }));
    setMesaSelecionada((prev) =>
      prev && prev.id === mesaId
        ? {
            ...prev,
            pedidos: prev.pedidos.map((item) =>
              item.produtoId === produtoId
                ? { ...item, qtd: Math.max(1, item.qtd + delta) }
                : item,
            ),
          }
        : prev,
    );
  };

  const abrirFechamentoMesa = (mesa) => {
    alterarStatusMesa(mesa.id, "fechando");
    const mesaAtualizada = mesasList.find((m) => m.id === mesa.id) || {
      ...mesa,
      status: "fechando",
    };
    setCobraTaxaServico(true);
    setMesaSelecionada(null);
    setMesaFechamento({ ...mesaAtualizada, status: "fechando" });
    setShowFechamentoMesaModal(true);
  };

  const reabrirMesa = (mesa) => {
    atualizarMesa(mesa.id, (mesaAtual) => ({
      ...mesaAtual,
      status: "ocupada",
      abertaEm: mesaAtual.abertaEm || new Date().toISOString(),
    }));
    if (mesaSelecionada?.id === mesa.id) {
      setMesaSelecionada((prev) =>
        prev ? { ...prev, status: "ocupada" } : prev,
      );
    }
    setMesaFechamento(null);
    setShowFechamentoMesaModal(false);
  };

  const confirmarFechamentoMesa = () => {
    if (!mesaFechamento) return;
    const subtotal = mesaFechamento.pedidos.reduce(
      (acc, item) => acc + item.qtd * item.valor,
      0,
    );
    const taxaServico = cobraTaxaServico ? subtotal * 0.1 : 0;
    const totalFinal = subtotal + taxaServico;
    const registro = {
      id: `fechamento-mesa-${mesaFechamento.id}-${Date.now()}`,
      tipo: "mesa",
      mesaNumero: mesaFechamento.numero,
      abertaEm: mesaFechamento.abertaEm,
      fechadaEm: new Date().toISOString(),
      pedidos: mesaFechamento.pedidos,
      subtotal,
      taxaServico,
      totalFinal,
      cobraTaxaServico,
      cliente: mesaFechamento.cliente || "",
      garcom: mesaFechamento.garcom || "",
    };
    if (totalFinal > 0) {
      setHistoricoGeral((prev) => [registro, ...prev].slice(0, 30));
    }
    atualizarMesa(mesaFechamento.id, (mesa) => ({
      ...mesa,
      status: "livre",
      abertaEm: null,
      cliente: null,
      pessoas: 0,
      garcom: null,
      observacoes: "",
      pedidos: [],
    }));
    if (mesaAtualPedido?.id === mesaFechamento.id) {
      setMesaAtualPedido(null);
      setPedidoAtualMesa([]);
      setPdvDestino("balcao");
    }
    setShowFechamentoMesaModal(false);
    setMesaFechamento(null);
  };

  const adicionarItemPedidoAtualMesa = (produto) => {
    setPedidoAtualMesa((prev) => {
      const idx = prev.findIndex((p) => p.produtoId === produto.id);
      if (idx >= 0) {
        return prev.map((item, i) =>
          i === idx ? { ...item, qtd: item.qtd + 1 } : item,
        );
      }
      return [
        ...prev,
        {
          produtoId: produto.id,
          nome: produto.nome,
          valor: produto.preco,
          qtd: 1,
        },
      ];
    });
  };

  const removerItemPedidoAtualMesa = (produtoId) => {
    setPedidoAtualMesa((prev) => {
      const item = prev.find((p) => p.produtoId === produtoId);
      if (!item) return prev;
      if (item.qtd > 1) {
        return prev.map((p) =>
          p.produtoId === produtoId ? { ...p, qtd: p.qtd - 1 } : p,
        );
      }
      return prev.filter((p) => p.produtoId !== produtoId);
    });
  };

  const confirmarInsercaoNaMesa = () => {
    if (!mesaAtualPedido || !pedidoAtualMesa.length) return;
    adicionarItensNaMesa(mesaAtualPedido.id, pedidoAtualMesa);
    setPedidoAtualMesa([]);
    setActiveTab("mesas");
  };

  const adicionarItemBalcao = (produto) => {
    setPedidoBalcao((prev) => {
      const idx = prev.findIndex((p) => p.produtoId === produto.id);
      if (idx >= 0) {
        return prev.map((item, i) =>
          i === idx ? { ...item, qtd: item.qtd + 1 } : item,
        );
      }
      return [
        ...prev,
        {
          produtoId: produto.id,
          nome: produto.nome,
          valor: produto.preco,
          qtd: 1,
        },
      ];
    });
  };

  const removerItemBalcao = (produtoId) => {
    setPedidoBalcao((prev) => {
      const item = prev.find((p) => p.produtoId === produtoId);
      if (!item) return prev;
      if (item.qtd > 1) {
        return prev.map((p) =>
          p.produtoId === produtoId ? { ...p, qtd: p.qtd - 1 } : p,
        );
      }
      return prev.filter((p) => p.produtoId !== produtoId);
    });
  };

  const abrirFechamentoBalcao = () => {
    if (!pedidoBalcao.length) return;
    setShowFechamentoBalcaoModal(true);
  };

  const confirmarFechamentoBalcao = () => {
    const subtotal = pedidoBalcao.reduce(
      (acc, item) => acc + item.qtd * item.valor,
      0,
    );
    const registro = {
      id: `fechamento-balcao-${Date.now()}`,
      tipo: "balcao",
      abertaEm: new Date().toISOString(),
      fechadaEm: new Date().toISOString(),
      pedidos: pedidoBalcao,
      subtotal,
      taxaServico: 0,
      totalFinal: subtotal,
    };
    if (subtotal > 0) {
      setHistoricoGeral((prev) => [registro, ...prev].slice(0, 30));
    }
    setPedidoBalcao([]);
    setShowFechamentoBalcaoModal(false);
    setPdvDestino("balcao");
    setMesaAtualPedido(null);
  };

  // ✅ CORREÇÃO 1: função que estava faltando
  const alternarStatusProduto = (produtoId) => {
    setCardapioProdutos((prev) =>
      prev.map((produto) =>
        produto.id === produtoId
          ? { ...produto, ativo: !produto.ativo }
          : produto,
      ),
    );
  };

  const menuItems = [
    { id: "dashboard", label: "Visão Geral", icon: LayoutDashboard },
    { id: "mesas", label: "Mesas & Comandas", icon: LayoutGrid },
    { id: "pedidos", label: "PDV (Caixa)", icon: ClipboardList },
    { id: "cardapio", label: "Cardápio", icon: Menu },
    { id: "cozinha", label: "KDS (Cozinha)", icon: ChefHat },
    { id: "delivery", label: "Delivery", icon: Bike },
    { id: "estoque", label: "Fichas & Estoque", icon: Package },
    { id: "financeiro", label: "Financeiro", icon: LineChart },
    { id: "config", label: "Configurações", icon: Settings },
  ];

  const indicadores = [
    {
      title: "Vendas Hoje",
      value: 4250,
      change: "+12,4%",
      positive: true,
      icon: Banknote,
      color: "emerald",
    },
    {
      title: "Pedidos Hoje",
      value: "142",
      change: "+5,1%",
      positive: true,
      icon: ShoppingCart,
      color: "blue",
    },
    {
      title: "Ticket Médio",
      value: 68.9,
      change: "-2,3%",
      positive: false,
      icon: TrendingUp,
      color: "violet",
    },
    {
      title: "Cancelamentos",
      value: 120,
      change: "Normal",
      positive: null,
      icon: XCircle,
      color: "rose",
    },
  ];

  const topProdutos = [
    { nome: "Hambúrguer Artesanal", vendidos: 58, valor: 35 },
    { nome: "Risoto Mignon", vendidos: 46, valor: 55 },
    { nome: "Batata Rústica", vendidos: 39, valor: 20 },
    { nome: "Cerveja IPA 600ml", vendidos: 28, valor: 15 },
  ];

  const vendasUltimos5Meses = [
    { mes: "Dez", valor: 26400 },
    { mes: "Jan", valor: 29850 },
    { mes: "Fev", valor: 31200 },
    { mes: "Mar", valor: 33780 },
    { mes: "Abr", valor: 35220 },
  ];

  const resumoOperacional = [
    {
      title: "Itens em estoque crítico",
      value: "08",
      subtitle: "Precisam de reposição hoje",
      icon: Package,
    },
    {
      title: "Pratos ativos no cardápio",
      value: "24",
      subtitle: "Cardápio principal + bebidas",
      icon: Utensils,
    },
  ];

  const maxVenda = Math.max(...vendasUltimos5Meses.map((item) => item.valor));

  const getColorClasses = (color) => {
    const styles = {
      emerald: {
        soft: "bg-emerald-50 text-emerald-700 border-emerald-100",
        icon: "bg-emerald-100 text-emerald-700",
      },
      blue: {
        soft: "bg-blue-50 text-blue-700 border-blue-100",
        icon: "bg-blue-100 text-blue-700",
      },
      violet: {
        soft: "bg-violet-50 text-violet-700 border-violet-100",
        icon: "bg-violet-100 text-violet-700",
      },
      rose: {
        soft: "bg-rose-50 text-rose-700 border-rose-100",
        icon: "bg-rose-100 text-rose-700",
      },
    };
    return styles[color] || styles.emerald;
  };

  const categoriasPDV = useMemo(
    () => ["Todos", ...new Set(cardapioProdutos.map((item) => item.categoria))],
    [cardapioProdutos],
  );

  const produtosFiltrados = useMemo(() => {
    return cardapioProdutos.filter((item) => {
      const matchCategoria =
        categoriaAtiva === "Todos" || item.categoria === categoriaAtiva;
      const matchBusca = item.nome
        .toLowerCase()
        .includes(buscaProduto.toLowerCase());
      return matchCategoria && matchBusca && item.ativo && item.quantidade > 0;
    });
  }, [cardapioProdutos, buscaProduto, categoriaAtiva]);

  const mesasDisponiveisPDV = useMemo(
    () => mesasList.map((mesa) => ({ id: mesa.id, numero: mesa.numero })),
    [mesasList],
  );

  const mesaAtualDetalhada =
    pdvDestino !== "balcao"
      ? mesasList.find((m) => String(m.id) === String(pdvDestino)) || null
      : null;

  const itensPedidoAtual =
    pdvDestino === "balcao" ? pedidoBalcao : pedidoAtualMesa;

  const totalPedidoAtual = itensPedidoAtual.reduce(
    (acc, item) => acc + item.qtd * item.valor,
    0,
  );

  /* Funções do Cardápio */
  const abrirCadastroProduto = () => {
    setModoEdicaoProduto(false);
    setProdutoEditandoId(null);
    setNovoProduto({
      nome: "",
      preco: "",
      categoria: tiposProduto[0] || "",
      quantidade: "",
      ingredientes: "",
      ativo: true,
    });
    setNovoTipoProduto("");
    setShowProdutoModal(true);
  };

  const abrirEdicaoProduto = (produto) => {
    setModoEdicaoProduto(true);
    setProdutoEditandoId(produto.id);
    setNovoProduto({
      nome: produto.nome || "",
      preco: String(produto.preco ?? ""),
      categoria: produto.categoria || "",
      quantidade: String(produto.quantidade ?? ""),
      ingredientes: produto.ingredientes || "",
      ativo: Boolean(produto.ativo),
    });
    setNovoTipoProduto("");
    setShowProdutoModal(true);
  };

  const adicionarTipoProduto = () => {
    const tipoNormalizado = novoTipoProduto.trim();
    if (!tipoNormalizado) return;
    if (tiposProduto.includes(tipoNormalizado)) return;
    setTiposProduto((prev) => [...prev, tipoNormalizado]);
    setNovoProduto((prev) => ({ ...prev, categoria: tipoNormalizado }));
    setNovoTipoProduto("");
  };

  const salvarNovoProduto = () => {
    if (!novoProduto.nome.trim()) return;
    if (!novoProduto.categoria.trim()) return;
    if (novoProduto.preco === "") return;
    if (novoProduto.quantidade === "") return;

    const produtoNormalizado = {
      id: modoEdicaoProduto ? produtoEditandoId : Date.now(),
      nome: novoProduto.nome.trim(),
      preco: Number(novoProduto.preco),
      categoria: novoProduto.categoria,
      quantidade: Number(novoProduto.quantidade),
      ingredientes: novoProduto.ingredientes.trim(),
      ativo: novoProduto.ativo,
    };

    if (modoEdicaoProduto) {
      setCardapioProdutos((prev) =>
        prev.map((produto) =>
          produto.id === produtoEditandoId ? produtoNormalizado : produto,
        ),
      );
    } else {
      setCardapioProdutos((prev) => [produtoNormalizado, ...prev]);
    }

    setShowProdutoModal(false);
    setModoEdicaoProduto(false);
    setProdutoEditandoId(null);
  };

  /* ======================== RENDERS ======================== */

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {indicadores.map((item, index) => {
          const Icon = item.icon;
          const colors = getColorClasses(item.color);
          const isCurrency =
            typeof item.value === "number" && item.title !== "Pedidos Hoje";
          return (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {item.title}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
                    {isCurrency ? formatCurrency(item.value) : item.value}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colors.icon}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                {item.positive === true && (
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${colors.soft}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" /> {item.change}
                  </span>
                )}
                {item.positive === false && (
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${colors.soft}`}
                  >
                    <ArrowDownRight className="w-3.5 h-3.5" /> {item.change}
                  </span>
                )}
                {item.positive === null && (
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${colors.soft}`}
                  >
                    {item.change}
                  </span>
                )}
                <span className="text-xs text-slate-400 font-medium">
                  vs ontem
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
        <div className="2xl:col-span-1 bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Top Produtos</h2>
              <p className="text-sm text-slate-500 mt-1">
                Itens com maior saída no período
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
              Curva A
            </span>
          </div>
          <div className="space-y-3">
            {topProdutos.map((produto, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/70"
              >
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 truncate">
                    {produto.nome}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {produto.vendidos} vendidos
                  </p>
                </div>
                <span className="text-sm font-bold text-emerald-600 shrink-0">
                  {formatCurrency(produto.valor)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="2xl:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Vendas por mês
              </h2>
              <p className="text-sm text-slate-500 mt-1">Últimos 5 meses</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
              Tendência positiva
            </span>
          </div>
          <div className="grid grid-cols-5 gap-3 items-end h-80">
            {vendasUltimos5Meses.map((item) => {
              const altura = `${Math.max((item.valor / maxVenda) * 100, 18)}%`;
              return (
                <div
                  key={item.mes}
                  className="h-full flex flex-col justify-end"
                >
                  <div className="text-center text-xs font-bold text-slate-500 mb-2">
                    {formatCurrency(item.valor)}
                  </div>
                  <div className="relative flex-1 flex items-end rounded-2xl bg-slate-50 px-1.5 pt-2">
                    <div
                      className="w-full rounded-t-2xl bg-linear-to-t from-emerald-600 via-emerald-500 to-emerald-300 shadow-sm"
                      style={{ height: altura }}
                    />
                  </div>
                  <div className="text-center text-sm font-bold text-slate-700 mt-3">
                    {item.mes}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {resumoOperacional.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {item.title}
                </p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {item.value}
                </p>
                <p className="text-sm text-slate-500 mt-2">{item.subtitle}</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <Receipt className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-bold text-slate-900">
            Últimos fechamentos
          </h2>
        </div>
        {historicoGeral.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhum fechamento ainda.</p>
        ) : (
          <div className="space-y-3">
            {historicoGeral.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-slate-900">
                    {item.tipo === "mesa"
                      ? `Mesa ${item.mesaNumero}`
                      : "Venda de balcão"}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Fechada em {formatDateTime(item.fechadaEm)}
                  </p>
                </div>
                <span className="text-sm font-bold text-emerald-700">
                  {formatCurrency(item.totalFinal)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderMesas = () => {
    const getStatusStyle = (status) => {
      switch (status) {
        case "livre":
          return {
            card: "bg-slate-100 text-slate-700 border-slate-200",
            badge: "bg-white text-slate-600 border-slate-200",
            button: "bg-slate-900 text-white hover:bg-slate-800",
            label: "Livre",
          };
        case "ocupada":
          return {
            card: "bg-emerald-50 text-emerald-700 border-emerald-200",
            badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
            button: "bg-emerald-600 text-white hover:bg-emerald-700",
            label: "Ocupada",
          };
        case "esperando":
          return {
            card: "bg-orange-50 text-orange-700 border-orange-200",
            badge: "bg-orange-100 text-orange-700 border-orange-200",
            button: "bg-orange-500 text-white hover:bg-orange-600",
            label: "Esperando conta",
          };
        case "fechando":
          return {
            card: "bg-blue-50 text-blue-700 border-blue-200",
            badge: "bg-blue-100 text-blue-700 border-blue-200",
            button: "bg-blue-600 text-white hover:bg-blue-700",
            label: "Fechando",
          };
        default:
          return {
            card: "bg-slate-100 text-slate-700 border-slate-200",
            badge: "bg-white text-slate-600 border-slate-200",
            button: "bg-slate-900 text-white hover:bg-slate-800",
            label: "Livre",
          };
      }
    };

    const ModalFechamentoMesa = () => {
      if (!showFechamentoMesaModal || !mesaFechamento) return null;
      const subtotal = mesaFechamento.pedidos.reduce(
        (acc, item) => acc + item.qtd * item.valor,
        0,
      );
      const taxaServico = cobraTaxaServico ? subtotal * 0.1 : 0;
      const totalFinal = subtotal + taxaServico;

      return (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-xl max-h-[96vh] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Fechamento da Mesa {mesaFechamento.numero}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Revise os valores antes de concluir o fechamento
                </p>
              </div>
              <button
                onClick={() => setShowFechamentoMesaModal(false)}
                className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-hidden flex-1 flex flex-col">
              <div className="max-h-80 overflow-y-auto pr-2 space-y-3 md:max-h-58 lg:max-h-85">
                {mesaFechamento.pedidos.map((item) => (
                  <div
                    key={item.produtoId}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3"
                  >
                    <div>
                      <p className="font-bold text-slate-900">{item.nome}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {item.qtd}x {formatCurrency(item.valor)}
                      </p>
                    </div>
                    <span className="font-bold text-slate-900">
                      {formatCurrency(item.qtd * item.valor)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
                  <span className="text-sm font-bold text-slate-600">
                    Subtotal
                  </span>
                  <span className="font-bold text-slate-900">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
                  <span className="text-sm font-bold text-slate-600">
                    Taxa de serviço (10%)
                  </span>
                  <span className="font-bold text-slate-900">
                    {formatCurrency(taxaServico)}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-4 bg-emerald-50">
                  <span className="text-base font-bold text-emerald-800">
                    Total final
                  </span>
                  <span className="text-2xl font-bold text-emerald-700">
                    {formatCurrency(totalFinal)}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <label className="flex items-center justify-between gap-4 cursor-pointer">
                  <div>
                    <p className="font-bold text-slate-900">
                      Taxa de serviço do garçom
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Aplicar 10% sobre o subtotal
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={cobraTaxaServico}
                    onChange={(e) => setCobraTaxaServico(e.target.checked)}
                    className="w-5 h-5 accent-emerald-600"
                  />
                </label>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => reabrirMesa(mesaFechamento)}
                  className="px-4 py-3 rounded-2xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600"
                >
                  Reabrir
                </button>
                <button className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50">
                  Imprimir
                </button>
                <button
                  onClick={confirmarFechamentoMesa}
                  className="px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <>
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {mesasList.map((mesa) => {
              const styles = getStatusStyle(mesa.status);
              const total = mesa.pedidos.reduce(
                (acc, item) => acc + item.qtd * item.valor,
                0,
              );
              const itens = mesa.pedidos.length;
              const tempo = calcularTempo(mesa.abertaEm);

              return (
                <div
                  key={mesa.id}
                  className={`rounded-3xl border p-4 transition-all hover:shadow-md min-h-60 flex flex-col ${styles.card}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold">Mesa {mesa.numero}</p>
                      <span
                        className={`inline-flex mt-2 px-2.5 py-1 rounded-full text-[11px] font-bold border ${styles.badge}`}
                      >
                        {styles.label}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2 flex-1">
                    {mesa.status === "livre" ? (
                      <>
                        <p className="text-sm font-medium opacity-80">
                          Disponível para atendimento
                        </p>
                        <p className="text-xs opacity-60">
                          Nenhuma comanda aberta
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-lg font-bold">
                          {formatCurrency(total)}
                        </p>
                        <p className="text-xs opacity-80">
                          {itens}{" "}
                          {itens === 1 ? "item lançado" : "itens lançados"}
                        </p>
                        <p className="text-xs font-bold opacity-80">
                          Tempo: {tempo || "—"}
                        </p>
                        {mesa.cliente && (
                          <p className="text-xs opacity-80">
                            Cliente: {mesa.cliente}
                          </p>
                        )}
                        {mesa.garcom && (
                          <p className="text-xs opacity-80">
                            Garçom: {mesa.garcom}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <div className="mt-5 pt-2">
                    <button
                      onClick={() => {
                        if (mesa.status === "livre") {
                          abrirMesa(mesa.id);
                        } else {
                          abrirEdicaoMesa(mesa);
                          setMesaSelecionada(mesa);
                        }
                      }}
                      className={`w-full rounded-2xl py-2.5 text-xs font-bold transition-colors ${styles.button}`}
                    >
                      {mesa.status === "livre" ? "Abrir mesa" : "Ver notinha"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ModalNotinhaMesa
          mesaSelecionada={mesaSelecionada}
          setMesaSelecionada={setMesaSelecionada}
          calcularTempo={calcularTempo}
          formatCurrency={formatCurrency}
          editandoMesa={editandoMesa}
          setEditandoMesa={setEditandoMesa}
          atualizarDadosMesa={atualizarDadosMesa}
          alterarQuantidadeItemMesa={alterarQuantidadeItemMesa}
          removerItemDaMesa={removerItemDaMesa}
          abrirNovoItemMesa={abrirNovoItemMesa}
          solicitarConta={solicitarConta}
          abrirFechamentoMesa={abrirFechamentoMesa}
          garcons={GARCONS_FIXOS}
        />
        <ModalFechamentoMesa />
      </>
    );
  };

  const qtdProdutoNoPedido = (produtoId) => {
    const item = itensPedidoAtual.find((p) => p.produtoId === produtoId);
    return item ? item.qtd : 0;
  };

  const renderPDV = () => {
    const ModalFechamentoBalcao = () => {
      if (!showFechamentoBalcaoModal) return null;
      const subtotal = pedidoBalcao.reduce(
        (acc, item) => acc + item.qtd * item.valor,
        0,
      );

      return (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Fechamento do pedido balcão
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Revise a pré-nota antes de concluir
                </p>
              </div>
              <button
                onClick={() => setShowFechamentoBalcaoModal(false)}
                className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="space-y-3">
                {pedidoBalcao.map((item) => (
                  <div
                    key={item.produtoId}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3"
                  >
                    <div>
                      <p className="font-bold text-slate-900">{item.nome}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {item.qtd}x {formatCurrency(item.valor)}
                      </p>
                    </div>
                    <span className="font-bold text-slate-900">
                      {formatCurrency(item.qtd * item.valor)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-4 bg-emerald-50">
                  <span className="text-base font-bold text-emerald-800">
                    Total do pedido
                  </span>
                  <span className="text-2xl font-bold text-emerald-700">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 inline-flex items-center justify-center gap-2">
                  <Printer className="w-4 h-4" /> Imprimir pré-nota
                </button>
                <button
                  onClick={confirmarFechamentoBalcao}
                  className="px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700"
                >
                  Fechar pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">PDV</h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {pdvDestino === "balcao"
                      ? "Venda de balcão sem vínculo com mesa"
                      : `Montando novo pedido para a Mesa ${mesaAtualDetalhada?.numero ?? ""}`}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="w-full sm:w-52">
                    <select
                      value={pdvDestino}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPdvDestino(value);
                        if (value === "balcao") {
                          setMesaAtualPedido(null);
                        } else {
                          const mesa = mesasList.find(
                            (m) => String(m.id) === value,
                          );
                          if (mesa) {
                            setMesaAtualPedido(mesa);
                            setPedidoAtualMesa([]);
                          }
                        }
                      }}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-700 outline-none focus:border-emerald-500"
                    >
                      <option value="balcao">Balcão</option>
                      {mesasDisponiveisPDV.map((mesa) => (
                        <option key={mesa.id} value={String(mesa.id)}>
                          Mesa {String(mesa.numero).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      value={buscaProduto}
                      onChange={(e) => setBuscaProduto(e.target.value)}
                      placeholder="Buscar produto..."
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-sm outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-5 overflow-x-auto pb-1">
                {categoriasPDV.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaAtiva(cat)}
                    className={`px-4 py-4 rounded-2xl text-sm font-bold whitespace-nowrap border transition-colors ${
                      categoriaAtiva === cat
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {produtosFiltrados.map((produto) => {
                const qtdNoPedido = qtdProdutoNoPedido(produto.id);
                const jaFoiAdicionado = qtdNoPedido > 0;
                return (
                  <button
                    key={produto.id}
                    onClick={() => {
                      if (pdvDestino === "balcao") {
                        adicionarItemBalcao(produto);
                      } else {
                        adicionarItemPedidoAtualMesa(produto);
                      }
                    }}
                    className={`rounded-3xl border shadow-sm p-4 text-left transition-all relative ${
                      jaFoiAdicionado
                        ? "bg-emerald-50 border-emerald-300 shadow-md"
                        : "bg-white border-slate-200 hover:shadow-md hover:border-emerald-300"
                    }`}
                  >
                    {jaFoiAdicionado && (
                      <span className="absolute top-3 right-3 min-w-7 h-7 px-2 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                        {qtdNoPedido}
                      </span>
                    )}
                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                      {produto.categoria}
                    </p>
                    <h3 className="font-bold text-slate-900 mt-2 leading-tight">
                      {produto.nome}
                    </h3>
                    <p className="text-lg font-bold text-slate-900 mt-4">
                      {formatCurrency(produto.preco)}
                    </p>
                    <div
                      className={`mt-4 inline-flex items-center gap-2 text-xs font-bold ${jaFoiAdicionado ? "text-emerald-800" : "text-emerald-700"}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      {jaFoiAdicionado
                        ? `Escolhido (${qtdNoPedido})`
                        : "Adicionar"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 h-fit xl:sticky">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pedido atual
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {pdvDestino === "balcao"
                    ? "Balcão"
                    : `Mesa ${mesaAtualDetalhada?.numero ?? ""} (pedido novo)`}
                </p>
              </div>
              <Receipt className="w-5 h-5 text-emerald-600" />
            </div>

            {itensPedidoAtual.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
                Nenhum item lançado neste pedido.
              </div>
            ) : (
              <>
                <div className="mt-6 space-y-3 max-h-105 overflow-y-auto pr-1">
                  {itensPedidoAtual.map((item) => (
                    <div
                      key={item.produtoId}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-bold text-slate-900">
                            {item.nome}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {item.qtd}x {formatCurrency(item.valor)}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            if (pdvDestino === "balcao") {
                              removerItemBalcao(item.produtoId);
                            } else {
                              removerItemPedidoAtualMesa(item.produtoId);
                            }
                          }}
                          className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-3 text-right">
                        <span className="text-sm font-bold text-emerald-700">
                          {formatCurrency(item.qtd * item.valor)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
                    <span className="text-sm font-bold text-slate-600">
                      Subtotal
                    </span>
                    <span className="font-bold text-slate-900">
                      {formatCurrency(totalPedidoAtual)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 bg-emerald-50">
                    <span className="text-sm font-bold text-emerald-800">
                      Total do pedido atual
                    </span>
                    <span className="text-xl font-bold text-emerald-700">
                      {formatCurrency(totalPedidoAtual)}
                    </span>
                  </div>
                </div>

                {pdvDestino === "balcao" ? (
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button
                      onClick={abrirFechamentoBalcao}
                      className="px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700"
                    >
                      Fechar pedido
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={confirmarInsercaoNaMesa}
                      className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50"
                    >
                      Inserir itens na mesa
                    </button>
                    <button
                      onClick={() => setActiveTab("mesas")}
                      className="px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700"
                    >
                      Voltar para mesas
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <ModalFechamentoBalcao />
      </>
    );
  };

  const renderPlaceholder = (title) => (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 min-h-75 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-500 mt-2">
          Estrutura da aba pronta para montar na próxima etapa.
        </p>
      </div>
    </div>
  );

  const ModalCadastroProduto = () => {
    if (!showProdutoModal) return null;

    return (
      <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {modoEdicaoProduto ? "Editar produto" : "Cadastrar produto"}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Esse produto ficará disponível no PDV
              </p>
            </div>
            <button
              onClick={() => setShowProdutoModal(false)}
              className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-slate-500">
                  Nome do produto
                </label>
                <input
                  value={novoProduto.nome}
                  onChange={(e) =>
                    setNovoProduto((prev) => ({
                      ...prev,
                      nome: e.target.value,
                    }))
                  }
                  placeholder="Ex: X-Burguer da casa"
                  className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm outline-none focus:border-emerald-500"
                />
              </div>

              {/* ✅ CORREÇÃO 2: bloco {produto.ingredientes} removido daqui (estava fora de escopo) */}

              <div className="md:col-span-2">
                <label className="text-xs font-bold text-slate-500">
                  Ingredientes / legenda
                </label>
                <textarea
                  value={novoProduto.ingredientes}
                  onChange={(e) =>
                    setNovoProduto((prev) => ({
                      ...prev,
                      ingredientes: e.target.value,
                    }))
                  }
                  placeholder="Ex: Pão brioche, hambúrguer artesanal, cheddar, cebola caramelizada..."
                  rows={3}
                  className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500">
                  Preço
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={novoProduto.preco}
                  onChange={(e) =>
                    setNovoProduto((prev) => ({
                      ...prev,
                      preco: e.target.value,
                    }))
                  }
                  placeholder="0,00"
                  className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500">
                  Quantidade disponível
                </label>
                <input
                  type="number"
                  min="0"
                  value={novoProduto.quantidade}
                  onChange={(e) =>
                    setNovoProduto((prev) => ({
                      ...prev,
                      quantidade: e.target.value,
                    }))
                  }
                  placeholder="Ex: 20"
                  className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500">
                  Tipo do produto
                </label>
                <select
                  value={novoProduto.categoria}
                  onChange={(e) =>
                    setNovoProduto((prev) => ({
                      ...prev,
                      categoria: e.target.value,
                    }))
                  }
                  className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm outline-none focus:border-emerald-500"
                >
                  <option value="">Selecione</option>
                  {tiposProduto.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500">
                  Novo tipo
                </label>
                <div className="mt-1 flex gap-2">
                  <input
                    value={novoTipoProduto}
                    onChange={(e) => setNovoTipoProduto(e.target.value)}
                    placeholder="Ex: Drinks"
                    className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm outline-none focus:border-emerald-500"
                  />
                  <button
                    onClick={adicionarTipoProduto}
                    className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50"
                  >
                    Criar
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input
                  id="produto-ativo"
                  type="checkbox"
                  checked={novoProduto.ativo}
                  onChange={(e) =>
                    setNovoProduto((prev) => ({
                      ...prev,
                      ativo: e.target.checked,
                    }))
                  }
                  className="w-5 h-5 accent-emerald-600"
                />
                <label
                  htmlFor="produto-ativo"
                  className="text-sm font-bold text-slate-700"
                >
                  Produto ativo no PDV
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowProdutoModal(false)}
                className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                onClick={salvarNovoProduto}
                className="px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700"
              >
                {modoEdicaoProduto ? "Salvar alterações" : "Salvar produto"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* ======================== CARDÁPIO ======================== */

  const renderCardapio = () => {
    

    return (
      <>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {cardapioProdutos.map((produto) => (
              <div
                key={produto.id}
                className={`rounded-3xl border shadow-sm p-5 ${
                  produto.ativo
                    ? "bg-white border-slate-200"
                    : "bg-slate-50 border-slate-200 opacity-75"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                      {produto.categoria}
                    </p>
                    <h3 className="font-bold text-slate-900 mt-2 leading-tight">
                      {produto.nome}
                    </h3>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0 ${
                      produto.ativo
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : "bg-slate-100 text-slate-500 border-slate-200"
                    }`}
                  >
                    {produto.ativo ? "Ativo" : "Inativo"}
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <p className="text-lg font-bold text-slate-900">
                    {formatCurrency(produto.preco)}
                  </p>
                  <p className="text-sm text-slate-500">
                    Disponível:{" "}
                    <span className="font-bold text-slate-700">
                      {produto.quantidade}
                    </span>
                  </p>
                  {/* ✅ ingredientes exibidos corretamente no card */}
                  {produto.ingredientes && (
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {produto.ingredientes}
                    </p>
                  )}
                </div>

                {/* ✅ CORREÇÃO 3: botão de editar adicionado */}
                <div className="mt-5 pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => abrirEdicaoProduto(produto)}
                    className="rounded-2xl py-2.5 text-xs font-bold transition-colors bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1"
                  >
                    <Pencil className="w-3.5 h-3.5" /> Editar
                  </button>
                  <button
                    onClick={() => alternarStatusProduto(produto.id)}
                    className={`rounded-2xl py-2.5 text-xs font-bold transition-colors ${
                      produto.ativo
                        ? "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                  >
                    {produto.ativo ? "Desativar" : "Ativar"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {ModalCadastroProduto()}
      </>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard();
      case "mesas":
        return renderMesas();
      case "pedidos":
        return renderPDV();
      case "cardapio":
        return renderCardapio();
      case "cozinha":
        return renderPlaceholder("KDS (Cozinha)");
      case "delivery":
        return renderPlaceholder("Delivery");
      case "estoque":
        return renderPlaceholder("Fichas & Estoque");
      case "financeiro":
        return renderPlaceholder("Financeiro");
      case "config":
        return renderPlaceholder("Configurações");
      default:
        return renderDashboard();
    }
  };

  return (
    <>
      <div className="flex h-screen bg-slate-50 font-sans">
        <aside
          className={`w-72 bg-emerald-950 text-white flex flex-col fixed lg:relative h-full z-40 transform transition-transform duration-300 ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
              <div>
                <p className="text-white font-bold text-lg tracking-tight">
                  Nexium
                </p>
                <p className="text-slate-400 text-xs">Painel administrativo</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-emerald-500/12 text-emerald-200"
                      : "text-slate-300 hover:bg-emerald-900 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isActive ? "text-emerald-400" : "text-slate-500"}`}
                  />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-800">
            <div className="rounded-2xl bg-emerald-900 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                Olá,
              </p>
              <p className="text-white font-bold mt-2">Pedro</p>
              <p className="text-slate-400 text-sm">Central Distribuidora</p>
            </div>
          </div>
        </aside>

        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}

        <main className="flex-1 flex flex-col min-w-0">
          <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shadow-sm">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden md:flex relative w-72 lg:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-sm outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {activeTab === "mesas" && (
                <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-4 py-2.5">
                  <span className="text-sm font-bold text-slate-600">
                    Quantidade de mesas
                  </span>
                  <select
                    value={qtdMesas}
                    onChange={(e) => setQtdMesas(Number(e.target.value))}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-emerald-500"
                  >
                    <option value={12}>12 mesas</option>
                    <option value={18}>18 mesas</option>
                    <option value={24}>24 mesas</option>
                    <option value={30}>30 mesas</option>
                  </select>
                </div>
              )}
              {activeTab === "cardapio" ? (
                <button
                  onClick={abrirCadastroProduto}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
                >
                  <Plus className="w-4 h-4" /> Cadastrar produto
                </button>
              ) : activeTab === "pedidos" || activeTab === "mesas" ? (
                <button
                  onClick={() => {
                    setPedidoBalcao([]);
                    setMesaAtualPedido(null);
                    setPedidoAtualMesa([]);
                    setPdvDestino("balcao");
                    setActiveTab("pedidos");
                  }}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden xl:inline">Novo pedido</span>
                </button>
              ) : null}
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-4 lg:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </>
  );
}
