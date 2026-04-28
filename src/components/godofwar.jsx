function GodofWar() {
  return (
    <div class="container mt-3">
      <div class="jogo row">
        <div class="col-12">
          <div class="row">
            <div class=" col-5">
              <img
                class="god-of-war col-9 mt-3"
                src="./imagens/KRATOS E ATREUS 1.jpg"
                alt=""
              />
              <h3 class="nome-jogo "> God of War III Remastered </h3>
              <div class="texto-god col-6"> </div>
            </div>

            <div class=" descricao col-6 mt-3">
              <h5 class="carcteristica">Sobre o jogo:</h5>

              <div class="row">
                <div class="col-6">
                  {" "}
                  <div class="maior-idade bg-black mt-2 d-inline-flex">18</div>
                  <div class="texto-god col-6">
                    Linguagem Imprópria, Violência Extrema.
                    <p> Ação e Aventura. </p>{" "}
                  </div>
                </div>
                <div class="descricao col-6">
                  {" "}
                  Kratos é logo abandonado pelos Titãs, que o usavam apenas para
                  se vingar. Agora, buscando vingança contra os Titãs e os
                  deuses do Olimpo, ele é auxiliado pelo espírito de Atena.{" "}
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="preco"> Preço R$450,00</p>
                  </div>
                  <div class="col-6">
                    <button class="botao-preco"> Adicionar ao carrinho </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GodofWar;
