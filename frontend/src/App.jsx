import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* Rota inicial */}
      <Route path="/" element={<Home />} />

      {/* Rota para a página de cadastro */}
      <Route path="/signup" element={<SignUp />} />

      {/* Rota para a página de login */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
