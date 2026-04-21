import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LayoutDashboard,
  Loader2,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos de acesso.");
      return;
    }

    setIsLoading(true);

    // Simulação de autenticação
    setTimeout(() => {
      setIsLoading(false);
      alert("Acesso autorizado! Redirecionando para o painel...");
    }, 1500);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Manrope', sans-serif; }
      `}</style>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 selection:bg-emerald-200">
        {/* Container Principal (Mesmo tamanho do Onboarding) */}
        <div className="w-full max-w-275 min-h-175 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden border border-gray-100">
          {/* Lado Esquerdo - Branding Visual */}
          <div className="hidden md:flex w-5/12 relative overflow-hidden bg-slate-950">
            {/* Imagem de Fundo com Overlay */}
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
              alt="Data Analysis"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-linear-to-t from-emerald-950 via-emerald-900/60 to-transparent mix-blend-multiply"></div>

            {/* Efeitos de Luz Aurora */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 p-12 flex flex-col h-full justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500/20 border border-emerald-400/30 p-2 rounded-lg backdrop-blur-sm">
                  <LayoutDashboard className="w-5 h-5 text-emerald-300" />
                </div>
                <span className="font-extrabold text-xl tracking-tight">
                  Nexus<span className="text-emerald-400">ERP</span>
                </span>
              </div>

              <div>
                <h1 className="text-4xl font-bold leading-[1.15] mb-4 tracking-tight text-white">
                  Bem-vindo <br />
                  de volta ao{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-300 to-emerald-100">
                    controle.
                  </span>
                </h1>
                <p className="text-emerald-100/80 text-[15px] leading-relaxed max-w-[90%]">
                  Aceda ao seu painel centralizado para acompanhar métricas em
                  tempo real, gerir operações e tomar decisões baseadas em dados
                  concretos.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-emerald-200/60">
                <span>© 2026 Nexus Systems</span>
                <span className="w-1 h-1 bg-emerald-500/50 rounded-full"></span>
                <a
                  href="#"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Suporte Técnico
                </a>
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário de Login */}
          <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-center bg-white relative">
            {/* Logo Mobile */}
            <div className="absolute top-8 left-8 flex md:hidden items-center gap-2">
              <div className="bg-emerald-50 p-2 rounded-lg">
                <LayoutDashboard className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="font-extrabold text-xl text-gray-900 tracking-tight">
                NexusERP
              </span>
            </div>

            <div className="w-full max-w-105 mx-auto">
              <div className="mb-10 mt-8 md:mt-0 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                  Iniciar Sessão
                </h2>
                <p className="text-gray-500 text-sm">
                  Insira as suas credenciais para aceder à plataforma.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                    {error}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    E-mail de Trabalho
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#f7f8f9] border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl text-sm font-medium transition-all outline-none text-gray-900 placeholder-gray-400"
                      placeholder="nome@empresa.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Palavra-passe
                    </label>
                    <a
                      href="#"
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      Esqueceu-se?
                    </a>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-11 py-3 bg-[#f7f8f9] border border-transparent focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl text-sm font-medium transition-all outline-none text-gray-900 placeholder-gray-400"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center pt-1">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer accent-emerald-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm font-medium text-gray-600 cursor-pointer"
                  >
                    Manter sessão iniciada
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin h-4 w-4" />A validar...
                    </>
                  ) : (
                    <>
                      Aceder ao Dashboard
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center md:text-left">
                <p className="text-sm font-medium text-gray-500">
                  Ainda não tem conta?{" "}
                  <a
                    href="#"
                    className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Criar conta corporativa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;