import { useState } from "react";

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
} from "lucide-react";

/* Imports Images */
import Logo from "../assets/logo.png";
import HeroMockup from "../assets/heroMockup.png";
import EndMockup from "../assets/resourcesMockup.png";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Soluções", href: "#solu" },
    { name: "Recursos", href: "#recursos" },
    { name: "Enterprise", href: "#enterprise" },
    { name: "Plataforma", href: "#plataforma" },
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
    },
    {
      title: "Bar & Restaurantes",
      description:
        "Controle mesas, pedidos e finanças em tempo real, com total agilidade no balcão e...",
      icon: Utensils,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-100",
      linkColor: "text-purple-500",
    },
    {
      title: "Assistências Tec.",
      description:
        "Gestão de manutenção e operação com controle total de serviços.",
      icon: Wrench,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-100",
      linkColor: "text-blue-500",
    },
    {
      title: "Consultórios",
      description:
        "Agendamentos, gestão de pacientes e prontuários atendendo a todas as...",
      icon: Stethoscope,
      iconColor: "text-pink-500",
      iconBg: "bg-pink-100",
      linkColor: "text-pink-500",
    },
    {
      title: "Mercados",
      description:
        "Agilidade de PDV, controle detalhado de inventário, margens e composição de...",
      icon: ShoppingBasket,
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-100",
      linkColor: "text-cyan-500",
    },
    {
      title: "Farmácias",
      description:
        "Gestão integrada, controle de lotes e convênios facilitados.",
      icon: Pill,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-100",
      linkColor: "text-emerald-500",
    },
    {
      title: "Oficinas",
      description:
        "Ordens de serviço, histórico de veículos e gestão da mão de obra.",
      icon: Wrench,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-100",
      linkColor: "text-orange-500",
    },
  ];

  return (
    <div>
      <header className="sticky top-0 z-50 w-full bg-emerald/10 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} alt="Nexus Logo" className="h-13 w-13" />
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
              <a
                href="#"
                className="text-sm font-medium border border-[#caddd2] text-gray-600 px-5 py-2.5 rounded-lg hover:text-primary transition-colors"
              >
                Acessar Portal
              </a>
              <button className="bg-primary hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow">
                Começar Agora
              </button>
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
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-700 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#"
                className="block text-center border border-[#caddd2] text-gray-700 px-5 py-2.5 rounded-lg text-base font-medium hover:text-primary"
              >
                Acessar Portal
              </a>
              <button className="w-full bg-[#16A34A] hover:bg-emerald-700 text-white px-5 py-3 rounded-lg text-base font-semibold transition-colors">
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white flex items-center min-h-[70dvh] md:min-h-[70vh] py-10 border-b border-gray-100">
        {/* Efeito de background (Ajustado para cobrir a section inteira no mobile) */}
        <div className="absolute bg-white blur-3xl opacity-50 -z-10 inset-0 w-full h-full m-0 rounded-none md:inset-auto md:top-0 md:right-0 md:w-160 md:h-160 md:-mt-20 md:-mr-20 md:rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                <button className="bg-primary hover:bg-emerald-900 cursor-pointer text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all shadow-sm hover:shadow-md text-center">
                  Começar Agora
                </button>
                <button className="bg-white cursor-pointer hover:bg-gray-50 border-2 border-gray-200 text-gray-800 px-8 py-3.5 rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-2">
                  <Play className="h-5 w-5" />
                  Ver Demo
                </button>
              </div>
            </div>

            {/* Visual/Mockups (Oculto no mobile via hidden md:flex) */}
            <div className="hidden md:flex relative mt-12 lg:mt-0 justify-center">
              <img
                src={HeroMockup}
                alt="Interface do Sistema Nexus"
                className="w-full max-w-2xl h-auto drop-shadow-2xl rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos de Negócio */}
      <section className="bg-gray-50 py-20 lg:py-28 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Feito para o seu tipo de negócio
            </h2>
            <p className="text-base text-gray-600">
              Soluções adaptadas para cada tipo de operação e rotina de negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group flex flex-col"
              >
                <div
                  className={`w-12 h-16 rounded-xl flex items-center justify-center mb-6 ${segment.iconBg}`}
                >
                  <segment.icon className={`h-6 w-6 ${segment.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {segment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {segment.description}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center text-xs font-bold tracking-wider uppercase ${segment.linkColor} group-hover:underline`}
                >
                  Saiba Mais <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-dashed border-emerald-200 flex flex-col items-center justify-center text-center hover:bg-emerald-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
                <Plus className="h-6 w-6" />
              </div>
              <p className="text-emerald-900 font-bold text-sm tracking-wide uppercase max-w-50">
                Não encontrou seu segmento? Fale com as soluções {"->"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
