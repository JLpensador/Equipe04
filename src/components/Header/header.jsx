import './bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css'
import './header.css'
import {useState} from 'react'
import Assassino from '../../pages/pageAssassino/Assassino.jsx'
import KratosImagem from '../../pages/pageKratos/KratosImagem.jsx'
import Witcher from '../../pages/theWitcher/Witcher.jsx'

function Header() {
    // let [jogo, setJogo] = useState('')
  
  return (

    <header
      id="cabecalho"
      className="cabecalho container-fluid p-2 p-sm-3 p-md-4 sticky-top"
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-end gap-2">
        <h1 className="game h4 h5-sm h3-md mb-0 fw-bold">
          DIGITAL<strong className="store">STORE</strong>
        </h1>
         
         {/* <button onClick={()=> setJogo('rpg')}> rpg </button>
           {jogo =='rpg' && <Assassino />}
         
         <button onClick={()=> setJogo('acao')}> acao </button>
         {jogo =='acao' && <KratosImagem />}
         
         <button onClick={()=> setJogo('aventura')}> aventura </button>
         {jogo =='aventura' && <Witcher />} */}

          <form className="d-flex flex-column flex-sm-row w-90 w-lg-auto gap-2 mb-0 mb-lg-0 ">
            <input
              className="form-control form-control-sm flex-grow-1"
              type="search"
              placeholder="Pesquisar"
            />
            <button className="btn btn-outline-success btn-sm-px-3" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className="d-none d-sm-block">
            <a href="#" className="text-white fs-4" aria-label="Carrinho">
              <i className="bi bi-cart"></i>
            </a>
          </div>
      </div>
    </header>
  );
}

export default Header;