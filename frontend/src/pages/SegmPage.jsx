/* Import tools */
import { useParams } from "react-router-dom";
import {
  Utensils,
  Store,
  CheckCircle2,
  TrendingUp,
  Smartphone,
  Receipt,
  ChefHat,
  ArrowRight,
  Play,
  Shield,
  Zap,
  Building2,
  Coffee,
  BarChart3,
  QrCode,
  Calculator,
  Clock,
  CreditCard,
  Headset,
  Ban,
  Package,
  Users,
  Menu,
  X,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* Import data */
import { segmentsDatabase, themeColors } from "../data/segmentsData";


const HeroImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800";

const DashboardMockup =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000";
const Logo = "https://placehold.co/120x40/10b981/ffffff?text=NexusERP";
const SmattexLogo = "https://placehold.co/100x30/052E16/10b981?text=Smarttex";


const SegmentoDetalhe = () => {
  const { slug } = useParams();
  // 4. Busca os dados.
  const data = segmentsDatabase[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Segmento não encontrado
        </h1>
        <p className="text-gray-600 mb-8">
          A solução que você procura não está cadastrada ou a URL está
          incorreta.
        </p>
        <a
          href="/"
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold"
        >
          Voltar ao Início
        </a>
      </div>
    );
  }

  // 5. Configura as cores e ícones dinâmicos
  const theme = themeColors[data.colorTheme] || themeColors.emerald;
  const HeroIcon = data.icon;

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-emerald-200">

      <Header/>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div
          className={`absolute top-0 right-0 -mr-20 -mt-20 w-150 h-150 rounded-full blur-3xl opacity-60 pointer-events-none ${theme.heroBlob}`}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 ${theme.badge}`}
              >
                <HeroIcon className="w-4 h-4" />
                {data.badge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                {data.title}
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                {data.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#planos"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-emerald-600/20 text-center flex justify-center items-center gap-2"
                >
                  Ver Planos e Preços <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#demo"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Play className="h-5 w-5 text-emerald-600" />
                  Como funciona
                </a>
              </div>

              {/* Benefícios Rápidos Genéricos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Setup Rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ban className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sem Fidelidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headset className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Suporte Humano</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sem Taxa Inicial</span>
                </div>
              </div>
            </div>

            <div className="relative lg:ml-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src={HeroImage}
                  alt={data.name}
                  className="w-full h-100 object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-5 shadow-lg border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Sistema Ativo
                    </p>
                    <p className="text-2xl font-extrabold text-gray-900">
                      Status{" "}
                      <span className={`text-sm font-medium ${theme.iconText}`}>
                        / Online
                      </span>
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${theme.iconBg}`}
                  >
                    <HeroIcon className={`w-6 h-6 ${theme.iconText}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RECURSOS DINÂMICOS --- */}
      <section className="bg-gray-50 py-20 lg:py-24 border-y border-gray-100">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções sob medida para {data.name}.
            </h2>
            <p className="text-lg text-gray-600">
              Ferramentas construídas para otimizar sua operação diária, reduzir
              erros e proteger seu lucro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {data.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${theme.iconBg}`}
                  >
                    <FeatureIcon className={`w-6 h-6 ${theme.iconText}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW --- */}
      <section id="demo" className="bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div
                className={`absolute -inset-4 rounded-3xl transform -rotate-3 ${theme.dashBlob}`}
              ></div>
              <img
                src={DashboardMockup}
                alt="Dashboard Nexium"
                className="relative rounded-2xl shadow-2xl border border-gray-200 object-cover aspect-4/3 w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 font-bold rounded-lg mb-6 text-sm border ${theme.dashBadge}`}
              >
                <BarChart3 className="w-4 h-4" /> Inteligência de Negócio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Saiba exatamente onde está a sua margem de lucro.
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Tome decisões estratégicas com dados precisos da sua operação.
                Relatórios dinâmicos que mostram o que realmente importa.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Visualização de Ticket Médio.",
                  "Curva ABC de produtos.",
                  "Fechamento de caixa cego.",
                  "Histórico de perdas e despesas.",
                  "Mapa de calor e performance.",
                  "Controle financeiro automatizado.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${theme.iconBg}`}
                    >
                      <CheckCircle2 className={`w-3 h-3 ${theme.iconText}`} />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREÇOS / PLANOS DINÂMICOS --- */}
      <section
        id="planos"
        className="bg-slate-50 py-20 lg:py-24 border-t border-gray-200"
      >
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos dimensionados para sua operação.
            </h2>
            <p className="text-lg text-gray-600">
              Implantação rápida e sem surpresas no fim do mês. Escolha o poder
              de fogo que a sua operação exige.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {data.plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`bg-white rounded-2xl p-6 xl:p-8 border-2 flex flex-col relative ${plan.popular ? "border-emerald-500 shadow-xl shadow-emerald-500/10 lg:-translate-y-4" : "border-gray-100 shadow-sm"}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                      Mais Escolhido
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-2.5 rounded-xl ${plan.popular ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-600"}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      R$ {plan.price}
                    </span>
                    <span className="text-gray-500 font-medium">/mês</span>
                  </div>

                  <p className="text-sm text-gray-500 mb-8 min-h-10 leading-relaxed">
                    {plan.desc}
                  </p>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-700 font-medium"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 ${plan.popular ? "text-emerald-500" : "text-gray-400"}`}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.id === "enterprise" ? "/enterprise" : "/signup"}
                    className={`w-full py-3.5 rounded-xl text-center font-bold transition-all ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}
                  >
                    {plan.id === "free" ? "Começar Grátis" : "Assinar Plano"}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default SegmentoDetalhe;
