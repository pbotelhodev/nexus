import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LayoutDashboard,
  Loader2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import Logo from "../assets/logo.png";
import IlustLogin from "../assets/loginIlust.png";

export default function Login() {
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 selection:bg-emerald-200">
        {/* Container Principal */}
        <div className="w-full max-w-275 min-h-175 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden border border-gray-100">
          {/* Lado Esquerdo - Branding Visual (Inspirado na Referência) */}
          <div className="hidden md:flex w-5/12 relative overflow-hidden bg-linear-to-br from-[#eaf6ef] via-[#f4faf6] to-white p-12 flex-col border-r border-gray-100 gap-3">
            {/* Logo Desktop */}
            <div className="flex items-center gap-2 mb-10">
              <img src={Logo} alt="Logo" className="w-15" />
            </div>

            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 leading-[1.15] mb-4 tracking-tight">
                Bem-vindo <br />
                de volta ao <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-900 to-emerald-400">
                  controle.
                </span>
              </h1>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[90%]">
                Acesse seu painel centralizado para acompanhar métricas em tempo
                real e gerenciar suas operações.
              </p>
            </div>

            {/* Ilustração Flutuante via CSS (Baseado na imagem enviada) */}
            <img
              src={IlustLogin}
              alt="Ilustração de Login"
              className="  max-w-full justify-center h-auto "
            />
          </div>

          {/* Lado Direito - Formulário de Login */}
          <div className="w-full md:w-7/12 p-8 sm:p-10 md:p-14 flex flex-col justify-center bg-white relative">
            {/* Logo Mobile - Exatamente centralizada acima do formulário */}
            <div className="flex md:hidden flex-col items-center justify-center mb-10 w-full">
              <img src={Logo} alt="Logo" className="w-15" />
            </div>

            <div className="w-full max-w-105 mx-auto">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                  Acesse sua conta
                </h2>
                <p className="text-gray-500 text-sm">
                  Insira as suas credenciais para acessar a plataforma.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                    {error}
                  </div>
                )}

                {/* Input E-mail */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-gray-600 uppercase tracking-wider"
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

                {/* Input Senha */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-xs font-bold text-gray-600 uppercase tracking-wider"
                    >
                      Palavra-passe
                    </label>
                    <a
                      href="#"
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      Esqueceu a senha?
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

                {/* Checkbox */}
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

                {/* Botão */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin h-4 w-4" /> Validando...
                    </>
                  ) : (
                    <>
                      Acessar Plataforma
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Link Cadastro */}
              <div className="mt-8 text-center md:text-left">
                <p className="text-sm font-medium text-gray-500">
                  Ainda não tem conta?{" "}
                  <Link
                    to="/signup"
                    className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Criar conta corporativa
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LayoutDashboard,
  Loader2,
  ArrowRight,
} from "lucide-react";

import LoginIlust from "../assets/loginIlust.png";
import Logo from "../assets/logo.png";

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 selection:bg-emerald-200">
        {/* Container Principal (Mesmo tamanho do Onboarding) }
        <div className="w-full max-w-275 min-h-175 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden border border-gray-100">
          {/* Lado Esquerdo - Branding Visual }
          <div className="hidden md:flex w-5/12 relative overflow-hidden bg-linear-to-br from-[#eaf6ef] via-[#f4faf6]">
            <div className="absolute inset-0  via-emerald-900/60 to-transparent mix-blend-multiply"></div>

            <div className="relative z-10 p-12 flex flex-col h-full justify-between text-white">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-15"/>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.15] mb-4 tracking-tight transition-all duration-300">
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
                <img
                  src={LoginIlust}
                  alt=""
                  className="w-full h-full object-contain [mask-image:radial-gradient(white,transparent_80%)"
                />
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-emerald-200/60">
                <span>© 2026 Nexium Systems</span>
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

          {/* Lado Direito - Formulário de Login *}
          <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-center bg-white relative">
            {/* Logo Mobile *}
            <div className="absolute top-8 left-8 flex md:hidden gap-2 border w-full my-1">
              <img src={Logo} alt="Logo" className="w-15 text-center"/>
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
};

export default Login;
*/
