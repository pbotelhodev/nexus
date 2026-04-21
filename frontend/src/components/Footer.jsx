import Logo from "../assets/logo.png";
import SmarttexLogo from "../assets/smarttex.png";
import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";


const Footer = () => {
    return (
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
                src={SmarttexLogo}
                alt="Smarttex"
                className="h-5 object-contain flex justify-center items-center"
              />
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;