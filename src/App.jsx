import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Assassino from "./pages/pageAssassino/Assassino.jsx";
import KratosImagem from "./pages/pageKratos/KratosImagem.jsx";
import Witcher from "./pages/theWitcher/Witcher";

function App() {
  return (
    <>
    <Header />

    
      <BrowserRouter>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: '10px' }}>
          <li>
            {" "}
            <Link to="/"> Witcher </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/kratos"> Kratos </Link>{" "}
          </li>
            {" "}
            <li><Link to="/assassino">Assassino</Link>{" "}
            </li>        
           <li>
            {" "}
            <Link to="/"> Home </Link>{" "}
          </li>
        </ul>

        
          <Routes>
            <Route path="/" element={<Witcher />} />
            <Route path="/kratos" element={<KratosImagem />} />
           <Route path="/assassino" element={<Assassino />} />
          </Routes>
        
      </BrowserRouter>


      {/* <h1> olá miguelzinn </h1> */}
      {/* <Assassino />  */}
      {/* <KratosImagem />  */}


    </>
  );
}

export default App;
