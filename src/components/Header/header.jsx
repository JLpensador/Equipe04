import './bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css'
import './header.css'

function Header() {
  return (
    <header
      id="cabecalho"
      className="cabecalho container-fluid p-2 p-sm-3 p-md-4 sticky-top"
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-end gap-2">
        <h1 className="game h4 h5-sm h3-md mb-0 fw-bold">
          DIGITAL<strong className="store">STORE</strong>
        </h1>

        <button
          className="btn btn-outline-light p-2 px-3 d-lg-none self-align-end"
          data-bs-toggle="collapse"
          data-bs-target="#menuMobile"
        >
          <i className="bi bi-list fs-3"></i>
        </button>

        <nav
          id="menuMobile"
          className="collapse d-lg-flex justify-content-between align-items-center flex-column flex-lg-row gap-3 px-3 px-lg-0 pt-3 pb-2 p-lg-0 w-100 w-lg-auto"
        >
          <a href="#" className="me-5">
            {" "}
            Início{" "}
          </a>
          <a href="#" className="me-5">
            {" "}
            Jogos{" "}
          </a>
          <a href="#" className="me-5">
            {" "}
            Ofertas{" "}
          </a>

          <form className="d-flex flex-column flex-sm-row w-100 w-lg-auto gap-2 mb-2 mb-lg-0">
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
        </nav>
      </div>
    </header>
  );
}

export default Header;