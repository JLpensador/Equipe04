import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import Assassino from "./pages/pageAssassino/Assassino.jsx";
import KratosImagem from "./pages/pageKratos/KratosImagem.jsx";
import Witcher from "./pages/theWitcher/Witcher";

function App() {
  return (
    <>
        {/* <h1> olá miguelzinn </h1>
        {/* <Assassino />  */}
        {/* <KratosImagem />  */}
        <Router>
          <ul>
            <li>
              {" "}
              <link to="/Hero"> Home </link>{" "}
            </li>
             <li>
              {" "}
              <link to="/"> Home </link>{" "}
            </li>
             <li>
              {" "}
              <link to="/"> Home </link>{" "}
            </li>
          </ul>
        </Router>


          <Switch>

          <Route path="/Hero">
          <Hero />
        <Route path="/">

        <Route path="/"  >
          <Witcher />
        </Route>
        </Route>
        </Route>
          </Switch>
    </>
  );
}

export default App;
