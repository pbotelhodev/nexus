import React, { useState } from "react";
import {
  Store,
  Utensils,
  Wrench,
  ShoppingCart,
  BriefcaseMedical,
  Briefcase,
  Factory,
  GraduationCap,
  Truck,
  Shapes,
  ArrowLeft,
  Check,
  Building2,
  User,
  Mail,
  Phone,
  FileText,
  Zap,
  Shield,
  Coffee,
  Stethoscope,
  CarFront,
  Tractor,
} from "lucide-react";

/* Impots images */
import Logo from "../assets/logo.png";
import SignUpImage from "../assets/signMockup.png";
import SegmIlust from "../assets/segmIlust.png";
import PlanIlust from "../assets/planIlust.png"; 
 
const SignUp = () => {
  const [step, setStep] = useState(1);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    document: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const isFormValid = formData.name && formData.email && formData.company;

  const segments = [
    { id: "varejo", name: "Varejo", icon: Store },
    { id: "restaurante", name: "Bar / Restaurante", icon: Utensils },
    { id: "assistencia", name: "Assistência Técnica", icon: Wrench },
    { id: "consultorio", name: "Consultório", icon: Stethoscope },
    { id: "farmacia", name: "Farmácia", icon: BriefcaseMedical },
    { id: "mercado", name: "Mercado", icon: ShoppingCart },
    { id: "oficina", name: "Oficina", icon: CarFront },
    { id: "educacao", name: "Educação", icon: GraduationCap },
    { id: "logistica", name: "Logística", icon: Truck },
    { id: "agronegocio", name: "Agronegócio", icon: Tractor }, // Novo 1
    { id: "industria", name: "Indústria", icon: Factory }, // Novo 2
    { id: "outros", name: "Outros", icon: Shapes },
  ];

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "R$ 0",
      desc: "Para autônomos e validação.",
      icon: Coffee,
      features: [
        "1 Usuário",
        "Emissão de NF-e Básica",
        "Suporte na Comunidade",
      ],
    },
    {
      id: "starter",
      name: "Starter",
      price: "R$ 97",
      desc: "Ideal para quem está começando agora.",
      icon: Zap,
      features: ["Até 2 Usuários", "Controle Financeiro", "Suporte por Email"],
    },
    {
      id: "pro",
      name: "Profissional",
      price: "R$ 297",
      desc: "Para empresas em fase de crescimento.",
      icon: Building2,
      popular: true,
      features: ["Até 5 Usuários", "Automação Fiscal", "Suporte WhatsApp"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "R$ 897",
      desc: "Operações complexas e alto volume.",
      icon: Shield,
      features: ["Usuários Ilimitados", "API Aberta", "Gerente Dedicado"],
    },
  ];

  // Textos dinâmicos baseados na nova ordem
  const panelContent = {
    1: {
      title: "Crie sua conta corporativa.",
      desc: "Precisamos de alguns dados essenciais para configurar seu ambiente seguro no Nexium.",
    },
    2: {
      title: "Personalize sua experiência.",
      desc: "Selecione o segmento do seu negócio para que possamos adaptar o Nexium às suas necessidades específicas.",
    },
    3: {
      title: "Escolha o plano ideal.",
      desc: "Dimensione o poder do Nexium de acordo com o tamanho e a complexidade da sua operação.",
    },
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 selection:bg-emerald-200">
        <div className="w-full max-w-275 min-h-175 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden border border-gray-100">
          {/* Lado Esquerdo - Dinâmico e com Imagem */}
          <div className="w-full md:w-5/12 bg-linear-to-br from-[#eaf6ef] via-[#f4faf6] to-white p-8 md:p-12 flex flex-col relative overflow-hidden">
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="font-extrabold text-emerald-800 text-xl tracking-tight mb-8">
                <img src={Logo} alt="" className="w-15" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.15] mb-4 tracking-tight transition-all duration-300">
                {panelContent[step].title}
              </h1>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-[95%] transition-all duration-300">
                {panelContent[step].desc}
              </p>

              <img
                src={
                  step === 1 ? SignUpImage : step === 2 ? SegmIlust : PlanIlust
                }
                alt=""
                className="w-full h-full object-contain [mask-image:radial-gradient(white,transparent_80%)"
              />
            </div>

            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Lado Direito - Máquina de Estados */}
          <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col bg-white relative">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-emerald-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar
              </button>
            )}

            <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0">
              {/* === ETAPA 1: Dados === */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Dados da conta
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Informações básicas para liberar seu acesso.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Nome Completo
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8f9] border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-lg text-sm font-medium transition-all outline-none"
                            placeholder="João da Silva"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          E-mail de Trabalho
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8f9] border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-lg text-sm font-medium transition-all outline-none"
                            placeholder="joao@empresa.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Empresa
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                          <input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8f9] border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-lg text-sm font-medium transition-all outline-none"
                            placeholder="Sua Empresa LTDA"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          WhatsApp
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                          <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8f9] border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-lg text-sm font-medium transition-all outline-none"
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          CNPJ (Opcional)
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                          <input
                            name="cnpj"
                            value={formData.cnpj}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8f9] border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-lg text-sm font-medium transition-all outline-none"
                            placeholder="00.000.000/0000-00"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Senha
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                          <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8f9] border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-lg text-sm font-medium transition-all outline-none"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!isFormValid}
                    className={`
                      w-full h-12 rounded-xl font-bold transition-all duration-300
                      ${
                        isFormValid
                          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-emerald-600/40 translate-y-0"
                          : "bg-gray-100 text-gray-400 pointer-events-none"
                      }
                    `}
                  >
                    Avançar para Segmento
                  </button>
                </div>
              )}

              {/* === ETAPA 2: Segmentos === */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Qual o seu segmento?
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Selecione para configurarmos as ferramentas certas.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {segments.map((segment) => {
                      const Icon = segment.icon;
                      const isSelected = selectedSegment === segment.id;
                      return (
                        <button
                          key={segment.id}
                          onClick={() => setSelectedSegment(segment.id)}
                          className={`
                            flex flex-col items-center justify-center p-3.5 rounded-xl border-2 transition-all duration-200 group
                            ${
                              isSelected
                                ? "border-emerald-500 bg-emerald-50/50"
                                : "border-transparent bg-[#f7f8f9] hover:bg-gray-100 hover:border-gray-200"
                            }
                          `}
                        >
                          <div
                            className={`
                            w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors
                            ${isSelected ? "bg-emerald-100 text-emerald-700" : "bg-white text-gray-600 shadow-sm"}
                          `}
                          >
                            <Icon className="w-5 h-5" strokeWidth={2} />
                          </div>
                          <span
                            className={`text-[13px] font-semibold ${isSelected ? "text-emerald-800" : "text-gray-700"}`}
                          >
                            {segment.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setStep(3)}
                    disabled={!selectedSegment}
                    className={`
                      w-full h-12 rounded-xl font-bold transition-all duration-300
                      ${
                        selectedSegment
                          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-emerald-600/40"
                          : "bg-gray-100 text-gray-400 pointer-events-none"
                      }
                    `}
                  >
                    Avançar para Planos
                  </button>
                </div>
              )}

              {/* === ETAPA 3: Planos === */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      Selecione seu plano
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Dimensione o poder do Nexium para sua empresa.
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plans.map((plan) => {
                      const Icon = plan.icon;
                      const isSelected = selectedPlan === plan.id;
                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`
                            relative p-3.5 rounded-xl border-2 cursor-pointer transition-all duration-200
                            ${
                              isSelected
                                ? "border-emerald-500 bg-emerald-50/30"
                                : "border-gray-100 bg-white hover:border-emerald-200 hover:bg-[#f7f8f9]"
                            }
                          `}
                        >
                          {plan.popular && (
                            <span className="absolute -top-2.5 right-4 bg-emerald-500 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                              Mais Escolhido
                            </span>
                          )}

                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-1.5 rounded-lg ${isSelected ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-600"}`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <h3
                                  className={`font-bold text-sm ${isSelected ? "text-emerald-900" : "text-gray-900"}`}
                                >
                                  {plan.name}
                                </h3>
                                <p className="text-[11px] text-gray-500">
                                  {plan.desc}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-base font-bold text-gray-900">
                                {plan.price}
                              </span>
                              <span className="text-[10px] text-gray-500 block">
                                /mês
                              </span>
                            </div>
                          </div>

                          <ul className="space-y-1 pt-2 border-t border-gray-100 flex gap-4 flex-wrap">
                            {plan.features.map((feat, i) => (
                              <li
                                key={i}
                                className="text-[11px] text-gray-600 flex items-center gap-1.5"
                              >
                                <Check className="w-3 h-3 text-emerald-500" />{" "}
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    disabled={!selectedPlan}
                    className={`
                      w-full h-12 rounded-xl font-bold transition-all duration-300
                      ${
                        selectedPlan
                          ? "bg-emerald-900 text-white shadow-lg hover:bg-emerald-950"
                          : "bg-gray-100 text-gray-400 pointer-events-none"
                      }
                    `}
                  >
                    Finalizar Configuração
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step === num
                      ? "w-6 bg-emerald-600"
                      : step > num
                        ? "w-2 bg-emerald-300"
                        : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
