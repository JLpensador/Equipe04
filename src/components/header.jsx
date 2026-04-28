function Header() {
  return (
    <header class="cabecalho container-fluid p-3 sticky-top">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="game">
          DIGITAL<strong class="store">STORE</strong>
        </h1>

        {/*  BOTÃO MOBILE  */}
        <button
          class="btn d-md-none"
          data-bs-toggle="collapse"
          data-bs-target="#menuMobile"
        >
          <i class="bi bi-list"></i>
        </button>

        {/*  MENU  */}
        <nav
          id="menuMobile"
          class="collapse d-md-flex justify-content-end align-items-center mt-3 mt-md-0"
        >
          <a href="#" class="me-5">
            Início
          </a>
          <a href="#" class="me-5">
            Jogos
          </a>
          <a href="#" class="me-5">
            Ofertas
          </a>

          <form class="d-flex my-2 my-md-0">
            <input
              class="form-control me-3"
              type="search"
              placeholder="Pesquisar"
            />
            <button class="btn btn-outline-success" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </form>

          <i class="bi bi-cart ms-md-3"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
