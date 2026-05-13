import './Conteudo.css'

function ConteudoMeio() {
  return (
    // <!-- INFORMAÇÕES EM BAIXO DA IMAGEM -->
    <div className="container-fluid meio-footer  py-sm-5 py-md-5 bg-dark bg-opacity-50 border-top border-bottom border-dark-subtle">
      <div className="row  g-3 g-sm-4 text-center">
        <div className="col-6 col-md-3 px-3 px-sm-4">
          <h3 className="cor-meio  h5 h6-sm h4-md mb-2">
            <i className="bi bi-bag-check"></i> Compra Segura
          </h3>
          <p className="small mb-0">Seus dados protegidos</p>
        </div>

        <div className="col-6 col-md-3 px-3 px-sm-4 ">
          <h3 className="cor-meio  h5 h6-sm h4-md mb-2">
            <i className="bi bi-gift"></i> Jogos Originais
          </h3>
          <p className="small mb-0">Garantia de autenticidade</p>
        </div>

        <div className="col-6 col-md-3 px-3 px-sm-4">
          <h3 className="cor-meio  h5 h6-sm h4-md mb-2">
            <i className="bi bi-headphones"></i> 24/7
          </h3>
          <p className="small mb-0">Atendimento sempre disponível</p>
        </div>
        <div className="col-6 col-md-3 px-3 px-sm-4">
          <h3 className="cor-meio  h5 h6-sm h4-md mb-2">
            <i className="bi bi-rocket-takeoff"></i> Entrega Rápida
          </h3>
          <p className="small mb-0">Receba seu jogo na hora</p>
        </div>
      </div>
    </div>
  );
}

export default ConteudoMeio;