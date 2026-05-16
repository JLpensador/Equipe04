import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Witcher from "../pages/theWitcher/Witcher";
import KratosImagem from "../pages/pageKratos/KratosImagem.jsx";
import Assassino from "../pages/pageAssassino/Assassino.jsx";

function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Witcher />} />
        <Route path="/kratos" element={<KratosImagem />} />
        <Route path="/assassino" element={<Assassino />} />
      </Routes>
    </>
  );
}

export default Rotas;
