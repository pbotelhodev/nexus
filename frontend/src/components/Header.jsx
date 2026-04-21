import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Soluções", href: "/#solucoes" },
    { name: "Recursos", href: "/#recursos" },
    { name: "Planos", href: "/planos" },
    { name: "Enterprise", href: "/enterprise" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-emerald/10 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Link to="/">
              <img src={Logo} alt="Nexium Logo" className="h-13 w-13" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
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
  );
};

export default Header;
