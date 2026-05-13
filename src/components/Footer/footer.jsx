import './bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css'
import './footer.css'

function Footer() {
  return (
    //  <!-- FOOTER -->
    <footer className="conteudo-baixo bg-dark text-white py-5 py-md-6">
      <div className="container">
        <div className="row g-4 g-sm-5">
          {/* <!-- INFORMAÇÕES --> */}
          <div className="col-6 col-sm-6 col-lg-12 col-xl-3">
            <h5 className="game h4 fw-bold mb-3">
              Digital <strong className="store"> Store </strong>
            </h5>
            <p className="p-fixo-baixo small opacity-75 mb-3 lh-lg">
              A melhor loja de games online. Jogos de qualidade com os melhores
              preços do mercado. Valorizamos a experiência do cliente.
            </p>
            <div className="d-flex gap-3 fs-4">
              <i className="p-2 bi bi-instagram"></i>
              <i className="p-2 bi bi-facebook"></i>
              <i className="p-2 bi bi-github"></i>
              <i className="p-2 bi bi-youtube"></i>
            </div>
          </div>

          {/* <!-- LINKS --> */}
          <div className="col-6 col-sm-6 col-lg-12 col-xl-3">
            <h5 className="fixo-baixo h6 fw-bold mb-3 text-uppercase ls-sm">
              Links Rápidos
            </h5>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none hover-white">
                  Início
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none hover-white">
                  Carrinho
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none hover-white">
                  Todos os Jogos
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- CATEGORIAS --> */}
          <div className="col-6 col-sm-6 col-lg-12 col-xl-3">
            <h5 className="fixo-baixo h6 fw-bold mb-3 text-uppercase ls-sm">
              Categorias
            </h5>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none hover-white">
                  RPG
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none hover-white">
                  Action
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none hover-white">
                  Strategy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none hover-white">
                  Racing
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-sm-6 col-lg-12 col-xl-3">
            <h5 className="fixo-baixo h6 fw-bold mb-3 text-uppercase ls-sm">
              Contato
            </h5>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">1 e 10 anpdar</li>
              <li className="mb-2">(85) 9997p2.1749</li>
              <li className="mb-2">Aldeota, Fortaleza</li>
            </ul>
          </div>
          <hr className="my-4 my-md-5 border-light opacity-25" />
          <div className="direitos text-center">
            <h6 className="mb-0 small opacity-50">
              &copy;2026 DigitalStore. Todos os direitos reservados.
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;