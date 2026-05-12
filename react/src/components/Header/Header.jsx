import "./Header.css";

export default function Header() {
  return (
    <header className="sticky-top custom-header-bg py-3 mb-4">
      <div className="container position-relative d-flex justify-content-between align-items-center">

        <div className="logo fs-4 tracking-wide">
          <i className="bi bi-controller fs-4 text-purple"></i>
          <strong className="text-white">GAME</strong>
          <span className="text-purple">STORE</span>
        </div>

        <nav className="d-none d-md-block position-absolute top-50 start-50 translate-middle">
          <ul className="nav gap-5 mb-0">
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

        <div className="d-flex align-items-center gap-4">
          <div className="search-wrapper d-flex align-items-center px-3 py-1 rounded-pill">
            <i className="bi bi-search text-muted"></i>
            <input 
            type="text"
            placeholder="Search games..."
            className="bg-transparent border-0 text-white shadow-none ms-2 w-100" 
            />
          </div>
          <a href="#cart" className="text-white position-relative cart-icon">
            <i className="bi bi-cart3 fs-5"></i>
          </a>
        </div>
      </div>
    </header>
  );
}


// MODIFICANDO PARA TENTAR FAZER O PR.