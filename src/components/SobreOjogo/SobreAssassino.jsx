import "./bootstrap-5.3.8/bootstrap-5.3.8-dist/css/bootstrap.min.css";
import img from "../../assets/ASSASIN.jpg";
import "./SobreAssassino.css";
import Botao from "../BotaoPreco/botaoAssassin";

function Sobreojogo() {
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
            Uma aventura que marcou gerações.
          </h2>
          <p className="texto opacity-75 mb-4 fs-6 fs-sm-5 lh-lg">
            No topo da montanha, Zeus, Poseidon, Hades, Hermes e Hélio se
            preparam para a batalha. Kratos em seguida aparece fazendo seu
            caminho passando pelo braço direito de Gaia, quando um Hipocampo
            aparece e começa a atacar Kratos. <br /> <br />
            <button className="saiba-mais btn btn-primary">
              <a
                href="https://pt.wikipedia.org/wiki/Assassin%27s_Creed"
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

export default Sobreojogo;