import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Search,
  Settings,
  ArrowRight,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { segmentsDatabase, themeColors } from "../data/segmentsData";

export default function Segmentos() {
  const [searchTerm, setSearchTerm] = useState("");

  const segmentsArray = Object.entries(segmentsDatabase).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  const filteredSegments = segmentsArray.filter(
    (segment) =>
      segment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      segment.legenda.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-emerald-200">
      <Header />

      {/* HERO */}
      <section className="relative bg-white pt-20 pb-16 lg:pt-18 lg:pb-14 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size:16px_16px opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Soluções sob medida para o <br className="hidden md:block" />
            seu <span className="text-emerald-600">segmento.</span>
          </h1>
          <p className="text-md text-gray-600 max-w-2xl mx-auto mb-10">
            Não importa a sua área de atuação, o Nexium possui ferramentas
            otimizadas para a realidade da sua operação. Encontre a sua abaixo.
          </p>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 shadow-sm focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none text-base"
              placeholder="Ex: Mercado, Logística, Consultório..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSegments.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nenhum segmento encontrado
              </h3>
              <p className="text-gray-500">
                Tente buscar por outro termo ou fale com nossos consultores.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSegments.map((segment) => {
                const colors = themeColors[segment.colorTheme] ?? themeColors.emerald;
                const Icon = segment.icon;

                return (
                  <Link
                    key={segment.slug}
                    to={`/segmentos/${segment.slug}`}
                    className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col ${colors.cardGroupHover}`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${colors.cardBg}`}>
                      <Icon className={`h-7 w-7 ${colors.cardText}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-800 transition-colors">
                      {segment.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                      {segment.legenda}
                    </p>
                    <div className={`inline-flex items-center text-sm font-bold ${colors.cardText}`}>
                      Ver detalhes{" "}
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA ENTERPRISE */}
      <section className="bg-emerald-950 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-emerald-900/50 border border-emerald-800/50 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 backdrop-blur-sm">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-800/50 text-emerald-400 mb-6 border border-emerald-700/50">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Operação complexa? Solução Enterprise.
              </h2>
              <p className="text-emerald-100/80 text-lg">
                Se a sua empresa possui regras de negócio muito específicas,
                franquias ou operações em larga escala, nosso time de
                arquitetura projeta uma solução exclusiva.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="/enterprise"
                className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-emerald-500/20 text-center flex justify-center items-center gap-2"
              >
                Falar com Consultor <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}