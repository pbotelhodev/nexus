import { useState } from "react";
import { Link } from "react-router-dom";
/* Imports Icons */
import {
  Menu,
  X,
  Play,
  Wrench,
  Pill,
  ShoppingBasket,
  Stethoscope,
  Utensils,
  Store,
  ChevronRight,
  Plus,
  TrendingUp,
  FileText,
  PieChart,
  LifeBuoy,
  Star,
  MessageCircle,
  Instagram,
} from "lucide-react";

/* Imports Images */
import Logo from "../assets/logo.png";
import HeroMockup from "../assets/heroMockup.png";
import EndMockup from "../assets/resourcesMockup.png";
import SmattexLogo from "../assets/smarttex.png";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Soluções", href: "#solucoes" },
    { name: "Recursos", href: "#recursos" },
    { name: "Planos", href: "/planos" },
    { name: "Enterprise", href: "/enterprise" },
  ];
  const segments = [
    {
      title: "Varejo",
      description:
        "Controle de vendas, estoque e operação em tempo real com organização e eficiência.",
      icon: Store,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-100",
      linkColor: "text-emerald-500",
      slug: "varejo",
    },
    {
      title: "Bar & Restaurantes",
      description:
        "Controle mesas, pedidos e insumos em tempo real, com mais agilidade na operação.",
      icon: Utensils,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-100",
      linkColor: "text-purple-500",
      slug: "food-service",
    },
    {
      title: "Assistências Técnicas",
      description:
        "Venda e manutenção de aparelhos com controle total da operação.",
      icon: Wrench,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-100",
      linkColor: "text-blue-500",
      slug: "assistencia",
    },
    {
      title: "Consultórios",
      description:
        "Agendamentos, gestão de pacientes e controle de atendimentos em um  só sistema.",
      icon: Stethoscope,
      iconColor: "text-pink-500",
      iconBg: "bg-pink-100",
      linkColor: "text-pink-500",
      slug: "saude",
    },
    {
      title: "Mercados",
      description:
        "Agilize o caixa, controle a validade dos produtos organize a reposição do estoque",
      icon: ShoppingBasket,
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-100",
      linkColor: "text-cyan-500",
      slug: "mercados",
    },
    {
      title: "Farmácias",
      description:
        "SNGPC integrado, controle de lotes e convênios facilitados.",
      icon: Pill,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-100",
      linkColor: "text-emerald-500",
      slug: "farmacias",
    },
    {
      title: "Oficinas",
      description:
        "Ordens de serviço, histórico de veículos e gestão da mão de obra.",
      icon: Wrench,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-100",
      linkColor: "text-orange-500",
      slug: "oficinas",
    },
  ];
  const features = [
    {
      title: "Gestão Financeira Ágil",
      description:
        "O coração do negócio. Tenha o controle de fluxo de caixa, faturamento e contas a pagar/receber em um só lugar.",
      icon: TrendingUp,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-100",
    },
    {
      title: "Emissão de NF-e & NFS-e",
      description:
        "Automatize e simplifique a emissão de notas fiscais de forma integrada e sem estresse.",
      icon: FileText,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-100",
    },
    {
      title: "Dashboards de Performance",
      description:
        "Inteligência em tempo real. Avalie as métricas da empresa, de vendas e produtividade com dashboards precisos.",
      icon: PieChart,
      iconColor: "text-pink-500",
      iconBg: "bg-pink-100",
    },
    {
      title: "Suporte Especializado",
      description:
        "Conte com um time experiente, ágil e acessível e pronto para ajudar o seu negócio.",
      icon: LifeBuoy,
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-100",
    },
  ];
  const testimonials = [
    {
      name: "Paulo Júnior",
      role: "Designer, JB Designer",
      initials: "PJ",
      color: "bg-blue-800",
      quote:
        '"A Nexium organizou meu fluxo de trabalho e eliminou ruídos. Hoje produzo com mais foco e consistência."',
    },
    {
      name: "Gabriel Barboza",
      role: "Desenvolvedor, GBZ Digital",
      initials: "GB",
      color: "bg-orange-800",
      quote:
        '"Com a Nexium, centralizei meus clientes e processos. Ganhei controle real da operação e mais eficiência nas entregas."',
    },
  ];

  return (
    <div>
      <header className="sticky top-0 z-50 w-full bg-emerald/10 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} alt="Nexium Logo" className="h-13 w-13" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="text-sm font-medium border border-[#caddd2] text-gray-600 px-5 py-2.5 rounded-lg hover:text-primary transition-colors"
              >
                Acessar Conta
              </Link>
              <Link
                to="/signup"
                className="bg-primary hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow"
              >
                Criar Conta Grátis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav (Agora sobreposto) */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full z-50 md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-base font-medium text-gray-700 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/login"
                className="block text-center border border-[#caddd2] text-gray-700 px-5 py-2.5 rounded-lg text-base font-medium hover:text-primary"
              >
                Acessar Conta
              </Link>
              <Link
                to="/signup"
                className="w-full text-center bg-[#16A34A] hover:bg-emerald-700 text-white px-5 py-3 rounded-lg text-base font-semibold transition-colors"
              >
                Criar conta grátis
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white flex items-center min-h-[75dvh] sm:min-h-[70vh] border-b border-gray-100">
        {/* Efeito de background (Ajustado para cobrir a section inteira no mobile) */}
        <div className="absolute bg-white blur-3xl opacity-50 -z-10 inset-0 w-full h-full m-0 rounded-none md:inset-auto md:top-0 md:right-0 md:w-160 md:h-160 md:-mt-20 md:-mr-20 md:rounded-full" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-7 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                A nova era da Gestão Empresarial
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Gestão Inteligente para o <br className="hidden md:block" />
                seu <span className="text-primary">Negócio</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Controle de estoque, vendas, financeiro e operação em um único
                sistema simples e poderoso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="bg-primary hover:bg-emerald-900 cursor-pointer text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all shadow-sm hover:shadow-md text-center"
                >
                  Criar Conta Grátis
                </Link>
                <Link
                  to="/demo"
                  className="bg-white cursor-pointer hover:bg-gray-50 border-2 color-primary border-gray-200 text-gray-800 px-8 py-3.5 rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Play className="h-5 w-5 color-primary" />
                  Ver como funciona
                </Link>
              </div>
            </div>

            {/* Visual/Mockups (Oculto no mobile via hidden md:flex) */}
            <div className="hidden md:flex relative mt-12 lg:mt-0 justify-center">
              <img
                src={HeroMockup}
                alt="Interface do Sistema Nexium"
                className="w-full max-w-2xl h-auto drop-shadow-2xl rounded-xl object-contain"
              />
            </div>

            {/* Visual/Mockups (Oculto no mobile via hidden md:flex) */}
          </div>
        </div>
      </section>

      {/* Segmentos de Negócio */}
      <section
        id="solucoes"
        className=" bg-gray-50 py-20 lg:py-28 border-y border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Feito para o seu tipo de negócio
            </h2>
            <p className="text-base text-gray-600">
              Soluções adaptadas para cada tipo de operação e rotina de negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group flex flex-col"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${segment.iconBg}`}
                >
                  <segment.icon className={`h-6 w-6 ${segment.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {segment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {segment.description}
                </p>
                <Link
                  to={`/segmentos/${segment.slug}`}
                  className={`inline-flex items-center text-xs font-bold tracking-wider uppercase ${segment.linkColor} group-hover:underline`}
                >
                  Saiba Mais <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}

            {/* CTA Card */}
            <Link to="/segmentos">
              <div className="h-full bg-emerald-50 rounded-2xl p-8 border-2 border-dashed border-[#D7F8E1] flex flex-col items-center justify-center text-center hover:bg-emerald-100 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
                  <Plus className="h-6 w-6" />
                </div>  
                <p className="text-emerald-900 text-[10px] tracking-wide uppercase max-w-50">
                  <span className="font-bold">
                   
                    Não encontrou seu segmento? <br />
                  </span>
                  Veja todas as soluções {<ChevronRight className="h-3 w-3 inline" />}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="bg-white py-20 scroll-mt-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                Recursos para o seu
                <br />
                Sucesso
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                {features.map((feature, index) => (
                  <div key={index}>
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}
                    >
                      <feature.icon
                        className={`h-5 w-5 ${feature.iconColor}`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <Link to="/signup">
                <button className="bg-primary hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all shadow-sm">
                  Criar conta grátis
                </button>
              </Link>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex lg:pl-10 justify-center">
              <img
                src={EndMockup}
                alt="Sistema de PDV e Impressão Nexium"
                className="w-full max-w-xl h-auto drop-shadow-2xl rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="bg-[#D7F8E1] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#14532D] mb-6 leading-tight">
                O que dizem os
                <br />
                líderes que
                <br />
                escolheram a<br />
                Nexium
              </h2>
              <p className="text-md text-gray-600 mb-10 max-w-md">
                Junte-se a centenas de empresas que modernizaram sua gestão com
                nossa tecnologia de ponta.
              </p>

              <div className="flex gap-10">
                <div>
                  <div className="text-3xl font-extrabold text-[#14532D] mb-1">
                    30+
                  </div>
                  <div className="text-xs font-bold text-gray-900 tracking-wider uppercase">
                    Clientes Ativos
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-orange-500 mb-1">
                    99%
                  </div>
                  <div className="text-xs font-bold text-gray-900 tracking-wider uppercase">
                    Satisfação
                  </div>
                </div>
              </div>
            </div>

            {
              /* Right Side - Cards */
              <div className="flex flex-col gap-6">
                {testimonials.map((testi, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${testi.color}`}
                        >
                          {testi.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-orange-900">
                            {testi.name}
                          </h4>
                          <p className="text-xs text-orange-500 text-extrabold">
                            {testi.role}
                          </p>
                        </div>
                      </div>
                      {/* Stars */}
                      <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-sm md:text-base">
                      {testi.quote}
                    </p>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-[#052E16] border-t-3 border-orange-500 text-emerald-50 pt-10 pb-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1  lg:grid-cols-4 mt-5 gap-5 lg:gap-8 mb-5">
            {/* Brand Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Link to="/ ">
                  <img src={Logo} className="h-13 w-13" alt="Nexium Logo" />
                </Link>
              </div>
              <p className="text-[#aadfba] text-sm mb-6 max-w-xs leading-relaxed">
                Automatize finanças, gere boletos e garanta segurança em todos
                os processos da sua empresa, focando apenas no crescimento.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-emerald-300" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-800 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-300" />
                </a>
              </div>
            </div>

            {/* Links columns - Agora lado a lado com rolagem horizontal */}
            <div className="lg:col-span-3 flex flex-nowrap gap-8 overflow-x-auto pb-4 snap-x">
              <div className="min-w-37.5 snap-start">
                <h4 className="font-bold text-[#aadfba] mb-6 uppercase tracking-wider text-sm">
                  Produto
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#aadfba] hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      Segmentos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#aadfba] hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      Integrações
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#aadfba] hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      Ferramentas
                    </a>
                  </li>
                </ul>
              </div>
              <div className="min-w-37.5 snap-start">
                <h4 className="font-bold text-[#aadfba] mb-6 uppercase tracking-wider text-sm">
                  Companhia
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#aadfba] hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      Sobre Nós
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#aadfba] hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      Trabalhe Conosco
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#aadfba] hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div className="min-w-37.5 snap-start">
                <h4 className="font-bold text-[#aadfba] mb-6 uppercase tracking-wider text-sm">
                  Legal
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#aadfba] hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#aadfba] hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      Termos de Serviços
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-emerald-800 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#aadfba] text-center md:text-left">
            <p>© 2026 Nexium. Automação para o seu negócio.</p>
            <p className="flex flex-wrap justify-center md:justify-end items-center gap-1">
              Construído com a tecnologia de ponta por{" "}
              <img
                src={SmattexLogo}
                alt="Smarttex"
                className="h-5 object-contain flex justify-center items-center"
              />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
