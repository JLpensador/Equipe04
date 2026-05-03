function GodofWar() {
  return (

    <div class="container-fluid mt-1">
      <div class="jogo row">
        <div class="col-12">
          <div class="row">
            <div class=" col-5">
              <img
                class="god-of-war col-3 mt-3"
                src="./imagens/God of War 3.jpg"
                alt="cara do kratos"
              />
              <h3 class="nome-jogo "> God of War III Remastered </h3>
              <div class="texto-god col-6"> </div>
            </div>
              
            <div class="col-5 mt-5">
             <p class="anuncio-titulo  bg-danger p-2"> Um dos jogos mais jogados de todos os tempos. </p>
             <p class="anuncio-titulo  bg-danger p-2"> Não fique de fora. </p>
            </div>

            <div class="card">
              <img
                src="./imagens/kratos e cronos.png"
                class="card-img-top"
                alt="kratos espancando o fraco do cronos"
              />

              <div class="card-body">
                <h5 class="card-title">God of War III Remastered</h5>
                <p class="card-text">
                  Embarque junto nessa aventura épica dos deuses do olimpo.
                </p>
              </div>
            </div>

            <div class=" descricao col-12 mt-3 p-2">
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
                <div class="descricao col-5">
                  {" "}
                  Kratos é logo abandonado pelos Titãs, que o usavam apenas para
                  se vingar. Agora, buscando vingança contra os Titãs e os
                  deuses do Olimpo, ele é auxiliado pelo espírito de Atena.{" "}
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="preco"> Preço R$450,00</p>
                    <button class="btn btn-danger p-2 m-2">
                      {" "}
                      Adicionar ao carrinho
                    </button>
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
