import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import Header from "./components/Header/header.jsx";
import Assassino from "./pages/pageAssassino/Assassino.jsx";
import KratosImagem from "./pages/pageKratos/KratosImagem.jsx";
import Witcher from "./pages/theWitcher/Witcher";
import Rotas from "./routes/Rotas.jsx";
import "./App.css";

function App() {
  // let [jogo, setJogo] = useState('')

  return (
    <>
{/* <button onClick={()=> setJogo('rpg')}> rpg </button>
  {jogo =='rpg' && <Assassino />}

<button onClick={()=> setJogo('acao')}> acao </button>
{jogo =='acao' && <KratosImagem />}

<button onClick={()=> setJogo('aventura')}> aventura </button>
{jogo =='aventura' && <Witcher />} */}

      <BrowserRouter>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            padding: "10px",
          }}
        >
          <li>
            {" "}
            <Link to="/"> Witcher </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/kratos"> Kratos </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/assassino">Assassino</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/"> Home </Link>{" "}
          </li>
        </ul>
        <Rotas />
      </BrowserRouter>
    </>

  );
}

export default App;
