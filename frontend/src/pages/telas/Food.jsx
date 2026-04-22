import React, { useState } from "react";
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
  Bell,
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
} from "lucide-react";

export default function DashboardRestaurante() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const menuItems = [
    { id: "dashboard", label: "Visão Geral", icon: LayoutDashboard },
    { id: "mesas", label: "Mesas & Comandas", icon: LayoutGrid },
    { id: "pedidos", label: "PDV (Caixa)", icon: ClipboardList },
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
                  <p className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
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
              <h2 className="text-lg font-extrabold text-slate-900">
                Top Produtos
              </h2>
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
                <span className="text-sm font-extrabold text-emerald-600 shrink-0">
                  {formatCurrency(produto.valor)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="2xl:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">
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
                      className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-300 shadow-sm"
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
                <p className="text-3xl font-extrabold text-slate-900 mt-2">
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
    </div>
  );

  const renderPlaceholder = (title) => (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 min-h-[300px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
        <p className="text-slate-500 mt-2">
          Estrutura da aba pronta para montar na próxima etapa.
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard();
      case "mesas":
        return renderPlaceholder("Mesas & Comandas");
      case "pedidos":
        return renderPlaceholder("PDV (Caixa)");
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
    <div className="flex h-screen bg-slate-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Manrope', sans-serif; }
      `}</style>

      <aside
        className={`w-72 bg-slate-950 text-slate-300 flex flex-col fixed lg:relative h-full z-40 transform transition-transform duration-300 ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
              <Utensils className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-extrabold text-lg tracking-tight">
                Nexus ERP
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
                    ? "bg-emerald-500/12 text-emerald-400"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-emerald-400" : "text-slate-500"
                  }`}
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="rounded-2xl bg-slate-900 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">
              Usuário
            </p>
            <p className="text-white font-bold mt-2">Administrador</p>
            <p className="text-slate-400 text-sm">Restaurante Central</p>
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
            <button className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50">
              <Bell className="w-5 h-5" />
            </button>

            <button className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-colors">
              <Plus className="w-4 h-4" />
              Novo lançamento
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
