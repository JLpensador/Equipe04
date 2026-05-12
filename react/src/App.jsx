import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Row from "./components/Row/Row";
import Footer from "./components/Footer/Footer";
import Godofwar from './pages/Godofwar';
import Sobreojogo from "./pages/Sobre o Jogo/Sobreojogo";

function App() {
  return (
    <div className="min-vh-100 pb-4">
      {/* <Header />

      <main className="container text-center mt-5 pt-4">
        <Hero />
        <Row />
      </main>

      <Footer /> */}
      
      <Godofwar />
      <Sobreojogo />
    </div>

  );
}

export default App;
