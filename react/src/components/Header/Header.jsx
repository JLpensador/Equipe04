import './Header.css';

export default function Header() {
    return (

              <header className="sticky-top custom-header-bg pt-3 pb-2 mb-5">
        <div className="conteiner d-flex justify-content-between aling-items-center">
          <div className="logo fs-5 tracking-wide">
            <strong className="text-white">GAME</strong>
            <span className="text-purple">STORE</span>
          </div>

          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a href="#inicio" className="nav-link custom-link active">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#jogos" className="nav-link custom-link">
                  Jogos
                </a>
              </li>
              <li className="nav-item">
                <a href="#sobre" className="nav-link custom-link">
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}