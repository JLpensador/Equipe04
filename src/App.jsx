import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import "./components/bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css";
import Header from "./components/header.jsx";
import GodofWar from "./components/godofwar.jsx";
import Matador from "./components/matador.jsx";
import ConteudoMeio from './components/conteudomeio.jsx'
import Footer from "./components/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <h1> Digital College </h1>
      <Header />
      <GodofWar />
      <ConteudoMeio />
      <Matador />
      <Footer />
    </>
  );
}

export default App;
