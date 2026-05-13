import img from "../../img/kratos e cronos.png";
import "./Sobre.css";

function Sobreojogo() {
  return (
    <div className="descricao col-12 col-md-12 col-lg-4">
      <div className="ps-0 ps-lg-3">
        <img src={img} alt="capa do jogo" class="capa-jogo img-fluid" />

        <h6
          className="text-muted text-uppercase ls-sm fw-bold mb-2"
          style={{ color: "white" }}
        >
          Sobre o jogo:
        </h6>
        <h2 className="h3 h2-md fw-bold mb-3 lh-tight">
          Uma aventura que marcou gerações.
        </h2>
        <p className="text-light opacity-75 mb-4 fs-6 fs-sm-5 lh-lg">
          No topo da montanha, Zeus, Poseidon, Hades, Hermes e Hélio se preparam
          para a batalha. Kratos em seguida aparece fazendo seu caminho passando
          pelo braço direito de Gaia, quando um Hipocampo aparece e começa a
          atacar Kratos.
        </p>
        <button className="btn btn-primary">
          <a
            href="https://jogandocasualmente.com.br/revisitando-god-of-war-iii-remastered-ps4/"
            className="text-white text-decoration-none"
          >
            Saiba mais
          </a>
        </button>
      </div>
    </div>
  );
}

export default Sobreojogo;