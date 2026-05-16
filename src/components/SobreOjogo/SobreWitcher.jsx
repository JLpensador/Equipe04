import "./bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css";
import img from "../../assets/THE WITCHER.png";
import "./SobreWitcher.css";
import Botao from "../BotaoPreco/botaoWitcher";

function SobreWitcher() {
  return (
    <div className="container">
      <div className="row">
        <div className="descricao col-6 col-md-6 col-lg-6 p-2">
          <img src={img} alt="capa do jogo" className="capa-jogo img-fluid" />
          <h6
            className="text-muted text-uppercase ls-sm fw-bold mb-2"
            style={{ color: "white" }}
          >
            {" "}
            <Botao />{" "}
          </h6>
        </div>
        <div className="col-6 col-md-6 col-lg-6" style={{ color: "tomato" }}>
          Sobre o jogo:
          <h2
            className="h1 h2-md fw-bold mb-3 lh-tight "
            style={{ color: "tomato" }}
          >
            Alquimia é uma parte importante na jogabilidade.
          </h2>
          <p className="texto opacity-75 mb-4 fs-6 fs-sm-5 lh-lg">
            O jogo conta a história de Geralt de Rívia que, no começo do jogo,
            recebe a tarefa de curar a filha do rei Foltest, Adda, que foi
            amaldiçoada a se transformar em um monstro feroz, introduzindo o
            jogador ao trabalho dos bruxos. A cutscene inicial mostra a quest de
            Geralt de curar Adda sobrevivendo uma noite em sua presença. <br />{" "}
            <br />
            <button className="saiba-mais btn btn-primary">
              <a
                href="https://pt.wikipedia.org/wiki/The_Witcher"
                className="text-white text-decoration-none"
              >
                Saiba mais
              </a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreWitcher;
