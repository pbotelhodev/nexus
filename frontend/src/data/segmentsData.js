// src/data/segmentsData.js
import {
  Utensils,
  Store,
  Smartphone,
  Receipt,
  ChefHat,
  QrCode,
  Calculator,
  Coffee,
  Zap,
  Building2,
  Shield,
  Package,
  Users,
} from "lucide-react";

export const themeColors = {
  orange: {
    heroBlob: "bg-orange-50",
    badge: "bg-orange-100 border-orange-200 text-orange-800",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    dashBlob: "bg-orange-500/10",
    dashBadge: "text-orange-600 bg-orange-50 border-orange-100",
  },
  emerald: {
    heroBlob: "bg-emerald-50",
    badge: "bg-emerald-100 border-emerald-200 text-emerald-800",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    dashBlob: "bg-emerald-500/10",
    dashBadge: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
};

export const segmentsDatabase = {
  "food-service": {
    name: "Bar & Restaurantes",
    icon: Utensils,
    badge: "Food Service & Gastronomia",
    title: "Mesas cheias, operação vazia de problemas.",
    subtitle:
      "Da comanda eletrônica na mão do garçom até a ficha técnica na cozinha. O Nexium integra todo o seu restaurante para você focar no lucro.",
    colorTheme: "orange",
    features: [
      {
        title: "Comandas e Mesas",
        desc: "Lançamento via smartphone...",
        icon: Smartphone,
      },
      {
        title: "Ficha e Estoque",
        desc: "Baixa automática de insumos...",
        icon: Receipt,
      },
      {
        title: "KDS (Cozinha)",
        desc: "Monitores na cozinha...",
        icon: ChefHat,
      },
      {
        title: "Autoatendimento",
        desc: "Cardápio via QR Code...",
        icon: QrCode,
      },
      {
        title: "Controle de Caixa",
        desc: "Abertura, suprimento...",
        icon: Calculator,
      },
    ],
    plans: [
      {
        id: "free",
        name: "Free Trial - 14 Dias",
        price: "0",
        desc: "Para food trucks...",
        icon: Coffee,
        features: [
          "1 PDV Balcão",
          "Pedidos Ilimitados",
          "Cardápio Digital",
          "Suporte",
        ],
      },
      {
        id: "starter",
        name: "Starter",
        price: "97",
        desc: "Para bares em crescimento...",
        icon: Zap,
        features: [
          "Até 2 Caixas",
          "Até 25 Mesas",
          "Comanda Eletrônica",
          "Suporte Email",
        ],
      },
      {
        id: "pro",
        name: "Profissional",
        price: "297",
        desc: "Para restaurantes de alto fluxo.",
        icon: Building2,
        popular: true,
        features: [
          "Mesas Ilimitadas",
          "Fichas Técnicas",
          "Controle Insumos",
          "WhatsApp",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "897",
        desc: "Redes de restaurantes e franquias.",
        icon: Shield,
        features: [
          "Múltiplas Lojas",
          "API Totens",
          "Gestor Dedicado",
          "Treinamento",
        ],
      },
    ],
  },
  varejo: {
    name: "Varejo",
    icon: Store,
    badge: "Solução para Lojistas",
    title: "Controle absoluto para o seu Varejo.",
    subtitle:
      "Do PDV ao controle de estoque multi-lojas. O Nexium centraliza sua operação para que você foque em vender mais e melhor.",
    colorTheme: "emerald",
    features: [
      {
        title: "PDV Rápido",
        desc: "Frente de caixa ágil, compatível com leitores de código de barras e desenhado para evitar filas.",
        icon: Store,
      },
      {
        title: "Estoque Inteligente",
        desc: "Alertas de mínimo, gestão de fornecedores e controle multi-lojas em tempo real.",
        icon: Package,
      },
      {
        title: "Emissão de Notas",
        desc: "NFC-e/NF-e emitidas em segundos, integradas com a Sefaz e sua contabilidade.",
        icon: Receipt,
      },
      {
        title: "Fidelização",
        desc: "Cadastro rápido, histórico de compras e campanhas de cashback para clientes.",
        icon: Users,
      },
      {
        title: "Fluxo de Caixa",
        desc: "Controle financeiro completo integrado diretamente com as vendas do balcão.",
        icon: Calculator,
      },
    ],
    plans: [
      {
        id: "free",
        name: "Free",
        price: "0",
        desc: "Para quem está validando a loja.",
        icon: Coffee,
        features: [
          "1 PDV / 1 Usuário",
          "Até 50 Vendas/mês",
          "Controle Básico",
          "Suporte na Comunidade",
        ],
      },
      {
        id: "starter",
        name: "Starter",
        price: "97",
        desc: "Para lojas profissionalizando.",
        icon: Zap,
        features: [
          "Até 2 Usuários",
          "Vendas Ilimitadas",
          "Emissão NFC-e",
          "Suporte por Email",
        ],
      },
      {
        id: "pro",
        name: "Profissional",
        price: "297",
        desc: "Para operações maduras.",
        icon: Building2,
        popular: true,
        features: [
          "Até 5 Usuários",
          "Controle Multi-lojas",
          "Integração Contábil",
          "Suporte WhatsApp",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "897",
        desc: "Redes de lojas e franquias.",
        icon: Shield,
        features: [
          "Usuários Ilimitados",
          "API Fechada",
          "Relatórios Customizados",
          "Gerente Dedicado",
        ],
      },
    ],
  },
  // Adicione os outros 8 segmentos aqui facilmente
};
