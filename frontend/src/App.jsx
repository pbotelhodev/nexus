import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Segmentos from "./pages/Segmentos";
import SegmentoDetalhe from "./pages/SegmPage"; 
import Planos from "./pages/Planos";
import Enterprise from "./pages/Enterprise";


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

    </Routes>
  );
}
export default App;
