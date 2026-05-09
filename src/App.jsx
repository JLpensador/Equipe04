import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import "./components/bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css";
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Conteudo from './components/Informacoes/conteudomeio.jsx';
import ConteudoMeio from "./components/Informacoes/conteudomeio.jsx";
import KratosImagem from "./pages/imagemKratos.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Digital College </h1>
      <Header />
      {/* <KratosImagem /> */}
      <ConteudoMeio />
      <Footer />




    </>
  );
}

export default App;
