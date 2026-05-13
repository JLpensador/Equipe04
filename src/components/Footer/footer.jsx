import './footer.css'

function Footer() {
  return (
    //  <!-- FOOTER -->
    <footer class="conteudo-baixo bg-dark text-white py-5 py-md-6">
      <div class="container">
        <div class="row g-4 g-sm-5">
          {/* <!-- INFORMAÇÕES --> */}
          <div class="col-6 col-sm-6 col-lg-12 col-xl-3">
            <h5 class="game h4 fw-bold mb-3">
              Digital <strong class="store"> Store </strong>
            </h5>
            <p class="p-fixo-baixo small opacity-75 mb-3 lh-lg">
              A melhor loja de games online. Jogos de qualidade com os melhores
              preços do mercado. Valorizamos a experiência do cliente.
            </p>
            <div class="d-flex gap-3 fs-4">
              <i class="p-2 bi bi-instagram"></i>
              <i class="p-2 bi bi-facebook"></i>
              <i class="p-2 bi bi-github"></i>
              <i class="p-2 bi bi-youtube"></i>
            </div>
          </div>

          {/* <!-- LINKS --> */}
          <div class="col-6 col-sm-6 col-lg-12 col-xl-3">
            <h5 class="fixo-baixo h6 fw-bold mb-3 text-uppercase ls-sm">
              Links Rápidos
            </h5>
            <ul class="list-unstyled small mb-0">
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none hover-white">
                  Início
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none hover-white">
                  Carrinho
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none hover-white">
                  Todos os Jogos
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- CATEGORIAS --> */}
          <div class="col-6 col-sm-6 col-lg-12 col-xl-3">
            <h5 class="fixo-baixo h6 fw-bold mb-3 text-uppercase ls-sm">
              Categorias
            </h5>
            <ul class="list-unstyled small mb-0">
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none hover-white">
                  RPG
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none hover-white">
                  Action
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none hover-white">
                  Strategy
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none hover-white">
                  Racing
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-sm-6 col-lg-12 col-xl-3">
            <h5 class="fixo-baixo h6 fw-bold mb-3 text-uppercase ls-sm">
              Contato
            </h5>
            <ul class="list-unstyled small mb-0">
              <li class="mb-2">1 e 10 anpdar</li>
              <li class="mb-2">(85) 9997p2.1749</li>
              <li class="mb-2">Aldeota, Fortaleza</li>
            </ul>
          </div>
          <hr class="my-4 my-md-5 border-light opacity-25" />
          <div class="direitos text-center">
            <h6 class="mb-0 small opacity-50">
              &copy;2026 DigitalStore. Todos os direitos reservados.
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;