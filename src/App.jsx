import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import "./components/bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css";
import Header from "./components/Header/header.jsx";
import KratosImagem from "./pages/pageKratos/imagemKratos.jsx";
import GodofWar from "./components/SobreOjogo/sobreojogo.jsx";
import ConteudoMeio from "./components/Informacoes/conteudomeio.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="bg-secondary"> Digital College </h1>
      <Header />
      <h2 class="bg-secondary"> Bem-vindo à Digital Store! </h2>
      <p class="bg-secondary">
        {" "}
        A melhor loja de games online. Jogos de qualidade com os melhores preços
        do mercado. Valorizamos a experiência do cliente.{" "}
      </p>

      {/* <KratosImagem />  */}

      <GodofWar />
      <ConteudoMeio />
      <Footer />
    </>
  );
}

export default App;
