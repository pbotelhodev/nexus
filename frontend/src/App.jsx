import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* Rota inicial */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
