import { Routes, Route } from "react-router-dom";
/* Import Landing Page */
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Segmentos from "./pages/Segmentos";
import SegmentoDetalhe from "./pages/SegmPage";
import Planos from "./pages/Planos";
import Enterprise from "./pages/Enterprise";

/* Import App Layout - Bar e Restaurante */
import AppLayout from "./layouts/AppLayout";
import Comanda from "./pages/telas/Pedidos";
import Dashboard from "./pages/telas/Dashboard";
import Mesas from "./pages/telas/Mesa";
import Cardapio from "./pages/telas/Cardapio";
import Delivery from "./pages/telas/Delivery";
import Cozinha from "./pages/telas/Cozinha";
import Estoque from "./pages/telas/Estoque";
import Financeiro from "./pages/telas/Financeiro";

/* Rotas de Configurações */

function App() {
  return (
    <Routes>
      {/* Rota inicial */}
      <Route path="/" element={<Home />} />

      {/* Rota para a página de cadastro */}
      <Route path="/signup" element={<SignUp />} />

      {/* Rota para a página de login */}
      <Route path="/login" element={<Login />} />

      {/* Rota para a página de segmentos */}
      <Route path="/segmentos" element={<Segmentos />} />

      {/* Rota para a página de detalhes do segmento */}
      <Route path="/segmentos/:slug" element={<SegmentoDetalhe />} />

      {/* Rota para a página de planos */}
      <Route path="/planos" element={<Planos />} />

      {/* Rota para a página de enterprise */}
      <Route path="/enterprise" element={<Enterprise />} />

      {/* Rotas - Bar e Restaurante */}

      {/* Rota para tela do App */}
      <Route path="/app" element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="comanda" element={<Comanda />} />
        <Route path="mesas" element={<Mesas />} />
        <Route path="cardapio" element={<Cardapio />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="cozinha" element={<Cozinha />} />
        <Route path="estoque" element={<Estoque />} />
        <Route path="financeiro" element={<Financeiro />} />
      </Route>

      {/* Rota para a página de configurações */}
      <Route path="/settings" element={<div>Configurações</div>}> {/* Página de Configurações */}
        <Route path="profile" element={<div>Configurações de Perfil</div>} /> {/* Página de configurações de perfil */}
        <Route
          path="enterprise"
          element={<div>Configurações de Empresa</div>}
        /> {/* Página de configurações de empresa */}
        <Route path="business" element={<div>Configurações de Negócios</div>} /> {/* Página de configurações de negócios */}
        <Route path="billing" element={<div>Configurações de Cobrança</div>} /> {/* Página de configurações de dados fiscais */}
        <Route path="plans" element={<div>Configurações de Planos</div>} /> {/* Página de configurações de planos */}
      </Route>
    </Routes>
  );
}
export default App;
